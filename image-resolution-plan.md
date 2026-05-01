# Canvas From The Sky — Image Resolution & Orientation Plan
*Desktop optimisation notes for `index.html` · 30 April 2026*

---

## The Core Problem

The HTML uses `object-fit: cover` on all `<img>` elements, which fills the container without distortion but silently crops. This works well on mobile (narrow containers, usually portrait-friendly). On desktop it fails when:

1. A **portrait image** (taller than wide) is placed in a **landscape container** (wider than tall) — severe top/bottom crop, often losing the subject entirely.
2. A **background-image** hero has a focal point that lands directly behind overlaid text.
3. A **square image** is in a fixed-height rectangular slot — less severe but still loses the subject.

The fix is not to change the `object-fit` strategy — cover is correct. The fix is to set the right `object-position` per image so the crop preserves the subject.

---

## Priority 1 · Hero Background Image

| File | Dimensions | Container |
|---|---|---|
| `hero-aerial-night.png` | 1552 × 1013 px (landscape) | Full-bleed `background-image`, min-height ~85vh |

**Issue:** The Louvre Abu Dhabi dome sits at image centre (approximately 50% × 50%). The hero title text occupies roughly the top 40% of the container. On desktop the dome drifts directly behind the heading, making text harder to read and the composition cluttered.

**Fix — CSS background-position:**
```css
#hero .hero-bg {
  background-position: center 65%;   /* shifts image up — dome moves below title text */
}
```
*Test at 1280px, 1440px, and 1920px widths. Adjust the percentage (try 60%–70%) until the balloon is in the upper third and the dome sits below the text block.*

---

## Priority 2 · Portrait Images in Landscape Containers

### `experience-ground-arrival.png`
| Dimensions | Container | Used in |
|---|---|---|
| 864 × 1080 px (portrait) | ~50% of timeline panel, fixed height ~420px on desktop | Step 01 and Step 06 timeline slides |

**Issue:** The image shows balloon above, glowing LED stems mid-frame, ground level below. A 420px-tall landscape crop of a 1080px portrait image discards ~60% of the image height. The important content (balloon + stems) sits in the middle third — but default `object-position: center center` cuts the top (balloon) and bottom (ground detail) equally, keeping the stems.

**Fix:**
```css
.timeline-panel-slide[data-step="0"] img,
.timeline-panel-slide[data-step="5"] img {
  object-position: center 35%;  /* bias toward balloon/sky area */
}
```

---

### `theme-a-drone.png`
| Dimensions | Container | Used in |
|---|---|---|
| 1152 × 1440 px (portrait) | `.theme-drone-wrap`, approx 480px tall on desktop | Theme A panel |

**Issue:** Portrait image in a landscape container. Balloon and LED ring are the subject — positioned in the upper half of the image. Default centre crop cuts the balloon off at the top and loses the ticket booth context at the bottom.

**Fix:**
```css
#theme-panel-a .theme-drone-wrap img {
  object-position: center 25%;  /* pulls balloon into frame, keeps ring visible */
}
```

---

### `theme-b-drone.png`
| Dimensions | Container | Used in |
|---|---|---|
| 1152 × 1440 px (portrait) | `.theme-drone-wrap`, approx 480px tall on desktop | Theme B panel |

**Issue:** Same portrait-in-landscape problem as Theme A drone. Same composition (balloon upper, ring mid, ground lower).

**Fix:**
```css
#theme-panel-b .theme-drone-wrap img {
  object-position: center 25%;
}
```

---

## Priority 3 · Wide Images in Standard Containers

### `location-saadiyat.png`
| Dimensions | Container | Used in |
|---|---|---|
| 2816 × 1472 px (very wide) | `.location-image-wrap`, full-width below the museum cards | Location section |

**Issue:** The image is 2816px wide — more than 2× a 1280px desktop viewport. `object-fit: cover` horizontally centres the image, cropping the left and right edges. The Louvre building is near image centre, which should survive the crop. However, the coastline context on the right edge may be lost on narrower viewports.

**Fix:** Centre crop is acceptable. Optionally bias left to include more of the museum foreground:
```css
.location-image-wrap img {
  object-position: 45% center;   /* slight left bias to anchor the museum */
}
```
*Low priority — the default centre crop is usable. Verify once the section is live.*

---

### `overview-night.png`
| Dimensions | Container |
|---|---|
| 1740 × 904 px (landscape) | `.overview-image-wrap`, full-width below pillars |

**Issue:** Minimal — landscape image in a landscape container. Subject (balloon + Louvre Abu Dhabi, wide night angle) is centred. Default `object-position: center center` is fine.

**Recommended:** No change needed. Verify at 1920px width that the balloon is not cropped.

---

## Priority 4 · Square Images in Preview Slots

### `theme-a-content.png`, `theme-b-content.png`
| Dimensions | Container |
|---|---|
| 1254 × 1254 px (square) | `.theme-preview-item`, ~160px × 160px thumbnail |

**Issue:** Square image in a square-ish container — object-fit cover works well. Subject (ring artwork) is centred. Default `object-position: center center` is correct.

**Recommended:** No change. Ensure `.theme-preview-item` has a 1:1 or near-1:1 aspect ratio so the artwork reads clearly.

---

### `theme-c-content.png`
| Dimensions | Container |
|---|---|
| 1536 × 1024 px (landscape) | `.theme-preview-item`, ~160px × 160px thumbnail |

**Issue:** Landscape image in a square preview slot — the left and right edges will be cropped by `object-fit: cover`. The Guggenheim building illustration runs the width of the image. A square crop centred horizontally should preserve the building.

**Recommended:** No change for now. If the building is not centred in the image, add:
```css
#theme-panel-c .theme-preview-item:nth-child(2) img {
  object-position: center center;
}
```

---

## Implementation Approach

All fixes above are additive `object-position` overrides. No layout restructuring is needed.

**Recommended workflow:**
1. Add the hero `background-position` fix first — it is the most visible issue.
2. Add the portrait-drone `object-position` overrides for Theme A and Theme B.
3. Add the experience timeline portrait fix for steps 01/06.
4. Open at 1280px, 1440px, and 1920px widths and eyeball each image.
5. Adjust percentages to taste — the values above are starting points based on described image composition.

**CSS insertion point:** Add all `object-position` rules as targeted overrides immediately after the base `img { object-fit: cover; }` rule in the `<style>` block, or at the end of the style block in a clearly labelled `/* Image position overrides */` section.

---

## Pending Renders (no CSS fix until images arrive)

| File | Status | Note |
|---|---|---|
| `theme-a-gondola.png` | PLACEHOLDER | Portrait orientation likely — add `object-position` after render arrives |
| `theme-b-gondola.png` | PLACEHOLDER | Same |
| `theme-c-drone.png` | PLACEHOLDER | Landscape target (1080×864) — should be fine by default |
| `theme-c-gondola.png` | PLACEHOLDER | Same |
| `investment-tier-low.png` | PLACEHOLDER | Product render on white — centred, no cropping issue expected |

---

*Implement the fixes above in `index.html` after section copy is added. Test desktop at 1280px minimum before reviewing on mobile.*
