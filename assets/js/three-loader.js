// three-loader.js — loads three.js via fetch and executes as CommonJS
// Returns a promise that resolves when THREE is ready

window.threeLoaderPromise = (async function() {
  if (window.THREE) return window.THREE; // already loaded
  
  try {
    // Fetch the three.js file (CommonJS build)
    const response = await fetch('/assets/js/three.js');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    
    const codeText = await response.text();
    
    // Create a mock CommonJS environment
    const moduleObj = { exports: {} };
    
    // Execute the code with proper CommonJS context
    eval(
      `(function(module, exports, require, __dirname, __filename) {
        'use strict';
        ${codeText}
      })(moduleObj, moduleObj.exports, function require(id) {
        throw new Error('require("' + id + '") not supported in browser');
      }, '/assets/js', 'three.js');`
    );
    
    // Expose THREE globally
    window.THREE = moduleObj.exports;
    console.log('✓ three.js loaded successfully');
    return window.THREE;
  } catch (err) {
    console.error('✗ Failed to load three.js:', err);
    throw err;
  }
})();
