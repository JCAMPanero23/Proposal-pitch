# LED Field Lights - Modular Block System
**Canvas From The Sky - Abu Dhabi Investor Pitch**

*Version 7 - CEO decision document: framing options, density variants, researched pricing*
*Updated: 2026-04-27*

---

## Currency Note

Investor-facing budgets should be shown in **AED**, with USD only as a secondary reference for supplier benchmarking.

Working conversion:

```text
1 USD = 3.6725 AED
```

The UAE dirham is pegged to the US dollar, so this is stable enough for pitch-stage budgeting. Final procurement should still quote both AED and supplier currency.

---

## Executive Summary

The LED field is the core physical technology behind **Canvas From The Sky**. It turns the land around the tethered balloon into a programmable illuminated canvas that is atmospheric at ground level and fully legible from altitude.

Following CEO review, the system has been resized and rationalized for a more practical investor-stage deployment:

- **Outer diameter:** 60m
- **Inner clear circle:** 12m radius / 24m diameter
- **Active ring depth:** 18m
- **Grid unit size:** 600mm x 600mm
- **Working unit count:** **6,175 grid units** (6,320 gross less 145 displaced by the widened 3m walkway)
- **LED density variants under review:**
  - **16-LED (4 x 4)** dense option: 6,175 x 16 = **98,800 LED stem nodes**
  - **9-LED (3 x 3)** lighter option: 6,175 x 9 = **55,575 LED stem nodes**
- **Ring-edge treatment:** for sealed-block builds, square 600mm blocks with plastic-capped inactive portions; for open-frame and pad builds, the frame is cut/notched along the curve so no caps are needed
- **Access path:** **3m-wide** LED mesh walkway under tempered structural glass from the outer edge to the balloon platform (~17.4m radial run, ~52 sq m total)

This version keeps the spectacle but reduces the technical risk. The original 500mm / 100-stem module created a very dense field. The new 600mm / 16-stem unit is easier to manufacture, easier to wire, easier to cool, and more realistic for cost control. **Five framing options** are now on the table (sealed modular block on raised frame, ground-level open frame, cast-in-place pad, yard-precast LWAC pad, site-cast LWAC pad) and **two LED density variants** (9-LED and 16-LED). The CEO Decision Summary below compares the combinations.

---

## CEO Decision Summary

This section gives the CEO a one-screen view of the choices. The design has two independent decisions: the **framing option** (where the LED field sits) and the **LED density** (how many LEDs per 600mm unit). Pick one of each. Detailed reasoning, cost rows, and trade-offs follow in the rest of the document.

### Decision 1 - Framing option

| Option | One-line description | Ground level? | Modular block product? | Mid-range cost (substructure only) |
|---|---|---|---|---:|
| **C** | Raised low-frame with sealed lift-out 600mm blocks (original recommendation) | No (raised 100-300mm) | Yes | AED 4.6M |
| **D** | Modular open-frame grid on prepared ground; stems anchor in frame; no top cover | **Yes (flush)** | No (frame only) | AED 3.2M |
| **E1** | Cast-in-place reinforced concrete pad; frame cast in during pour | **Yes (flush)** | No (frame only) | AED 4.6M |
| **E2** | Yard-precast LWAC panels delivered and set on prepared base | **Yes (flush)** | No (frame only) | AED 4.1M |
| **E3** | **Site-cast LWAC panels** - poured and cured on-site in casting beds, then set | **Yes (flush)** | No (frame only) | **AED 3.6M** |

### Decision 2 - LED density per 600mm unit

| Density | Pitch | LED nodes per unit | Total LED nodes | Visual character |
|---|---|---:|---:|---|
| **9-LED (3 x 3)** | ~200mm | 9 | **55,575** | Calmer, more airy garden; easier to wire, lower power, cheaper |
| **16-LED (4 x 4)** | ~150mm | 16 | **98,800** | Denser, richer aerial canvas; higher resolution for content; more cost |

### Combined total installed system cost (mid-range, AED, all-in)

Numbers below include all hardware, controls, 3m glass walkway, installation, commissioning, and recommended spares. They are pre-quote engineering estimates anchored on **researched 2026 supplier price ranges** (see Pricing Sources & References appendix at the end of this document).

| | **Option C** (raised + sealed block) | **Option D** (open frame) | **Option E1** (CIP pad) | **Option E2** (yard-precast LWAC) | **Option E3** (site-cast LWAC) |
|---|---:|---:|---:|---:|---:|
| **9-LED density** | AED 16.5M | AED 13.8M | AED 15.4M | AED 14.9M | **AED 14.4M** |
| **16-LED density** | AED 22.5M | AED 19.8M | AED 21.4M | AED 20.9M | **AED 20.4M** |

Low and high ranges are in the full Cost Model section. As a rule of thumb, the high range is roughly +50% of mid; the low range is roughly -30% of mid.

### Recommended pairings

- **Lowest cost / fastest to a working pilot** - **Option D + 9-LED: AED 13.8M mid**. Best for a 12-month pilot or relocatable touring version. Lowest civil program, fastest install, simplest electronics. Trade-off: less aerial resolution and an open-frame field that needs a planned dust blow-out cleaning cycle.
- **Best long-term flagship value** - **Option E3 + 16-LED: AED 20.4M mid**. Clean ground-level reading, best heat behavior, large factory-controlled panels with fewest joints, full 16-LED aerial resolution. The civil program is longer than D but shorter than CIP. **This is the recommended pairing for the permanent Abu Dhabi flagship.**
- **Compromise pairing for budget pressure** - Option E3 + 9-LED: AED 14.4M mid. Same flush ground-level civil quality as the recommended pairing, but with the lighter 9-LED density. Roughly AED 6M cheaper than the flagship pairing. Re-investing in 16-LED later is **not** trivial because the frame node spacing differs - choose density at frame fabrication time.
- **Avoid** - Option C + 16-LED at AED 22.5M is the most expensive pairing; the raised deck no longer offers a meaningful advantage now that Option E3 exists at lower cost with cleaner aerial reading.

### Decision risks the CEO should be aware of

- **Site permanence** - Options C and D are relocatable; Options E1/E2/E3 are permanent civil works. If the site lease is short or the venue might move, prefer C or D.
- **9-LED vs 16-LED is hard to undo** - because the frame node spacing is different (200mm vs 150mm pitch), upgrading from 9 to 16 later requires re-fabricating frame nodes. Choose density carefully.
- **Site-cast (E3) needs space** - it requires a casting yard adjacent to the ring footprint for ~22-30 weeks of casting. If the site cannot accommodate a casting yard, prefer E2 (yard-precast).
- **Hot-weather concrete protocol** for E1 / E2 / E3 - all three need ACI 305 compliance for UAE summer pours. E3 has the most QC risk because the casting is on-site.

---

## Design Intent

The LED field must work as two connected experiences:

1. **Ground experience**
   Visitors move through a sculptural field of glowing stems. The stems vary subtly in height and sway lightly, creating a living garden effect rather than a flat technical grid.

2. **Balloon experience**
   From the gondola, the ring resolves into animated artwork: national moments, cultural imagery, sponsor stories, seasonal shows, and abstract aerial paintings.

The field is not simply decorative lighting. It is a repeatable cultural technology platform: a ground attraction, an aerial canvas, a sponsor medium, and a reason for guests to return.

---

## Final Field Geometry

The investor version uses a **60m outer diameter** with a **12m-radius inner clear circle** for the balloon platform zone.

```text
Outer radius:       30m
Inner radius:       12m
Active ring width:  18m

Active ring area:
pi x (30m^2 - 12m^2)
= approx. 2,375 sq m
```

### Access Walkway

A **3m-wide LED mesh walkway** connects the outer public edge to the inner balloon platform. The wider path (vs the earlier 2m spec) gives better guest flow, room for a center divider during peak loading, and a clearer maintenance route.

```text
Walkway width:  3m
Walkway length: approx. 17.4m radial run from outer edge to platform
Walkway area:   approx. 52 sq m
```

Recommended treatment:

- structural steel or aluminum subframe
- LED mesh or low-profile LED tile below
- laminated tempered anti-slip glass above
- edge lighting for safety
- drainage below the glass layer
- removable service panels at intervals

