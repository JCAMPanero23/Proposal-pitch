// Convert state still PNGs at the Vertical Altitude Experience root into
// lossy WebP files in v2/states/. Lossy q90 because state stills hold on
// screen for ~7s — quality matters but full alpha isn't needed.
//
// Run from the tools/ directory:
//   node convert-states.js          // skip files already converted
//   node convert-states.js --force  // re-encode every file

import sharp from 'sharp';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');
const SRC_DIR = path.join(PROJECT_ROOT, 'HTML_assets', 'Vertical Altitude Experience');
const DEST_DIR = path.join(SRC_DIR, 'v2', 'states');

const force = process.argv.includes('--force');

const states = [
  'state_01_arrival.png',
  'state_02_boarding_ascent.png',
  'state_03_peak_300m.png',
  'state_04_descent.png',
  'state_05_main_show_25m.png',
  'state_06_exit.png',
];

async function fileSize(p) {
  try { return (await fs.stat(p)).size; } catch { return null; }
}

async function convertOne(srcName) {
  const src = path.join(SRC_DIR, srcName);
  const destName = srcName.replace(/\.png$/i, '.webp');
  const dest = path.join(DEST_DIR, destName);

  const srcSize = await fileSize(src);
  if (srcSize == null) {
    console.log(`  SKIP  ${srcName} — source missing`);
    return;
  }

  const existing = await fileSize(dest);
  if (existing != null && !force) {
    console.log(`  SKIP  ${destName} — already exists (use --force to re-encode)`);
    return;
  }

  await sharp(src)
    .flatten({ background: '#000000' })  // drop alpha if present
    .webp({ quality: 90, effort: 6 })
    .toFile(dest);

  const outSize = await fileSize(dest);
  const pct = ((1 - outSize / srcSize) * 100).toFixed(1);
  console.log(`  OK    ${destName}  (${(srcSize/1024).toFixed(0)} KB → ${(outSize/1024).toFixed(0)} KB, -${pct}%)`);
}

async function main() {
  await fs.mkdir(DEST_DIR, { recursive: true });
  console.log(`Source: ${SRC_DIR}`);
  console.log(`Dest:   ${DEST_DIR}`);
  console.log(`Mode:   ${force ? 'force re-encode' : 'skip existing'}\n`);

  for (const name of states) {
    await convertOne(name);
  }
  console.log('\nDone.');
}

main().catch(err => { console.error(err); process.exit(1); });
