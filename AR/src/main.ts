import * as THREE from 'three'
import { setupPoseTracking, stopPoseTracking } from './mediapipe-pose';

let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let reticle: THREE.Mesh
let hitTestSource: XRHitTestSource | null = null
let hitTestSourceRequested = false
let tattooTexture: THREE.Texture
let tattooAspect = 1
let tattooMesh: THREE.Mesh | null = null
let tattooTextureTube: THREE.Texture | null = null
let appliedTubeRadius = 0.09;
// Runtime adjustable params (controlled by UI)
let tubeRadiusDefault = 0.09;
let tubeFactor = 0.5;
let tubeMin = 0.03;
let tubeMax = 0.28;
let heightMultiplier = 0.9;
let heightMin = 0.06;
let heightMax = 0.65;
let alphaTestVal = 0.03;
let seamOffset = 0; // additional offset to hide seam
let showWireframe = false;
let blendMode: 'Normal' | 'Multiply' = 'Normal';
let tattooCurve: THREE.CatmullRomCurve3 | null = null
let currentFacingMode: 'environment' | 'user' = 'user'
let currentStream: MediaStream | null = null
let videoElement: HTMLVideoElement | null = null
let poseTrackingStarted = false;
// Optional manual device override from UI
let manualDeviceId: string | null = null;
// Reference projection used to compute roll around forearm (for texture offset)
let tattooReferenceProj: THREE.Vector3 | null = null;
// Lissage du suivi (0..1) — ajustable
let SMOOTH = 0.18
// Opacité du preview avant verrouillage
const PREVIEW_OPACITY = 0.55
// Opacité une fois verrouillé
const LOCKED_OPACITY = 1.0
// Show visual markers for detected landmarks (spheres). Set to false to disable.
const SHOW_LANDMARK_MARKERS = false

const info = document.getElementById('info')!
const startButton = document.getElementById('startAR') as HTMLButtonElement
const switchCameraButton = document.getElementById('switchCamera') as HTMLButtonElement
const container = document.getElementById('container')!

console.log('Elements:', { info, startButton, switchCameraButton, container })

// Visual markers for detected landmarks + notifications
const landmarkMarkers: Record<string, THREE.Mesh | undefined> = {};
const landmarkHideTimers: Record<string, number | undefined> = {};
const landmarkColors: Record<string, number> = {
  right_shoulder: 0xff5555,
  right_elbow: 0xff8844,
  right_wrist: 0xffcc33,
  left_shoulder: 0x5599ff,
  left_elbow: 0x44ccff,
  left_wrist: 0x33aaff,
};

// Keep track of last arm detection to avoid placing tattoos on floor/walls/tables
let lastArmDetectedAt: number | null = null;
let lastArmDetail: any = null;
const ALLOW_PLACE_AFTER_ARM_MS = 2000; // allow placement only within 2s after an arm detection

function ensureMarker(name: string) {
  if (landmarkMarkers[name]) return landmarkMarkers[name]!;
  const geom = new THREE.SphereGeometry(0.02, 8, 8);
  const mat = new THREE.MeshBasicMaterial({ color: landmarkColors[name] ?? 0xffffff, transparent: true, opacity: 0.95 });
  const mesh = new THREE.Mesh(geom, mat);
  mesh.visible = false;
  scene.add(mesh);
  landmarkMarkers[name] = mesh;
  return mesh;
}

function updateMarkerFromLandmark(name: string, landmark: any) {
  if (!camera) return;
  if (!SHOW_LANDMARK_MARKERS) return; // disabled to improve tattoo visibility
  const marker = ensureMarker(name);
  const ndcX = (landmark.x ?? 0) * 2 - 1;
  const ndcY = -((landmark.y ?? 0) * 2 - 1);
  const ndc = new THREE.Vector3(ndcX, ndcY, landmark.z ?? 0);
  ndc.unproject(camera);
  marker.position.copy(ndc);
  marker.visible = true;

  // clear existing hide timer
  if (landmarkHideTimers[name]) {
    window.clearTimeout(landmarkHideTimers[name]);
  }
  // hide after 500ms of no update
  landmarkHideTimers[name] = window.setTimeout(() => {
    marker.visible = false;
    landmarkHideTimers[name] = undefined;
  }, 500) as unknown as number;
}

// Convertit un landmark (x,y,z) en point monde placé le long du rayon caméra → pixel.
// On utilise une heuristique pour estimer la distance : si coude+poignet sont fournis,
// on calcule leur distance projetée et on ajuste la distance pour que la longueur de
// l'avant-bras corresponde à une valeur réaliste (~0.35m). Sinon on prend une valeur par défaut.
function landmarkToWorld(landmark: any, elbow?: any, wrist?: any) {
  if (!camera) return new THREE.Vector3();
  const ndcX = (landmark.x ?? 0) * 2 - 1;
  const ndcY = -((landmark.y ?? 0) * 2 - 1);

  // point dans le plan médian NDC
  const mid = new THREE.Vector3(ndcX, ndcY, 0.5);
  mid.unproject(camera);
  const dir = mid.clone().sub(camera.position).normalize();

  // distance de base (en unités monde) — ajustable
  let baseDistance = 1.6;

  // si on a coude+poignet, estimer la longueur de l'avant-bras projetée et ajuster
  if (elbow && wrist) {
    const ed = new THREE.Vector3((elbow.x ?? 0) * 2 - 1, -((elbow.y ?? 0) * 2 - 1), 0.5);
    const wd = new THREE.Vector3((wrist.x ?? 0) * 2 - 1, -((wrist.y ?? 0) * 2 - 1), 0.5);
    ed.unproject(camera);
    wd.unproject(camera);
    const forearmWorld = ed.distanceTo(wd);
    if (forearmWorld > 0) {
      // target realistic forearm length (meters in world units) — tweak if needed
      const targetForearm = 0.35;
      const factor = targetForearm / forearmWorld;
      // adjust baseDistance inversely proportional to observed forearm length
      baseDistance = THREE.MathUtils.clamp(baseDistance * factor, 0.6, 4.0);
    }
  }

  return camera.position.clone().add(dir.multiplyScalar(baseDistance));
}