The walkway should feel like a glowing bridge through the light field. It is also useful operationally: it gives guests, VIPs, maintenance teams, and emergency staff a clean controlled route between the field edge and the balloon platform.

### Approximate Quantity Model

| Item | Calculation | Estimate |
|---|---:|---:|
| Active ring area | pi x (30^2 - 12^2) | 2,375 sq m |
| Grid unit size | 0.6m x 0.6m | 0.36 sq m |
| Gross unit count (geometric) | 2,375 / 0.36 | approx. 6,600 units |
| Walkway footprint | 17.4m x 3m | approx. 52 sq m |
| Units displaced by 3m walkway | 52 / 0.36 | approx. 145 units |
| Edge-zone reductions and capped portions | curve-fit losses | approx. 280 units |
| **Working unit count** | gross less walkway and edge | **6,175 units** |
| LED nodes per unit (16-LED variant) | 4 x 4 | 16 stems |
| **Working LED node count (16-LED)** | 6,175 x 16 | **98,800 nodes** |
| LED nodes per unit (9-LED variant) | 3 x 3 | 9 stems |
| **Working LED node count (9-LED)** | 6,175 x 9 | **55,575 nodes** |

For investor budgeting, use **6,175 grid units**. The working LED node count is **98,800** (16-LED) or **55,575** (9-LED) depending on the density chosen in the CEO Decision Summary. Spares are budgeted separately - see "Spares & Commissioning Stock" below.

---

## Modular Block Architecture

Each LED block is a repeated 600mm x 600mm unit installed into a raised structural field frame.

![Pure LED block visual spec](led-block-info-image-v2.png)

```text
TULIP LED HEAD
  Replaceable diffuser/light cap
  2 visual variants for controlled natural randomness

FLEXIBLE / ADJUSTABLE STEM
  Set to chosen height before installation
  Slight flex for soft movement and safer contact

SEALED 600MM BASE BLOCK
  4 x 4 transparent LED stem positions
  edge-zone square blocks may receive plastic-capped portions
  Driver electronics, power, data, drainage separation

RAISED STRUCTURAL FRAME
  Airflow, water path, cable management, leveling
```

---

## Layer 1 - Field Substructure

The active LED field needs a planned substructure. Three families of solution are now in play: a raised structural frame with sealed lift-out blocks (the original Option C), a ground-level modular open-frame grid (Option D), and a frame embedded in a flush concrete pad (Option E). Options D and E eliminate raised feet and the sealed-block product, putting the LED field at finished grade.

Recommended functions, regardless of option:

- carry the LED stems and electronics safely above any standing water
- provide a managed path for cables and data
- give a flat, level reference across the ring
- protect electronics from sand, heat, humidity, and impact
- support a clear maintenance workflow from above
- accommodate edge cuts that follow the curved ring boundary

### Framing Options Reviewed

Seven practical directions across three families. Options A-C use sealed modular 600mm blocks lifted on/off a raised frame. Options D and E1-E3 remove the modular block product entirely — only the **framing** is modular, the field sits at finished grade with no raised feet, and stems anchor directly into the frame nodes. Within the E-family, E1 is cast-in-place (CIP) normal-weight concrete; E2 is yard-precast LWAC; E3 is site-cast LWAC.

| Option | Description | Ground Level | Modular Block? | Maintenance Access | Cost | Risk |
|---|---|---|---|---|---:|---|
| A. Technician crawl/service void | Raised or excavated cavity tall enough for a technician below the field | No (raised) | Yes | Excellent | Highest | drainage, confined-space rules, ventilation, structural cost |
| B. No frame, adjustable feet only | Each LED block sits on adjustable feet directly over prepared ground | Slightly raised | Yes | Poor to medium | Lowest | cable disorder, uneven settlement, harder replacement, water exposure |
| C. Low raised frame with lift-out blocks | 100-300mm raised structural grid; sealed blocks lift out from above; cables/drainage run in plenum | Raised 100-300mm | Yes | Good | Medium | needs careful service hatch planning |
| D. Modular open-frame grid on prepared ground | Bolt-together 600mm grid frame sits flush on prepared ground; stems anchor into frame nodes; no top-cover blocks; no raised feet | **Flush** | **No** (frame only) | Top-side per stem | Medium-low | sand/water management, in-field electronics enclosure sealing |
| E1. Frame embedded in CIP concrete pad | Steel/aluminum grid set into a poured 80-150mm reinforced normal-weight concrete pad flush with grade | **Flush** | **No** (frame only) | Top-side per stem | Medium | not relocatable, hot-weather cure risk, longest civil program |
| E2. Yard-precast LWAC panels | LWAC panels cast off-site at a UAE precaster, trucked in, set on bedding; frame factory-cast into panels | **Flush** | **No** (frame only) | Top-side per stem | Medium | panel size limited by truck; joint sealing as annual maintenance |
| E3. Site-cast LWAC panels | Same panel concept as E2 but cast and cured on site in casting beds; larger panels, fewer joints | **Flush** | **No** (frame only) | Top-side per stem | Medium-low | needs site space for casting yard; on-site QC discipline |

### Recommended Cost-Effective Solution

The recommendation depends on the venue's priorities. Quick guide:

- **Option C** if the priority is in-field serviceability and the venue is willing to live with a 100-300mm raised deck.
- **Option D** if the priority is a clean ground-level appearance, lowest civil program, and a relocatable installation (pilot or touring).
- **Option E1 (CIP)** if the priority is monolithic concrete with no panel joints, and the site can accept a 4-6 week pour-and-cure schedule.
- **Option E2 (yard-precast LWAC)** if the priority is factory-grade quality and the site cannot host a casting yard.
- **Option E3 (site-cast LWAC)** if the site has space for a casting yard - this is the **lowest-cost flush-pad option** and gives larger panels with fewer joints.

For the **Abu Dhabi permanent flagship**, the recommendation is **Option E3**: it produces the same flush-pad result as E1/E2 at the lowest installed cost, with the largest panels (cleanest aerial reading), and with a schedule that can be compressed by adding casting beds. The trade-off is an on-site QC commitment that should be staffed deliberately.

For a **pilot or touring version**, **Option D** remains the strongest answer.

The earlier Option C build-up:

Recommended build-up:

```text
LED stems and tulip heads
600mm LED block
adjustable leveling feet / corner supports
raised structural grid
100-300mm service plenum
cable trays + drainage path
prepared ground slab or compacted civil base
```

Recommended height:

- **100mm minimum** in simple zones where only airflow and cable routing are needed
- **200-300mm preferred** in main service zones for better cable bends, junction boxes, drainage falls, and hand access
- **localized service trenches or hatches** at power/data junction routes

This avoids the cost of a full technician crawl space while still making the system maintainable. A technician should service the field from above by lifting modules, not by crawling under thousands of blocks.

### Maintenance Walkover Strategy

The LED stems should not be walked on directly during service. Instead, use a removable maintenance plank/stool system.

Recommended approach:

- leave engineered corner gaps or receiver points at selected block intersections
- create custom lightweight service stools/planks that bridge over the stems
- allow technicians to stand above the LED blocks without loading the stems
- use marked service routes aligned with structural beams
- include removable modules near junction boxes for deeper access

This gives the team the practical maintenance benefit of a service deck without the capital cost of building a full under-field access tunnel.

### Why Not a Full 300mm Technician Crawl Space?

A 300mm cavity is useful for cables and airflow, but it is generally not comfortable or safe for a technician to work inside. If the space is designed for a person to enter, it becomes a more serious civil/MEP system:

- higher excavation or deck height
- ventilation and heat management
- confined-space safety procedures
- lighting inside the void
- emergency access
- pest/sand/water management
- higher structural load requirements

For the investor version, the better message is: **modular top-side maintenance with a generous service plenum**, not an underground maintenance tunnel.

---

## Layer 1 (Alternative) - Option D: Modular Open-Frame Grid on Prepared Ground

This option removes the sealed 600mm block product entirely. The only modular element is the **frame grid itself**. Stems anchor directly into the frame at every 150mm grid intersection (4 x 4 per 600mm cell), and the field sits flush with finish grade.

