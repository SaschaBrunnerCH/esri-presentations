# Esri presentations

Slides and demo apps for Esri developer events.

## 2026

- [ArcGIS Maps SDK for JavaScript: App Development with Components – Using Frameworks](2026/app-development-components-frameworks/README.md)  
  Esri European Developer & Technology Summit 2026 · Stefan Schläfli and Sascha Brunner

## Quick start

Use Node.js 22.22.1 or later.

```sh
npm ci --ignore-scripts
cd 2026/app-development-components-frameworks
npm run start
```

Each npm demo has its own dependencies and lockfile. See the
[setup guide](2026/app-development-components-frameworks/LOCAL_SETUP.md) for
running demos, building, and browser checks.

## Checks and formatting

From the repository root:

```sh
npm run lint
npm run format
```

`lint` checks formatting with Prettier; it does not run ESLint. In each TypeScript
demo, run `npm run typecheck` for compiler diagnostics. Run `npm run build` in
the presentation or demo directory to create its production build.

After initializing Git, run `npm run prepare` to install the staged-file
formatting hook. Git 2.32 or later is required.

## Source and licence

The 2026 Using Frameworks presentation is adapted from
[Max Patiiuk’s Esri presentation repository](https://github.com/maxpatiiuk/esri-dev-summit-presentations/tree/main/2026/using-components-2).
Its [setup guide](2026/app-development-components-frameworks/LOCAL_SETUP.md)
records the source commit and adaptations. See [LICENCE.md](LICENCE.md) and the
licence preserved with the presentation.
