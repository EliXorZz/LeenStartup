<template>
  <div class="ar-wrapper">
    <div id="info">Initialisation...</div>

    <div id="container" ref="containerRef"></div>

    <div class="actions">
      <button id="startAR" class="w-full" style="display: none;">Démarrer AR</button>
      <button id="switchCamera" style="display: none;">Changer Caméra</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';
import { Pose } from '@mediapipe/pose';

// =============================================================================
// VARIABLES GLOBALES
// =============================================================================

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let reticle: THREE.Mesh;
let hitTestSource: XRHitTestSource | null = null;
let hitTestSourceRequested = false;
let tattooTexture: THREE.Texture;
let tattooAspect = 1;
let tattooMesh: THREE.Mesh | null = null;
let tattooTextureTube: THREE.Texture | null = null;
let appliedTubeRadius = 0.09;

// Paramètres ajustables
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

let tattooCurve: THREE.CatmullRomCurve3 | null = null;
let currentFacingMode: 'environment' | 'user' = 'user';
let currentStream: MediaStream | null = null;
let videoElement: HTMLVideoElement | null = null;
let poseTrackingStarted = false;
let manualDeviceId: string | null = null;
let tattooReferenceProj: THREE.Vector3 | null = null;

// Lissage et Opacité
let SMOOTH = 0.18;
const PREVIEW_OPACITY = 0.55;
const LOCKED_OPACITY = 1.0;
const SHOW_LANDMARK_MARKERS = false;

// Éléments DOM (récupérés dans onMounted)
let info: HTMLElement;
let startButton: HTMLButtonElement;
let switchCameraButton: HTMLButtonElement;
let container: HTMLElement;

// Marqueurs visuels
const landmarkMarkers: Record<string, THREE.Mesh | undefined> = {};
const landmarkHideTimers: Record<string, number | undefined> = {};
const landmarkColors: Record<string, number> = {
  right_shoulder: 0xff5555, right_elbow: 0xff8844, right_wrist: 0xffcc33,
  left_shoulder: 0x5599ff, left_elbow: 0x44ccff, left_wrist: 0x33aaff,
};

let lastArmDetectedAt: number | null = null;
let lastArmDetail: any = null;
const ALLOW_PLACE_AFTER_ARM_MS = 2000;

// =============================================================================
// LOGIQUE MEDIAPIPE
// =============================================================================
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
          (window as any).dispatchEvent(new Event('pose:landmark'));
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

      if (rightShoulder && rightElbow && rightWrist) {
        const rightAvg = avgVis(rightShoulder, rightElbow, rightWrist);
        if (rightAvg >= ARM_VISIBILITY_AVG) rightArmStableCount++; else rightArmStableCount = 0;
        if (rightArmStableCount >= ARM_CONSEC_FRAMES) {
          window.dispatchEvent(new CustomEvent('pose:arm', { detail: { side: 'right', landmarks: { shoulder: rightShoulder, elbow: rightElbow, wrist: rightWrist } } }));
          rightArmStableCount = 0;
        }
      }

      if (leftShoulder && leftElbow && leftWrist) {
        const leftAvg = avgVis(leftShoulder, leftElbow, leftWrist);
        if (leftAvg >= ARM_VISIBILITY_AVG) leftArmStableCount++; else leftArmStableCount = 0;
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
    try { (pose as any).close?.(); } catch (e) { }
    stopPoseTracking = null;
  };

  async function detect() {
    if (!running) return;
    try { await pose.send({ image: video }); } catch (e) { }
    rafId = requestAnimationFrame(detect) as unknown as number;
  }
  detect();
}