// Orient a plane so its vertical axis follows the forearm (wrist->elbow)
function orientPlaneAlongForearm(plane: THREE.Object3D, wristLandmark: any, elbowLandmark: any) {
  if (!camera || !wristLandmark || !elbowLandmark) return;
  const elbowWorld = landmarkToWorld(elbowLandmark, elbowLandmark, wristLandmark);
  const wristWorld = landmarkToWorld(wristLandmark, elbowLandmark, wristLandmark);
  const forearm = elbowWorld.clone().sub(wristWorld).normalize();

  const pos = plane.position.clone();
  const forward = camera.position.clone().sub(pos).normalize(); // plane normal pointing to camera

  // Project forearm onto plane orthogonal to forward to get a stable 'up' direction
  const proj = forearm.clone().sub(forward.clone().multiplyScalar(forearm.dot(forward)));
  let up = proj.length() > 0.0001 ? proj.normalize() : new THREE.Vector3(0, 1, 0);

  // Build orthonormal basis: right, up, forward
  const right = new THREE.Vector3().crossVectors(up, forward).normalize();
  // Re-orthogonalize up in case forearm wasn't perfectly orthogonal
  up = new THREE.Vector3().crossVectors(forward, right).normalize();

  const m = new THREE.Matrix4();
  m.makeBasis(right, up, forward);
  plane.quaternion.setFromRotationMatrix(m);

  // Ensure 'up' roughly aligns with forearm direction; if opposite, flip 180° around forward
  const worldUp = new THREE.Vector3().setFromMatrixColumn(m, 1); // Y column
  if (worldUp.dot(forearm) < 0) {
    plane.rotateOnAxis(forward, Math.PI);
  }
}

function applyControlsToMaterials() {
  // update main tube material
  if (tattooMesh && tattooMesh.material instanceof THREE.MeshBasicMaterial) {
    const mat = tattooMesh.material as THREE.MeshBasicMaterial;
    mat.alphaTest = alphaTestVal;
    mat.wireframe = showWireframe;
    if (blendMode === 'Multiply') {
      mat.blending = THREE.MultiplyBlending;
      mat.opacity = 0.9;
    } else {
      mat.blending = THREE.NormalBlending;
      mat.opacity = 0.85;
    }
    mat.needsUpdate = true;
  }
}

function createControlsUI() {
  const panel = document.createElement('div');
  panel.id = 'controls-panel';
  panel.style.position = 'fixed';
  panel.style.right = '8px';
  panel.style.top = '8px';
  panel.style.background = 'rgba(0,0,0,0.6)';
  panel.style.color = '#fff';
  panel.style.padding = '8px';
  panel.style.borderRadius = '6px';
  panel.style.zIndex = '99999';
  panel.style.fontSize = '13px';
  panel.style.maxWidth = '280px';

  const addRow = (labelText: string, inputEl: HTMLElement) => {
    const row = document.createElement('div');
    row.style.marginBottom = '8px';
    const label = document.createElement('div');
    label.textContent = labelText;
    label.style.fontSize = '12px';
    label.style.marginBottom = '4px';
    row.appendChild(label);
    row.appendChild(inputEl);
    panel.appendChild(row);
  };

  // tubeRadius slider
  const tubeR = document.createElement('input');
  tubeR.type = 'range'; tubeR.min = '0.02'; tubeR.max = '0.5'; tubeR.step = '0.01'; tubeR.value = String(tubeRadiusDefault);
  tubeR.oninput = () => {
    const v = parseFloat((tubeR as HTMLInputElement).value);
    // scale existing mesh in X/Z to approximate radius change
    if (tattooMesh) {
      const factor = v / appliedTubeRadius;
      tattooMesh.scale.x *= factor;
      tattooMesh.scale.z *= factor;
      appliedTubeRadius = v;
    }
    tubeRadiusDefault = v;
  };
  addRow('Tube radius', tubeR);

  // tubeFactor slider
  const tubeF = document.createElement('input');
  tubeF.type = 'range'; tubeF.min = '0.1'; tubeF.max = '1.2'; tubeF.step = '0.01'; tubeF.value = String(tubeFactor);
  tubeF.oninput = () => { tubeFactor = parseFloat((tubeF as HTMLInputElement).value); };
  addRow('Tube factor', tubeF);

  // heightMultiplier slider
  const heightS = document.createElement('input');
  heightS.type = 'range'; heightS.min = '0.5'; heightS.max = '1.5'; heightS.step = '0.01'; heightS.value = String(heightMultiplier);
  heightS.oninput = () => { heightMultiplier = parseFloat((heightS as HTMLInputElement).value); };
  addRow('Height multiplier', heightS);

  // alphaTest slider
  const alphaS = document.createElement('input');
  alphaS.type = 'range'; alphaS.min = '0'; alphaS.max = '0.5'; alphaS.step = '0.01'; alphaS.value = String(alphaTestVal);
  alphaS.oninput = () => { alphaTestVal = parseFloat((alphaS as HTMLInputElement).value); applyControlsToMaterials(); };
  addRow('Alpha test', alphaS);

  // seam offset
  const seamS = document.createElement('input');
  seamS.type = 'range'; seamS.min = '-0.5'; seamS.max = '0.5'; seamS.step = '0.01'; seamS.value = String(seamOffset);
  seamS.oninput = () => { seamOffset = parseFloat((seamS as HTMLInputElement).value); };
  addRow('Seam offset', seamS);

  // wireframe
  const wire = document.createElement('input'); wire.type = 'checkbox'; wire.checked = showWireframe;
  wire.onchange = () => { showWireframe = (wire as HTMLInputElement).checked; applyControlsToMaterials(); };
  addRow('Wireframe', wire);

  // blend mode
  const blend = document.createElement('select');
  const opt1 = document.createElement('option'); opt1.value = 'Normal'; opt1.text = 'Normal';
  const opt2 = document.createElement('option'); opt2.value = 'Multiply'; opt2.text = 'Multiply';
  blend.appendChild(opt1); blend.appendChild(opt2); blend.value = blendMode;
  blend.onchange = () => { blendMode = (blend as HTMLSelectElement).value as any; applyControlsToMaterials(); };
  addRow('Blend', blend);

  document.body.appendChild(panel);
}

// Swap UVs on a tube geometry so that image V axis maps to tube length
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

