# 3D Features Setup

Your `index.html` now includes two interactive 3D features:

## Features

### 1. **Легенда** (Legend Generator)
- Random story/legend generator with Russian colloquial phrases
- Floating button (bottom-right corner)
- Copy-to-clipboard functionality
- Confetti animation on generation

### 2. **ЛАДА** (3D Lada Granta Car)
- Interactive 3D scene of a Lada Granta
- Rotate: Left-mouse drag
- Zoom: Mouse wheel or two-finger pinch
- Pan: Right-mouse drag or Ctrl+Left-mouse
- Fullscreen modal display

---

## How to Enable Local Three.js Files (Recommended)

To make the 3D features work **without depending on CDNs** (best for GitHub Pages and offline use):

### Option 1: Browser Download (Easiest)

1. Open `assets/js/SETUP.md` in this directory
2. Follow the step-by-step instructions to download `three.js` and `OrbitControls.js`
3. Save them to `assets/js/` folder
4. Done! The page will automatically use local files

### Option 2: Command Line

From PowerShell in this directory:

```powershell
$ProgressPreference = 'SilentlyContinue'
Invoke-WebRequest -Uri "https://cdn.jsdelivr.net/npm/three@0.181.2/build/three.js" -OutFile "assets/js/three.js" -UseBasicParsing
Invoke-WebRequest -Uri "https://cdn.jsdelivr.net/npm/three@0.181.2/examples/js/controls/OrbitControls.js" -OutFile "assets/js/OrbitControls.js" -UseBasicParsing
```

---

## How It Works

The page uses a smart loader (`ensureThree()`) that tries to load Three.js in this order:

1. **Local copy** `assets/js/three.js` or `assets/js/three.min.js`
2. **CDN fallback** (jsDelivr, unpkg, cdnjs)
3. **Error message** if all sources fail

Same process for OrbitControls.

---

## File Structure (After Setup)

```
c:\Users\1\Documents\cite\
├── index.html              (main page with 3D features)
├── assets/
│   └── js/
│       ├── three.js        ← Add this (from CDN)
│       ├── OrbitControls.js ← Add this (from CDN)
│       └── SETUP.md        (instructions)
├── README_3D.md           (this file)
└── ... (other files)
```

---

## Current Status

✅ **Code ready** — All 3D feature code is in `index.html`  
⏳ **Pending** — Local library files need to be downloaded to `assets/js/`  
✅ **CDN fallback enabled** — Will work even without local files (with internet)

---

## Testing

1. Open `index.html` in a browser
2. Look for "Легенда" (floating button) and "ЛАДА" buttons
3. Click to test the features
4. Press F12 to check browser console — should show no THREE errors

---

## For GitHub Pages

1. Add the local library files to `assets/js/`
2. Push to your GitHub repository
3. Enable GitHub Pages in repository settings
4. Your site will be served over HTTPS automatically
5. The 3D features will work without tracking-protection interference

---

**Last Updated:** December 6, 2025
