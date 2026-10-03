# AI Across the Development Cycle

Sascha Brunner's 21-slide presentation on AI-infused development lessons and
patterns from Esri engineers, with examples across planning, analysis, design,
building, testing, deployment and maintenance.

[Slide source](./slides.md)

## Run locally

Use Node.js 22.22.1 or later and pnpm 12.6.0. Both decks share dependencies,
the lockfile, and dependency overrides at the repository root. From the
repository root:

```sh
pnpm install --frozen-lockfile
cd 2026/ai-infused-development-lessons-patterns
pnpm run start
```

The presentation opens at <http://localhost:3030> by default. Presenter notes contain short
reminders and product-based source cues.

## Build and export

```sh
pnpm run build
pnpm run export
```

Run these commands in the presentation directory. `pnpm run preview` serves the
production build. The deck uses the shared Shiki setup in `../.meta` and its own
`slide-bottom.vue` and `theme.css` for presentation styling.

PDF export requires a Playwright Chromium installation. Install the browser once
from the repository root with `pnpm exec playwright install chromium`.
The 37-second Scene Viewer
recording on slide 9 is included in `public/media/`.

The [Pages workflow](../../.github/workflows/deploy.yml) builds this deck at
`/2026/ai-infused-development-lessons-patterns/` alongside the Using Frameworks
deck and links it from the presentation index.

## Examples and assets

The deck distinguishes reported engineering practices, presenter examples and
illustrative workflows. The Scene Viewer example shows an agent controlling a
browser. The rendering comparison and cross-SDK conversion are illustrations;
they do not claim measured results or a completed conversion.

The Esri event artwork follows the [Using Frameworks presentation](../app-development-components-frameworks/).
The Slidev logo comes from `@slidev/client`; the
[Playwright logo](https://github.com/microsoft/playwright/blob/main/packages/web/src/assets/playwright-logo.svg)
and [Firefox logo](https://github.com/mozilla/protocol-assets/tree/main/logos/firefox/browser)
come from their official projects. Other workflow diagrams were created for this deck.
