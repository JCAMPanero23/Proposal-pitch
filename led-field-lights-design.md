# LED Field Lights — Modular System Design
**Canvas from the Sky — Ground Installation**
*Last updated: 2026-04-22*

---

## Overview

The ground-level LED installation ("The Light Garden") uses modular square bases arrayed into a ring shape. Each base holds fixed transparent stems topped with replaceable tulip-shaped LED heads. The ring is visible in full only from altitude — the ground experience is atmospheric and intentionally incomplete.

---

## Ring Shape from Square Modules

Square 500mm × 500mm modules approximate the ring using a grid-inclusion rule:

> A module is placed if its center falls between the inner radius and outer radius of the ring.

This creates a stepped/pixelated edge that is **imperceptible from altitude** (150m+), where each 0.5m step subtends less than 0.2° of arc.

| Parameter | Value |
|---|---|
| Module size | 500mm × 500mm |
| Outer diameter | 90 – 110m |
| Inner void (balloon zone) | 40 – 60m |
| Ring width (active canvas) | 20 – 40m |
| Max edge step deviation | 0.5m (~0.5% of diameter) |

```
. . . . ■ ■ ■ ■ . . . .
. . ■ ■ ■ ■ ■ ■ ■ ■ . .
. ■ ■ ■ □ □ □ ■ ■ ■ ■ .   ■ = module present
. ■ ■ □ □ □ □ □ ■ ■ ■ .   □ = inner void (balloon zone)
■ ■ ■ □ □ □ □ □ □ ■ ■ ■
■ ■ ■ □ □ □ □ □ □ ■ ■ ■
. ■ ■ □ □ □ □ □ ■ ■ ■ .
. ■ ■ ■ □ □ □ ■ ■ ■ ■ .
. . ■ ■ ■ ■ ■ ■ ■ ■ . .
. . . . ■ ■ ■ ■ . . . .
```

Square chosen over hexagon for simpler manufacturing and perfect tiling with zero gaps.

---

## Three-Layer Module Architecture

```
BASE (permanent, ~10-year lifespan)
  └── STEM (fixed, permanent, ~10-year lifespan)
        └── TULIP HEAD (replaceable, ~2-3 year lifespan)
```

Only the smallest, cheapest, most failure-prone part is ever swapped in the field.

---

### Layer 1 — Base

```
        ┌─────────────────┐
        │   500mm × 500mm │
        │   ::::::::::::  │  ← stem sockets (fixed, ~100 per base)
        │   ::::::::::::  │
        │   ::::::::::::  │
        └────────┬────────┘
                 │ sealed cavity (PCB + driver inside)
                 └── drainage channels on underside
```

- **Material:** Cast aluminum, powder-coated underside
- **Stems:** Permanently bonded into machined holes (epoxy + friction fit)
- **Electronics:** Sealed internal cavity housing PCB and LED driver board
- **Weather:** Drainage channels on underside; no exposed joints at base level

---

### Layer 2 — Stem (Fixed)

- Clear acrylic rod — acts as a **light pipe** (entire stem glows when LED fires)
- Internal wiring runs from base PCB up to pogo contact at tip
- Permanently bonded to base — no stem-to-base seal to fail
- Density: ~100 stems per module at 50mm pitch

---

### Layer 3 — Tulip Head (Replaceable)

```
    LOCK              UNLOCK

    ╔═════╗           ╔═════╗
    ║TULIP║           ║TULIP║
    ╚══╦══╝           ╚══╦══╝
    push + 90° twist → ready to pull off
```

- **Mount:** Bayonet (push down + 90° twist) — no tools, under 10 seconds to swap
- **Contents:** 1× addressable LED (WS2812B or SK6812) + frosted polycarbonate diffuser dome
- **Connection:** 2-pin pogo contact mates with stem tip when locked
- **Seal:** Rubber gasket at mount joint (IP67 rated)
- **Dome material:** UV-resistant polycarbonate — does not yellow in UAE sun

---

## Weather Resilience — UAE Conditions

| Threat | Severity | Solution |
|---|---|---|
| Sandstorms (Shamal) | High | Sealed base cavity; no removable stems to lose or jam |
| Extreme heat (50°C+) | High | Aluminum base dissipates heat; UV-rated polycarbonate tulip dome |
| Rain | Low | Rubber gasket + pogo seal at tulip joint; base drainage channels |
| Humidity | Medium | Conformal coating on all PCBs inside base |

> **Note on rain:** Abu Dhabi averages ~42mm/year (mostly Dec–Feb). Rain is the lowest risk but the best visual opportunity — water refracts light through the transparent acrylic stems and tulip domes, enhancing the effect.

---

## Control System

| Component | Specification |
|---|---|
| LED type | WS2812B or SK6812 (addressable, RGB or RGBW) |
| Stems per module | ~100 at 50mm pitch |
| Protocol | Art-Net / sACN over wired Ethernet |
| Module interconnect | Daisy-chain Ethernet between bases |
| Show software | MadMapper or Resolume Arena (pixel-map artwork onto ring geometry) |
| Driver board | ESP32-based (custom) — enables remote diagnostics per module |

---

## Patent Angle

The patentable IP is the **system architecture**:
- Sealed modular base + fixed light-pipe stem + hot-swap tulip head
- Engineered for permanent outdoor desert field installations viewed from altitude
- Novel combination not currently in the commercial outdoor LED market

**Important:** File PCT (international patent) application **before** any public physical prototype reveal or manufacturer meetings.

UAE registration note: ADIO (Abu Dhabi Investment Office) has incentives for manufacturing IP registered in UAE — this could be positioned as a UAE-originating technology.

---

## Open Questions / Next Steps

- [ ] Finalize stem density: 50mm pitch (~100/module) vs 40mm pitch (~156/module)
- [ ] Decide tulip head dome shape — pure tulip vs more geometric petal form
- [ ] Identify prototype fabricator in UAE (Dubai Industrial City)
- [ ] Shortlist LED component suppliers (Shenzhen Colorking, Philips Color Kinetics)
- [ ] Commission PCT patent search before manufacturer outreach
