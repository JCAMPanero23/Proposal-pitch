# PRD Addendum — Balloon Vertical Altitude Indicator

## Feature Name
Balloon Vertical Altitude Indicator (UI Layer)

---

## Objective
Provide a clear, intuitive visual representation of balloon height during the experience.

- Reinforces vertical motion (0m → 300m)
- Syncs with background + transition states
- Acts as both indicator and optional interaction control

---

## UI Placement

- Fixed on **right side** of viewport
- Vertically centered
- Does NOT move with background

```
Right Side Overlay
│
│   ●  ← Balloon icon (moves)
│   │
│   │
│   ●  ← 300m Peak
│   │
│   ●  ← 120m Mid
│   │
│   ●  ← 25m Show
│   │
│   ●  ← 0m Ground
```

---

## Altitude Mapping

| State | Height | Position |
|------|--------|---------|
| Arrival | 0m | Bottom |
| Ascent Low | ~80m | Lower-mid |
| Ascent Mid | ~180m | Mid |
| Peak | 300m | Top |
| Descent | ~120m | Mid |
| Show | 25m | Lower |
| Exit | 0m | Bottom |

---

## Behavior

### Movement
- Balloon icon moves vertically along a fixed track
- Movement is **smooth interpolated**, not stepped

### Sync
- Position updates based on:
  - scroll position OR
  - active state index

### Optional Interaction
- User can drag balloon icon
- Updates:
  - background state
  - transition playback

---

## Animation Rules

- Easing: `ease-in-out`
- Duration: ~0.3–0.6s per state change
- No abrupt jumps

---

## Visual Design

### Balloon Icon
- Simplified version of main balloon
- Consistent lighting direction
- Slight glow (subtle)

### Track
- Thin vertical line
- Semi-transparent
- Minimal UI presence

### Markers
- Small dots at key heights:
  - 0m
  - 25m
  - 120m
  - 300m

---

## Constraints

Do NOT:
- Move UI horizontally
- Over-animate the icon
- Use heavy graphics

Must:
- Stay subtle and readable
- Align perfectly with experience states
- Maintain consistent scaling

---

## Integration Logic

```
On state change:
  → update balloon icon Y position
  → trigger background + FG transition
```

---

## Summary

The altitude indicator:
- Anchors the experience physically
- Reinforces vertical storytelling
- Adds intuitive interaction layer
