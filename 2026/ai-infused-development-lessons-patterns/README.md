# AI-Infused Development: Lessons Learned and Patterns from Esri Engineers

[Download PDF](public/AI-1058_AI-Infused_Development_Lessons_Learned_and_Patterns_from_Esri_Engineers.pdf) · One slide per page, showing the final click state.

Raul Jimenez Ortega · Sascha Brunner

Esri European Developer & Technology Summit 2026

**54 slides covering the full session.** The existing 20-slide “AI across the development cycle” deck retains its visual content and interactions, surrounded by Markdown slides with Vue components for the original artwork and vector graphics. The source text, artwork, examples and order are preserved.

[Full session source](session.md) · [Development-cycle source](slides.md) · [Slide mapping](SESSION_MAP.md) · [Published presentation](https://saschabrunnerch.github.io/esri-presentations/2026/ai-infused-development-lessons-patterns/)

## Run locally

Use Node.js 22.22.1 or later and pnpm 12.6.0. From the repository root:

```sh
pnpm install --frozen-lockfile
cd 2026/ai-infused-development-lessons-patterns
pnpm run start --port 3034
```

Open <http://localhost:3034>. Space or Right arrow advances a build; after the last build it advances to the next slide. Presenter notes contain public presentation cues and source slide numbers. Private preparation material stays in a Git-ignored local backup.

To present just the existing 20-slide section:

```sh
pnpm exec slidev slides.md --port 3035
```

## Build and export

```sh
pnpm run build
pnpm run export
pnpm run export -- --with-clicks
```

Run these in the presentation directory. `pnpm run preview` serves the build. For PDF export, install Chromium once from the repository root:

```sh
pnpm exec playwright install chromium
```

## Preserved content

[session.md](session.md) imports three files in sequence:

- [original-before.md](original-before.md): native recreations of PowerPoint slides 1–16, including introductions, setting the stage and the agent glossary.
- [slides.md](slides.md): the existing 20 slides, with their original visible content, styling, click builds and videos. Their speaker notes have been cleaned for public release. These occupy session pages 17–36, corresponding to PowerPoint slides 17–36.
- [original-after.md](original-after.md): the remaining source slides, including model handoffs, risks, mitigations, wrap-up, resources and closing slides.

The eight slides hidden in the PowerPoint (43 and 56–62) remain disabled in Slidev. They do not appear during the presentation.

The 34 added visible slides and eight disabled source slides keep their titles, paragraphs, bullets, diagram labels, examples, hyperlinks and text reveals in Markdown. Simple code examples use fenced code blocks; rich terminal prompts keep their original emphasis with HTML in Markdown. The content is selectable browser text. Only photographs, screenshots, logos and background artwork are image assets.

To edit wording, bullets, code, links or text reveals, open [original-before.md](original-before.md) or [original-after.md](original-after.md). The `original` attribute identifies the PowerPoint slide. Text click ranges use `$clicks` directly in Markdown. Dim overlays follow the text in Markdown so focus changes darken both the words and their graphics, matching the original drawing order. [ai-session.css](ai-session.css) preserves the source positions and typography; its selectors identify the source slide, shape and paragraph. Longer text edits may need corresponding layout changes.

The files in [components/native](components/native/) contain artwork, rectangles, ellipses, lines, paths and arrows. They contain no slide text or code. [NativeAiSlide.vue](components/NativeAiSlide.vue) provides the artwork layer, a slot for Markdown content and the original video behavior. [native-session.json](native-session.json) records click states for the vector graphics. These Vue components preserve complex diagram geometry while their labels stay in Markdown.

Original entrance and exit effects become click states with the same shapes and text. The timed sequence on source slide 38 is also advanced by clicks, preserving its intermediate scenes. Automatic bullet reveals that have no exits settle on entry. Browser font rendering can differ slightly from PowerPoint, and fade timing is not reproduced. Raw PowerPoint speaker notes are excluded from the public sources; source-slide labels are retained.

Videos appear on the final click on session pages **8, 25 and 31**. Page 8 adds the original full-length Copilot coding-agent demo; pages 25 and 31 retain the existing recordings and behavior. Playback is muted for presenter narration. The new demo retains its original resolution, frame rate, duration and audio, with H.264 video recompressed for a smaller browser asset.

The source PowerPoint, `EUDTC 2026 - AI-Infused Development Lessons Learned and Patterns from Esri Engineers.pptx`, stays local and is ignored by Git. [Asset provenance](public/media/ai-session/SOURCES.md) records the extracted artwork and video.

## Existing examples and assets

Presenter notes in the development-cycle section distinguish reported practices, presenter examples and illustrations. Practical resource: [agentic-starter-ts](https://github.com/SaschaBrunnerCH/agentic-starter-ts).

The section's Esri event artwork follows the [Using Frameworks presentation](../app-development-components-frameworks/). The Slidev logo comes from `@slidev/client`; the [Playwright logo](https://github.com/microsoft/playwright/blob/main/packages/web/src/assets/playwright-logo.svg) and [Firefox logo](https://github.com/mozilla/protocol-assets/tree/main/logos/firefox/browser) come from their official projects. Other workflow diagrams were created for this deck.

The [Pages workflow](../../.github/workflows/deploy.yml) publishes the presentations.