```text
LED tulip head
flexible/adjustable stem
stem socket integrated into frame node
600mm modular bolt-together frame grid (extruded aluminum or galvanized steel)
sealed in-frame electronics pucks (one per 600mm cell, 16 stems served)
prepared ground: compacted aggregate or sand-cement screed
```

Recommended specification:

- **Frame profile:** extruded aluminum or hot-dip galvanized steel, 50-80mm tall hollow section, doubling as wire raceway
- **Cell size:** 600mm x 600mm interior, bolted at corner nodes for grid stiffness
- **Stem sockets:** integral threaded or bayonet sockets at 150mm pitch on the frame profile (no top cover plate over the cell)
- **Electronics:** sealed IP67 "puck" enclosure clamped to the underside of each cell, holding the 16-channel driver, power tap, and data daisy-chain
- **Drainage:** open cell bottoms let water pass to the prepared ground; ground graded to a perimeter swale
- **Edge treatment:** the curve is followed by cutting/notching the frame profile along the ring boundary - no plastic caps required because there is no continuous top surface
- **Installation:** bolt-together on-site; relocatable for touring or pilot use

### Pros
- Cleanest ground-level appearance - no raised deck, no trip hazard
- Lowest civil program (no slab pour, no raised steel deck)
- Frame is the only repeating product - no separate sealed block to manufacture
- Faster install and faster decommission - suitable for pilot or touring

### Cons
- Sand and dust collection inside cells needs a planned blow-out cleaning cycle
- Electronics pucks must be IP67 + sand-rated and serviced from above by removing stems first
- Less protection against direct foot traffic on stems (rely on staff routes and bollards)
- Heat dissipation depends on the puck case design rather than a large block enclosure

---

## Layer 1 (Alternative) - Option E1: Frame Embedded in Flush Cast-in-Place Concrete Pad

This option pours a shallow concrete pad over the active ring footprint and sets the modular frame grid into the pad during the pour. The result is a single monolithic surface flush with grade, with stems plugging into frame nodes that read as small metal points across a stone-textured slab.

```text
LED tulip head
flexible/adjustable stem
threaded stem socket cast into frame node
600mm steel/aluminum grid frame, top edge flush with concrete
80-150mm concrete pad
cast-in conduit (power + data) and drainage channels
compacted civil sub-base
```

Recommended specification:

- **Pad:** 80-150mm reinforced concrete with surface-finished aggregate or stone-textured topcoat, fall of 1-1.5% to perimeter drains
- **Frame grid:** factory-prefabricated grid panels (e.g. 2.4m x 2.4m, 4 x 4 cells each) lowered into wet concrete with leveling jigs; top of frame finishes flush with the pad surface
- **Stem sockets:** stainless or brass threaded inserts cast into the frame nodes, sealed by the stem gasket on install
- **Conduit:** PVC or HDPE conduit cast into the pad following the data ring topology, with junction pits at zone boundaries
- **Drainage:** cast channels at the inner and outer perimeter feed to a perimeter swale
- **Edge treatment:** the pad and frame are both cut to follow the ring curve - no stepped edge, no plastic caps
- **Service:** stems and the in-node electronics insert from above; deeper electronics work uses pre-planned pit covers at zone boundaries

### Pros
- Most weatherproof and most stable - sand and water do not enter the field
- Cleanest aerial reading - the desert "becomes" the canvas with no visible deck
- Best long-term maintenance economics (no frame oxidation, no sub-frame settlement)
- Strongest fit for a permanent flagship installation

### Cons
- Not relocatable - this is a permanent civil work
- Longer install program (concrete cure, finishing, conduit coordination)
- Electronics must be planned correctly the first time - rework is expensive
- Higher up-front civil cost than Option D (offset over time by lower maintenance)

---

## Layer 1 (Alternative) - Option E2: Yard-Precast LWAC Panels

This option moves the concrete pour off the project site to an established UAE precast yard. Panels are cast in factory conditions using **lightweight aggregate concrete (LWAC)** based on LECA (light expanded clay aggregate) at ~1,600-1,800 kg/m³, then trucked to site and lifted into place on a thin sand-cement bedding.

```text
LED tulip head
flexible/adjustable stem
threaded stem socket cast into panel node
600mm grid frame factory-cast into LWAC panel
LWAC panel ~80-120mm thick, panel size limited by truckable max (~2.4m x 4-6m)
50-75mm sand-cement bedding screed
compacted civil sub-base
perimeter joint sealants between panels
```

Recommended specification:

- **Concrete:** structural LWAC, ~1,700 kg/m³, 30-40 MPa, with surface aggregate/stone finish or applied UV-resistant topcoat
- **Panels:** typically 2.4m x 4-6m to match truck and crane envelopes; designed against the curve at the ring boundary
- **Frame, conduit, sockets:** factory-cast in - this is the central advantage; tolerances are tighter than CIP and rework is rejected at the yard, not on site
- **Joints:** UAE-thermal-cycling-rated sealant (silicone or polyurethane), 10-15mm joint width, planned re-seal cycle every 5-7 years
- **Bedding:** sand-cement screed for level adjustment over compacted sub-base
- **UAE precasters to evaluate:** Dubai Precast, Gulf Precast, ACICO, RAK Precast, Emirates Precast

### Pros
- Factory QC eliminates the worst CIP failure modes (cracking from hot-weather cure, surface defects, embedded-item misalignment)
- ~30% lighter than normal-weight concrete - smaller crane, smaller civil sub-base
- Faster on-site program: lift-and-set in ~2-3 weeks vs 4-6 weeks for CIP
- Slightly lower thermal mass = surface ~5-10°C cooler at evening showtime
- Lower long-term maintenance than Option D; comparable durability to E1

### Cons
- Panel size capped by truck and crane (so more joints than E1 or E3)
- Joint sealing becomes an annual maintenance item
- Yard overhead and profit margin are baked into the panel price
- Not relocatable

---

## Layer 1 (Alternative) - Option E3: Site-Cast LWAC Panels (Built and Cured On Site)

Same end result as E2 - flush LWAC panels with factory-grade frame integration - but panels are cast and cured **in a casting yard set up adjacent to the ring footprint**. This eliminates yard overhead, transport cost, and panel-size-by-truck limits, at the cost of needing site space and on-site QC discipline.

```text
LED tulip head
flexible/adjustable stem
threaded stem socket cast into panel node
600mm grid frame cast into LWAC panel on site
LWAC panel ~80-120mm thick, panel size limited only by crane reach (can be larger than E2)
50-75mm sand-cement bedding screed
compacted civil sub-base
perimeter joint sealants between panels
```

Recommended setup:

- **Casting beds:** 4-6 steel forms in parallel in a covered staging area on site; each bed produces one panel per 5-8 days using accelerated curing
- **Mix:** structural LWAC supplied by mobile batching plant or local ready-mix delivery; LECA aggregate sourced locally (UAE LECA suppliers exist - quoted at ~AED 65/m³ FOB for raw aggregate)
- **Hot-weather concreting protocol (ACI 305):**
  - Chilled mix water or ice in summer pours (May-September)
  - Evening or early-morning pour windows
  - Curing blankets to control internal-vs-surface temperature differential
  - 7-day water cure minimum, 14 days preferred before lift
- **Panel size:** can be larger than truckable - 3m x 6m or even 3m x 8m practical, which **reduces joint length by 30-40% vs E2**
- **QC:** on-site cube tests, slump, density per panel; recommend an independent QC consultant for the duration of the casting program (~22-30 weeks)
- **Cycle planning:** 4 beds x ~1.5 cycles/week = 6 panels/week → ~30 weeks for the full ring; 6 beds compresses this to ~22 weeks

### Pros
- **Cheapest of the E-family options** - eliminates yard overhead, transport, and panel-size-by-truck constraint (~AED 0.5M cheaper than E2 at mid)
- Larger panels = fewer joints = less sealant maintenance over the asset's life
- Schedule comparable to E2 if multiple beds run in parallel
- Same long-term durability and aerial-reading benefits as E1 / E2

### Cons
- Requires site space for the casting yard for ~22-30 weeks
- On-site QC discipline is the main risk - factory grade is not automatic
- Hot-weather concreting protocol adds AED ~50-100/m³ in summer
- Independent QC consultant is recommended (AED 80-150k over the program)
- A single bed failure or curing problem stops that bed for 2-3 weeks; parallel beds are the insurance

