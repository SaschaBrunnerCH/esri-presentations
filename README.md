# Esri presentations

Slides and demo apps for Esri developer events.

[View published presentations](https://saschabrunnerch.github.io/esri-presentations/)

## 2026

- [ArcGIS Maps SDK for JavaScript: App Development with Components – Using Frameworks](2026/app-development-components-frameworks/README.md)  
  Esri European Developer & Technology Summit 2026 · Stefan Schläfli and Sascha Brunner
- [AI Across the Development Cycle](2026/ai-infused-development-lessons-patterns/README.md) · Sascha Brunner

## Quick start

For browser-based demos, presentation editor settings, and Windows/WSL/macOS tab
helpers, follow the [Codespaces setup guide](2026/app-development-components-frameworks/ONLINE_SETUP.md).

Use Node.js 22.22.1 or later and pnpm 12.6.0. The `packageManager` field pins pnpm for this repository.
Install pnpm using the [official setup instructions](https://pnpm.io/installation).
With Corepack available, run `corepack enable pnpm` before the commands below.

```sh
pnpm install --frozen-lockfile
cd 2026/app-development-components-frameworks
pnpm run start
```

Both presentations share the root dependencies and lockfile. To run the AI deck,
use `cd 2026/ai-infused-development-lessons-patterns` after the root install,
then `pnpm run start`. Both decks support `build`, `export`, and `preview`.

Each pnpm demo has its own dependencies and lockfile. See the
[setup guide](2026/app-development-components-frameworks/LOCAL_SETUP.md) for
running demos, building, and browser checks.

## Checks and formatting

From the repository root:

```sh
pnpm run lint
pnpm run format
pnpm run check
```

`lint` checks formatting with Prettier; it does not run ESLint. In each TypeScript
demo, run `pnpm run typecheck` for compiler diagnostics. Run `pnpm run build` in
the presentation or demo directory to create its production build.

After initializing Git, run `pnpm run prepare` to install the staged-file
formatting hook. Git 2.32 or later is required.

`pnpm run check` runs formatting, local Markdown link-target checks and both
production deck builds from one shared list. The PR validation and Pages build
use the same command. It writes the complete presentation site to `dist/`.
Set `PAGES_BASE_PATH=/esri-presentations` to build for the GitHub Pages project
path; the default serves the index at the domain root.

After building, check the site locally:

```sh
pnpm exec playwright install chromium
pnpm exec vite preview --host 127.0.0.1 --port 4173 --strictPort
# In another terminal:
pnpm run check:site http://127.0.0.1:4173/
```

The browser smoke check loads the index and both decks, checks images and plays
a frame of each AI-deck video. It disables Slidev's keep-screen-awake preference
for its headless session. It checks functional loading and media decoding;
it does not establish GPU or physical-device acceptance. Markdown link checks
check local file targets, not external URLs or heading anchors.

## Source and licence

The 2026 Using Frameworks presentation is adapted from
[Max Patiiuk’s Esri presentation repository](https://github.com/maxpatiiuk/esri-dev-summit-presentations/tree/main/2026/using-components-2).
Its [setup guide](2026/app-development-components-frameworks/LOCAL_SETUP.md)
records the source commit and adaptations. See [LICENCE.md](LICENCE.md) and the
licence preserved with the presentation.

## GitHub Pages

[Deploy workflow](.github/workflows/deploy.yml) builds both presentations and publishes
them on pushes to `main`. It can also be started manually from GitHub Actions.
The site includes a presentation index; demo source code remains in the repository.
Pull requests run [presentation checks](.github/workflows/check.yml) without
publishing. After a Pages deployment, a separate browser smoke check tests the
published index, decks and videos. A failed smoke check marks the workflow red
and leaves the deployed version online; it does not automatically roll back.
