# Canvas From The Sky — Project Notes

A pitch package for **Canvas From The Sky**, an Abu Dhabi tethered-balloon attraction with a programmable LED light-garden ring around the balloon platform. Investor materials live in this directory; there is no application codebase.

## What's in here

- **[index.html](index.html)** — single-file investor pitch deck (Playfair Display + DM Sans, gold `#C9A96E` on dark `#0A0A0F`). All HTML/CSS/inline JS in one file. This is the file most edits target.
- **[led-field-lights-design.md](led-field-lights-design.md)** — current LED hardware spec (v7, 600mm grid, 60m ring, 5 framing options, 2 density variants, researched 2026 prices, CEO decision matrix at top). **Source of truth** for hardware decisions; if a memory or pitch claim disagrees, this doc wins.
- **[Alibaba Led reference.txt](Alibaba%20Led%20reference.txt)** — supplier reference links for LED components.
- **slide-1.png … slide-6.png, slide-1_abudhabi.png** — pitch deck slide renders.
- **concept-board.jpg, Modular light LED.jpeg** — early mood/concept references.
- **led-block-info-image.png, led-block-info-image-v2.png** — diagram of the 600mm block / stem / tulip stack used inside the design doc.
- **LED sketch.png** — hand sketch of the 600mm block with transparent stems and swappable LED heads.
- **content image1.png, content image2.png, sample test_with randomness.png, tester.png** — content / aerial-canvas concept renders (e.g. Van Gogh "Starry Night" mapped to the ring).
- **Render sample/Guest basket view at 50m.png** — 3D render from the gondola at 50m altitude showing mapped content on the ring.
- **LED test*.blend / .blend1** — Blender working files for the LED ring 3D mock-ups.
- **Canvas from the sky.pur** — PureRef mood board (binary, 8 MB).
- **assets/hdrs/, assets/materials/** — Blender HDRIs and materials for the renders.

## Project conventions

- **Currency:** investor-facing budgets are quoted in **AED** with USD as a secondary reference. Working rate `1 USD = 3.6725 AED` (UAE dirham is dollar-pegged).
- **Locked LED design parameters** — do not silently revert to earlier values:
  - Grid unit: **600mm × 600mm** (the older 500mm / 100-stem concept is obsolete)
  - Ring: **60m outer diameter**, **24m inner clear circle** (12m radius), 18m active depth
  - Working unit count: **6,175 grid units** (gross 6,320 less 145 displaced by the 3m walkway)
  - Density is **under CEO review** — two variants on the table:
    - 16-LED (4×4, 150mm pitch) → 98,800 LED nodes total
    - 9-LED (3×3, 200mm pitch) → 55,575 LED nodes total
  - Framing is **under CEO review** — five options (C raised+blocks, D open frame, E1 CIP pad, E2 yard-precast LWAC, E3 site-cast LWAC)
  - Recommended flagship pairing: **E3 + 16-LED at AED ~20.4M mid** (USD ~5.5M)
  - Recommended pilot pairing: **D + 9-LED at AED ~13.8M mid** (USD ~3.8M)
  - **3m-wide** LED-mesh-under-glass walkway, ~52 sqm, from outer edge to balloon platform
- **Pitch tone:** the deck is a "first-time read" — never expose that copy is a revision. No "updated", "v2", "previously we said" language anywhere a reader sees.
- **Mobile layout:** the value-prop section has had specific mobile fixes (commit `16ce285`); when editing that section, check both desktop and mobile.

## Editing the pitch (`index.html`)

- Single file, no build step — open it in a browser to verify changes.
- Inline `<style>` and inline `<script>` only. No external JS framework.
- Keep the gold/dark palette and the Playfair (display) + DM Sans (body) pairing consistent.
- For UI changes, eyeball the result in a browser at desktop and mobile widths before reporting done — type/lint checks don't catch layout regressions.

## Memory & related context

The auto-memory system at `~/.claude/projects/d--Projects-SGU-Canvas-in-the-Sky/memory/` holds a condensed snapshot of locked LED hardware decisions. The full design doc here in the repo is authoritative; update memory when the design doc changes materially.

## Out of scope

- No tests, no package manager, no CI. Don't add a build pipeline unless asked.
- No external services or backend. The pitch is static HTML.
