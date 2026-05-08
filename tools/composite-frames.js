// Composite each FG frame over its matching BG frame and write a single
// flattened WebP to v2/composite/. Lossy q85 — these are motion frames
// playing at ~13ms per frame on screen, well below the threshold where
// the eye picks up compression artifacts.
//
// Run from the tools/ directory:
//   node composite-frames.js          // skip frames already composited
//   node composite-frames.js --force  // re-encode every frame

import sharp from 'sharp';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');
const V2_DIR = path.join(PROJECT_ROOT, 'HTML_assets', 'Vertical Altitude Experience', 'v2');
const BG_DIR = path.join(V2_DIR, 'transition_bg');
const FG_DIR = path.join(V2_DIR, 'transition_fg');
const OUT_DIR = path.join(V2_DIR, 'composite');

const force = process.argv.includes('--force');

async function fileSize(p) {
  try { return (await fs.stat(p)).size; } catch { return null; }
}

async function discoverFrames() {
  // Match the actual on-disk naming: transition_bg_0001.webp .. transition_bg_NNNN.webp
  const bgFiles = (await fs.readdir(BG_DIR))
    .filter(f => /^transition_bg_(\d+)\.webp$/i.test(f))
    .sort();
  return bgFiles.map(f => f.match(/^transition_bg_(\d+)\.webp$/i)[1]);
}

async function compositeOne(num) {
  const bg = path.join(BG_DIR, `transition_bg_${num}.webp`);
  const fg = path.join(FG_DIR, `transition_fg_${num}.webp`);
  const out = path.join(OUT_DIR, `transition_${num}.webp`);

  const bgSize = await fileSize(bg);
  const fgSize = await fileSize(fg);
  if (bgSize == null || fgSize == null) {
    console.log(`  SKIP  ${num} — missing ${bgSize == null ? 'BG' : 'FG'}`);
    return { skipped: true };
  }

  const existing = await fileSize(out);
  if (existing != null && !force) {
    return { skipped: true, alreadyDone: true, srcTotal: bgSize + fgSize, outSize: existing };
  }

  await sharp(bg)
    .composite([{ input: fg }])
    .flatten({ background: '#000000' })  // ensure no residual alpha
    .webp({ quality: 85, effort: 6 })
    .toFile(out);

  const outSize = await fileSize(out);
  return { skipped: false, srcTotal: bgSize + fgSize, outSize };
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  const frames = await discoverFrames();
  console.log(`BG dir:   ${BG_DIR}`);
  console.log(`FG dir:   ${FG_DIR}`);
  console.log(`Out dir:  ${OUT_DIR}`);
  console.log(`Frames:   ${frames.length}`);
  console.log(`Mode:     ${force ? 'force re-encode' : 'skip existing'}\n`);

  let totalSrc = 0, totalOut = 0, written = 0, skipped = 0;
  for (const num of frames) {
    const r = await compositeOne(num);
    if (r.skipped) {
      if (r.alreadyDone) {
        skipped++;
        totalSrc += r.srcTotal;
        totalOut += r.outSize;
      }
      continue;
    }
    written++;
    totalSrc += r.srcTotal;
    totalOut += r.outSize;
    if (written % 10 === 0) {
      console.log(`  ... ${written} frames written`);
    }
  }

  console.log(`\nWritten: ${written}   Skipped (already done): ${skipped}`);
  if (totalSrc > 0) {
    const pct = ((1 - totalOut / totalSrc) * 100).toFixed(1);
    console.log(`Bytes:   ${(totalSrc/1024/1024).toFixed(2)} MB (FG+BG) → ${(totalOut/1024/1024).toFixed(2)} MB (composite)   -${pct}%`);
  }
  console.log('Done.');
}

main().catch(err => { console.error(err); process.exit(1); });
