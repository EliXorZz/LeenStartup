<script setup lang="ts">
import * as THREE from 'three'
import { Pose } from '@mediapipe/pose'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

// --- 1. ÉTAT RÉACTIF (Remplace document.getElementById) ---
const containerRef = ref<HTMLDivElement | null>(null)
// Au lieu de modifier info.textContent, on modifie cette variable :
const infoText = ref('Chargement...')
const showStartButton = ref(false)
const showSwitchCamera = ref(false)
const startButtonText = ref('Démarrer AR')
const openDrawer = ref(false)

const router = useRouter()
function onBack() {
  router.back()
}

// --- 2. VARIABLES GLOBALES (Three.js & Logic) ---
let stopPoseTracking: (() => void) | null = null;
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let reticle: THREE.Mesh
let hitTestSource: XRHitTestSource | null = null
let hitTestSourceRequested = false
let tattooTexture: THREE.Texture
let tattooMesh: THREE.Mesh | null = null
let tattooCurve: THREE.CatmullRomCurve3 | null = null
let currentStream: MediaStream | null = null
let videoElement: HTMLVideoElement | null = null
let rafId: number | null = null

// Paramètres Tatouage
let tubeRadiusDefault = 0.09;
let tubeFactor = 0.5;
let tubeMin = 0.03;
let tubeMax = 0.28;
let heightMultiplier = 0.9;
let tattooAspect = 1
let currentFacingMode: 'environment' | 'user' = 'user'

// --- 3. MEDIAPIPE LOGIC ---
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
  const ARM_VISIBILITY_AVG = 0.65;
  const ARM_CONSEC_FRAMES = 3;

  pose.onResults((results) => {
    if (!results.poseLandmarks) return;
    onPose(results.poseLandmarks);

    // Détection simplifiée pour l'exemple (Bras Droit)
    const lm = results.poseLandmarks as any[];
    const rS = lm[12], rE = lm[14], rW = lm[16];

    // Calcul moyenne visibilité
    if(rS && rE && rW) {
      const avg = ((rS.visibility||0) + (rE.visibility||0) + (rW.visibility||0)) / 3;
      if(avg >= ARM_VISIBILITY_AVG) rightArmStableCount++;
      else rightArmStableCount = 0;

      if(rightArmStableCount >= ARM_CONSEC_FRAMES) {
        infoText.value = "Bras détecté (Droit)";
        rightArmStableCount = 0;
        // Reset message après 2s
        setTimeout(() => {
          if(infoText.value.includes('Bras')) infoText.value = 'Tapez pour placer le tattoo';
        }, 2000);
      }
    }
  });

  let running = true;
  async function detect() {
    if (!running) return;
    if (video.readyState >= 2) {
      try { await pose.send({ image: video }); } catch (e) { console.warn(e); }
    }
    requestAnimationFrame(detect);
  }
  detect();

  stopPoseTracking = () => {
    running = false;
    pose.close();
  };
}

// --- 4. THREE.JS HELPERS ---
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

function landmarkToWorld(landmark: any) {
  if (!camera) return new THREE.Vector3();
  const ndcX = (landmark.x * 2) - 1;
  const ndcY = -(landmark.y * 2) + 1;
  const vec = new THREE.Vector3(ndcX, ndcY, 0.5);
  vec.unproject(camera);
  const dir = vec.sub(camera.position).normalize();
  return camera.position.clone().add(dir.multiplyScalar(1.5));
}

function updateTattooFromPose(landmarks: any) {
  if (!tattooMesh || !camera) return;
  // Utilisation poignet/coude (indices 14/16 pour droit, 13/15 gauche)
  const elbow = landmarks[14] || landmarks[13];
  const wrist = landmarks[16] || landmarks[15];

  if (!elbow || !wrist || (elbow.visibility < 0.5)) {
    tattooMesh.visible = false;
    return;
  }

  // Construction Courbe
  const p1 = landmarkToWorld(elbow);
  const p2 = landmarkToWorld(wrist);
  tattooCurve = new THREE.CatmullRomCurve3([p1, p2]);

  const len = p1.distanceTo(p2);
  const radius = Math.max(tubeMin, Math.min(tubeMax, len * tubeFactor));

  const geo = new THREE.TubeGeometry(tattooCurve, 16, radius, 16, false);
  swapGeometryUVs(geo);

  tattooMesh.geometry.dispose();
  tattooMesh.geometry = geo;
  tattooMesh.visible = true;
}

