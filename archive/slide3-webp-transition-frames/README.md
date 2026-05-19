# Slide 3 — Archived WebP transition frames

80 individual WebP frames (`composite/transition_0001.webp` … `0080.webp`)
that drove the slide 3 altitude animation before it was replaced with five
MP4 clips in `HTML_assets/Vertical Altitude Experience/v2/transitions_mp4/`.

The live deck (`index.html`) no longer references these files. They are
kept here as a fallback in case the MP4 pipeline needs to be reverted;
the JS player can be pointed back at the original frame-by-frame logic
by looking at git history before the `slide3-video-optimization` branch.

Safe to delete once the MP4 implementation is confirmed working in
production review (iOS Safari, desktop Chrome/Safari/Firefox).
