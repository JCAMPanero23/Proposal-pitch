/* Convert the largest pitch-deck PNGs to WebP — slashes total image
   weight by ~80% so Android Chrome doesn't blow its image-memory budget
   around slide 6.

   Skips re-encode if the .webp output already exists with a newer
   mtime than the source.                                                */

'use strict';

const path  = require('path');
const fs    = require('fs');
const sharp = require('sharp');

const ROOT     = path.resolve(__dirname, '..');
const ASSETS   = path.join(ROOT, 'HTML_assets');

// Opaque hero/scene PNGs — quality 82 is visually indistinguishable from
// the source at on-screen sizes.
const opaque = [
  'hero-aerial-night.png',
  'DroneShot_comp.Theme_A.png',
  'DroneShot_comp.Theme_B.png',
  'DroneShot_comp.Theme_C.png',
  'TheCanvasBehindTheShow.png',
];

// Alpha-channel renders — quality 88 + alphaQuality 90 preserves the
// soft edges on the tile render.
const alpha = [
  'investment-tier-high.png',
];

function needsBuild(src, dst) {
  if (!fs.existsSync(dst)) return true;
  return fs.statSync(src).mtimeMs > fs.statSync(dst).mtimeMs;
}

(async () => {
  let saved = 0, ran = 0, skipped = 0;
  for (const f of opaque) {
    const src = path.join(ASSETS, f);
    const dst = src.replace(/\.png$/i, '.webp');
    if (!needsBuild(src, dst)) { skipped++; continue; }
    await sharp(src).webp({ quality: 82, effort: 6 }).toFile(dst);
    const sBefore = fs.statSync(src).size, sAfter = fs.statSync(dst).size;
    saved += sBefore - sAfter; ran++;
    console.log(f.padEnd(38), (sBefore/1024).toFixed(0)+'K → '+(sAfter/1024).toFixed(0)+'K');
  }
  for (const f of alpha) {
    const src = path.join(ASSETS, f);
    const dst = src.replace(/\.png$/i, '.webp');
    if (!needsBuild(src, dst)) { skipped++; continue; }
    await sharp(src).webp({ quality: 88, alphaQuality: 90, effort: 6 }).toFile(dst);
    const sBefore = fs.statSync(src).size, sAfter = fs.statSync(dst).size;
    saved += sBefore - sAfter; ran++;
    console.log(f.padEnd(38), (sBefore/1024).toFixed(0)+'K → '+(sAfter/1024).toFixed(0)+'K');
  }
  console.log('\n' + ran + ' encoded, ' + skipped + ' up-to-date · '
              + (saved/1024/1024).toFixed(1) + ' MB saved');
})();
