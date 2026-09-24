# Esri presentations

Slides and demo apps for Esri developer events.

[View published presentations](https://saschabrunnerch.github.io/esri-presentations/)

## 2026

- [ArcGIS Maps SDK for JavaScript: App Development with Components – Using Frameworks](2026/app-development-components-frameworks/README.md)  
  Esri European Developer & Technology Summit 2026 · Stefan Schläfli and Sascha Brunner

## Quick start

Use Node.js 22.22.1 or later and pnpm 12.6.0. The `packageManager` field pins pnpm for this repository.
Install pnpm using the [official setup instructions](https://pnpm.io/installation).
With Corepack available, run `corepack enable pnpm` before the commands below.

```sh
pnpm install --frozen-lockfile
cd 2026/app-development-components-frameworks
pnpm run start
```

Each pnpm demo has its own dependencies and lockfile. See the
[setup guide](2026/app-development-components-frameworks/LOCAL_SETUP.md) for
running demos, building, and browser checks.

## Checks and formatting

From the repository root:

```sh
pnpm run lint
pnpm run format
```

`lint` checks formatting with Prettier; it does not run ESLint. In each TypeScript
demo, run `pnpm run typecheck` for compiler diagnostics. Run `pnpm run build` in
the presentation or demo directory to create its production build.

After initializing Git, run `pnpm run prepare` to install the staged-file
formatting hook. Git 2.32 or later is required.

## Source and licence

The 2026 Using Frameworks presentation is adapted from
[Max Patiiuk’s Esri presentation repository](https://github.com/maxpatiiuk/esri-dev-summit-presentations/tree/main/2026/using-components-2).
Its [setup guide](2026/app-development-components-frameworks/LOCAL_SETUP.md)
records the source commit and adaptations. See [LICENCE.md](LICENCE.md) and the
licence preserved with the presentation.

## GitHub Pages

[Deploy workflow](.github/workflows/deploy.yml) builds the presentation and publishes
it on pushes to `main`. It can also be started manually from GitHub Actions.
The site includes a presentation index; demo source code remains in the repository.