window.addEventListener('pose:landmark', (ev: Event) => {
  const detail = (ev as CustomEvent).detail;
  if (detail && detail.name && detail.landmark) {
    try {
      updateMarkerFromLandmark(detail.name, detail.landmark);
    } catch (e) {
      // ignore if marker update fails
    }
    if (info && detail && detail.name) {
      info.textContent = `Point détecté: ${detail.name}`;
      setTimeout(() => { if (info) info.textContent = 'Tapez pour placer un tattoo' }, 1200);
    }
    console.log('Landmark detected:', detail.name, detail.index, detail.landmark);
  } else {
    console.log('Landmark event received');
  }
});

window.addEventListener('pose:arm', (ev: Event) => {
  const detail = (ev as CustomEvent).detail;
  try {
    console.log('Arm detected:', detail.side, detail.landmarks);
  } catch (e) {
    console.log('Arm event received');
  }
  // record timestamp so placement is allowed only shortly after a real arm detection
  lastArmDetectedAt = performance.now();
  lastArmDetail = detail;
  if (info && detail && detail.side) {
    info.textContent = `Bras détecté (${detail.side})`;
    setTimeout(() => { if (info) info.textContent = 'Tapez pour placer un tattoo' }, 1500);
  }
});

// Initialisation de la scène
function init() {
  // Scène
  scene = new THREE.Scene()

  // Caméra
  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    20
  )

  // Lumières
  const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1)
  light.position.set(0.5, 1, 0.25)
  scene.add(light)

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.xr.enabled = true
  container.appendChild(renderer.domElement)

  // Chargement de la texture du tattoo (ajustements pour affichage fidèle)
  const textureLoader = new THREE.TextureLoader()
  tattooTexture = textureLoader.load('/tattoos/tattoo.png', (tex: any) => {
    // ensure PNG alpha, no tiling, and correct orientation
    tex.wrapS = THREE.ClampToEdgeWrapping;
    tex.wrapT = THREE.ClampToEdgeWrapping;
    tex.repeat.set(1, 1);
    tex.offset.set(0, 0);
    tex.center.set(0.5, 0.5);
    tex.rotation = 0;
    tex.flipY = false;
    tex.format = THREE.RGBAFormat;
    try { (tex as any).encoding = (THREE as any).sRGBEncoding || (THREE as any).SRGBEncoding; } catch(e) {}
    tex.needsUpdate = true;
    const img = tex.image;
    if (img && img.width && img.height) tattooAspect = img.width / img.height;
    // create a cloned texture for the cylindrical tube so we can enable RepeatWrapping
    try {
      const tubeTex = (tex.clone() as THREE.Texture);
      // rotate texture so its vertical image axis maps to tube length (not circumference)
      // Use clamp wrapping to avoid visible seam when mapping along tube
      tubeTex.wrapS = THREE.ClampToEdgeWrapping;
      tubeTex.wrapT = THREE.ClampToEdgeWrapping;
      tubeTex.repeat.set(1, 1);
      tubeTex.offset.set(0, 0);
      tubeTex.center.set(0.5, 0.5);
      tubeTex.rotation = 0;
      (tubeTex as any).needsUpdate = true;
      tattooTextureTube = tubeTex;
    } catch (e) {
      tattooTextureTube = null;
    }
  })

  // Création initiale du mesh tatouage (tube)
  // On crée un tube droit par défaut, il sera mis à jour dynamiquement
  const defaultCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, -0.2, 0)
  ]);
  const tubeRadius = tubeRadiusDefault; // rayon du tube (ajustable)
  const tubeSegments = 16; // nombre de segments (performance)
  const tubeGeometry = new THREE.TubeGeometry(defaultCurve, tubeSegments, tubeRadius, 8, false);
  // swap UVs so texture V runs along tube length (prevents circumferential wrapping)
  try { swapGeometryUVs(tubeGeometry); } catch (e) { /* ignore */ }
  const tattooMaterial = new THREE.MeshBasicMaterial({ map: (tattooTextureTube || tattooTexture), transparent: true, opacity: 0.7, side: THREE.FrontSide, depthWrite: false });
  tattooMesh = new THREE.Mesh(tubeGeometry, tattooMaterial);
  tattooMesh.visible = false;
  scene.add(tattooMesh);

  // Reticle (indicateur de placement)
  const geometry = new THREE.RingGeometry(0.15, 0.2, 32).rotateX(-Math.PI / 2)
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff })
  reticle = new THREE.Mesh(geometry, material)
  reticle.matrixAutoUpdate = false
  reticle.visible = false
  scene.add(reticle)

  // Gestion du redimensionnement
  window.addEventListener('resize', onWindowResize)

  // Le suivi de pose est démarré uniquement lorsque l'utilisateur active la caméra

  // Create camera selection UI for manual override (useful on Android)
  try { createCameraSelectionUI(); } catch (e) { console.warn('Camera UI creation failed', e); }
  try { createControlsUI(); } catch (e) { console.warn('Controls UI creation failed', e); }
}

// Note: pose tracking is started when the camera is started (see `startCameraMode`).

