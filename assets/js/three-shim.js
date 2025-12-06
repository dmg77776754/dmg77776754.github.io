// three-shim.js — loads ES module build and exposes globals for legacy code
import * as THREE from 'three';
import { OrbitControls } from '/node_modules/three/examples/jsm/controls/OrbitControls.js';

// Expose global namespace expected by older non-module scripts
window.THREE = THREE;
window.OrbitControls = OrbitControls;
if (!THREE.OrbitControls) THREE.OrbitControls = OrbitControls;

// Also expose named exports on THREE for convenience (shallow attach)
for (const k of Object.keys(THREE)) {
  if (!(k in window.THREE)) window.THREE[k] = THREE[k];
}

console.log('three-shim: THREE and OrbitControls initialized from /node_modules');