// =============================================================================
// FONCTIONS UTILITAIRES 3D
// =============================================================================

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
  if (!camera || !SHOW_LANDMARK_MARKERS) return;
  const marker = ensureMarker(name);
  const ndcX = (landmark.x ?? 0) * 2 - 1;
  const ndcY = -((landmark.y ?? 0) * 2 - 1);
  const ndc = new THREE.Vector3(ndcX, ndcY, landmark.z ?? 0);
  ndc.unproject(camera);
  marker.position.copy(ndc);
  marker.visible = true;

  if (landmarkHideTimers[name]) window.clearTimeout(landmarkHideTimers[name]);
  landmarkHideTimers[name] = window.setTimeout(() => {
    marker.visible = false;
    landmarkHideTimers[name] = undefined;
  }, 500) as unknown as number;
}

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
  if (worldUp.dot(forearm) < 0) plane.rotateOnAxis(forward, Math.PI);
}

function applyControlsToMaterials() {
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

// Handlers d'événements
const onPoseLandmark = (ev: Event) => {
  const detail = (ev as CustomEvent).detail;
  if (detail && detail.name && detail.landmark) {
    try { updateMarkerFromLandmark(detail.name, detail.landmark); } catch (e) { }
    if (info && detail && detail.name) {
      info.textContent = `Point détecté: ${detail.name}`;
      setTimeout(() => { if (info) info.textContent = 'Tapez pour placer un tattoo' }, 1200);
    }
  }
};

const onPoseArm = (ev: Event) => {
  const detail = (ev as CustomEvent).detail;
  lastArmDetectedAt = performance.now();
  lastArmDetail = detail;
  if (info && detail && detail.side) {
    info.textContent = `Bras détecté (${detail.side})`;
    setTimeout(() => { if (info) info.textContent = 'Tapez pour placer un tattoo' }, 1500);
  }
};

// =============================================================================
// UI HELPERS
// =============================================================================

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

  const tubeR = document.createElement('input');
  tubeR.type = 'range'; tubeR.min = '0.02'; tubeR.max = '0.5'; tubeR.step = '0.01'; tubeR.value = String(tubeRadiusDefault);
  tubeR.oninput = () => {
    const v = parseFloat((tubeR as HTMLInputElement).value);
    if (tattooMesh) {
      const factor = v / appliedTubeRadius;
      tattooMesh.scale.x *= factor;
      tattooMesh.scale.z *= factor;
      appliedTubeRadius = v;
    }
    tubeRadiusDefault = v;
  };
  addRow('Tube radius', tubeR);

  const tubeF = document.createElement('input');
  tubeF.type = 'range'; tubeF.min = '0.1'; tubeF.max = '1.2'; tubeF.step = '0.01'; tubeF.value = String(tubeFactor);
  tubeF.oninput = () => { tubeFactor = parseFloat((tubeF as HTMLInputElement).value); };
  addRow('Tube factor', tubeF);

  const heightS = document.createElement('input');
  heightS.type = 'range'; heightS.min = '0.5'; heightS.max = '1.5'; heightS.step = '0.01'; heightS.value = String(heightMultiplier);
  heightS.oninput = () => { heightMultiplier = parseFloat((heightS as HTMLInputElement).value); };
  addRow('Height multiplier', heightS);

  const alphaS = document.createElement('input');
  alphaS.type = 'range'; alphaS.min = '0'; alphaS.max = '0.5'; alphaS.step = '0.01'; alphaS.value = String(alphaTestVal);
  alphaS.oninput = () => { alphaTestVal = parseFloat((alphaS as HTMLInputElement).value); applyControlsToMaterials(); };
  addRow('Alpha test', alphaS);

  const seamS = document.createElement('input');
  seamS.type = 'range'; seamS.min = '-0.5'; seamS.max = '0.5'; seamS.step = '0.01'; seamS.value = String(seamOffset);
  seamS.oninput = () => { seamOffset = parseFloat((seamS as HTMLInputElement).value); };
  addRow('Seam offset', seamS);

  const wire = document.createElement('input'); wire.type = 'checkbox'; wire.checked = showWireframe;
  wire.onchange = () => { showWireframe = (wire as HTMLInputElement).checked; applyControlsToMaterials(); };
  addRow('Wireframe', wire);

  const blend = document.createElement('select');
  const opt1 = document.createElement('option'); opt1.value = 'Normal'; opt1.text = 'Normal';
  const opt2 = document.createElement('option'); opt2.value = 'Multiply'; opt2.text = 'Multiply';
  blend.appendChild(opt1); blend.appendChild(opt2); blend.value = blendMode;
  blend.onchange = () => { blendMode = (blend as HTMLSelectElement).value as any; applyControlsToMaterials(); };
  addRow('Blend', blend);

  document.body.appendChild(panel);
}

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
      info.textContent = 'Caméra sélectionnée manuellement';
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
  populateCameraList(select).catch(e => console.warn('populateCameraList failed', e));
}

