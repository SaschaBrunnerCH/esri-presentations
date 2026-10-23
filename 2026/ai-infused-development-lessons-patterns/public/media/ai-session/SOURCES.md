# Extracted AI session assets

Source: the supplied `EUDTC 2026 - AI-Infused Development Lessons Learned and Patterns from Esri Engineers.pptx`, kept locally outside Git. Original Esri artwork, copyright notices, credits and resource links are preserved.

The added slides keep their words, code, hyperlinks and text reveal steps in `original-before.md` and `original-after.md`. `ai-session.css` preserves the original positions and typography. The Vue components in `components/native/SlideNN.vue` contain the extracted artwork and editable rectangles, ellipses, lines, paths and arrows, with no text or code. `native-session.json` records entrance/exit visibility for these vector graphics. The PowerPoint source is unchanged; no speaker notes are imported.

The `assets/` directory contains only extracted photographs, screenshots, logos, icons and background artwork. It does not contain rendered presentation pages. PowerPoint image transparency and duotone recoloring are preserved as SVG opacity and color filters, including dimmed map artwork and translucent arrows. `assets/asset-sources.json` maps every file to its original package path. JPEG and SVG assets retain their original file bytes. PNG assets are kept as PNG or losslessly encoded WebP, choosing the smaller file without resizing.

`copilot-agent.mp4` is the complete 147.733-second recording from `ppt/media/media1.mp4`, source slide 8. It uses H.264 CRF 18, medium preset and faststart, retaining 1920 × 1080, 30 fps and the original AAC audio. It is not trimmed.

PowerPoint slides 17–36 are represented by the existing development-cycle Slidev section and its existing assets. Those slides are unchanged. The eight original hidden slides remain disabled. Raw preparation notes remain outside the public source files.
