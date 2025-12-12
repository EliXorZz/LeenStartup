// MediaPipe Pose integration for arm tracking
// This file will handle pose detection and provide keypoints for the main AR logic

import { Pose, POSE_LANDMARKS } from '@mediapipe/pose';

export let stopPoseTracking: (() => void) | null = null;

export async function setupPoseTracking(video: HTMLVideoElement, onPose: (landmarks: any) => void) {
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
  // Debounce / stability counters to avoid false positives when camera points to the floor
  let rightArmStableCount = 0;
  let leftArmStableCount = 0;
  const VISIBILITY_THRESHOLD = 0.6; // per-landmark visibility required to consider it "visible"
  const ARM_VISIBILITY_AVG = 0.65; // average visibility across shoulder+elbow+wrist to consider an arm present
  const ARM_CONSEC_FRAMES = 3; // number of consecutive frames meeting criteria before emitting pose:arm

  pose.onResults((results) => {
    if (results.poseLandmarks) {
      onPose(results.poseLandmarks);

      const landmarks = results.poseLandmarks as Array<any>;
      const visible = (pt: any) => pt && (pt.visibility === undefined || pt.visibility >= VISIBILITY_THRESHOLD);

      // Right side landmarks (MediaPipe indices)
      const rightShoulder = landmarks[12];
      const rightElbow = landmarks[14];
      const rightWrist = landmarks[16];

      // Left side landmarks
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

      // Emit per-landmark events only when above visibility threshold
      if (visible(rightShoulder)) dispatchLandmark('right_shoulder', 12, rightShoulder);
      if (visible(rightElbow)) dispatchLandmark('right_elbow', 14, rightElbow);
      if (visible(rightWrist)) dispatchLandmark('right_wrist', 16, rightWrist);

      if (visible(leftShoulder)) dispatchLandmark('left_shoulder', 11, leftShoulder);
      if (visible(leftElbow)) dispatchLandmark('left_elbow', 13, leftElbow);
      if (visible(leftWrist)) dispatchLandmark('left_wrist', 15, leftWrist);

      // Compute average visibilities for arms
      const avgVis = (a: any, b: any, c: any) => {
        const va = (a && typeof a.visibility === 'number') ? a.visibility : 0;
        const vb = (b && typeof b.visibility === 'number') ? b.visibility : 0;
        const vc = (c && typeof c.visibility === 'number') ? c.visibility : 0;
        return (va + vb + vc) / 3;
      };

      // Right arm stability check
      if (rightShoulder && rightElbow && rightWrist) {
        const rightAvg = avgVis(rightShoulder, rightElbow, rightWrist);
        if (rightAvg >= ARM_VISIBILITY_AVG) {
          rightArmStableCount++;
        } else {
          rightArmStableCount = 0;
        }
        if (rightArmStableCount >= ARM_CONSEC_FRAMES) {
          window.dispatchEvent(new CustomEvent('pose:arm', { detail: { side: 'right', landmarks: { shoulder: rightShoulder, elbow: rightElbow, wrist: rightWrist } } }));
          // prevent repeated notifications every frame by resetting counter
          rightArmStableCount = 0;
        }
      } else {
        rightArmStableCount = 0;
      }

      // Left arm stability check
      if (leftShoulder && leftElbow && leftWrist) {
        const leftAvg = avgVis(leftShoulder, leftElbow, leftWrist);
        if (leftAvg >= ARM_VISIBILITY_AVG) {
          leftArmStableCount++;
        } else {
          leftArmStableCount = 0;
        }
        if (leftArmStableCount >= ARM_CONSEC_FRAMES) {
          window.dispatchEvent(new CustomEvent('pose:arm', { detail: { side: 'left', landmarks: { shoulder: leftShoulder, elbow: leftElbow, wrist: leftWrist } } }));
          leftArmStableCount = 0;
        }
      } else {
        leftArmStableCount = 0;
      }
    }
  });

  let running = true;
  let rafId: number | null = null;

  stopPoseTracking = () => {
    running = false;
    if (rafId !== null) cancelAnimationFrame(rafId);
    try {
      (pose as any).close?.();
    } catch (e) {
      // ignore
    }
    stopPoseTracking = null;
  };

  async function detect() {
    if (!running) return;
    try {
      await pose.send({ image: video });
    } catch (e) {
      console.warn('pose.send error', e);
    }
    rafId = requestAnimationFrame(detect) as unknown as number;
  }
  detect();
}
