# Canvas From The Sky - Financial Model Revision for CEO Review

Date: 15 May 2026

## Purpose

This note revises the Canvas From The Sky financial model before updating the investor pitch deck.

The revision reflects three operational changes now being considered:

1. Reduce maximum balloon height from **300m to 150m**.
2. Keep the basket physically sized for 30 passengers, but cap commercial loading at **25 guests per batch**.
3. Make the night experience a faster **20-minute cycle**, equal to **3 batches per hour**.

The goal is to avoid arbitrary revenue reductions and instead show the CEO a calculation-based model.

## Executive Summary

The 150m height reduction should lower pricing power versus the earlier 300m experience. However, the new 20-minute night cycle materially improves throughput.

The strongest conclusion is:

> Lower altitude reduces ARPU, but the faster night cycle protects the business model by increasing nightly batch capacity.

Using the original ARPU as the main case, the revised base case is:

| Metric | Revised Base Case |
|---|---:|
| Annual revenue | **AED 22.2M** |
| EBITDA | **AED 12.4M** |
| EBITDA margin | **56%** |
| Simple payback on AED 25.9M CAPEX | **~2.1 years** |
| 10-year IRR | **~35.0%** |
| 10-year NPV at 8% | **~AED 51.4M** |
| 10-year MOIC | **~4.7x** |

This is lower than the earlier 300m / 30-passenger model, but still commercially attractive. A reduced-ARPU 150m sensitivity is retained as a downside case.

## Previous Model Baseline

The current documentation model in `pitch-blueprint.md` used:

| Assumption | Previous Pitch Model |
|---|---:|
| Max balloon height | 300m |
| Basket capacity used in model | 30 guests |
| Operating days / nights | 300 per year |
| Day rides | 6 rides per day |
| Night rides | 8 rides per night |
| Day blended ARPU | AED 170 |
| Night blended ARPU | AED 361 |
| Base load | 70% |
| Base annual revenue | AED 24.7M |
| Base EBITDA | AED 14.9M |
| Base simple payback | ~1.6 years |

The previous strong case reached AED 39.7M annual revenue. That level now looks too optimistic for the revised operating concept.

## Previous Pitch Model vs Revised Main Case

This table isolates the financial movement from the previous investor pitch model to the revised CEO-review model.

| Metric | Previous Pitch Model | Revised Main Case | Change |
|---|---:|---:|---:|
| Base annual revenue | AED 24.7M | **AED 22.2M** | **-AED 2.5M** |
| Base EBITDA | AED 14.9M | **AED 12.4M** | **-AED 2.5M** |
| EBITDA margin | 60% | **56%** | **-4 pts** |
| Simple payback | ~1.6 years | **~2.1 years** | **+0.5 years** |
| 10-year IRR | ~58% | **~35.0%** | **-23 pts** |
| NPV at 8% | AED 85M | **AED 51.4M** | **-AED 33.6M** |
| MOIC | ~5.5x | **~4.7x** | **-0.8x** |

The revised model is intentionally more conservative, driven by fewer operating days, a 25-guest commercial cap, and more disciplined upside assumptions. The original ARPU is retained because the attraction remains up-to-300m capable.

## Revised Operating Assumptions

| Assumption | Revised Model | Rationale |
|---|---:|---|
| Max balloon height | **150m** | Lower operating altitude; likely easier operational envelope but lower premium-view pricing power |
| Basket commercial cap | **25 guests** | More conservative than full 30-pax physical capacity |
| Operating days / nights | **250 per year** | Higher weather cancellation / operational downtime allowance than the previous 300-day model |
| Day rides | **6 rides per day** | Same day operating structure as previous model |
| Night cycle time | **20 minutes** | New standard night experience |
| Night batches | **16 batches per night** | 3 batches/hour across an assumed ~5.5-hour night window, rounded down |
| All-Access usage factor | **1.4 rides per unique night guest** | Same logic as previous model |
| Aluminum CAPEX | **AED 25.9M** | Single-spec aluminum plate tile model |

## Capacity Impact