async function populateCameraList(selectEl: HTMLSelectElement) {
  if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) return;
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const videoDevices = devices.filter(d => d.kind === 'videoinput');
    selectEl.innerHTML = '';
    videoDevices.forEach((d, i) => {
      const opt = document.createElement('option');
      opt.value = d.deviceId;
      opt.text = d.label && d.label.length > 0 ? d.label : `Camera ${i+1}`;
      selectEl.appendChild(opt);
    });
    if (manualDeviceId) selectEl.value = manualDeviceId;
  } catch (e) {
    console.warn('populateCameraList error', e);
  }
}

async function getDeviceIdForFacingMode(facingMode: 'environment' | 'user'): Promise<string | undefined> {
  if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) return undefined;
  try {
    let devices = await navigator.mediaDevices.enumerateDevices();
    let videoDevices = devices.filter(d => d.kind === 'videoinput');
    if (videoDevices.length === 0) return undefined;

    const keyword = facingMode === 'user' ? /front|face|selfie|user|avant|frontal/i : /back|rear|environment|wide|arrière/i;
    const labeledMatch = videoDevices.find(d => d.label && keyword.test(d.label));
    if (labeledMatch) return labeledMatch.deviceId;

    const anyLabeled = videoDevices.some(d => d.label && d.label.length > 0);
    if (!anyLabeled) {
      try {
        const probe = await navigator.mediaDevices.getUserMedia({ video: { facingMode: facingMode } });
        probe.getTracks().forEach(t => t.stop());
        devices = await navigator.mediaDevices.enumerateDevices();
        videoDevices = devices.filter(d => d.kind === 'videoinput');
        const labeledAfterProbe = videoDevices.find(d => d.label && keyword.test(d.label));
        if (labeledAfterProbe) return labeledAfterProbe.deviceId;
      } catch (e) { }
    }

    for (const d of videoDevices) {
      try {
        const s = await navigator.mediaDevices.getUserMedia({ video: { deviceId: { exact: d.deviceId } } });
        const track = s.getVideoTracks()[0];
        const settings: any = track.getSettings ? track.getSettings() : {};
        const fm = settings.facingMode;
        track.stop();
        if (fm && fm.toLowerCase().includes(facingMode)) return d.deviceId;
      } catch (e) { }
    }
    return (facingMode === 'user') ? videoDevices[0].deviceId : videoDevices[videoDevices.length - 1].deviceId;
  } catch (e) { return undefined; }
}

// =============================================================================
// MAIN LOGIC
// =============================================================================