### Why E3 is the recommended pad option for the Abu Dhabi flagship

If the site permits a casting yard, E3 lands the same flush-pad result as E1 and E2 but at the lowest installed cost, with the largest panels (cleanest aerial reading), and with a schedule that can be compressed by adding casting beds. The trade-off is an on-site QC commitment that should be staffed deliberately, not assumed away.

---

## Layer 2 - 600mm LED Block

**Size:** 600mm x 600mm  
**Stem grid:** 4 x 4  
**Stem count:** 16 LED stems per unit  
**Top material:** coated aluminum or composite top plate (Option C only - Options D and E have no top cover, just an open frame cell)  
**Underside:** sealed electronics enclosure with service connector (Option C); IP67 puck under each cell (Option D); cast-in node electronics in pad (Option E)  
**Ingress protection target:** IP67 for electronics enclosure  
**Service method:** Option C - lift individual module from frame and disconnect below; Options D and E - service from above by removing stems and lifting the underlying puck or node insert

Why 600mm is the right move:

- better match for standard sheet and panel cutting
- fewer modules than 500mm blocks
- fewer connectors and failure points
- lower installation labor
- easier spacing for a 4 x 4 stem layout
- cleaner coordination with structural framing

### Stem Layout

The 4 x 4 grid should use a consistent mechanical grid, but the visible field should avoid looking too perfect.

Recommended approach:

- nominal stem pitch: **150mm for the 16-LED (4 x 4) variant** or **200mm for the 9-LED (3 x 3) variant**
- inset border around the unit edge
- subtle randomized stem heights
- 2 tulip head forms
- software color randomness at ground level

The aerial canvas remains mapped and precise, while the ground-level experience feels organic.

### Density Variant: 16-LED (4 x 4) vs 9-LED (3 x 3)

Two density options are now under CEO review. Both use the same 600mm grid unit and the same tulip / stem family - only the count and pitch change.

| Aspect | 16-LED (4 x 4, 150mm pitch) | 9-LED (3 x 3, 200mm pitch) |
|---|---|---|
| LED nodes per unit | 16 | 9 |
| Total LED nodes (6,175 units) | 98,800 | 55,575 |
| Aerial resolution | denser, richer, more legible content | lower-res but still highly legible from balloon height |
| Ground-level character | dense tulip garden, immersive | airy, calmer, more sculptural |
| Power draw at peak | ~50 kW | ~28 kW |
| Wiring complexity per cell | higher (16 channels) | lower (9 channels) |
| Per-cell driver cost | higher (16-channel addressable) | lower (9-channel) |
| Mid-range LED + electronics cost | ~AED 5.4M | ~AED 3.0M |
| Sandstorm clean-up time | longer (more stems) | shorter |
| Suitability for content | full pixel-mapped artwork | works well for color-field, abstract, calligraphy |
| Reversibility (upgrade later) | n/a | difficult - would require new frame nodes |

The 9-LED variant is cheaper, simpler, and runs cooler, which matters in UAE summer. The 16-LED variant gives the cleanest aerial canvas for pixel-mapped content like the Van Gogh "Starry Night" reference renders. **Density choice should be paired with content ambition** - if the launch slate leans on cinematic mapped artwork, the 16-LED variant is needed; if it leans on abstract atmospheric scenes and color washes, 9-LED is sufficient.

The choice cannot easily be reversed after frame fabrication because node spacing is different. Plan the density decision before placing the frame supplier order.

### Square Block Edge Treatment (Option C only)

For Option C (sealed modular blocks), the ring edge should not reveal a harsh stepped square-block outline. The physical modules remain square 600mm x 600mm blocks, but the blocks touched by the curved circle line should use capped plastic portions where the active LED field needs to visually soften the boundary.

Recommended approach:

- keep all base blocks square and standardized
- omit stems in the shaded/capped edge portions of selected boundary blocks
- cover those inactive areas with sealed plastic caps, not curved block pieces
- keep caps flush or slightly proud so dust and water do not collect
- map capped portions and omitted stems as inactive pixels in the content system

This keeps manufacturing simple while making the finished circular ring read cleaner from both ground level and balloon height.

For Options D and E (open-frame and embedded-frame builds), no plastic caps are needed because the frame profile and pad are cut directly along the curve. Edge-zone stems are simply omitted at the geometry level, and the working unit count of 6,320 already accounts for those reductions.

---

## Layer 3 - Adjustable Flexible Stems

The stems should be adjustable before installation, then locked in place during commissioning.

Recommended requirements:

- transparent stem body with internal LED wiring/diffusion
- pre-set height range: 200-400mm
- height increments: 50mm
- adjustment before installation, not during daily operation
- locking collar or internal stop to fix final height
- flexible upper section to allow gentle sway
- UV-stabilized polycarbonate or hybrid polycarbonate/silicone design
- safe flex under light accidental contact
- replaceable stem only at module workshop level, not guest-facing daily maintenance

### Height Strategy

Use a controlled random height pattern, not true randomness.

Example height mix:

| Stem Height | Share | Purpose |
|---|---:|---|
| 200mm | 15% | low glow layer |
| 250mm | 20% | low-mid transition |
| 300mm | 30% | main visual field |
| 350mm | 20% | upper texture |
| 400mm | 15% | wave peaks and depth |

Each module can be pre-configured with a height recipe. When repeated across the ring, the field creates a subtle wave effect without compromising installation speed.

### Sway Strategy

The stems can flex slightly for a natural movement effect, but the design should avoid relying on wind as the main animation. Wind is unpredictable, and the balloon operation already has weather limits.

Recommended approach:

- passive sway from stem flexibility
- stronger visual wave created by content animation
- do not add motors in the first deployment

---

## Layer 4 - LED Tulip Heads

The LED head should not be a single repeated object across the whole field. A controlled family of heads will make the ground garden feel more natural.

Recommended family:

1. **Closed Tulip**
   Compact bud form, strongest point source, best for aerial brightness.

2. **Open Tulip**
   Wider frosted diffuser, softer at ground level, better for guest photos.

Use these in a controlled ratio, for example:

| Head Type | Share | Role |
|---|---:|---|
| Closed Tulip | 60% | aerial clarity and brightness |
| Open Tulip | 40% | ground-level softness and photo quality |

### Electrical Direction

For the first prototype, keep the tulip head simple:

```text
2-contact sealed connection
  LED power +
  LED power -
```

The addressable control and protection electronics should remain in the sealed base, not in the tulip head. This keeps the most exposed component cheaper and easier to replace.

Future premium option:

```text
4-contact sealed connection
  +V
  Ground
  Data
  Diagnostic / data return
```

This could support smarter heads later, but it adds complexity, cost, and weather-sealing risk.

---

## Walkway LED Mesh Under Tempered Glass

The walkway should be treated differently from the stem field. It needs to carry people, luggage, service equipment, and emergency access. It should therefore use a structural walking surface with LED content underneath.

Recommended build-up:

```text
Anti-slip laminated tempered glass
Clear air gap / service gap
Outdoor LED mesh or low-profile LED tile
Waterproof tray and drainage route
Structural subframe
Cable tray below
```

Design goals:

- the path glows as part of the show
- visitors feel they are walking through the artwork
- the path can guide boarding flow
- content can animate toward or away from the balloon platform
- glass panels remain removable for service

The path content should be simpler than the aerial ring content: flowing light, calligraphy trails, sponsor color moments, boarding guidance, and safety cues.

---

## Show Programming Strategy

CEO comment: the night should support **3-5 different shows**, allowing a guest night pass and repeat viewing.

This is a strong business improvement. Instead of one ride or one viewing moment, the venue becomes an evening destination.

### Recommended Night Program

| Time | Show | Duration | Role |
|---|---|---:|---|
| 7:00 PM | Welcome Canvas | 4-5 min | soft opening, family-friendly |
| 8:00 PM | UAE / Abu Dhabi Signature Show | 5-7 min | hero cultural show |
| 9:00 PM | Artist Canvas | 5-7 min | rotating commissioned artwork |
| 10:00 PM | Sponsor / Brand Edition | 3-5 min | commercial revenue slot |
| 11:00 PM | Night Finale | 5-8 min | high-energy closing show |

