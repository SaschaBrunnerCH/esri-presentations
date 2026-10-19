# AI Across the Development Cycle

22 slides on AI-assisted development lessons and patterns from Esri engineers.

[Slide source](./slides.md) · [Published presentation](https://saschabrunnerch.github.io/esri-presentations/2026/ai-infused-development-lessons-patterns/)

## Run locally

Use Node.js 22.22.1 or later and pnpm 12.6.0. From the repository root:

```sh
pnpm install --frozen-lockfile
cd 2026/ai-infused-development-lessons-patterns
pnpm run start
```

Open <http://localhost:3030>. Presenter notes contain speaking reminders and source cues.

## Build and export

```sh
pnpm run build
pnpm run export
```

Run these in the presentation directory. `pnpm run preview` serves the build.
For PDF export, install Chromium once from the repository root:
`pnpm exec playwright install chromium`.

Videos are in `public/media/`. On slide 15, the video appears and plays on the
seventh and final click.

## Examples and assets

Presenter notes distinguish reported practices, presenter examples and illustrations.
Practical resource: [agentic-starter-ts](https://github.com/SaschaBrunnerCH/agentic-starter-ts).

The final feedback slide uses the [shared original artwork](../.meta/assets/README.md).

The Esri event artwork follows the [Using Frameworks presentation](../app-development-components-frameworks/).
The Slidev logo comes from `@slidev/client`; the
[Playwright logo](https://github.com/microsoft/playwright/blob/main/packages/web/src/assets/playwright-logo.svg)
and [Firefox logo](https://github.com/mozilla/protocol-assets/tree/main/logos/firefox/browser)
come from their official projects. Other workflow diagrams were created for this deck.

The [Pages workflow](../../.github/workflows/deploy.yml) publishes the presentations.