function init() {
  info = document.getElementById('info')!;
  startButton = document.getElementById('startAR') as HTMLButtonElement;
  switchCameraButton = document.getElementById('switchCamera') as HTMLButtonElement;
  container = document.getElementById('container')!;

  console.log('Elements:', { info, startButton, switchCameraButton, container })

  window.addEventListener('pose:landmark', onPoseLandmark);
  window.addEventListener('pose:arm', onPoseArm);

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 20)

  const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1)
  light.position.set(0.5, 1, 0.25)
  scene.add(light)

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.xr.enabled = true

  // CORRECTION Z-INDEX POUR LE CANVAS
  renderer.domElement.style.position = 'absolute';
  renderer.domElement.style.top = '0';
  renderer.domElement.style.left = '0';
  renderer.domElement.style.width = '100%';
  renderer.domElement.style.height = '100%';
  renderer.domElement.style.zIndex = '2'; // Le canvas au dessus de la vidéo
  renderer.domElement.style.pointerEvents = 'none'; // Laisser passer le touch si nécessaire (géré manuellement après)

  container.appendChild(renderer.domElement)

  const textureLoader = new THREE.TextureLoader()
  tattooTexture = textureLoader.load('/tattoo.png', (tex: any) => {
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
    try {
      const tubeTex = (tex.clone() as THREE.Texture);
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

  const defaultCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, -0.2, 0)
  ]);
  const tubeGeometry = new THREE.TubeGeometry(defaultCurve, 16, tubeRadiusDefault, 8, false);
  try { swapGeometryUVs(tubeGeometry); } catch (e) { }
  const tattooMaterial = new THREE.MeshBasicMaterial({ map: (tattooTextureTube || tattooTexture), transparent: true, opacity: 0.7, side: THREE.FrontSide, depthWrite: false });
  tattooMesh = new THREE.Mesh(tubeGeometry, tattooMaterial);
  tattooMesh.visible = false;
  scene.add(tattooMesh);

  const geometry = new THREE.RingGeometry(0.15, 0.2, 32).rotateX(-Math.PI / 2)
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff })
  reticle = new THREE.Mesh(geometry, material)
  reticle.matrixAutoUpdate = false
  reticle.visible = false
  scene.add(reticle)

  window.addEventListener('resize', onWindowResize)

  try { createCameraSelectionUI(); } catch (e) { console.warn('Camera UI creation failed', e); }
  try { createControlsUI(); } catch (e) { console.warn('Controls UI creation failed', e); }

  checkXRSupport();
}

function updateTattooFromPose(landmarks: any) {
  if (!tattooMesh || !camera) return;
  const shoulder = landmarks[12];
  const elbow = landmarks[14];
  const wrist = landmarks[16];
  if (!shoulder || !elbow || !wrist || [shoulder, elbow, wrist].some(pt => pt.visibility !== undefined && pt.visibility < 0.5)) {
    tattooMesh.visible = false;
    return;
  }
  const midLandmark = {
    x: (elbow.x + wrist.x) / 2, y: (elbow.y + wrist.y) / 2, z: (elbow.z + wrist.z) / 2,
  };
  const forearmPoints = [elbow, midLandmark, wrist];
  const curvePoints = forearmPoints.map(pt => landmarkToWorld(pt, elbow, wrist));
  tattooCurve = new THREE.CatmullRomCurve3(curvePoints);
  const forearmLength = curvePoints[0].distanceTo(curvePoints[2]);
  const TUBE_MIN = 0.03; const TUBE_MAX = 0.28;
  const tubeRadius = Math.max(tubeMin, Math.min(tubeMax, forearmLength * tubeFactor));
  const tubeGeometry = new THREE.TubeGeometry(tattooCurve, 32, tubeRadius, 16, false);
  try { swapGeometryUVs(tubeGeometry); } catch (e) { }
  tattooMesh.geometry.dispose();
  tattooMesh.geometry = tubeGeometry;

  if (tattooMesh.material instanceof THREE.MeshBasicMaterial) {
    tattooMesh.material.opacity = 0.85;
    tattooMesh.material.transparent = true;
    tattooMesh.material.side = THREE.DoubleSide;
    tattooMesh.material.depthWrite = false;
    try {
      const elbowWorld = curvePoints[0];
      const wristWorld = curvePoints[2];
      const shoulderWorld = landmarkToWorld(shoulder, elbow, wrist);
      const tangent = wristWorld.clone().sub(elbowWorld).normalize();
      let armUp = shoulderWorld.clone().sub(elbowWorld);
      armUp = armUp.clone().sub(tangent.clone().multiplyScalar(armUp.dot(tangent))).normalize();
      if (!tattooReferenceProj) tattooReferenceProj = armUp.clone();
      const ref = tattooReferenceProj.clone();
      const cur = armUp.clone();
      const cos = THREE.MathUtils.clamp(ref.dot(cur), -1, 1);
      const angleAbs = Math.acos(cos);
      const cross = new THREE.Vector3().crossVectors(ref, cur);
      const sign = Math.sign(cross.dot(tangent)) || 1;
      const angle = angleAbs * sign;
      const offset = ((angle / (Math.PI * 2)) % 1 + 1) % 1;
      if (tattooMesh.material.map) {
        const off = (((offset + seamOffset) % 1) + 1) % 1;
        tattooMesh.material.map.offset.y = off;
        tattooMesh.material.map.needsUpdate = true;
      }
    } catch (e) { }
    tattooMesh.material.needsUpdate = true;
  }
  tattooMesh.visible = true;
}

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
    }).catch(() => startFallbackMode())
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