// Met à jour la position/orientation du tatouage selon la pose
function updateTattooFromPose(landmarks: any) {
  if (!tattooMesh || !camera) return;
  // Points clés du bras droit : épaule (12), coude (14), poignet (16)
  const shoulder = landmarks[12];
  const elbow = landmarks[14];
  const wrist = landmarks[16];
  // Vérifier la détection et la visibilité
  if (!shoulder || !elbow || !wrist || [shoulder, elbow, wrist].some(pt => pt.visibility !== undefined && pt.visibility < 0.5)) {
    tattooMesh.visible = false;
    return;
  }
    // Construire la courbe uniquement sur l'avant-bras (coude -> poignet)
    // On ajoute un point intermédiaire (milieu) pour avoir une courbe plus douce
    const midLandmark = {
      x: (elbow.x + wrist.x) / 2,
      y: (elbow.y + wrist.y) / 2,
      z: (elbow.z + wrist.z) / 2,
    };

    const forearmPoints = [elbow, midLandmark, wrist];

    // Convertir les points MediaPipe (x,y,z) en espace monde en estimant une distance réaliste
    const curvePoints = forearmPoints.map(pt => landmarkToWorld(pt, elbow, wrist));

  // Créer une courbe 3D qui suit le bras
  tattooCurve = new THREE.CatmullRomCurve3(curvePoints);

  // Calculer la longueur du bras pour ajuster le rayon
    // Calculer la longueur de l'avant-bras pour ajuster le rayon (distance coude->poignet)
    const forearmLength = curvePoints[0].distanceTo(curvePoints[2]); // coude-poignet
    // Rayon dynamique : tune factor/limits to make tube wider when arm extended
    const TUBE_FACTOR = 0.5; // multiplier of forearm length
    const TUBE_MIN = 0.03;
    const TUBE_MAX = 0.28;
    const tubeRadius = Math.max(tubeMin, Math.min(tubeMax, forearmLength * tubeFactor));
  const tubeSegments = 32; // plus de segments pour plus de réalisme
  const tubeGeometry = new THREE.TubeGeometry(tattooCurve, tubeSegments, tubeRadius, 16, false);
  try { swapGeometryUVs(tubeGeometry); } catch (e) { /* ignore */ }
  tattooMesh.geometry.dispose();
  tattooMesh.geometry = tubeGeometry;

  // Matériau réaliste : texture, transparence, ombrage
  if (tattooMesh.material instanceof THREE.MeshBasicMaterial) {
    tattooMesh.material.opacity = 0.85;
    tattooMesh.material.transparent = true;
    tattooMesh.material.side = THREE.DoubleSide;
    tattooMesh.material.depthWrite = false;
    // Compute roll around forearm to offset texture circumferentially
    try {
      const elbowWorld = curvePoints[0];
      const midWorld = curvePoints[1];
      const wristWorld = curvePoints[2];
      // shoulder world for arm-up reference
      const shoulderWorld = landmarkToWorld(shoulder, elbow, wrist);

      const tangent = wristWorld.clone().sub(elbowWorld).normalize();
      let armUp = shoulderWorld.clone().sub(elbowWorld);
      // project armUp onto plane orthogonal to tangent
      armUp = armUp.clone().sub(tangent.clone().multiplyScalar(armUp.dot(tangent))).normalize();

      if (!tattooReferenceProj) {
        tattooReferenceProj = armUp.clone();
      }

      // compute signed angle between reference and current projected armUp around tangent
      const ref = tattooReferenceProj.clone();
      const cur = armUp.clone();
      const cos = THREE.MathUtils.clamp(ref.dot(cur), -1, 1);
      const angleAbs = Math.acos(cos);
      const cross = new THREE.Vector3().crossVectors(ref, cur);
      const sign = Math.sign(cross.dot(tangent)) || 1;
      const angle = angleAbs * sign;

      // map angle to texture offset (wrap around)
      const offset = ((angle / (Math.PI * 2)) % 1 + 1) % 1;
          if (tattooMesh.material.map) {
          // ensure offset is normalized
          const off = (((offset + seamOffset) % 1) + 1) % 1;
          tattooMesh.material.map.offset.y = off;
          tattooMesh.material.map.needsUpdate = true;
        }
    } catch (e) {
      // ignore orientation errors
    }
    tattooMesh.material.needsUpdate = true;
  }

  tattooMesh.visible = true;
}

// Vérification du support WebXR
checkXRSupport();

function checkXRSupport() {
  if ('xr' in navigator) {
    ;(navigator as any).xr.isSessionSupported('immersive-ar').then((supported: boolean) => {
      if (supported) {
        info.textContent = 'AR prêt !'
        startButton.style.display = 'block'
        startButton.disabled = false
        startButton.textContent = 'Démarrer AR'
        startButton.addEventListener('click', startAR)
      } else {
        startFallbackMode()
      }
    }).catch(() => {
      startFallbackMode()
    })
  } else {
    startFallbackMode()
  }
}

function startFallbackMode() {
  info.textContent = 'Mode caméra simple (WebXR non supporté)'
  startButton.style.display = 'block'
  startButton.textContent = 'Démarrer la caméra'
  startButton.addEventListener('click', () => startCameraMode('user'))
}

// Fonction pour changer de caméra
if (switchCameraButton) {
  switchCameraButton.addEventListener('click', (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('Changement de caméra')
    const newFacingMode = currentFacingMode === 'environment' ? 'user' : 'environment'
    startCameraMode(newFacingMode)
  })
  console.log('Listener ajouté au bouton de changement de caméra')
} else {
  console.error('Bouton switchCamera introuvable!')
}

// Try to find an explicit deviceId for the requested facing mode.
// This helps on some mobile browsers where `facingMode` is ignored.
async function getDeviceIdForFacingMode(facingMode: 'environment' | 'user'): Promise<string | undefined> {
  if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) return undefined;
  try {
    let devices = await navigator.mediaDevices.enumerateDevices();
    let videoDevices = devices.filter(d => d.kind === 'videoinput');
    console.log('Available video devices (initial):', videoDevices);
    if (videoDevices.length === 0) return undefined;

    const keyword = facingMode === 'user' ? /front|face|selfie|user|avant|frontal/i : /back|rear|environment|wide|arrière/i;
    const labeledMatch = videoDevices.find(d => d.label && keyword.test(d.label));
    if (labeledMatch) {
      console.log('Selected device by label:', labeledMatch.label, labeledMatch.deviceId);
      return labeledMatch.deviceId;
    }

    // If labels are empty (common before permission on mobile), request a quick
    // permission probe using facingMode so labels become available, then re-enumerate.
    const anyLabeled = videoDevices.some(d => d.label && d.label.length > 0);
    if (!anyLabeled) {
      try {
        console.log('No labels yet — requesting temporary permission probe using facingMode hint:', facingMode);
        const probe = await navigator.mediaDevices.getUserMedia({ video: { facingMode: facingMode } });
        probe.getTracks().forEach(t => t.stop());
        devices = await navigator.mediaDevices.enumerateDevices();
        videoDevices = devices.filter(d => d.kind === 'videoinput');
        console.log('Available video devices (after probe):', videoDevices);
        const labeledAfterProbe = videoDevices.find(d => d.label && keyword.test(d.label));
        if (labeledAfterProbe) {
          console.log('Selected device by label after probe:', labeledAfterProbe.label, labeledAfterProbe.deviceId);
          return labeledAfterProbe.deviceId;
        }
      } catch (e) {
        console.warn('Permission probe failed or was denied:', e);
      }
    }

    // Probe devices one-by-one to inspect their reported facingMode in settings.
    for (const d of videoDevices) {
      try {
        console.log('Probing device:', d.label || '(no-label)', d.deviceId);
        const s = await navigator.mediaDevices.getUserMedia({ video: { deviceId: { exact: d.deviceId } } });
        const track = s.getVideoTracks()[0];
        const settings: any = track.getSettings ? track.getSettings() : {};
        const fm = settings.facingMode;
        track.stop();
        console.log('Probe settings for device', d.deviceId, settings);
        if (fm && fm.toLowerCase().includes(facingMode)) {
          console.log('Selected device by probing facingMode:', d.label, d.deviceId, fm);
          return d.deviceId;
        }
      } catch (e) {
        console.warn('Probing device failed (continuing):', e);
      }
    }

    // Fallback heuristics: prefer first device as front, last as rear
    console.log('Falling back to heuristic device selection');
    return (facingMode === 'user') ? videoDevices[0].deviceId : videoDevices[videoDevices.length - 1].deviceId;
  } catch (e) {
    console.warn('getDeviceIdForFacingMode failed:', e);
    return undefined;
  }
}

