# Canvas From The Sky — Project Notes

A pitch package for **Canvas From The Sky**, an Abu Dhabi tethered-balloon attraction with a programmable LED light-garden ring around the balloon platform. Investor materials live in this directory; there is no application codebase.

## What's in here

### Live investor deliverables
- **[index.html](index.html)** — the live single-file pitch deck (Playfair Display + DM Sans, gold `#C9A96E` on dark `#0A0A0F`). All HTML/CSS/inline JS in one file. Most edits target this file.
- **[pitch-pdf.html](pitch-pdf.html)** — A4 investor brochure, paginated for PDF export.
- **[financial-model-revision-150m-v2.docx](financial-model-revision-150m-v2.docx)** + **[.pdf](financial-model-revision-150m-v2.pdf)** — supplementary calculation memo executives read alongside the deck. Documents every operating-assumption change vs. the blueprint and shows the math behind each headline number. (The `-v2` suffix matches PitchDeck v2 — it is a filename version, not a financial-model revision number.)

### Active source-of-truth
- **[led-field-lights-design.md](led-field-lights-design.md)** — current LED hardware spec (v7, 600mm grid, 60m ring, locked 9-LED density, two investor tiers, researched 2026 prices, CEO decision matrix at top). **Source of truth** for hardware decisions; if a memory or pitch claim disagrees, this doc wins.
- **[pitch-blueprint.md](pitch-blueprint.md)** — the financial baseline the v2 memo's "Baseline (blueprint)" column references. Holds the original 300m / 30-guest / 41-min / AED 24.7M model.

### Tooling
- **[scripts/build_v2_docx.py](scripts/build_v2_docx.py)** — generator for the v2 docx. **Re-running overwrites manual Word layout polish** — edit the script, regenerate, then re-apply layout in Word and re-export the PDF.

### Asset folders
- **HTML_assets/** — pitch deck imagery (theme composites, vertical altitude experience states/overlays, drone shots).
- **assets/hdrs/, assets/materials/** — Blender HDRIs and materials for the 3D renders.
- **tools/** — image processing scripts and Node tooling.

### Archive
- **archive/** — superseded reference material (technical proposal PDF, original concept sketch, previous pitch text, PureRef mood board, Alibaba LED supplier links). Preserved for context; not part of the live pitch.

## Project conventions

- **Currency:** investor-facing budgets are quoted in **AED** with USD as a secondary reference. Working rate `1 USD = 3.6725 AED` (UAE dirham is dollar-pegged).
- **Locked LED design parameters** — do not silently revert to earlier values:
  - Grid unit: **600mm × 600mm** (the older 500mm / 100-stem concept is obsolete)
  - Ring: **60m outer diameter**, **24m inner clear circle** (12m radius), 18m active depth
  - Working unit count: **6,175 grid units** (gross 6,320 less 145 displaced by the 3m walkway)
  - Density is **LOCKED at 9-LED (3×3, 200mm pitch) → 55,575 LED nodes** (locked 28 April 2026; do not reintroduce 16-LED). Peak power ~28 kW.
  - Investor tiers are now **two tile-on-feet options** with identical LED electronics and 316SS adjustable feet:
    - **Low Tier:** 50mm GFRC tile with AR glass fiber reinforcement, cast-in adjustable feet, recommended flagship option
    - **High Tier:** 8mm 6061-T6 aluminum plate tile on 4× 316SS adjustable feet, lighter machined premium option
  - Historical framing options C/D/E1/E2 remain in the design doc for reference, but the current investor model is the High/Low tile tier structure above
  - The earlier bulky-pad E options (CIP pad, multi-cell precast/site-cast LWAC panels) were **dropped** April 27 2026 per CEO sketch
  - Stem heights: **400–600mm in 50mm steps** (locked April 27 2026; was 200–400mm) plus tulip head on top
  - Recommended flagship pairing: **Low Tier (50mm GFRC + 316SS adjustable feet + 9-LED) at AED ~14.5M mid** (USD ~3.95M, ~AED 2,348/module)
  - Premium tier: **High Tier (8mm aluminum plate + 316SS adjustable feet + 9-LED) at AED ~15.1M mid** (USD ~4.11M, ~AED 2,445/module)
  - **3m-wide** LED-mesh-under-glass walkway, ~52 sqm, from outer edge to balloon platform
- **Content cost tiers** (28 April 2026 addition for 5-show-per-night slate + continuous ambient): launch AED 1.5–4.7M one-time; seasonal refresh AED 350–900k × 4/yr; per event AED 180–580k each. Steady-state ~AED 5.3M gross/yr, ~AED 2.6M net after sponsor billing.
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