// --- 5. INITIALISATION ---
function init() {
  if (!containerRef.value) return;

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 20)
  const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1)
  light.position.set(0.5, 1, 0.25)
  scene.add(light)

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.xr.enabled = true
  // Fond transparent
  renderer.setClearColor(0x000000, 0);

  // Style CSS pour superposition
  renderer.domElement.style.position = 'absolute';
  renderer.domElement.style.top = '0';
  renderer.domElement.style.left = '0';
  renderer.domElement.style.zIndex = '10'; // Au dessus de la vidéo

  // Nettoyage container et ajout
  while(containerRef.value.firstChild) containerRef.value.removeChild(containerRef.value.firstChild);

  // Création vidéo manuelle
  videoElement = document.createElement('video');
  videoElement.autoplay = true;
  videoElement.playsInline = true;
  videoElement.muted = true;
  videoElement.style.position = 'absolute';
  videoElement.style.width = '100%';
  videoElement.style.height = '100%';
  videoElement.style.objectFit = 'cover';
  videoElement.style.zIndex = '0'; // Au fond

  containerRef.value.appendChild(videoElement);
  containerRef.value.appendChild(renderer.domElement);

  // Chargement Texture
  const loader = new THREE.TextureLoader();
  tattooTexture = loader.load('/tattoo.png', (t) => {
    t.colorSpace = THREE.SRGBColorSpace;
    if(t.image) tattooAspect = t.image.width / t.image.height;
  });

  // Mesh initial
  const path = new THREE.CatmullRomCurve3([new THREE.Vector3(0,0,0), new THREE.Vector3(0,-0.1,0)]);
  const geo = new THREE.TubeGeometry(path, 4, 0.05, 8, false);
  swapGeometryUVs(geo);
  const mat = new THREE.MeshBasicMaterial({ map: tattooTexture, transparent: true, opacity: 0.8 });
  tattooMesh = new THREE.Mesh(geo, mat);
  tattooMesh.visible = false;
  scene.add(tattooMesh);

  // Reticle
  const rGeo = new THREE.RingGeometry(0.15, 0.2, 32).rotateX(-Math.PI/2);
  const rMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  reticle = new THREE.Mesh(rGeo, rMat);
  reticle.visible = false;
  scene.add(reticle);

  window.addEventListener('resize', onWindowResize);

  // Vérification XR après que tout est chargé
  checkXRSupport();
}

// --- 6. LOGIQUE BOUTONS & CAMERA ---

function checkXRSupport() {
  if ('xr' in navigator && (navigator as any).xr) {
    (navigator as any).xr.isSessionSupported('immersive-ar').then((supported: boolean) => {
      if (supported) {
        infoText.value = 'AR prêt !'
        showStartButton.value = true
        startButtonText.value = 'Démarrer AR'
      } else {
        startFallbackMode()
      }
    }).catch(() => startFallbackMode())
  } else {
    startFallbackMode()
  }
}

function startFallbackMode() {
  infoText.value = 'Mode caméra simple'
  showStartButton.value = true
  startButtonText.value = 'Démarrer la caméra'
}

function handleStart() {
  if(startButtonText.value === 'Démarrer AR') startAR();
  else startCameraMode('user');
}

function handleSwitch() {
  const mode = currentFacingMode === 'environment' ? 'user' : 'environment';
  startCameraMode(mode);
}

async function startCameraMode(mode: 'user'|'environment') {
  infoText.value = "Accès caméra...";
  if(currentStream) currentStream.getTracks().forEach(t => t.stop());

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: mode, width: { ideal: 1280 }, height: { ideal: 720 } }
    });
    currentStream = stream;
    currentFacingMode = mode;

    if(videoElement) {
      videoElement.srcObject = stream;
      videoElement.onloadedmetadata = () => videoElement!.play();
      // Lancer le tracking
      setupPoseTracking(videoElement, updateTattooFromPose);
    }

    infoText.value = "Caméra active";
    showStartButton.value = false;
    showSwitchCamera.value = true;
    animate();
  } catch(e: any) {
    infoText.value = "Erreur: " + e.message;
  }
}

function startAR() {
  const sessionInit = { requiredFeatures: ['hit-test'], optionalFeatures: ['dom-overlay'], domOverlay: { root: document.body } };
  (navigator as any).xr.requestSession('immersive-ar', sessionInit).then(onSessionStarted);
}

