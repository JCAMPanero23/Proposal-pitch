# PRD — Vertical Altitude Experience (Revised Asset Logic)

## Core Update
Main states use **COMBINED images (BG + Balloon)**  
Transitions use **SEPARATED layers (FG + BG)**

---

## Asset Structure

```
experience_stack/

  # STATE 1 (COMBINED)
  state_01_arrival.png
  transition_02_15_bg.webm
  transition_02_15_fg.webm

  # STATE 2
  state_02_boarding_ascent.png
  transition_17_24_bg.webm
  transition_17_24_fg.webm

  # STATE 3
  state_03_peak_300m.png
  transition_26_41_bg.webm
  transition_26_41_fg.webm

  # STATE 4
  state_04_descent.png
  transition_43_57_bg.webm
  transition_43_57_fg.webm

  # STATE 5
  state_05_main_show_25m.png
  transition_59_66_bg.webm
  transition_59_66_fg.webm

  # STATE 6
  state_06_exit.png
```

---

## System Behavior

### Static State
- Use combined image (BG + Balloon baked)

### Transition State
- Background plays (BG video)
- Balloon plays separately (FG video)
- Both must be time-synced

---

## Key Rule

State = simple + stable  
Transition = dynamic + layered

---

## Benefits

- Cleaner still images
- More control during motion
- No mismatch during transitions
- Keeps balloon visually consistent

---

## Constraints

- FG and BG videos must be same duration
- Must align perfectly in position
- Use WebM with alpha for FG if possible

---

## Interaction Flow

State → play transition (BG+FG) → next state

---