async function startCameraMode(facingMode: 'environment' | 'user' = 'user') {
  try {
    info.textContent = 'Demande d\'accès à la caméra...'
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) throw new Error('getUserMedia non supporté');

    // Variables locales pour la logique de placement
    let poseTattoo: THREE.Mesh | null = null;
    let poseReticle: THREE.Mesh | null = null;
    let tattooLocked = false;
    let lockedPosition: { x: number, y: number, z: number } | null = null;
    let lockedQuaternion: THREE.Quaternion | null = null;
    let lastPosePosition: THREE.Vector3 | null = null;

    if (currentStream) currentStream.getTracks().forEach(track => track.stop());

    let stream: MediaStream
    try {
      if (manualDeviceId) {
        stream = await navigator.mediaDevices.getUserMedia({ video: { deviceId: { exact: manualDeviceId }, width: { ideal: 1280 }, height: { ideal: 720 } } });
      } else {
        const deviceId = await getDeviceIdForFacingMode(facingMode)
        const videoConstraints: any = deviceId ? { deviceId: { exact: deviceId } } : { facingMode: facingMode }
        videoConstraints.width = { ideal: 1280 }; videoConstraints.height = { ideal: 720 };
        stream = await navigator.mediaDevices.getUserMedia({ video: videoConstraints })
      }
    } catch (err) {
      console.warn('Primary getUserMedia failed, retrying with simple facingMode:', err);
      stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: facingMode, width: { ideal: 1280 }, height: { ideal: 720 } } })
    }

    currentStream = stream
    currentFacingMode = facingMode
    info.textContent = 'Caméra activée !'

    if (!videoElement) {
      const video = document.createElement('video')
      video.autoplay = true
      video.playsInline = true
      video.muted = true

      // STYLES CRITIQUES POUR VISIBILITÉ
      video.style.position = 'fixed';
      video.style.top = '0';
      video.style.left = '0';
      video.style.width = '100%';
      video.style.height = '100%';
      video.style.objectFit = 'cover';
      video.style.zIndex = '0'; // Derrière le canvas

      video.setAttribute('playsinline', 'true');
      video.setAttribute('webkit-playsinline', 'true');

      // AJOUT AU BODY POUR ÉVITER LES PARENTS CSS
      document.body.appendChild(video)
      videoElement = video
    }
    videoElement.srcObject = stream
    await videoElement.play()

    // Logique Pose + Interactions (Click/Touch)
    try {
      try { stopPoseTracking?.(); } catch (e) { }
      poseTrackingStarted = false;
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
          const ndc = landmarkToWorld(wrist);

          if (!poseTattoo) {
            const tattooGeometry = new THREE.PlaneGeometry(1, 1);
            if (tattooTexture) {
              tattooTexture.wrapS = THREE.ClampToEdgeWrapping;
              tattooTexture.wrapT = THREE.ClampToEdgeWrapping;
              tattooTexture.repeat.set(1, 1); tattooTexture.offset.set(0, 0);
              tattooTexture.center.set(0.5, 0.5); tattooTexture.rotation = 0;
              tattooTexture.needsUpdate = true;
            }
            const tattooMaterial = new THREE.MeshBasicMaterial({ map: tattooTexture, transparent: true, opacity: PREVIEW_OPACITY, side: THREE.DoubleSide, depthWrite: false, alphaTest: alphaTestVal, premultipliedAlpha: false });
            poseTattoo = new THREE.Mesh(tattooGeometry, tattooMaterial);
            scene.add(poseTattoo);

            const ringGeom = new THREE.RingGeometry(0.12, 0.16, 32).rotateX(-Math.PI / 2);
            const ringMat = new THREE.MeshBasicMaterial({ color: 0xffffff, opacity: 0.95, transparent: true });
            poseReticle = new THREE.Mesh(ringGeom, ringMat);
            poseReticle.visible = true;
            scene.add(poseReticle);
            const debugBg = new THREE.Mesh(new THREE.PlaneGeometry(1.02, 1.02), new THREE.MeshBasicMaterial({ color: 0x000000, opacity: 0.2, transparent: true }));
            debugBg.name = 'poseTattooDebugBg'; debugBg.visible = false;
            poseTattoo.add(debugBg);
          }

          let targetPos = ndc.clone();
          let forearmLen = 0.2;
          if (elbow && wrist) {
            const elbowWorld = landmarkToWorld(elbow, elbow, wrist);
            const wristWorld = landmarkToWorld(wrist, elbow, wrist);
            forearmLen = elbowWorld.distanceTo(wristWorld);
            targetPos = elbowWorld.clone().add(wristWorld).multiplyScalar(0.5);
          }

          if (!lastPosePosition) lastPosePosition = targetPos.clone();
          else lastPosePosition.lerp(targetPos, SMOOTH);

          if (poseTattoo && lastPosePosition) {
            poseTattoo.position.copy(lastPosePosition);
            const aspect = tattooAspect || 1;
            const height = THREE.MathUtils.clamp(forearmLen * heightMultiplier, heightMin, heightMax);
            const width = height * aspect;
            poseTattoo.scale.set(width, height, 1);
            if (elbow && wrist) orientPlaneAlongForearm(poseTattoo, wrist, elbow);
            else if (camera) poseTattoo.lookAt(camera.position);
          }
          if (poseReticle && lastPosePosition) {
            poseReticle.position.copy(lastPosePosition);
            poseReticle.lookAt(camera.position);
            poseReticle.visible = true;
          }
        })
        poseTrackingStarted = true;
      }
    } catch (e) { console.warn('Unable to start/restart pose tracking:', e) }

    const lockTattoo = () => {
      if (!tattooLocked && poseTattoo) {
        lockedPosition = { x: poseTattoo.position.x, y: poseTattoo.position.y, z: poseTattoo.position.z };
        lockedQuaternion = poseTattoo.quaternion.clone();
        tattooLocked = true;
        if (poseReticle) poseReticle.visible = false;
        animateMaterialOpacity(poseTattoo.material, LOCKED_OPACITY, 300);
        info.textContent = 'Tattoo verrouillé !';
      }
    }

    // On attache les events au container/renderer
    renderer.domElement.style.pointerEvents = 'auto';
    renderer.domElement.addEventListener('click', lockTattoo);
    renderer.domElement.addEventListener('touchend', (e) => { e.preventDefault(); lockTattoo(); }, { passive: false });

    startButton.style.display = 'none'
    switchCameraButton.style.display = 'block'
    info.textContent = 'Tapez pour placer un tattoo'

    if (!renderer.domElement.hasAttribute('data-initialized')) {
      renderer.setClearColor(0x000000, 0); // Transparent
      camera.position.z = 3
      renderer.domElement.setAttribute('data-initialized', 'true')
      renderer.setAnimationLoop(() => { renderer.render(scene, camera); });
    }
  } catch (error: any) {
    info.textContent = 'Erreur caméra : ' + error.message;
    startButton.style.display = 'block';
    startButton.textContent = 'Réessayer';
  }
}

