# Local Three.js Setup Guide

This directory should contain two library files for the 3D features. The page `index.html` is configured to use local copies when available, with automatic CDN fallback.

## Files To Add

### 1. `three.js` (three.js version 0.181.2 — unminified version)
- **Use the unminified version** (easier to work with if needed)
- **File name:** `three.js` 
- **Download links (try these in order):**
  - **Option A (jsDelivr):** https://cdn.jsdelivr.net/npm/three@0.181.2/build/three.js
  - **Option B (unpkg):** https://unpkg.com/three@0.181.2/build/three.js
  - **Option C (GitHub):** https://raw.githubusercontent.com/mrdoob/three.js/r181/build/three.js
  
- **How to download:**
  1. Try **Option A** first in your browser
  2. If that doesn't work, try **Option B**
  3. If that fails, try **Option C** (GitHub direct)
  4. Press `Ctrl+S` (Save As)
  5. Save as `three.js` in this folder (`assets/js/`)

**Size:** ~1.5 MB

---

### 2. `OrbitControls.js` (for three.js v0.181.2)
- **File name:** `OrbitControls.js`
- **Download links (try these in order):**
  - **Option A (jsDelivr):** https://cdn.jsdelivr.net/npm/three@0.181.2/examples/js/controls/OrbitControls.js
  - **Option B (unpkg):** https://unpkg.com/three@0.181.2/examples/js/controls/OrbitControls.js
  - **Option C (GitHub):** https://raw.githubusercontent.com/mrdoob/three.js/r181/examples/js/controls/OrbitControls.js

- **How to download:**
  1. Try **Option A** first in your browser
  2. If that doesn't work, try **Option B**
  3. If that fails, try **Option C** (GitHub direct)
  4. Press `Ctrl+S` (Save As)
  5. Save as `OrbitControls.js` in this folder (`assets/js/`)

**Size:** ~40-50 KB

---

## Directory Structure

After adding the files, your structure should be:
```
c:\Users\1\Documents\cite\
├── index.html
├── assets/
│   └── js/
│       ├── three.js                 ← Add this
│       ├── OrbitControls.js          ← Add this
│       └── SETUP.md (this file)
└── ... (other files)
```

---

## How It Works

The page loader (`ensureThree()` function in `index.html`) attempts to load in this order:

1. **Try local copy:** `assets/js/three.js`
2. **Try CDN:** `https://cdn.jsdelivr.net/npm/three@0.181.2/build/three.js`
3. **Show error message** if all sources fail

Same process for `OrbitControls.js`.

---

## Testing

Once the files are in place:
1. Open `index.html` in your browser
2. Click the "ЛАДА" button to see the 3D car
3. The browser console (F12) should show no errors about "THREE is not defined"
4. The 3D scene should render smoothly
5. You can rotate, zoom, and pan the car using mouse/touch

---

## Manual Download Steps

### Step-by-step for Windows:

1. **Open these URLs in your browser:**
   - https://cdn.jsdelivr.net/npm/three@0.181.2/build/three.js
   - https://cdn.jsdelivr.net/npm/three@0.181.2/examples/js/controls/OrbitControls.js

2. **For each URL:**
   - Right-click on the page → "Save As..."
   - Navigate to `C:\Users\1\Documents\cite\assets\js\`
   - Save with the exact filename shown above

3. **Verify:**
   - Open `C:\Users\1\Documents\cite\assets\js\` in File Explorer
   - You should see `three.js` and `OrbitControls.js`

---

## If Downloads Fail

If the CDN links don't work or your browser blocks them:
- The page will automatically fall back to loading from CDNs
- The 3D features will still work (3D Legend and 3D Lada buttons)
- Behavior is identical to users with tracking protection disabled

---

**Generated:** December 6, 2025  
**Last Updated:** When local files are not available (fallback to CDN enabled)