// Build a small floating UI to list available cameras and allow manual selection.
function createCameraSelectionUI() {
  const panel = document.createElement('div');
  panel.id = 'camera-select-panel';
  panel.style.position = 'fixed';
  panel.style.bottom = '12px';
  panel.style.left = '12px';
  panel.style.padding = '8px';
  panel.style.background = 'rgba(0,0,0,0.6)';
  panel.style.color = '#fff';
  panel.style.fontSize = '13px';
  panel.style.zIndex = '9999';
  panel.style.borderRadius = '6px';
  panel.style.maxWidth = '320px';
  panel.style.backdropFilter = 'blur(4px)';

  const title = document.createElement('div');
  title.textContent = 'Caméras';
  title.style.fontWeight = '600';
  title.style.marginBottom = '6px';
  panel.appendChild(title);

  const select = document.createElement('select');
  select.style.width = '100%';
  select.style.marginBottom = '6px';
  panel.appendChild(select);

  const row = document.createElement('div');
  row.style.display = 'flex';
  row.style.gap = '6px';

  const useBtn = document.createElement('button');
  useBtn.textContent = 'Utiliser';
  useBtn.style.flex = '1';
  useBtn.onclick = () => {
    const val = select.value;
    if (val) {
      manualDeviceId = val;
      console.log('Manual camera selected:', val);
      info.textContent = 'Caméra sélectionnée manuellement';
      // Restart camera with selected device
      startCameraMode(currentFacingMode).catch((e)=>console.warn(e));
    }
  };

  const refreshBtn = document.createElement('button');
  refreshBtn.textContent = 'Rafraîchir';
  refreshBtn.style.flex = '1';
  refreshBtn.onclick = async () => {
    await populateCameraList(select);
  };

  row.appendChild(useBtn);
  row.appendChild(refreshBtn);
  panel.appendChild(row);

  const hint = document.createElement('div');
  hint.style.fontSize = '11px';
  hint.style.opacity = '0.85';
  hint.style.marginTop = '6px';
  hint.textContent = "Si les noms sont vides, autorisez d'abord la caméra puis rafraîchissez.";
  panel.appendChild(hint);

  document.body.appendChild(panel);

  // initial population
  populateCameraList(select).catch(e => console.warn('populateCameraList failed', e));
}

async function populateCameraList(selectEl: HTMLSelectElement) {
  if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) return;
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const videoDevices = devices.filter(d => d.kind === 'videoinput');
    // clear
    selectEl.innerHTML = '';
    videoDevices.forEach((d, i) => {
      const opt = document.createElement('option');
      opt.value = d.deviceId;
      opt.text = d.label && d.label.length > 0 ? d.label : `Camera ${i+1}`;
      selectEl.appendChild(opt);
    });
    // select current manualDeviceId if present
    if (manualDeviceId) selectEl.value = manualDeviceId;
  } catch (e) {
    console.warn('populateCameraList error', e);
  }
}

