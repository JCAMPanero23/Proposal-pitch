/* Encode slide-3 transition WebP sequences into per-segment MP4 clips.
   ─────────────────────────────────────────────────────────────────────
   Source: HTML_assets/Vertical Altitude Experience/v2/composite/transition_0001..0080.webp
   Output: HTML_assets/Vertical Altitude Experience/v2/transitions_mp4/transition_N.mp4

   5 segments × 16 frames each. Timing matches the existing 220ms/frame
   step (16 × 220ms = 3.52s) by encoding the input image sequence at
   ~4.545 fps. H.264 Main profile + yuv420p + faststart = broad iOS
   Safari compatibility and start-on-first-byte playback.                */

'use strict';

const path     = require('path');
const fs       = require('fs');
const { spawnSync } = require('child_process');
const ffmpeg  = require('ffmpeg-static');

const ROOT     = path.resolve(__dirname, '..');
const SRC_DIR  = path.join(ROOT, 'HTML_assets', 'Vertical Altitude Experience', 'v2', 'composite');
const OUT_DIR  = path.join(ROOT, 'HTML_assets', 'Vertical Altitude Experience', 'v2', 'transitions_mp4');

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

// (start_frame, label) — matches the JS `transitions` array in index.html
const segments = [
  { idx: 0, start:  1, label: 'arrival_to_boarding' },
  { idx: 1, start: 17, label: 'boarding_to_peak'    },
  { idx: 2, start: 33, label: 'peak_to_descent'     },
  { idx: 3, start: 49, label: 'descent_to_show'     },
  { idx: 4, start: 65, label: 'show_to_exit'        },
];

const FRAMES_PER_SEG = 16;
const FRAME_MS       = 220;
const FPS            = (1000 / FRAME_MS).toFixed(6); // 4.545454

for (const seg of segments) {
  const outFile = path.join(OUT_DIR, `transition_${seg.idx}_${seg.label}.mp4`);
  const args = [
    '-y',
    '-framerate', FPS,
    '-start_number', String(seg.start),
    '-i', path.join(SRC_DIR, 'transition_%04d.webp'),
    '-frames:v', String(FRAMES_PER_SEG),
    '-c:v',       'libx264',
    '-profile:v', 'main',
    '-level',     '3.1',
    '-preset',    'slower',
    '-tune',      'stillimage',
    '-crf',       '24',
    '-pix_fmt',   'yuv420p',
    '-movflags',  '+faststart',
    '-an',
    outFile,
  ];
  process.stdout.write(`[${seg.idx}] ${seg.label} … `);
  const r = spawnSync(ffmpeg, args, { stdio: ['ignore', 'ignore', 'pipe'] });
  if (r.status !== 0) {
    process.stdout.write('FAILED\n');
    process.stderr.write(r.stderr ? r.stderr.toString() : '(no stderr)\n');
    process.exit(r.status || 1);
  }
  const size = fs.statSync(outFile).size;
  process.stdout.write(`ok (${(size / 1024).toFixed(0)} KB)\n`);
}

console.log('\nAll transitions encoded →', path.relative(ROOT, OUT_DIR));