Between shows, the field can run ambient content loops. The shows should be scheduled clearly so guests have a reason to stay, eat, walk, photograph, and book another balloon slot.

### Night Pass Logic

The night pass can include:

- access to the ground light garden
- scheduled viewing of all shows
- F&B/retail dwell time
- option to add balloon flight as premium upgrade
- VIP reserved platform or lounge option

This separates venue revenue from balloon capacity. Even when the balloon is full or weather-limited, the ground experience can still generate value.

---

## Power and Thermal Strategy

The new 600mm / 16-stem block reduces density and makes the power model more credible.

Still, the field must not be treated like a full-white LED screen. It is an artistic canvas viewed from altitude, so the content should use controlled brightness, color, movement, and contrast.

Recommended controls:

- no sustained full-white scenes
- module-level brightness cap
- automatic thermal dimming
- lower daytime brightness
- show-specific power budget
- emergency dim or blackout mode
- temperature reporting per module or per zone

### Operating Modes

| Mode | Timing | Brightness Behavior | Purpose |
|---|---|---|---|
| Day sculpture | sunrise to late afternoon | 0-20% LED output | passive visual presence, thermal protection |
| Golden hour | late afternoon to sunset | 30-60% output | guest photography and arrival energy |
| Night ambient | between shows | 20-50% output | dwell time, atmosphere |
| Night show | scheduled showtimes | scene-dependent 40-100% peaks | aerial content and spectacle |
| Maintenance | staff-controlled | test patterns and diagnostics | service and commissioning |

---

## Data and Control System

Recommended hierarchy:

```text
Show control server
  TouchDesigner / MadMapper / Resolume / custom playback

Lighting network
  fiber backbone to field cabinets
  Art-Net / sACN control

Zone cabinets
  power distribution
  network switches
  environmental monitoring

Module controllers
  control 16 stems per block
  report temperature, moisture, voltage, fault status
```

The content pipeline should be built around the exact field geometry:

1. Survey final ring and walkway coordinates.
2. Assign every 600mm block an address.
3. Assign each installed LED stem a mapped position.
4. Create a top-down pixel map.
5. Test with drone or balloon-height calibration.
6. Adjust content for real-world viewing distance, haze, and gondola movement.

---

## Rough Cost Estimate - LED Field Hardware

These are early investor-level ranges, not supplier quotes. They are based on current online comparable products plus a custom-hardware uplift for desertized blocks, stems, tulip heads, sealing, controllers, structural framing, installation, and commissioning.

Investor-facing numbers should be shown in AED. USD is included only because many LED suppliers quote in USD.

### Researched Supplier Price Ranges (April 2026)

Web pricing research, normalized to AED at 1 USD = 3.6725 AED. These are observed market ranges for comparable products; final supplier quotes will narrow the bands.

| Component | Low | Mid | High | Notes |
|---|---:|---:|---:|---|
| Basic 12-30mm WS2811/WS2812B addressable RGB outdoor pixel (IP67) | AED 0.4 | AED 0.8 | AED 1.5 | Alibaba bulk, 1000+ pieces |
| Premium 30mm IP68 outdoor RGBW pixel (UCS2904 / SK6812 class) | AED 2.2 | AED 3.7 | AED 5.5 | landscape/permanent grade |
| DMX commercial point light | AED 4.4 | AED 7.3 | AED 10.3 | facade-grade |
| Custom tulip head with addressable RGBW LED + UV-resistant diffuser, at 100k volume | AED 8 | AED 14 | AED 22 | includes amortized tooling |
| 16-channel addressable LED driver in IP67 puck | AED 110 | AED 200 | AED 320 | per-cell electronics |
| 9-channel addressable LED driver in IP67 puck | AED 75 | AED 140 | AED 230 | per-cell electronics |
| Pixel controller (Advatek PixLite 16 / E16-S Mk3 class) | AED 4,000 | AED 8,000 | AED 14,000 | each, 16k pixels per controller |
| Meanwell ELG/HLG 600W IP67 24V power supply | AED 440 | AED 660 | AED 950 | bulk pricing |
| Outdoor Cat6 / DMX hybrid cable | AED 1.5 | AED 3.0 | AED 6.0 | per meter installed |
| Single-mode fiber outdoor | AED 1.5 | AED 4.0 | AED 8.0 | per meter installed |
| Polycarbonate / silicone hybrid stem (300mm avg, with internal wiring) | AED 6 | AED 12 | AED 22 | each, custom tooled |
| Aluminum 6063 grid frame (50-80mm hollow profile) | AED 30 | AED 55 | AED 95 | per linear meter |
| Outdoor transparent LED mesh (P10-P15) | AED 2,200 | AED 3,700 | AED 5,500 | per sq m, mid-grade |
| Walkable laminated tempered glass with anti-slip coating | AED 4,000 | AED 6,500 | AED 11,000 | per sq m installed |
| LECA aggregate (raw) | AED 65 | AED 65 | AED 90 | per cubic meter, FOB UAE supplier |
| Site-cast LWAC mix (finished, including labor and curing) | AED 700 | AED 1,100 | AED 1,600 | per cubic meter |
| Yard-precast LWAC panel (finished, delivered, set) | AED 950 | AED 1,400 | AED 2,000 | per cubic meter |
| CIP normal-weight reinforced concrete C30/C40, Abu Dhabi | AED 480 | AED 650 | AED 900 | per cubic meter delivered, Apr 2026 |

See the Pricing Sources & References appendix at the end of this document for the underlying citations.

### Unit Economics by LED Density

Working unit count: **6,175 grid units**.

#### LED-density-dependent costs (mid-range, AED M)

| Cost Component | 9-LED variant | 16-LED variant |
|---|---:|---:|
| LED tulip heads (incl. amortized tooling) | 1.83 (55,575 × AED 33) | 3.46 (98,800 × AED 35) |
| Stems with internal wiring | 0.67 (55,575 × AED 12) | 1.19 (98,800 × AED 12) |
| Per-cell electronics (driver + IP67 puck) | 0.93 (6,175 × AED 150) | 1.36 (6,175 × AED 220) |
| Power supplies (24V outdoor IP67) | 0.36 | 0.60 |
| Pixel controllers (Advatek-class, 4-7 units) | 0.04 | 0.06 |
| LED-related installation labor | 1.00 | 1.50 |
| Commissioning, calibration, mapping | 0.30 | 0.40 |
| Density-related spares (heads, stems, drivers) | 0.70 | 1.20 |
| **Density subtotal (mid)** | **AED 5.83M** | **AED 9.77M** |

The density delta at mid-range is roughly **AED 4M** in favor of the 9-LED variant.

#### LED-density-dependent costs - low and high ranges

| Variant | Low | Mid | High |
|---|---:|---:|---:|
| 9-LED | AED 4.1M | AED 5.83M | AED 8.7M |
| 16-LED | AED 6.8M | AED 9.77M | AED 14.6M |

### Substructure Cost by Framing Option

Substructure here = field substrate + frame grid + civil base + drainage + cable raceways + stem-socket integration. **Option C also includes the sealed 600mm block product.**

| Framing Option | Low | Mid | High | Key drivers |
|---|---:|---:|---:|---|
| C - raised frame + sealed blocks | AED 3.1M | **AED 4.6M** | AED 6.8M | sealed block manufacturing dominates; raised structural deck adds ~AED 1.4M |
| D - modular open-frame grid on prepared ground | AED 2.0M | **AED 3.2M** | AED 4.6M | aluminum frame + node sockets + sub-base prep |
| E1 - cast-in-place reinforced concrete pad | AED 3.0M | **AED 4.6M** | AED 6.7M | rebar, formwork, hot-weather cure, frame-cast-in coordination |
| E2 - yard-precast LWAC panels | AED 2.7M | **AED 4.1M** | AED 6.0M | factory panel + transport + bedding + jointing |
| E3 - site-cast LWAC panels | AED 2.3M | **AED 3.6M** | AED 5.4M | site casting yard + LWAC + bedding + jointing |

### Shared / Common Costs (independent of density and framing)