async function startCameraMode(facingMode: 'environment' | 'user' = 'user') {
  try {
    info.textContent = 'Demande d\'accès à la caméra...'
    
    // Vérifier si getUserMedia est disponible
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      throw new Error('getUserMedia non supporté')
    }

    // Arrêter le stream précédent s'il existe
    if (currentStream) {

          // Ajout du tracking du bras avec MediaPipe Pose
    let poseTattoo: THREE.Mesh | null = null;
    let poseReticle: THREE.Mesh | null = null;
    let tattooLocked = false;
      let lockedPosition: { x: number, y: number, z: number } | null = null;
      let lockedQuaternion: THREE.Quaternion | null = null;
    // position lissée pour stabiliser le repère
    let lastPosePosition: THREE.Vector3 | null = null;
    const SMOOTH = 0.18; // facteur de lerp (0 = aucune, 1 = immédiat)

    if (videoElement) {
      setupPoseTracking(videoElement, (landmarks: any[]) => {
        if (tattooLocked && lockedPosition && poseTattoo) {
          poseTattoo.position.set(lockedPosition.x, lockedPosition.y, lockedPosition.z);
            if (lockedQuaternion) poseTattoo.quaternion.copy(lockedQuaternion);
          if (poseReticle) poseReticle.visible = false;
          return;
        }
        const wrist = landmarks[16] || landmarks[15];
        const elbow = landmarks[14] || landmarks[13];
        if (!wrist) return;

        // Convertir les coordonnées MediaPipe (0..1) en un point monde à distance raisonnable
        const ndc = landmarkToWorld(wrist);

        if (!poseTattoo) {
          const tattooGeometry = new THREE.PlaneGeometry(1, 1);
          // Ensure texture is not tiled and is centered for plane previews
          if (tattooTexture) {
            tattooTexture.wrapS = THREE.ClampToEdgeWrapping;
            tattooTexture.wrapT = THREE.ClampToEdgeWrapping;
            tattooTexture.repeat.set(1, 1);
            tattooTexture.offset.set(0, 0);
            tattooTexture.center.set(0.5, 0.5);
            tattooTexture.rotation = 0;
            tattooTexture.needsUpdate = true;
          }
          const tattooMaterial = new THREE.MeshBasicMaterial({
            map: tattooTexture,
            transparent: true,
            opacity: PREVIEW_OPACITY,
            side: THREE.DoubleSide,
            depthWrite: false,
            alphaTest: alphaTestVal,
            premultipliedAlpha: false,
          });
          poseTattoo = new THREE.Mesh(tattooGeometry, tattooMaterial);
          scene.add(poseTattoo);

          // Créer un repère blanc (reticle) pour indiquer l'emplacement avant placement définitif
          const ringGeom = new THREE.RingGeometry(0.12, 0.16, 32);
          ringGeom.rotateX(-Math.PI / 2);
          const ringMat = new THREE.MeshBasicMaterial({ color: 0xffffff, opacity: 0.95, transparent: true });
          poseReticle = new THREE.Mesh(ringGeom, ringMat);
          poseReticle.visible = true;
          scene.add(poseReticle);
          // debug: add thin background plane to show plane bounds/orientation
          const debugBg = new THREE.Mesh(new THREE.PlaneGeometry(1.02, 1.02), new THREE.MeshBasicMaterial({ color: 0x000000, opacity: 0.2, transparent: true }));
          debugBg.name = 'poseTattooDebugBg';
          debugBg.visible = false;
          poseTattoo.add(debugBg);
        }

        // Compute target world position: midpoint of wrist<->elbow when available, else wrist point
        let targetPos = ndc.clone();
        let forearmLen = 0.2;
        if (elbow && wrist) {
          const elbowWorld = landmarkToWorld(elbow, elbow, wrist);
          const wristWorld = landmarkToWorld(wrist, elbow, wrist);
          forearmLen = elbowWorld.distanceTo(wristWorld);
          targetPos = elbowWorld.clone().add(wristWorld).multiplyScalar(0.5);
        }

        // Lissage: interpole entre la dernière position et la nouvelle
        if (!lastPosePosition) {
          lastPosePosition = targetPos.clone();
        } else {
          lastPosePosition.lerp(targetPos, SMOOTH);
        }

        // Positionner le tattoo et le repère à la position lissée
        if (poseTattoo && lastPosePosition) {
          poseTattoo.position.copy(lastPosePosition);
          const aspect = tattooAspect || 1;
          // Height should follow forearm length; slightly reduced to avoid oversize
          const height = THREE.MathUtils.clamp(forearmLen * heightMultiplier, heightMin, heightMax);
          const width = height * aspect;
          poseTattoo.scale.set(width, height, 1);
          if (elbow && wrist) {
            orientPlaneAlongForearm(poseTattoo, wrist, elbow);
          } else if (camera) {
            poseTattoo.lookAt(camera.position);
          }
        }

        if (poseReticle && lastPosePosition) {
          poseReticle.position.copy(lastPosePosition);
          poseReticle.lookAt(camera.position);
          poseReticle.visible = true;
        }
      });

      // Tap pour verrouiller la position du tattoo
      renderer.domElement.addEventListener('click', () => {
        if (!tattooLocked && poseTattoo) {
          lockedPosition = {
            x: poseTattoo.position.x,
            y: poseTattoo.position.y,
            z: poseTattoo.position.z
          };
            lockedQuaternion = poseTattoo.quaternion.clone();
          tattooLocked = true;
          if (poseReticle) poseReticle.visible = false;
          // Animer l'opacité vers l'état verrouillé
          animateMaterialOpacity(poseTattoo.material, LOCKED_OPACITY, 300);
          info.textContent = 'Tattoo verrouillé !';
        }
      });
      renderer.domElement.addEventListener('touchend', () => {
        if (!tattooLocked && poseTattoo) {
          lockedPosition = {
            x: poseTattoo.position.x,
            y: poseTattoo.position.y,
            z: poseTattoo.position.z
          };
          tattooLocked = true;
          if (poseReticle) poseReticle.visible = false;
          // Animer l'opacité vers l'état verrouillé
          animateMaterialOpacity(poseTattoo.material, LOCKED_OPACITY, 300);
          info.textContent = 'Tattoo verrouillé !';
        }
      }, { passive: false });
    }
      currentStream.getTracks().forEach(track => track.stop())
    }

    // Demande d'accès à la caméra
    // On préfère sélectionner un `deviceId` explicite quand possible,
    // car certains navigateurs mobiles ignorent `facingMode: 'user'`.
    let stream: MediaStream
    try {
      // If user manually selected a device from the UI, prefer it
      if (manualDeviceId) {
        console.log('Using manualDeviceId for getUserMedia:', manualDeviceId);
        stream = await navigator.mediaDevices.getUserMedia({ video: { deviceId: { exact: manualDeviceId }, width: { ideal: 1280 }, height: { ideal: 720 } } });
      } else {
        const deviceId = await getDeviceIdForFacingMode(facingMode)
        const videoConstraints: any = deviceId ? { deviceId: { exact: deviceId } } : { facingMode: facingMode }
        videoConstraints.width = { ideal: 1280 }
        videoConstraints.height = { ideal: 720 }
        stream = await navigator.mediaDevices.getUserMedia({ video: videoConstraints })
      }
    } catch (err) {
      // Retrier avec facingMode en dernier recours
      console.warn('Primary getUserMedia failed, retrying with simple facingMode:', err);
      stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: facingMode,
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      })
    }

    currentStream = stream
    currentFacingMode = facingMode
    info.textContent = 'Caméra activée !'

    // Créer ou réutiliser l'élément vidéo
    if (!videoElement) {
      const video = document.createElement('video')
      video.autoplay = true
      video.playsInline = true
      video.muted = true
      video.style.position = 'fixed'
      video.style.top = '0';
      video.style.left = '0';
      video.style.width = '100vw';
      video.style.height = '100vh';
      video.style.objectFit = 'cover';
      video.style.zIndex = '-1';
      video.style.maxWidth = '100vw';
      video.style.maxHeight = '100vh';
      video.style.background = '#000';
      video.setAttribute('playsinline', 'true');
      video.setAttribute('webkit-playsinline', 'true');
      container.insertBefore(video, container.firstChild)
      videoElement = video
    }
    videoElement.srcObject = stream
    // Attendre que la vidéo soit prête
    await videoElement.play()

    // Start (or restart) MediaPipe pose tracking when the camera stream is active
    try {
      // stop any previous tracker first
      try { stopPoseTracking?.(); } catch (e) { /* ignore */ }
      poseTrackingStarted = false;
      if (videoElement) {
        setupPoseTracking(videoElement, (landmarks: any) => {
          updateTattooFromPose(landmarks)
        })
        poseTrackingStarted = true;
        console.log('Pose tracking started')
      }
    } catch (e) {
      console.warn('Unable to start/restart pose tracking:', e)
    }

    startButton.style.display = 'none'
    switchCameraButton.style.display = 'block'
    console.log('Bouton de changement de caméra affiché')
    info.textContent = 'Tapez pour placer un tattoo'

    // Configuration de la scène 3D par-dessus la vidéo (seulement à la première fois)
    if (!renderer.domElement.hasAttribute('data-initialized')) {
      renderer.setClearColor(0x000000, 0)
      camera.position.z = 3
      renderer.domElement.setAttribute('data-initialized', 'true')

      // Force le canvas WebGL au-dessus de la vidéo pour éviter que le tattoo apparaisse "derrière" la vidéo
      renderer.domElement.style.position = 'fixed';
      renderer.domElement.style.top = '0';
      renderer.domElement.style.left = '0';
      renderer.domElement.style.width = '100vw';
      renderer.domElement.style.height = '100vh';
      renderer.domElement.style.zIndex = '1';

      // Gestion des clics et touch
      const handleTap = (event: MouseEvent | TouchEvent) => {
        event.preventDefault();
        let clientX: number, clientY: number;
        if (event instanceof TouchEvent) {
          // Utilise changedTouches pour le touchend
          const touch = event.changedTouches[0];
          clientX = touch.clientX;
          clientY = touch.clientY;
        } else {
          clientX = event.clientX;
          clientY = event.clientY;
        }
        // Conversion en coordonnées normalisées
        const x = (clientX / window.innerWidth) * 2 - 1;
        const y = -(clientY / window.innerHeight) * 2 + 1;
        // Placement du tattoo
        const tattooGeometry = new THREE.PlaneGeometry(1, 1);
        // For tapped tattoos ensure no tiling and clean alpha
        if (tattooTexture) {
          tattooTexture.wrapS = THREE.ClampToEdgeWrapping;
          tattooTexture.wrapT = THREE.ClampToEdgeWrapping;
          tattooTexture.repeat.set(1, 1);
          tattooTexture.offset.set(0, 0);
          tattooTexture.center.set(0.5, 0.5);
          tattooTexture.rotation = 0;
          tattooTexture.needsUpdate = true;
        }
        const tattooMaterial = new THREE.MeshBasicMaterial({
          map: tattooTexture,
          transparent: true,
          side: THREE.DoubleSide,
          alphaTest: alphaTestVal,
          premultipliedAlpha: false,
        });
        const tattoo = new THREE.Mesh(tattooGeometry, tattooMaterial);
        tattoo.position.set(x * 2, y * 2, -2);
        scene.add(tattoo);
        const aspect = tattooAspect || 1;
        // If we have a recent arm detection, place the tattoo centered on the forearm
        if (lastArmDetail && lastArmDetail.landmarks) {
          const la = lastArmDetail.landmarks;
          const laElbow = la[14] || la[13];
          const laWrist = la[16] || la[15];
              if (laElbow && laWrist && camera) {
                const elbowWorld = landmarkToWorld(laElbow, laElbow, laWrist);
                const wristWorld = landmarkToWorld(laWrist, laElbow, laWrist);
                const forearmLen = elbowWorld.distanceTo(wristWorld);
                const height = THREE.MathUtils.clamp(forearmLen * heightMultiplier, heightMin, heightMax);
                const width = height * aspect;
                const mid = elbowWorld.clone().add(wristWorld).multiplyScalar(0.5);
                tattoo.position.copy(mid);
                tattoo.scale.set(width, height, 1);
                orientPlaneAlongForearm(tattoo, laWrist, laElbow);
                // show debug background briefly to help visual verification
                const dbg = tattoo.getObjectByName('poseTattooDebugBg') as THREE.Mesh | undefined;
                if (dbg) dbg.visible = true;
                setTimeout(() => { if (dbg) dbg.visible = false; }, 800);
                animateScale(tattoo, new THREE.Vector3(width, height, 1));
          } else {
            tattoo.scale.set(0.01 * aspect, 0.01, 0.01);
            if (camera) tattoo.lookAt(camera.position);
            animateScale(tattoo, new THREE.Vector3(0.01 * aspect, 0.01, 0.01));
          }
        } else {
          tattoo.scale.set(0.01 * aspect, 0.01, 0.01);
          if (camera) tattoo.lookAt(camera.position);
          // show debug background briefly to help visual verification
          const dbg = tattoo.getObjectByName('poseTattooDebugBg') as THREE.Mesh | undefined;
          if (dbg) dbg.visible = true;
          setTimeout(() => { if (dbg) dbg.visible = false; }, 800);
          animateScale(tattoo, new THREE.Vector3(0.01 * aspect, 0.01, 0.01));
        }
      };
      renderer.domElement.addEventListener('click', handleTap);
      renderer.domElement.addEventListener('touchend', handleTap, { passive: false });
      // Démarrer le rendu
      renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
      });
    }
  } catch (error: any) {
    const errorMsg = error.name === 'NotAllowedError' 
      ? 'Accès caméra refusé. Autorisez dans les paramètres.'
      : error.name === 'NotFoundError'
      ? 'Aucune caméra trouvée sur cet appareil'
      : error.name === 'NotReadableError'
      ? 'Caméra déjà utilisée par une autre app'
      : 'Erreur: ' + error.message
    
    info.textContent = errorMsg
    info.style.background = 'rgba(255,0,0,0.8)'
    console.error('Erreur caméra:', error)
    startButton.style.display = 'block'
    startButton.textContent = 'Réessayer'
  }
}

