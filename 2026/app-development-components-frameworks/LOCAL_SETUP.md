# Local setup

The presentation and demos were copied from
[`maxpatiiuk/esri-dev-summit-presentations/2026/using-components-2`](https://github.com/maxpatiiuk/esri-dev-summit-presentations/tree/main/2026/using-components-2)
at commit `e82f89acac9f4dd702f0c3bc3f5f2a1889720a48`. The slides now use the
EUDTS 2026 PowerPoint artwork and the local presentation title and authors.
The demos use ArcGIS 5.1: the CDN loader uses `https://js.arcgis.com/5.1`,
and npm apps use `@arcgis/core` / `@arcgis/map-components` `~5.1.25`
with Calcite `~5.1.2`. The shared Slidev files are in `../.meta`, and the
presentation dependencies and lockfile are at the repository root.

The local theme is implemented in `slide-bottom.vue` and `theme.css`.
Extracted PowerPoint images and their source mapping are in `assets/eudts-2026/`.
`footer.md` contains the European event hashtag and closing slides.

## Toolchain

Use Node.js 22.22.1 or later (verified locally with Node.js 24.19).
The demos use Vite 8.3 and React SWC plugin 4.3.3; the TypeScript demos use
TypeScript 7.0.2. The presentation uses Slidev 53.0.0.

Run `npm run typecheck` in either TypeScript demo before building.

## Slides

From the repository root:

```sh
npm ci --ignore-scripts
cd 2026/app-development-components-frameworks
npm run start
```

Use `npm run build` in the presentation directory to create `dist/`.

## Demos

Each Vite demo is independent and includes a package-lock.json for reproducible installs. From a demo directory (`demo/1-javascript`,
`demo/2-react`, `demo/3-typescript`, or
`demo/4-typescript-react-encapsulation`):

```sh
npm ci
npm run dev
```

Use `npm run build` there to create its `dist/`. The `demo/0-vanilla` example
must be served over HTTP:

```sh
cd demo/0-vanilla
python3 -m http.server 5174 --bind 127.0.0.1
```

Open http://localhost:5174/.

The Vite demos' `public/hiker-48.svg` files are unmodified copies of the logo
from `demo/0-vanilla`, added so the logo is included in their builds.

All five demos query selected trails from the layer with geometry and attributes.
This avoids an empty result when a selected trail is not in the map view's loaded
feature cache, and keeps the elevation profile and popup populated.

## Browser diagnostic

With a demo server running, from the repository root:

```sh
node scripts/check-demo.mjs http://localhost:5173/
```

The check uses the existing Playwright dependency. After installing with
`--ignore-scripts`, run `npx playwright install chromium` once to install its
browser, or set `CHROMIUM_PATH` to use an
installed Chromium executable (for example `/snap/bin/chromium` on this WSL
machine). It selects a trail through the public ArcGIS selection API and checks
that the elevation profile completes, distance and elevation are displayed, and
trail attributes remain available for the popup. This is a functional browser
diagnostic, not a hardware rendering or performance test.

## Formatting and Git hooks

From the repository root, `npm run lint` checks formatting without requiring Git.
Use `npm run format` to apply formatting. These commands include Slidev-aware
Markdown formatting; TypeScript checks remain `npm run typecheck` in each TS demo.

After creating your Git repository, run `npm run prepare` to install the Husky
pre-commit hook. The hook runs `npm run lint:staged`, formatting only staged source
files. Review and include the formatter changes in your commit. Git 2.32 or later
is required by lint-staged 17.

## Transitive dependency overrides

The root package pins DOMPurify 3.4.16 and lodash-es 4.18.1 to replace vulnerable
versions pulled in by Monaco and Mermaid. It also overrides PptxGenJS's
image-size dependency to 2.0.4. The slide build, Mermaid rendering, and a
PowerPoint export containing an image are checked with these overrides.
Revisit these pins when updating Slidev and its dependencies.

The browser diagnostic also clears the selection, verifies that the profile,
statistics, and popup are cleared, and selects the trail again.