function startAR() {
  const sessionInit = { requiredFeatures: ['hit-test'], optionalFeatures: ['dom-overlay'], domOverlay: { root: document.body } };
  (navigator as any).xr.requestSession('immersive-ar', sessionInit).then(onSessionStarted)
}

function onSessionStarted(session: XRSession) {
  session.addEventListener('end', onSessionEnded)
  renderer.xr.setSession(session)
  startButton.style.display = 'none'
  info.textContent = 'Tapez pour placer un tattoo'
  session.addEventListener('select', onSelect)
  renderer.xr.setReferenceSpaceType('local')
  renderer.setAnimationLoop(render)
}

function onSessionEnded() {
  hitTestSourceRequested = false; hitTestSource = null;
  startButton.style.display = 'block'; info.textContent = 'Session AR terminée';
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

function onSelect() {
  if (reticle.visible) {
    const now = performance.now();
    if (!lastArmDetectedAt || (now - lastArmDetectedAt) > ALLOW_PLACE_AFTER_ARM_MS) {
      if (info) { info.textContent = 'Placement autorisé uniquement quand un bras est détecté'; setTimeout(() => { if (info) info.textContent = 'Tapez pour placer un tattoo' }, 1500); }
      return;
    }
    if (tattooTexture) {
      tattooTexture.wrapS = THREE.ClampToEdgeWrapping; tattooTexture.wrapT = THREE.ClampToEdgeWrapping;
      tattooTexture.repeat.set(1, 1); tattooTexture.offset.set(0, 0);
      tattooTexture.center.set(0.5, 0.5); tattooTexture.rotation = 0; tattooTexture.needsUpdate = true;
    }
    const aspect = tattooAspect || 1;
    let arHeight = 0.2;
    if (lastArmDetail && lastArmDetail.landmarks) {
      const la = lastArmDetail.landmarks;
      const laElbow = la[14] || la[13]; const laWrist = la[16] || la[15];
      if (laElbow && laWrist) {
        const elbowWorld = landmarkToWorld(laElbow, laElbow, laWrist);
        const wristWorld = landmarkToWorld(laWrist, laElbow, laWrist);
        const forearmLen = elbowWorld.distanceTo(wristWorld);
        arHeight = THREE.MathUtils.clamp(forearmLen * heightMultiplier, heightMin, heightMax);
      }
    }
    const tattooGeometry = new THREE.PlaneGeometry(arHeight * aspect, arHeight)
    const tattooMaterial = new THREE.MeshBasicMaterial({ map: tattooTexture, transparent: true, side: THREE.DoubleSide, alphaTest: alphaTestVal, premultipliedAlpha: false })
    const tattoo = new THREE.Mesh(tattooGeometry, tattooMaterial)
    if (lastArmDetail && lastArmDetail.landmarks && camera) {
      const la = lastArmDetail.landmarks;
      const laElbow = la[14] || la[13]; const laWrist = la[16] || la[15];
      if (laElbow && laWrist) {
        const elbowWorld = landmarkToWorld(laElbow, laElbow, laWrist);
        const wristWorld = landmarkToWorld(laWrist, laElbow, laWrist);
        const mid = elbowWorld.clone().add(wristWorld).multiplyScalar(0.5);
        tattoo.position.copy(mid); tattoo.scale.set(arHeight * aspect, arHeight, 1);
        orientPlaneAlongForearm(tattoo, laWrist, laElbow);
        animateScale(tattoo, new THREE.Vector3(arHeight * aspect, arHeight, 1));
      } else {
        const position = new THREE.Vector3(); position.setFromMatrixPosition(reticle.matrix);
        tattoo.position.copy(position); tattoo.lookAt(camera.position);
        animateScale(tattoo, new THREE.Vector3(arHeight * aspect, arHeight, 1));
      }
    } else {
      tattoo.position.setFromMatrixPosition(reticle.matrix);
      if (camera) tattoo.lookAt(camera.position);
      animateScale(tattoo, new THREE.Vector3(arHeight * aspect, arHeight, 1));
    }
    scene.add(tattoo); tattoo.scale.set(0.01, 0.01, 0.01); animateScale(tattoo);
  }
}

function animateScale(mesh: THREE.Mesh, target?: THREE.Vector3) {
  const duration = 400; const startTime = Date.now();
  const start = mesh.scale.clone(); const end = target ? target.clone() : new THREE.Vector3(1, 1, 1);
  function animate() {
    const elapsed = Date.now() - startTime; const t = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - t, 2); const cur = start.clone().lerp(end, eased);
    mesh.scale.set(cur.x, cur.y, cur.z);
    if (t < 1) requestAnimationFrame(animate);
  }
  animate();
}

