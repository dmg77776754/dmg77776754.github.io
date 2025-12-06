// OrbitControls-loader.js — loads OrbitControls.js and exposes window.OrbitControls
(async function() {
  if (window.OrbitControls) return; // already loaded
  if (!window.THREE) {
    console.warn('OrbitControls loader: THREE not available yet');
    return;
  }
  
  try {
    // Fetch the OrbitControls.js file (ES module)
    const response = await fetch('/assets/js/OrbitControls.js');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    
    const codeText = await response.text();
    
    // Create a mock module environment for ES module to CommonJS conversion
    const module = { exports: {} };
    
    // Replace 'export' statements with 'module.exports'
    // This is a simple regex replacement for 'export { X, Y, Z }' -> assign to module.exports
    const convertedCode = codeText
      .replace(/export\s*{\s*([^}]+)\s*}\s*;?/g, (match, exports) => {
        // Convert "export { X, Y, Z }" to "module.exports = { X, Y, Z };"
        return `module.exports = { ${exports} };`;
      })
      .replace(/export\s+(?:default\s+)?(?:class|function|const|let|var)\s+(\w+)/g, (match, name) => {
        // Convert "export class X {}" etc to just "class X {}" and then assign
        return match.replace('export ', '');
      });
    
    // Execute the code with module context
    eval(
      `(function(module, exports, THREE, window) {
        'use strict';
        ${convertedCode}
      })(module, module.exports, window.THREE, window);`
    );
    
    // Expose OrbitControls globally
    window.OrbitControls = module.exports.OrbitControls || module.exports;
    console.log('✓ OrbitControls loaded successfully');
  } catch (err) {
    console.error('✗ Failed to load OrbitControls:', err);
  }
})();
