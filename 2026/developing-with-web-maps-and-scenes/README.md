# ArcGIS Online: Developing with Web Maps and Web Scenes

Kristian Kaesinger, Esri UK · Sascha Brunner, Esri  
Esri European Developer & Technology Summit 2026

**The original content and appearance, with fewer pages:** PowerPoint slides 1–135 are retained in order across 48 Slidev pages. Consecutive build slides become click steps on the same page. The retained content is unchanged, including the section dividers, repeated outlines and closing slides. Slidev pages 49–55, containing the seven unused PowerPoint template slides (136–142), have been removed.

## Run locally

After `pnpm install --frozen-lockfile` at the repository root:

```sh
cd 2026/developing-with-web-maps-and-scenes
pnpm run start --port 3033
```

Open <http://localhost:3033>. Press **Space** or **Right arrow** for the next build state; after the final build, the same key advances to the next page. **Left arrow** goes back. Use Slidev's presenter view for notes and overview for page navigation.

```sh
pnpm run build
pnpm run export
# Include every original build state in the PDF:
pnpm run export -- --with-clicks
pnpm run preview
```

PDF export requires Chromium: `pnpm exec playwright install chromium` from the repository root.

## What is preserved

[slides.md](slides.md) defines page groups and includes presenter notes cleaned for public release, labeled by source slide and click. [SLIDE_MAP.md](SLIDE_MAP.md) maps every retained original slide to its Slidev page. [build-groups.json](build-groups.json) records the same mapping as data.

Each state uses a full-slide, 1920 × 1080 image exported by **Microsoft PowerPoint on Windows**, encoded as lossless WebP. The decoded pixels were checked against every original PNG export. Text, diagrams, code, screenshots, artwork, annotations and credits therefore retain their original appearance. The original PowerPoint remains the editable source; on-slide text in this version is rasterized, rather than editable Markdown or live code.

The embedded Experience Builder recording plays at **page 16, click 5** (original slide 52), in its original position. Playback is muted for presenter narration and has video controls. Leaving the build or page resets playback. The original hyperlinks remain clickable: the specification on **page 5, click 2**, the two demo links on **page 26, click 5**, and the seven social links on **page 47**. QR codes remain part of the unchanged images.

PowerPoint animation timing and transitions within an individual source slide are not reproduced. Each original slide is one preserved state; the existing sequence of source slides supplies the click-through builds.

## Source and credits

The source PowerPoint is kept locally as `2026/EUDTS 2026 - ArcGIS Online - Developing with Web Maps and Web Scenes .pptx` and is excluded from this session’s Git commit. All original acknowledgments and copyright slides remain in the deck. See [asset provenance](public/media/SOURCES.md).
