// Convert overlay PNGs at the Vertical Altitude Experience root into lossless
// WebP files in v2/overlays/. Lossless preserves crisp text edges through the
// slow fade-in; alpha is preserved automatically.
//
// Run from the tools/ directory:
//   node convert-overlays.js          // skip files already converted
//   node convert-overlays.js --force  // re-encode every file

import sharp from 'sharp';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');
const SRC_DIR = path.join(PROJECT_ROOT, 'HTML_assets', 'Vertical Altitude Experience');
const DEST_DIR = path.join(SRC_DIR, 'v2', 'overlays');

const force = process.argv.includes('--force');

const overlays = [
  'state_01_arrival_Overlay.png',
  'state_02_boarding_ascent_Overlay.png',
  'state_03_peak_300m_Overlay.png',
  'state_04_descent_Overlay.png',
  'state_05_main_show_25m_Overlay.png',
  'state_06_exit_Overlay.png',
];

async function fileSize(p) {
  try { return (await fs.stat(p)).size; } catch { return null; }
}

async function convertOne(srcName) {
  const src = path.join(SRC_DIR, srcName);
  const destName = srcName.replace(/_Overlay\.png$/i, '_overlay.webp');
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
    .webp({ lossless: true, effort: 6 })
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

  for (const name of overlays) {
    await convertOne(name);
  }
  console.log('\nDone.');
}

main().catch(err => { console.error(err); process.exit(1); });