The passenger cap reduces per-batch capacity, but the night cycle change increases nightly throughput.

| Capacity Line | Previous Model | Revised Model | Change |
|---|---:|---:|---:|
| Day seat capacity | 6 rides x 30 pax = 180/day | 6 rides x 25 pax = 150/day | -16.7% |
| Night seat capacity | 8 rides x 30 pax = 240/night | 16 batches x 25 pax = 400/night | +66.7% |

This means the day model becomes more conservative, while the night model becomes operationally stronger.

## Pricing Assumption

The main model keeps the previous ARPU because the attraction remains technically capable of 300m. The 150m operating level is a planning and wind-condition assumption, not a new lower-priced product tier.

The investor-facing positioning should be:

> The attraction remains an up-to-300m tethered balloon experience, with operating height determined by wind and safety conditions. For conservative operations planning, the model assumes many cycles operate at 150m, but pricing is held at the original blended ARPU.

| ARPU Line | Previous 300m Model | Revised 150m Model | Change |
|---|---:|---:|---:|
| Day blended ARPU | AED 170 | **AED 170** | 0% |
| Night blended ARPU | AED 361 | **AED 361** | 0% |

Reasoning:

- The product is still designed and marketed as an up-to-300m balloon attraction.
- Operational capping at 150m is driven by wind and safety conditions, not by a lower product promise.
- Night show value is driven by the LED field, show cycle, music/content, and Saadiyat night destination, not altitude alone.
- The All-Access concept remains valuable because the faster 20-minute cycle makes multi-theme viewing easier.

## Scenario Assumptions

| Scenario | Load | Positioning |
|---|---:|---|
| Conservative | 32% | Ramp-up / weather-constrained resilience case |
| Base Case | 58% | Practical steady operating case below the previous 70% benchmark |
| Strong | 73% | Strong demand case, still below the previous full-upside forecast |

Non-ticket revenue has also been trimmed versus the earlier model.

| Non-Ticket Revenue | Conservative | Base Case | Strong |
|---|---:|---:|---:|
| F&B / retail | AED 0.3M | AED 0.7M | AED 1.1M |
| Sponsorship - content + branding | AED 0.7M | AED 1.6M | AED 2.2M |
| Museum partnership + cross-sell | AED 0.1M | AED 0.4M | AED 0.5M |
| Private gondola + VIP events | AED 0.4M | AED 0.8M | AED 1.0M |

## Revenue Calculation

### Formula

Day ticket revenue:

```text
6 rides/day x 25 guests x load x 250 operating days x AED 170 ARPU
```

Night ticket revenue:

```text
16 batches/night x 25 guests x load x 250 operating nights
/ 1.4 rides per unique guest x AED 361 ARPU
```

### Revenue by Scenario

| Revenue Stream | Conservative | Base Case | Strong |
|---|---:|---:|---:|
| Day ticket revenue | AED 2.0M | AED 3.7M | AED 4.7M |
| Night ticket revenue | AED 8.3M | AED 15.0M | AED 18.8M |
| F&B / retail | AED 0.3M | AED 0.7M | AED 1.1M |
| Sponsorship - content + branding | AED 0.7M | AED 1.6M | AED 2.2M |
| Museum partnership + cross-sell | AED 0.1M | AED 0.4M | AED 0.5M |
| Private gondola + VIP events | AED 0.4M | AED 0.8M | AED 1.0M |
| **Total annual revenue** | **AED 11.8M** | **AED 22.2M** | **AED 28.3M** |

## EBITDA and Payback

The model keeps OpEx close to the previous documented structure:

- Conservative OpEx: AED 9.5M
- Base Case OpEx: AED 9.8M
- Strong OpEx: AED 10.1M

| Scenario | Revenue | OpEx | EBITDA | EBITDA Margin | Simple Payback |
|---|---:|---:|---:|---:|---:|
| Conservative | AED 11.8M | AED 9.5M | **AED 2.3M** | 19% | ~11.3 years |
| Base Case | AED 22.2M | AED 9.8M | **AED 12.4M** | 56% | ~2.1 years |
| Strong | AED 28.3M | AED 10.1M | **AED 18.2M** | 64% | ~1.4 years |