function animateMaterialOpacity(material: THREE.Material | THREE.Material[] | null, to: number, duration = 300) {
  if (!material) return;
  const mats = Array.isArray(material) ? material : [material];
  mats.forEach((m) => {
    const mat = m as THREE.MeshBasicMaterial;
    if (typeof (mat as any).opacity !== 'number') return;
    const start = (mat.opacity !== undefined) ? mat.opacity : 1;
    const delta = to - start; const startTime = Date.now();
    function step() {
      const elapsed = Date.now() - startTime; const t = Math.min(elapsed / duration, 1);
      mat.opacity = start + delta * t; mat.needsUpdate = true;
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
        if (hitTestRequest) hitTestRequest.then((source) => { hitTestSource = source })
      }).catch(err => console.error('Hit test error:', err))
      hitTestSourceRequested = true
    }
    if (hitTestSource && referenceSpace) {
      const hitTestResults = frame.getHitTestResults(hitTestSource)
      if (hitTestResults.length > 0) {
        const hit = hitTestResults[0]; const pose = hit.getPose(referenceSpace);
        if (pose) { reticle.visible = true; reticle.matrix.fromArray(pose.transform.matrix); }
      } else { reticle.visible = false }
    }
  }
  renderer.render(scene, camera)
}

// =============================================================================
// LIFECYCLE VUE
// =============================================================================

