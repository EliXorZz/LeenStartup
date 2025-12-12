<script setup lang="ts">
import * as THREE from 'three'
import { Pose } from '@mediapipe/pose'
import { onMounted, onBeforeUnmount, ref } from 'vue'

const openDrawer = ref(false)

const router = useRouter()
function onBack() {
  router.back()
}

let stopPoseTracking: (() => void) | null = null;

async function setupPoseTracking(video: HTMLVideoElement, onPose: (landmarks: any) => void) {
  const pose = new Pose({
    locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`
  });
  pose.setOptions({
    modelComplexity: 1,
    smoothLandmarks: true,
    enableSegmentation: false,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5
  });

  let rightArmStableCount = 0;
  let leftArmStableCount = 0;
  const VISIBILITY_THRESHOLD = 0.6;
  const ARM_VISIBILITY_AVG = 0.65;
  const ARM_CONSEC_FRAMES = 3;

  pose.onResults((results) => {
    if (results.poseLandmarks) {
      onPose(results.poseLandmarks);

      const landmarks = results.poseLandmarks as Array<any>;
      const visible = (pt: any) => pt && (pt.visibility === undefined || pt.visibility >= VISIBILITY_THRESHOLD);

      const rightShoulder = landmarks[12];
      const rightElbow = landmarks[14];
      const rightWrist = landmarks[16];
      const leftShoulder = landmarks[11];
      const leftElbow = landmarks[13];
      const leftWrist = landmarks[15];

      const dispatchLandmark = (name: string, index: number, landmark: any) => {
        try {
          window.dispatchEvent(new CustomEvent('pose:landmark', { detail: { name, index, landmark } }));
        } catch (e) {
          // Fallback
        }
      };

      if (visible(rightShoulder)) dispatchLandmark('right_shoulder', 12, rightShoulder);
      if (visible(rightElbow)) dispatchLandmark('right_elbow', 14, rightElbow);
      if (visible(rightWrist)) dispatchLandmark('right_wrist', 16, rightWrist);
      if (visible(leftShoulder)) dispatchLandmark('left_shoulder', 11, leftShoulder);
      if (visible(leftElbow)) dispatchLandmark('left_elbow', 13, leftElbow);
      if (visible(leftWrist)) dispatchLandmark('left_wrist', 15, leftWrist);

      const avgVis = (a: any, b: any, c: any) => {
        const va = (a && typeof a.visibility === 'number') ? a.visibility : 0;
        const vb = (b && typeof b.visibility === 'number') ? b.visibility : 0;
        const vc = (c && typeof c.visibility === 'number') ? c.visibility : 0;
        return (va + vb + vc) / 3;
      };

      // Right arm check
      if (rightShoulder && rightElbow && rightWrist) {
        if (avgVis(rightShoulder, rightElbow, rightWrist) >= ARM_VISIBILITY_AVG) rightArmStableCount++;
        else rightArmStableCount = 0;

        if (rightArmStableCount >= ARM_CONSEC_FRAMES) {
          window.dispatchEvent(new CustomEvent('pose:arm', { detail: { side: 'right', landmarks: { shoulder: rightShoulder, elbow: rightElbow, wrist: rightWrist } } }));
          rightArmStableCount = 0;
        }
      }

      // Left arm check
      if (leftShoulder && leftElbow && leftWrist) {
        if (avgVis(leftShoulder, leftElbow, leftWrist) >= ARM_VISIBILITY_AVG) leftArmStableCount++;
        else leftArmStableCount = 0;

        if (leftArmStableCount >= ARM_CONSEC_FRAMES) {
          window.dispatchEvent(new CustomEvent('pose:arm', { detail: { side: 'left', landmarks: { shoulder: leftShoulder, elbow: leftElbow, wrist: leftWrist } } }));
          leftArmStableCount = 0;
        }
      }
    }
  });

  let running = true;
  let rafId: number | null = null;

  stopPoseTracking = () => {
    running = false;
    if (rafId !== null) cancelAnimationFrame(rafId);
    try { (pose as any).close?.(); } catch (e) {}
    stopPoseTracking = null;
  };

  async function detect() {
    if (!running) return;
    if (video.readyState >= 2) { // Vérifier que la vidéo est prête
      try { await pose.send({ image: video }); }
      catch (e) { console.warn('pose.send error', e); }
    }
    rafId = requestAnimationFrame(detect) as unknown as number;
  }
  detect();
}

// --- 2. VARIABLES THREE.JS & ETAT ---
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let reticle: THREE.Mesh
let hitTestSource: XRHitTestSource | null = null
let hitTestSourceRequested = false
let tattooTexture: THREE.Texture
let tattooMesh: THREE.Mesh | null = null
let tattooCurve: THREE.CatmullRomCurve3 | null = null
let currentFacingMode: 'environment' | 'user' = 'user'
let currentStream: MediaStream | null = null
let videoElement: HTMLVideoElement | null = null

// Variables de configuration
let tubeRadiusDefault = 0.09;
let tubeFactor = 0.5;
let tubeMin = 0.03;
let tubeMax = 0.28;
let heightMultiplier = 0.9;
let heightMin = 0.06;
let heightMax = 0.65;
let alphaTestVal = 0.03;
let seamOffset = 0;
let showWireframe = false;
let blendMode: 'Normal' | 'Multiply' = 'Normal';
let manualDeviceId: string | null = null;
let tattooReferenceProj: THREE.Vector3 | null = null;
let appliedTubeRadius = 0.09;
let tattooAspect = 1
let tattooTextureTube: THREE.Texture | null = null

const PREVIEW_OPACITY = 0.55
const LOCKED_OPACITY = 1.0

// Références DOM (via Vue refs pour la sécurité)
const containerRef = ref<HTMLElement | null>(null)
const infoRef = ref<HTMLElement | null>(null)
const startButtonRef = ref<HTMLButtonElement | null>(null)
const switchButtonRef = ref<HTMLButtonElement | null>(null)

// --- 3. FONCTIONS UTILITAIRES ---

function landmarkToWorld(landmark: any, elbow?: any, wrist?: any) {
  if (!camera) return new THREE.Vector3();
  const ndcX = (landmark.x ?? 0) * 2 - 1;
  const ndcY = -((landmark.y ?? 0) * 2 - 1);
  const mid = new THREE.Vector3(ndcX, ndcY, 0.5);
  mid.unproject(camera);
  const dir = mid.clone().sub(camera.position).normalize();
  let baseDistance = 1.6;

  if (elbow && wrist) {
    const ed = new THREE.Vector3((elbow.x ?? 0) * 2 - 1, -((elbow.y ?? 0) * 2 - 1), 0.5);
    const wd = new THREE.Vector3((wrist.x ?? 0) * 2 - 1, -((wrist.y ?? 0) * 2 - 1), 0.5);
    ed.unproject(camera);
    wd.unproject(camera);
    const forearmWorld = ed.distanceTo(wd);
    if (forearmWorld > 0) {
      const targetForearm = 0.35;
      const factor = targetForearm / forearmWorld;
      baseDistance = THREE.MathUtils.clamp(baseDistance * factor, 0.6, 4.0);
    }
  }
  return camera.position.clone().add(dir.multiplyScalar(baseDistance));
}

function orientPlaneAlongForearm(plane: THREE.Object3D, wristLandmark: any, elbowLandmark: any) {
  if (!camera || !wristLandmark || !elbowLandmark) return;
  const elbowWorld = landmarkToWorld(elbowLandmark, elbowLandmark, wristLandmark);
  const wristWorld = landmarkToWorld(wristLandmark, elbowLandmark, wristLandmark);
  const forearm = elbowWorld.clone().sub(wristWorld).normalize();

  const pos = plane.position.clone();
  const forward = camera.position.clone().sub(pos).normalize();
  const proj = forearm.clone().sub(forward.clone().multiplyScalar(forearm.dot(forward)));
  let up = proj.length() > 0.0001 ? proj.normalize() : new THREE.Vector3(0, 1, 0);
  const right = new THREE.Vector3().crossVectors(up, forward).normalize();
  up = new THREE.Vector3().crossVectors(forward, right).normalize();

  const m = new THREE.Matrix4();
  m.makeBasis(right, up, forward);
  plane.quaternion.setFromRotationMatrix(m);

  const worldUp = new THREE.Vector3().setFromMatrixColumn(m, 1);
  if (worldUp.dot(forearm) < 0) {
    plane.rotateOnAxis(forward, Math.PI);
  }
}

function swapGeometryUVs(geom: THREE.BufferGeometry) {
  const uvAttr = geom.getAttribute('uv');
  if (!uvAttr) return;
  const count = uvAttr.count;
  const array = uvAttr.array as Float32Array;
  for (let i = 0; i < count; i++) {
    const idx = i * 2;
    const u = array[idx];
    const v = array[idx + 1];
    array[idx] = v;
    array[idx + 1] = u;
  }
  uvAttr.needsUpdate = true;
}

function animateMaterialOpacity(material: THREE.Material | THREE.Material[] | null, to: number, duration = 300) {
  if (!material) return;
  const mats = Array.isArray(material) ? material : [material];
  mats.forEach((m) => {
    const mat = m as THREE.MeshBasicMaterial;
    if (typeof (mat as any).opacity !== 'number') return;
    const start = (mat.opacity !== undefined) ? mat.opacity : 1;
    const delta = to - start;
    const startTime = Date.now();
    function step() {
      const elapsed = Date.now() - startTime;
      const t = Math.min(elapsed / duration, 1);
      mat.opacity = start + delta * t;
      mat.needsUpdate = true;
      if (t < 1) requestAnimationFrame(step);
    }
    step();
  });
}

// --- 4. INITIALISATION THREE.JS ---

function init() {
  const container = containerRef.value;
  if (!container) {
    console.error("Container introuvable !");
    return;
  }

  // Scène
  scene = new THREE.Scene()

  // Caméra
  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 20)
  camera.position.z = 2 // Important pour voir quelque chose au début

  // Lumières
  const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1)
  light.position.set(0.5, 1, 0.25)
  scene.add(light)

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setClearColor(0x000000, 0); // Transparent
  renderer.xr.enabled = true

  // Style important pour la superposition
  renderer.domElement.style.position = 'absolute';
  renderer.domElement.style.top = '0';
  renderer.domElement.style.left = '0';
  renderer.domElement.style.zIndex = '10'; // Au dessus de la vidéo

  container.appendChild(renderer.domElement)

  // Chargement texture
  const textureLoader = new THREE.TextureLoader()
  tattooTexture = textureLoader.load('/tattoo.png', (tex) => {
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.needsUpdate = true;
    const img = tex.image;
    if (img && img.width && img.height) tattooAspect = img.width / img.height;

    // Version tube
    try {
      const tubeTex = tex.clone();
      tubeTex.wrapS = THREE.ClampToEdgeWrapping;
      tubeTex.wrapT = THREE.ClampToEdgeWrapping;
      (tubeTex as any).needsUpdate = true;
      tattooTextureTube = tubeTex;
    } catch(e) {}
  });

  // Reticle
  const geometry = new THREE.RingGeometry(0.15, 0.2, 32).rotateX(-Math.PI / 2)
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff })
  reticle = new THREE.Mesh(geometry, material)
  reticle.matrixAutoUpdate = false
  reticle.visible = false
  scene.add(reticle)

  window.addEventListener('resize', onWindowResize)

  // Vérification support WebXR
  checkXRSupport();
}

// --- 5. LOGIQUE CAMERA & UPDATE ---

function updateTattooFromPose(landmarks: any) {
  // Votre logique de mise à jour du mesh (simplifiée pour l'affichage)
  // ... (Code original conservé, voir intégration plus bas dans startCameraMode)
}

function checkXRSupport() {
  if ('xr' in navigator && (navigator as any).xr) {
    (navigator as any).xr.isSessionSupported('immersive-ar').then((supported: boolean) => {
      if (supported && startButtonRef.value) {
        if(infoRef.value) infoRef.value.textContent = 'AR prêt !'
      } else {
        startFallbackMode()
      }
    }).catch(() => startFallbackMode())
  } else {
    startFallbackMode()
  }
}

function startFallbackMode() {
  if(infoRef.value) infoRef.value.textContent = 'Mode Caméra (WebXR indisponible)'
  if(startButtonRef.value) {
    // Suppression des anciens listeners pour éviter les doublons
    const newBtn = startButtonRef.value.cloneNode(true) as HTMLButtonElement;
    startButtonRef.value.addEventListener('click', () => startCameraMode('user'));
  }
}

// Gestion des caméras
async function getDeviceIdForFacingMode(facingMode: 'environment' | 'user'): Promise<string | undefined> {
  if (!navigator.mediaDevices?.enumerateDevices) return undefined;
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const videoDevices = devices.filter(d => d.kind === 'videoinput');
    // Heuristique simple
    const keyword = facingMode === 'user' ? /front|user|avant/i : /back|environment|arrière/i;
    const match = videoDevices.find(d => keyword.test(d.label));
    return match?.deviceId;
  } catch(e) { return undefined; }
}

async function startCameraMode(facingMode: 'environment' | 'user' = 'user') {
  if(infoRef.value) infoRef.value.textContent = 'Accès caméra...';

  // Cleanup
  if (currentStream) currentStream.getTracks().forEach(t => t.stop());
  if (videoElement) {
    videoElement.pause();
    videoElement.srcObject = null;
  }

  try {
    let stream;
    const deviceId = await getDeviceIdForFacingMode(facingMode);
    const constraints: MediaStreamConstraints = {
      video: {
        deviceId: deviceId ? { exact: deviceId } : undefined,
        facingMode: !deviceId ? facingMode : undefined,
        width: { ideal: 1280 },
        height: { ideal: 720 }
      }
    };

    stream = await navigator.mediaDevices.getUserMedia(constraints);
    currentStream = stream;
    currentFacingMode = facingMode;

    // Création élément vidéo
    if (!videoElement) {
      videoElement = document.createElement('video');
      videoElement.setAttribute('autoplay', '');
      videoElement.setAttribute('muted', '');
      videoElement.setAttribute('playsinline', '');
      videoElement.style.position = 'absolute';
      videoElement.style.top = '0';
      videoElement.style.left = '0';
      videoElement.style.width = '100%';
      videoElement.style.height = '100%';
      videoElement.style.objectFit = 'cover';
      videoElement.style.zIndex = '1'; // Derrière le canvas
      containerRef.value?.prepend(videoElement); // Prepend pour être sûr qu'il est derrière le canvas
    }

    videoElement.srcObject = stream;
    await videoElement.play();

    // Démarrage Tracking
    if (stopPoseTracking) stopPoseTracking();

    let poseTattoo: THREE.Mesh | null = null;
    let locked = false;

    setupPoseTracking(videoElement, (landmarks) => {
      // Logique simplifiée de mise à jour visuelle pour le débuggage
      if(locked) return;

      const wrist = landmarks[16] || landmarks[15];
      const elbow = landmarks[14] || landmarks[13];

      if (wrist && elbow) {
        if (!poseTattoo) {
          const geo = new THREE.PlaneGeometry(1, 1);
          const mat = new THREE.MeshBasicMaterial({
            map: tattooTexture,
            transparent: true,
            opacity: 0.8,
            side: THREE.DoubleSide
          });
          poseTattoo = new THREE.Mesh(geo, mat);
          scene.add(poseTattoo);
        }

        // Positionner grossièrement
        const p1 = landmarkToWorld(wrist);
        const p2 = landmarkToWorld(elbow);
        const center = p1.clone().add(p2).multiplyScalar(0.5);

        poseTattoo.position.copy(center);
        poseTattoo.lookAt(camera.position);
        poseTattoo.scale.set(0.2, 0.2, 0.2); // Taille fixe pour test
        poseTattoo.visible = true;
      }
    });

    if(infoRef.value) infoRef.value.textContent = 'Caméra active. Levez le bras.';

    // Boucle de rendu
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });

  } catch (err: any) {
    console.error(err);
    if(infoRef.value) infoRef.value.textContent = 'Erreur caméra: ' + err.message;
  }
}

function onWindowResize() {
  if (!camera || !renderer) return;
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

function switchCamera() {
  const newMode = currentFacingMode === 'user' ? 'environment' : 'user';
  startCameraMode(newMode);
}

// --- 6. LIFECYCLE HOOKS ---

onMounted(() => {
  console.log("Composant monté, initialisation...");
  init();

  // Attacher l'événement pour démarrer AR (si supporté)
  if(startButtonRef.value) {
    startButtonRef.value.addEventListener('click', () => {
      startCameraMode('user');
    });
  }
});

onBeforeUnmount(() => {
  if (stopPoseTracking) stopPoseTracking();
  if (currentStream) currentStream.getTracks().forEach(t => t.stop());
  window.removeEventListener('resize', onWindowResize);
  if (renderer) renderer.dispose();
});

</script>

<template>
  <div class="ar-page">
    <div id="ui-layer">
      <div ref="infoRef" id="info">Chargement...</div>
    </div>

    <div ref="containerRef" id="container"></div>

    <div class="z-10 w-full p-3 fixed bottom-0">
      <div class="flex justify-around gap-16 text-white rounded-full px-3 glass">
        <UDrawer v-model:open="openDrawer">
          <template #content>
            <div class="flex flex-col justify-center items-center w-full pt-6">
              <h1>Sélectionner un tatouage dans la bibliothèque</h1>

              <!-- wrapper pour ne pas casser le scroll -->
              <div class="w-full overflow-hidden">
                <div class="flex gap-4 overflow-x-auto whitespace-nowrap py-10 px-10 scroll-smooth">
                  <div
                      v-for="i in 10"
                      :key="i"
                      class="w-40 h-40 p-4 rounded-2xl overflow-hidden shrink-0 bg-gray-100 inline-block"
                      @click="openDrawer = false"
                  >
                    <img
                        src="/tattoo.png"
                        alt=""
                        class="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

            </div>
          </template>
        </UDrawer>

        <div class="flex flex-col gap-1 items-center p-2 cursor-pointer hover:opacity-20" @click="openDrawer = true">
          <Icon class="text-xl" name="custom:design-icon" />
          <p class="text-xs font-light">Galerie</p>
        </div>
        <div ref="startButtonRef" class="cursor-pointer absolute -translate-y-10 w-20 h-20 rounded-full bg-white border-2 border-gray-400 flex justify-center items-center">
          <Icon size="50" name="custom:ra-icon-black" class="hover:opacity-65" />
        </div>
        <div class="flex flex-col gap-1 items-center p-2 cursor-pointer hover:opacity-20" @click="onBack">
          <UIcon class="text-xl" name="lucide:arrow-left" />
          <p class="text-xs font-light">Retour</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ar-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  overflow: hidden;
}

#container {
  width: 100%;
  height: 100%;
  position: relative;
}

#ui-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20; /* Au-dessus du canvas 3D */
  pointer-events: none; /* Laisser passer les clics vers la scène 3D */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
}

#info {
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  align-self: center;
  pointer-events: auto;
  margin-top: 20px;
}

.controls {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 40px;
  pointer-events: auto;
}

button {
  background: white;
  border: none;
  padding: 12px 24px;
  border-radius: 24px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0,0,0,0.3);
}

#switchCamera {
  display: none; /* Masqué au départ */
}
</style>