## 10-Year Return Estimate

For the base case, this estimate assumes:

- Year 1 resembles the conservative/ramp-up case.
- Year 2 reaches 85% of base EBITDA.
- Year 3 reaches base EBITDA.
- Years 4-10 grow at 4% per year.
- Balloon envelope replacement reserve of AED 2.5M in Years 5 and 10.

| Metric | Revised Base Case |
|---|---:|
| 10-year IRR | **~35.0%** |
| 10-year NPV at 8% | **~AED 51.4M** |
| 10-year MOIC | **~4.7x** |

## Downside Sensitivity: Reduced 150m ARPU

If the CEO or investor committee wants a more conservative pricing sensitivity, use the moderate 150m ARPU haircut below:

| ARPU Line | Main Case | Downside Sensitivity |
|---|---:|---:|
| Day blended ARPU | AED 170 | AED 140 |
| Night blended ARPU | AED 361 | AED 320 |

| Scenario | Revenue | EBITDA | EBITDA Margin | Simple Payback |
|---|---:|---:|---:|---:|
| Conservative | AED 10.5M | AED 1.0M | 9% | ~26.0 years |
| Base Case | AED 19.8M | AED 10.0M | 51% | ~2.6 years |
| Strong | AED 25.3M | AED 15.2M | 60% | ~1.7 years |

Base-case 10-year returns under this downside pricing sensitivity are approximately **27.7% IRR**, **AED 35.3M NPV at 8%**, and **3.7x MOIC**.

## Sensitivity: Night Operating Window

The night cycle is the key driver. If the 20-minute cycle is approved but the nightly window is shorter, ROI changes materially.

| Night Batches / Night | Base Revenue | Base EBITDA | Simple Payback | 10-Year IRR |
|---:|---:|---:|---:|---:|
| 9 batches | AED 15.6M | AED 5.8M | ~4.5 years | ~12.4% |
| 12 batches | AED 18.4M | AED 8.6M | ~3.0 years | ~23.1% |
| 15 batches | AED 21.2M | AED 11.4M | ~2.3 years | ~32.2% |
| 16 batches | AED 22.2M | AED 12.4M | ~2.1 years | ~35.0% |

CEO approval of the intended nightly operating window is therefore critical.

## Key Takeaways for CEO

1. The 150m operating assumption should be reflected through capacity and operating planning, not necessarily through pricing.
2. The 25-pax commercial cap makes the model more conservative and improves guest comfort.
3. The 20-minute night cycle is the main reason the revised model still works.
4. The model is now less aggressive than the previous AED 24.7M base / AED 39.7M strong case.
5. The revised base case still supports a credible investment story: AED 22.2M revenue, AED 12.4M EBITDA, and ~2.1-year payback.

## Approval Questions

Before updating the investor deck, the CEO should confirm:

1. Should the investor model use **150m maximum height** as the new standard?
2. Should the basket be presented as **25 guests per batch**, even if the physical basket remains 30-pax capable?
3. Should the night show be presented as a **20-minute cycle / 3 batches per hour**?
4. Is the assumed night window of **~5.5 hours / 16 batches per night** acceptable?
5. Should the investor pitch keep the original blended ARPU as the main case:
   - Day blended ARPU: AED 170
   - Night blended ARPU: AED 361
6. Should the moderate 150m ARPU haircut be retained only as a downside sensitivity:
   - Day blended ARPU: AED 140
   - Night blended ARPU: AED 320

If approved, update the pitch deck financial section to use:

- Conservative revenue: **AED 11.8M**
- Base Case revenue: **AED 22.2M**
- Strong revenue: **AED 28.3M**
- Base Case EBITDA: **AED 12.4M**
- Base Case payback: **~2.1 years**
- 10-year IRR: **~35.0%**
- 10-year NPV at 8%: **~AED 51.4M**
- 10-year MOIC: **~4.7x**