function onSessionStarted(session: XRSession) {
  session.addEventListener('end', onSessionEnded);
  renderer.xr.setSession(session);
  showStartButton.value = false;
  infoText.value = 'Tapez pour placer';
  session.addEventListener('select', onSelect);
  renderer.setAnimationLoop(xrRender);
}

function onSessionEnded() {
  hitTestSourceRequested = false;
  hitTestSource = null;
  showStartButton.value = true;
  infoText.value = 'Session terminée';
  renderer.setAnimationLoop(null);
}

function animate() {
  renderer.render(scene, camera);
  rafId = requestAnimationFrame(animate);
}

function xrRender(t: number, frame: XRFrame) {
  if(frame) {
    const session = renderer.xr.getSession();
    if(!hitTestSourceRequested && session) {
      session.requestReferenceSpace('viewer').then((rs:any) => {
        session.requestHitTestSource?.({space:rs})?.then((s:any)=>hitTestSource=s);
      });
      hitTestSourceRequested = true;
    }
    if(hitTestSource) {
      const rs = renderer.xr.getReferenceSpace();
      if(rs) {
        const hits = frame.getHitTestResults(hitTestSource);
        if(hits.length>0) {
          const pose = hits[0].getPose(rs);
          if(pose) {
            reticle.visible = true;
            reticle.matrix.fromArray(pose.transform.matrix);
          }
        } else reticle.visible = false;
      }
    }
  }
  renderer.render(scene, camera);
}

function onSelect() {
  if(reticle.visible && tattooMesh) {
    const clone = tattooMesh.clone();
    clone.position.setFromMatrixPosition(reticle.matrix);
    clone.visible = true;
    clone.scale.set(0.1, 0.1, 0.1);
    scene.add(clone);
  }
}

function onWindowResize() {
  if(!camera || !renderer) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// --- 7. LIFECYCLE VUE ---
onMounted(() => {
  // C'EST ICI QU'ON LANCE TOUT (quand le DOM existe)
  init();
})

onBeforeUnmount(() => {
  if(stopPoseTracking) stopPoseTracking();
  if(rafId) cancelAnimationFrame(rafId);
  if(currentStream) currentStream.getTracks().forEach(t => t.stop());
  window.removeEventListener('resize', onWindowResize);
})

</script>

<template>
  <div class="ar-page">
    <div ref="containerRef" id="container"></div>

    <div id="ui-layer">
      <div id="info">{{ infoText }}<br><span class="text-xs text-yellow-300">v2025.12.10</span></div>
    </div>

    <button v-if="showStartButton" @click="handleStart" class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white text-black px-6 py-3 rounded-full font-bold shadow-xl">
      {{ startButtonText }}
    </button>

    <div v-if="showSwitchCamera" @click="handleSwitch" class="fixed top-20 right-5 z-50 bg-white/80 p-3 rounded-full cursor-pointer">
      🔄
    </div>

    <div class="z-10 w-full p-3 fixed bottom-0">
      <div class="flex justify-around gap-16 text-white rounded-full px-3 glass">

        <UDrawer v-model:open="openDrawer">
          <template #content>
            <div class="flex flex-col justify-center items-center w-full pt-6">
              <h1 class="text-black mb-4">Bibliothèque</h1>
              <div class="w-full overflow-hidden">
                <div class="flex gap-4 overflow-x-auto whitespace-nowrap py-10 px-10 scroll-smooth">
                  <div v-for="i in 5" :key="i" class="w-40 h-40 bg-gray-200 rounded-xl shrink-0" @click="openDrawer=false">
                  </div>
                </div>
              </div>
            </div>
          </template>
        </UDrawer>

        <div class="flex flex-col gap-1 items-center p-2 cursor-pointer hover:opacity-20" @click="openDrawer = true">
          <UIcon class="text-xl" name="i-heroicons-photo" />
          <p class="text-xs font-light">Galerie</p>
        </div>

        <div class="absolute -translate-y-10 w-20 h-20 rounded-full bg-white border-4 border-gray-300 flex justify-center items-center">
          <div class="w-16 h-16 bg-gray-100 rounded-full border-2 border-black"></div>
        </div>

        <div class="flex flex-col gap-1 items-center p-2 cursor-pointer hover:opacity-20" @click="onBack">
          <UIcon class="text-xl" name="i-heroicons-arrow-left" />
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
  z-index: 20;
  pointer-events: none;
  display: flex;
  flex-direction: column;
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

.glass {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
}
</style>