function startAR() {
  const sessionInit = {
    requiredFeatures: ['hit-test'],
    optionalFeatures: ['dom-overlay'],
    domOverlay: { root: document.body }
  }

  ;(navigator as any).xr.requestSession('immersive-ar', sessionInit).then(onSessionStarted)
}

function onSessionStarted(session: XRSession) {
  session.addEventListener('end', onSessionEnded)
  renderer.xr.setSession(session)
  startButton.style.display = 'none'
  info.textContent = 'Tapez pour placer un tattoo'

  // Gestion des clics/tap
  session.addEventListener('select', onSelect)

  renderer.xr.setReferenceSpaceType('local')
  renderer.setAnimationLoop(render)
}

function onSessionEnded() {
  hitTestSourceRequested = false
  hitTestSource = null
  startButton.style.display = 'block'
  info.textContent = 'Session AR terminée'
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

function onSelect() {
  if (reticle.visible) {
    // Prevent placing on arbitrary surfaces (floor/wall/table).
    // Only allow if an arm was detected recently.
    const now = performance.now();
    if (!lastArmDetectedAt || (now - lastArmDetectedAt) > ALLOW_PLACE_AFTER_ARM_MS) {
      // Inform the user and abort placement
      if (info) {
        info.textContent = 'Placement autorisé uniquement quand un bras est détecté';
        setTimeout(() => { if (info) info.textContent = 'Tapez pour placer un tattoo' }, 1500);
      }
      return;
    }
    // Créer un tattoo à la position du reticle
    // Ensure texture clamping for AR-placed tattoos
    if (tattooTexture) {
      tattooTexture.wrapS = THREE.ClampToEdgeWrapping;
      tattooTexture.wrapT = THREE.ClampToEdgeWrapping;
      tattooTexture.repeat.set(1, 1);
      tattooTexture.offset.set(0, 0);
      tattooTexture.center.set(0.5, 0.5);
      tattooTexture.rotation = 0;
      tattooTexture.needsUpdate = true;
    }
    const aspect = tattooAspect || 1;
    // If we have recent arm landmarks, size the plane based on forearm length
    let arHeight = 0.2;
    if (lastArmDetail && lastArmDetail.landmarks) {
      const la = lastArmDetail.landmarks;
      const laElbow = la[14] || la[13];
      const laWrist = la[16] || la[15];
      if (laElbow && laWrist) {
        const elbowWorld = landmarkToWorld(laElbow, laElbow, laWrist);
        const wristWorld = landmarkToWorld(laWrist, laElbow, laWrist);
        const forearmLen = elbowWorld.distanceTo(wristWorld);
        arHeight = THREE.MathUtils.clamp(forearmLen * heightMultiplier, heightMin, heightMax);
      }
    }
    const tattooGeometry = new THREE.PlaneGeometry(arHeight * aspect, arHeight)
    const tattooMaterial = new THREE.MeshBasicMaterial({
      map: tattooTexture,
      transparent: true,
      side: THREE.DoubleSide,
      alphaTest: alphaTestVal,
      premultipliedAlpha: false,
    })
    const tattoo = new THREE.Mesh(tattooGeometry, tattooMaterial)
    // If arm landmarks are available, center the tattoo on forearm midpoint; otherwise use reticle
    if (lastArmDetail && lastArmDetail.landmarks && camera) {
      const la = lastArmDetail.landmarks;
      const laElbow = la[14] || la[13];
      const laWrist = la[16] || la[15];
      if (laElbow && laWrist) {
        const elbowWorld = landmarkToWorld(laElbow, laElbow, laWrist);
        const wristWorld = landmarkToWorld(laWrist, laElbow, laWrist);
        const mid = elbowWorld.clone().add(wristWorld).multiplyScalar(0.5);
        tattoo.position.copy(mid);
        tattoo.scale.set(arHeight * aspect, arHeight, 1);
        orientPlaneAlongForearm(tattoo, laWrist, laElbow);
        animateScale(tattoo, new THREE.Vector3(arHeight * aspect, arHeight, 1));
      } else {
        const position = new THREE.Vector3();
        position.setFromMatrixPosition(reticle.matrix);
        tattoo.position.copy(position);
        tattoo.lookAt(camera.position);
        animateScale(tattoo, new THREE.Vector3(arHeight * aspect, arHeight, 1));
      }
    } else {
      tattoo.position.setFromMatrixPosition(reticle.matrix);
      if (camera) tattoo.lookAt(camera.position);
      animateScale(tattoo, new THREE.Vector3(arHeight * aspect, arHeight, 1));
    }
    scene.add(tattoo)

    // Animation d'apparition
    tattoo.scale.set(0.01, 0.01, 0.01)
    animateScale(tattoo)
  }
}

function animateScale(mesh: THREE.Mesh, target?: THREE.Vector3) {
  const duration = 400
  const startTime = Date.now()
  const start = mesh.scale.clone()
  const end = target ? target.clone() : new THREE.Vector3(1, 1, 1)

  function animate() {
    const elapsed = Date.now() - startTime
    const t = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - t, 2) // Ease out quadratic
    const cur = start.clone().lerp(end, eased)
    mesh.scale.set(cur.x, cur.y, cur.z)

    if (t < 1) {
      requestAnimationFrame(animate)
    }
  }
  animate()
}

