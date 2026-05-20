/* Re-compress the slide-3 LED-glow overlay WebPs. They were originally
   exported at the source PNG resolution (some 1402×1122, others
   1080×864) at high quality — 1.1-1.7 MB each, ~7.9 MB total. The
   overlays render inside an .exp-viewer that's at most ~960px wide on
   desktop and much smaller on mobile, so capping at 1080×864 and
   dropping quality to 70 is visually identical on-screen and shrinks
   each file by 70-85%. Big win for Android image-memory pressure.       */

'use strict';

const path  = require('path');
const fs    = require('fs');
const sharp = require('sharp');

const ROOT     = path.resolve(__dirname, '..');
const DIR      = path.join(ROOT, 'HTML_assets', 'Vertical Altitude Experience', 'v2', 'overlays');
const BACKUP   = path.join(DIR, '_original_backup');

const files = [
  'state_01_arrival_overlay.webp',
  'state_02_boarding_ascent_overlay.webp',
  'state_03_peak_300m_overlay.webp',
  'state_04_descent_overlay.webp',
  'state_05_main_show_25m_overlay.webp',
  'state_06_exit_overlay.webp',
];

if (!fs.existsSync(BACKUP)) fs.mkdirSync(BACKUP, { recursive: true });

(async () => {
  let saved = 0;
  for (const f of files) {
    const src    = path.join(DIR, f);
    const bak    = path.join(BACKUP, f);
    if (!fs.existsSync(bak)) fs.copyFileSync(src, bak);

    const sBefore = fs.statSync(bak).size;
    const meta    = await sharp(bak).metadata();
    const hasAlpha = !!meta.hasAlpha;

    await sharp(bak)
      .resize({ width: 1080, height: 864, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: hasAlpha ? 78 : 70, alphaQuality: 80, effort: 6 })
      .toFile(src + '.tmp');
    fs.renameSync(src + '.tmp', src);

    const sAfter = fs.statSync(src).size;
    saved += sBefore - sAfter;
    console.log(f.padEnd(46), (sBefore/1024).toFixed(0)+'K → '+(sAfter/1024).toFixed(0)+'K');
  }
  console.log('\n' + (saved/1024/1024).toFixed(2) + ' MB saved');
})();