onMounted(() => {
  if (switchCameraButton) {
    switchCameraButton.addEventListener('click', (e) => {
      e.preventDefault(); e.stopPropagation();
      const newFacingMode = currentFacingMode === 'environment' ? 'user' : 'environment';
      startCameraMode(newFacingMode);
    })
  }
  init();
});

onBeforeUnmount(() => {
  if (currentStream) currentStream.getTracks().forEach(t => t.stop());
  if (renderer) { renderer.setAnimationLoop(null); renderer.dispose(); }
  if (stopPoseTracking) stopPoseTracking();

  window.removeEventListener('resize', onWindowResize);
  window.removeEventListener('pose:landmark', onPoseLandmark);
  window.removeEventListener('pose:arm', onPoseArm);

  const controlsPanel = document.getElementById('controls-panel');
  if (controlsPanel) controlsPanel.remove();
  const cameraPanel = document.getElementById('camera-select-panel');
  if (cameraPanel) cameraPanel.remove();

  // NETTOYAGE CRITIQUE : Suppression de la vidéo du body
  if (videoElement) {
    videoElement.remove();
    videoElement = null;
  }
});
</script>

<style scoped>
.ar-wrapper {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: transparent; /* Fond transparent pour laisser passer la vidéo si placée derrière */
}

/* Le conteneur 3D */
#container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2; /* IMPORTANT : Au-dessus de la vidéo */
}

#info {
  position: absolute;
  top: 10px;
  width: 100%;
  text-align: center;
  z-index: 100; /* Interface tout devant */
  color: white;
  pointer-events: none;
  font-family: sans-serif;
  text-shadow: 1px 1px 2px black;
}

.actions {
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
  z-index: 100;
  pointer-events: none;
}

.actions button {
  pointer-events: auto;
  padding: 12px 24px;
  background: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  margin: 0 10px;
  cursor: pointer;
}
</style>