// Animate material opacity from current to target over duration (ms)
function animateMaterialOpacity(material: THREE.Material | THREE.Material[] | null, to: number, duration = 300) {
  if (!material) return;
  const mats = Array.isArray(material) ? material : [material];

  mats.forEach((m) => {
    const mat = m as THREE.MeshBasicMaterial;
    // only animate if material supports opacity
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

function render(timestamp: number, frame: XRFrame) {
  if (frame) {
    const referenceSpace = renderer.xr.getReferenceSpace()
    const session = renderer.xr.getSession()

    if (hitTestSourceRequested === false && session) {
      session.requestReferenceSpace('viewer').then((referenceSpace) => {
        const hitTestRequest = session.requestHitTestSource?.({ space: referenceSpace })
        if (hitTestRequest) {
          hitTestRequest.then((source) => {
            hitTestSource = source
          })
        }
      }).catch(err => console.error('Hit test error:', err))
      hitTestSourceRequested = true
    }

    if (hitTestSource && referenceSpace) {
      const hitTestResults = frame.getHitTestResults(hitTestSource)
      if (hitTestResults.length > 0) {
        const hit = hitTestResults[0]
        const pose = hit.getPose(referenceSpace)
        if (pose) {
          reticle.visible = true
          reticle.matrix.fromArray(pose.transform.matrix)
        }
      } else {
        reticle.visible = false
      }
    }
  }

  renderer.render(scene, camera)
}

init()
console.log('BloomInk AR ready')