| Item | Low | Mid | High |
|---|---:|---:|---:|
| 3m × 17.4m walkway (mesh + glass + sub-frame + drainage) | AED 0.45M | AED 0.7M | AED 1.1M |
| Show server, zone cabinets, network switches, content tooling | AED 0.25M | AED 0.4M | AED 0.6M |
| Power distribution mains, cabinets, surge/earthing | AED 0.20M | AED 0.30M | AED 0.45M |
| Common civil site prep beyond substructure | AED 0.25M | AED 0.40M | AED 0.60M |
| Project management, design, engineering | AED 0.70M | AED 1.10M | AED 1.65M |
| Logistics, shipping, duties (varies with density) | AED 0.45M | AED 0.75M | AED 1.20M |
| General install labor, site supervision | AED 0.40M | AED 0.60M | AED 0.95M |
| Common spares, cabling, consumables | AED 0.20M | AED 0.30M | AED 0.45M |
| Contingency at ~15% of materials and civil | AED 1.10M | AED 1.65M | AED 2.50M |
| **Shared subtotal** | **AED 4.0M** | **AED 6.20M** | **AED 9.50M** |

### Combined Total Installed System (Mid-Range, AED M)

This is the matrix shown at the top of the document, derived as `density + substructure + shared` for each combination.

| | C (raised+blocks) | D (open frame) | E1 (CIP pad) | E2 (yard-precast LWAC) | E3 (site-cast LWAC) |
|---|---:|---:|---:|---:|---:|
| **9-LED** | 16.5 | 13.8 | 15.4 | 14.9 | 14.4 |
| **16-LED** | 22.5 | 19.8 | 21.4 | 20.9 | 20.4 |

### Combined Total Installed System (Low - Mid - High, AED M)

| Combination | Low | Mid | High |
|---|---:|---:|---:|
| 9-LED × C | 11.2 | **16.5** | 24.6 |
| 9-LED × D | 9.8 | **13.8** | 20.6 |
| 9-LED × E1 | 11.0 | **15.4** | 22.7 |
| 9-LED × E2 | 10.6 | **14.9** | 22.0 |
| 9-LED × E3 | 10.2 | **14.4** | 21.4 |
| 16-LED × C | 13.9 | **22.5** | 30.9 |
| 16-LED × D | 12.5 | **19.8** | 26.9 |
| 16-LED × E1 | 13.7 | **21.4** | 29.0 |
| 16-LED × E2 | 13.4 | **20.9** | 28.3 |
| 16-LED × E3 | 13.0 | **20.4** | 27.7 |

### Cleaner Investor Range

For investor conversation, use:

```text
LED field installed system, recommended pairing (E3 + 16-LED):
approx. AED 18M - 24M target range
Risk allowance: up to AED 28M before supplier quotes

Lower-cost pilot pairing (D + 9-LED):
approx. AED 12M - 16M target range
Risk allowance: up to AED 21M
```

USD equivalent at 3.6725 AED/USD:

```text
Flagship pairing: approx. USD 4.9M - 6.5M target, USD 7.6M risk
Pilot pairing:    approx. USD 3.3M - 4.4M target, USD 5.7M risk
```

### Spares & Commissioning Stock

Recommended spare allocation, sized for the first 18-24 months of operation. The most exposed components (tulip heads) carry the highest spare ratio because they sit fully outdoors under UAE sun and dust. The "Approx. Spare Quantity" column shows quantities for both density variants.

| Component | Spare Ratio | Rationale | Quantity (9-LED) | Quantity (16-LED) |
|---|---:|---|---:|---:|
| Tulip heads (Closed and Open variants combined) | **8% of installed nodes** | most UV-exposed, hot-swappable, 2-3 year service life | ~4,450 heads | ~7,900 heads |
| Stems (full assembly) | **3% of installed nodes** | flex fatigue, accidental contact | ~1,670 stems | ~2,960 stems |
| Per-cell electronics module | **5% of installed cells** | thermal stress, surge events | ~310 modules | ~310 modules |
| Frame sections / connectors (Options D and E1-E3) | **2% of installed length** | install damage and future repair | per BoM | per BoM |
| Sealed base blocks (Option C only) | **1% of installed blocks** | impact damage or flooding | ~62 blocks | ~62 blocks |
| Power supplies, fiber transceivers, switches | **5% of installed count** | supplier lead times | per BoM | per BoM |
| Cabling, gaskets, fasteners, connectors | **5-10% of installed length** | consumables | per BoM | per BoM |
| Tulip head molds / tooling | hold molds for **at least 5 years** | re-running molds on demand is cheaper than waiting on long-lead supply | n/a | n/a |

The spares budget is captured in the **density-related spares** line of the unit economics table above (AED 0.7M for 9-LED, AED 1.2M for 16-LED at mid). Two operational rules:

1. **First-year tulip refresh budget** - assume 3-5% of installed heads are swapped in year one as commissioning catches early failures and dust-related fogging. Plan a quarterly walk-through.
2. **Rolling spare floor** - never let on-site spare stock fall below 50% of the original allocation without re-ordering. Lead times from Asia for custom tulip molds and per-cell electronics can run 8-14 weeks.

### Cost-Control Levers

If the budget needs to come down further:

- **Choose 9-LED density** - saves ~AED 4M at mid-range vs 16-LED
- **Choose Option D or E3** for substructure - saves ~AED 1-1.4M vs C / E1
- Use cluster control instead of individual stem control in pilot phase (saves ~AED 0.4M)
- Keep tulip head variants to two molds (already in spec)
- Make the first field 50m diameter instead of 60m (saves ~25% of LED count)
- Keep walkway content low-resolution and atmospheric (saves ~AED 0.2M on mesh)
- Develop content that reads through motion and color, not dense video detail (allows cluster control)
- Defer pixel-mapped artist commissions to year two; launch with abstract shows

---

## Rough Cost Estimate - Content Shows

The content package should be budgeted separately from hardware.

Because the field is not a normal rectangular screen, the first content package needs creative development, technical mapping, testing, calibration, and sound design. Once the mapping pipeline exists, future shows become cheaper.

### Market Benchmarks

Current animation and motion content benchmarks vary widely:

- freelancers: roughly **$500-$3,000 per minute** for 3D animation
- small studios: roughly **$3,000-$10,000 per minute**
- professional 3D animation companies: roughly **$8,000-$25,000+ per minute**
- premium cinematic work can go much higher
- sound design and music can add **$1,000-$5,000+** per show or package

For this project, normal per-minute animation rates are only a starting point. The field requires custom pixel-map adaptation, aerial testing, and show-control integration.

### Recommended Launch Content Budget

| Content Item | Estimate |
|---|---:|
| Creative direction, style frames, show bible | AED 150k-370k |
| Technical mapping pipeline and calibration | AED 185k-550k |
| 3-show launch package | AED 550k-1.3M |
| 5-show launch package | AED 920k-2.2M |
| Sound design / music package | AED 90k-370k |
| On-site testing and revisions | AED 150k-440k |

### Cleaner Investor Range

For investor discussion, use:

```text
Initial content system + 3-5 launch shows:
approx. AED 1.3M-3.3M

Premium cultural launch package:
approx. AED 3.7M-5.5M
```

Ongoing content refresh:

```text
New seasonal show:
approx. AED 185k-920k each
```

This range depends heavily on whether the show is abstract/generative, artist-led, 2D motion design, 3D cinematic, or sponsor-driven.

---

## ROI Model - Investor View

This model estimates incremental return from the LED field and night program. It should not double-count existing balloon sightseeing revenue unless the investor is funding the entire attraction.

### Revenue Streams Created or Improved by the LED Field

| Revenue Stream | Description |
|---|---|
| Night garden pass | paid ground access to the LED field and scheduled shows |
| Balloon art-show premium | higher ticket price or upgrade fee for show-synced balloon flights |
| Sponsorship | branded show slots, seasonal sponsor canvases, national/cultural partners |
| Private events | VIP flights, corporate events, product launches, exclusive show nights |
| F&B / retail uplift | longer dwell time from guests waiting for multiple shows |
| Content refresh | seasonal return visits driven by new shows |

### Ticket Market Reference

Current UAE tethered balloon references support a premium pricing position:

- Dubai Balloon Explorer adult pass is listed around **AED 195**
- Sunrise pass around **AED 220**
- Express pass around **AED 295**
- exclusive private flight from about **AED 2,995**

Canvas From The Sky should not be priced as a normal viewpoint. The LED show, night garden, and cultural content justify a separate night-pass product and a premium balloon-show ticket.

### Base ROI Assumptions

Use these as pitch-stage assumptions only:

| Variable | Conservative | Base Case | Strong Case |
|---|---:|---:|---:|
| Operating nights per year | 240 | 280 | 300 |
| Night garden guests / night | 400 | 800 | 1,200 |
| Average night pass | AED 95 | AED 125 | AED 150 |
| Balloon show riders / night | 250 | 400 | 550 |
| Incremental balloon premium | AED 100 | AED 150 | AED 200 |
| F&B/retail contribution per garden guest | AED 20 | AED 30 | AED 40 |
| Sponsorship / year | AED 2M | AED 4M | AED 7M |
| Private events / year | AED 1M | AED 2M | AED 4M |

### Annual Incremental Revenue Estimate

| Revenue Stream | Conservative | Base Case | Strong Case |
|---|---:|---:|---:|
| Night garden pass | AED 9.1M | AED 28.0M | AED 54.0M |
| Balloon show premium | AED 6.0M | AED 16.8M | AED 33.0M |
| F&B/retail contribution | AED 1.9M | AED 6.7M | AED 14.4M |
| Sponsorship | AED 2.0M | AED 4.0M | AED 7.0M |
| Private events | AED 1.0M | AED 2.0M | AED 4.0M |
| **Total annual incremental revenue** | **AED 20.0M** | **AED 57.5M** | **AED 112.4M** |

### EBITDA and Payback Estimate

Assume the LED field and content launch package require:

```text
Target CAPEX:
AED 18M-35M

Higher-risk CAPEX allowance:
AED 40M-45M
```

Assume operating expenses include staffing, power, cleaning, maintenance, show operations, insurance allocation, content refresh, and spares.

| Scenario | Revenue | EBITDA Margin Assumption | Annual EBITDA | Simple Payback |
|---|---:|---:|---:|---:|
| Conservative | AED 20.0M | 35-45% | AED 7.0M-9.0M | approx. 3-5 years |
| Base Case | AED 57.5M | 45-55% | AED 25.9M-31.6M | approx. 1-2 years |
| Strong Case | AED 112.4M | 50-60% | AED 56.2M-67.4M | under 1 year if demand is proven |

### Recommended Investor Claim

Use the base case carefully:

> With AED 18M-35M target CAPEX, the LED field can plausibly pay back in 1-3 years if the night-pass model, show premium, sponsorship, and private-event strategy are executed well.

Avoid promising the strong case. Keep it as upside.

### ROI Risks

- weather shutdowns reduce balloon-linked revenue
- content must be good enough to create repeat visits
- maintenance cost may rise if custom components fail faster than expected
- sponsorship depends on cultural positioning and government/private partner interest
- the night pass needs F&B, seating, shade/cooling, and guest-flow design to maximize dwell time
- first-year marketing spend may be higher than steady-state years

### ROI Strategy

The best ROI path is not only selling more balloon rides. It is turning the site into a night destination:

```text
Ground night pass
+ scheduled shows
+ premium balloon upgrade
+ sponsor canvases
+ F&B dwell time
+ private events
= diversified revenue beyond balloon capacity
```

This matters because balloon capacity is limited. The LED field creates revenue even when the balloon is sold out, between flights, or temporarily grounded by weather.

---

## Prototype Roadmap

### Phase A - Bench Prototype

Goal: prove one complete 600mm block.

Scope:

- 1-4 working 600mm modules
- 4 x 4 stem grid
- adjustable stem height system
- flexible sway test
- 2 tulip head shapes
- plastic-capped square edge-block portions for edge-condition testing
- elevated frame mock-up
- heat, dust, water, UV, and cleaning tests

Decision gates:

- final stem height range
- locking mechanism
- tulip shape family
- 2-contact electrical connection
- base material and sealing
- airflow gap and frame height

### Phase B - Garden Prototype

Goal: prove the ground experience and service logic.

Recommended scale:

- 8-10m test garden
- 50-100 modules
- up to 800-1,600 stem lights
- one short path segment with LED mesh and glass
- controlled height randomness
- basic content loops

Decision gates:

- emotional effect at ground level
- maintenance workflow
- walking safety
- real heat profile
- visibility from drone/elevated camera

### Phase C - Investor Pilot

Goal: prove aerial readability and investor confidence.

Recommended scale:

- 20-30m outer diameter pilot ring
- proportional inner void
- 500-1,500 modules
- one complete radial walkway
- 2-3 short shows
- balloon-height or crane/drone validation

Decision gates:

- content readability from height
- cost per installed square meter
- failure rate
- install speed
- maintenance staffing
- sponsor/demo event value

---

## Open Decisions

These need to be finalized before supplier engagement. **The first two are the CEO-level decisions** captured in the CEO Decision Summary at the top of this document.

1. **Framing option** - C (raised + sealed blocks) vs D (open frame, ground level) vs E1 (CIP pad) vs E2 (yard-precast LWAC) vs E3 (site-cast LWAC)
2. **LED density** - 9-LED (3 x 3, 200mm pitch) vs 16-LED (4 x 4, 150mm pitch)

Other open decisions:

- final field diameter remains 60m or value-engineered smaller
- exact route and finish of the **3m walkway** (mesh-and-glass build-up, content grade)
- structural frame material (extruded aluminum vs galvanized steel) and profile height
- stem height range and locking detail
- flex material: polycarbonate, silicone hybrid, or composite stem
- two tulip head molds
- individual stem control vs grouped control
- whether walkway LED mesh is show-grade or atmospheric only
- target content package: 3 shows or 5 shows for launch
- supplier shortlist and prototype RFQ
- patent filing before manufacturer meetings
- spare-stock owner: site team vs central depot, and the re-order trigger
- (E2 / E3 only) UAE precaster shortlist and casting yard logistics
- (E3 only) on-site QC consultant and hot-weather pour windows

---

## Recommended Position for Abu Dhabi Investors

The updated design is easier to defend:

> A 60m illuminated aerial canvas built on a 600mm desert-ready grid of 6,175 light units (up to 98,800 LED stem nodes), with a glowing glass walkway leading guests across a 3m path to the balloon platform.

Investor talking points:

- lower-density system is more realistic and maintainable
- up to 98,800 LED stem nodes (16-LED variant) create a major spectacle; the 9-LED variant at 55,575 nodes is a 36% lower-cost alternative for budget-pressured launch
- 600mm grid units reduce manufacturing and installation complexity
- five framing options give the program flexibility - sealed modular blocks for serviceability, ground-level open-frame for relocatable pilots, or one of three flush-pad variants (CIP, yard-precast LWAC, site-cast LWAC) for a permanent flagship with the cleanest aerial reading
- recommended Abu Dhabi flagship pairing: **Option E3 + 16-LED at AED ~20.4M mid-range** (USD ~5.5M) all-in installed
- recommended pilot pairing: **Option D + 9-LED at AED ~13.8M mid-range** (USD ~3.8M) all-in installed
- raised frame solves airflow, water, and cable-management concerns
- adjustable flexible stems create a premium ground-level garden
- multiple nightly shows support night-pass revenue
- content can rotate without rebuilding hardware
- the system can start as a pilot and scale to a destination attraction

The key message: this is not a one-time lighting installation. It is permanent cultural infrastructure with repeatable content revenue.

---

## Appendix - Pricing Sources & References

All prices in this document are pre-quote engineering estimates anchored on the supplier ranges below, gathered from web search in **April 2026**. Final supplier RFQs will narrow the bands and may produce material revisions to specific line items. Currency conversion: **1 USD = 3.6725 AED** (UAE dirham is dollar-pegged).

### Outdoor RGB / RGBW LED Pixel Nodes

- WS2811 30mm pixel point lights, IP67/IP68, addressable, outdoor: bulk pricing observed at approximately **USD 0.10 - 0.40 per unit** for orders of 1,000+ pieces ([Alibaba](https://www.alibaba.com/showroom/30mm-ws2811-led-pixel-point-light.html), [Amazon Alitove](https://www.amazon.com/ALITOVE-LED-Individually-Addressable-Waterproof/dp/B01AG923GI))
- 30mm UCS2904 / SK6812 RGBW IP68 outdoor permanent: approximately **USD 0.60 - 1.50 per unit** at bulk volume ([SuperLightingLED](https://www.superlightingled.com/dc1224v-4w-high-power-digital-sk6812-led-rgbw-pixel-light-dot-p-5596.html), [BTF-Lighting](https://www.btf-lighting.com/products/1-sk6812-rgbw-4-in-1-pixels-individual-addressable-led-strip-dc5v))
- DMX commercial point lights / facade-grade: approximately **USD 1.20 - 2.80 per unit**
- Custom tulip head with addressable RGBW + UV diffuser at 100k volume: estimated **USD 2.20 - 6.00 per assembly** including amortized tooling

### Pixel Controllers (Art-Net / sACN)

- Advatek **PixLite 16 Mk2** drives up to 16,320 RGB pixels per controller; **PixLite E16-S Mk3** offers 96 universes ([Advatek product page](https://www.advateklighting.com/products/shop/pixlite-16-mk2), [E16-S Mk3](https://www.advateklighting.com/products/e16-s-mk3))
- Distributor pricing not publicly listed - tailored quotes through Advatek and resellers like [Environmental Lights](https://www.environmentallights.com/20589-pixe16s3.html), [Moss LED](https://www.mossled.com/products/pixlite-e16-s-mk3), and [Diode LED](https://www.diodeled.com/advatek-s-pixlite-led-pixel-controllers.html)
- Industry typical retail: USD 700 - 1,400 per professional controller

### Power Supplies (Outdoor IP67)

- **Meanwell ELG / HLG / LPV / XLG series**, 5V to 48V, IP67-rated, 15W to 600W ([Meanwell catalog](https://led.meanwell.com/productSeries.aspx), [Wired4Signs distributor pricing](https://www.wired4signsusa.com/collections/meanwell-led-power-supplies))
- LPV-100-24 (100W 24V IP67): roughly USD 30-50 per unit retail, USD 20-35 wholesale
- HLG-600H-24 (600W 24V IP67): roughly USD 120-180 per unit
- ELG-240H-24 (240W 24V IP67): roughly USD 60-90 per unit

### Outdoor Transparent LED Mesh / Walkway Mesh

- General **transparent LED screen pricing: USD 600 - 2,600 per square meter** ([KTR Light 2026 guide](https://www.ktr-light.com/transparent-led-screen-price-2026/), [DOIT Vision](https://www.doitvision.com/how-much-does-transparent-led-screen-cost/), [iamledwall](https://iamledwall.com/how-much-does-transparent-led-screen-cost/))
- LED mesh display: USD 800 - 1,500/sqm typical
- Outdoor billboard P10-P15 transparent: up to USD 6,000/sqm at the high end
- For our walkway under-glass application, mid-range mesh is sufficient

### Walkable Laminated Tempered Glass

- Tempered glass flooring: **USD 50 - 100 per sq ft** = USD 540 - 1,080/sqm
- Laminated glass flooring: **USD 100 - 200 per sq ft** = USD 1,080 - 2,160/sqm
- Tempered + PVB interlayer laminate: USD 9-18/sqft material; with EVA: USD 15-30/sqft material; installation adds USD 5-25/sqft
- ([Hals International cost guide](https://halsinternational.com/how-much-does-glass-flooring-cost/), [Mannlee CW 2026 guide](https://www.mannleecw.com/glass-flooring-costs/), [Fab Glass cost guide](https://www.fabglassandmirror.com/blog/tempered-glass-cost/), [GBA Products GlassWalk](https://www.gbaproducts.com/glasswalk-structural-glass-floor))

### Lightweight Aggregate Concrete (LECA / LWAC) - UAE Specific

- **LECA aggregate (raw): AED 65/m³ FOB** UAE supplier ([UAE TradeKey listing](https://uae.tradekey.com/light-expanded-clay-aggregate.htm))
- UAE LECA suppliers: **Leca Building Material LLC**, [Leca AE](https://leca.ae/), and others ([Aeconline LECA listing](https://www.aeconline.ae/13/company/21/90/97/product634200_13.html))
- UAE construction context (2025 baseline): Dubai overall construction cost ~USD 1,926/sqm; villa standard finishes AED 300-500/sqft, luxury AED 900-1,400/sqft ([Turner & Townsend / Greenarch UAE precast comparison](https://greenarchworld.com/building-construction/pre-cast-vs-conventional/))
- Normal-weight ready-mix concrete (Abu Dhabi): historical reference around **AED 480/m³**; expect AED 500-700/m³ in 2026 ([CEIC UAE construction price index](https://www.ceicdata.com/en/united-arab-emirates/average-construction-material-prices/construction-material-price-average-dubai-concrete-ready-mix-sulphate-resistance-neutin-40))
- UAE precasters to evaluate: [Dubai Precast](https://www.dubaiprecast.ae), [Gulf Precast](https://www.gulfprecast.ae/), ACICO, RAK Precast, Emirates Precast ([UAE precast directory](https://www.yellowpages-uae.com/uae/abu-dhabi/precast-concrete))

### Aluminum Extrusion Frame

- 6063 T-slot industrial profile, ~50mm sections: **USD 3 - 15/m bulk** depending on profile size and quantity ([80/20 Inc](https://8020.net/), [TSLOTS by Bonnell Aluminum](https://tslots.com/), [Online Metals](https://www.onlinemetals.com/en/buy/aluminum-t-slot), [Framing Tech](https://www.framingtech.com/shop/category/t-slot-extrusions-4))
- Custom 50-80mm hollow extruded aluminum frame for outdoor LED: estimated USD 8 - 25/m at scale

### Polycarbonate / Acrylic Stems (Light Pipes)

- Clear polycarbonate / acrylic tubes for LED diffusion: **starting around USD 0.30/m** at bulk ([Alibaba diffuse PC tubes](https://www.alibaba.com/showroom/diffuse-polycarbonate-tubes.html), [TAP Plastics](https://www.tapplastics.com/product/plastics/plastic_rods_tubes_shapes/lighting_white_cast/601))
- UV-stabilized cast acrylic for outdoor: roughly USD 1 - 3/m at small diameter
- Custom hybrid PC/silicone stem with internal wiring and connectors: estimated USD 1.50 - 6.00 per stem at scale

### IP67 Outdoor Junction Boxes / Enclosures

- Die-cast aluminum IP67 enclosures: USD 4 - 30 per unit retail ([Polycase IP67](https://www.polycase.com/ip67-enclosures), [Bud Industries](https://www.budind.com/nema-ip-rated-boxes-ip-67/?load=true), [Delvalle Box](https://www.delvallebox.com/en/outdoor-heavy-duty-electrical-enclosures-ip/ip67))
- Custom 100×100×50mm IP67 puck for our application: estimated USD 2 - 8 at bulk volume

### Cabling

- Cat6 outdoor cable: **USD 0.30 - 1.00 per foot** ($0.90-$1.55/ft installed); installation cost dominates ([Monoprice Cat6 guide](https://www.monoprice.com/p/resources/cat6-cable-installation-costs-what-you-really-pay-for), [Fixr CAT-6](https://www.fixr.com/costs/upgrading-to-cat6-cabling))
- Single-mode fiber optic cable: **USD 0.06 - 0.92 per foot** ($1-$6/ft installed) ([Cables Plus USA](https://store.cablesplususa.com/cabling-insider-blog/fiber-optic-cable-cost/), [The Network Installers](https://thenetworkinstallers.com/blog/fiber-optic-installation-cost/))

### Notes on the Estimates

1. The **mid-range** column in the cost model uses central values from the supplier ranges above plus typical UAE installation labor / civil overheads.
2. The **low** column assumes aggressive supplier negotiation, single-source manufacturing for tulip heads, and a leaner installation scope.
3. The **high** column assumes premium components, multi-source supply, generous contingency, and full UAE PM/EPC overhead.
4. **All numbers should be re-validated** with at least three RFQs per major line item before the CEO's final commitment. UAE supplier landscape (LECA, precast, ready-mix, electrical) is competitive and quotes will move the bands.
5. Prices were captured in **April 2026**; LED component prices in particular fall ~5-15% per year and a recheck near procurement time is recommended.
