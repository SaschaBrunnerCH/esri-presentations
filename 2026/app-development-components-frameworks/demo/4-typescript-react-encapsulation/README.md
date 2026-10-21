# Vite + React + TypeScript encapsulation demo

[Session Description](../..)

## Key changes from [3-typescript](../3-typescript/)

- Moved the elevation profile's state, event handler, markup, and rounding helper into [ElevationProfilePanel.tsx](src/ElevationProfilePanel.tsx).
- `App.tsx` owns the selected trail and conditionally renders the panel, passing `selectedGraphic` as its input.

Compare `3-typescript/src/App.tsx` with this demo's `src/App.tsx`, then open
`src/ElevationProfilePanel.tsx` to see where the removed code now lives.

## Technologies used:

- [Calcite Design System](https://developers.arcgis.com/calcite-design-system/)
- [ArcGIS Maps SDK for JavaScript's ES modules](https://developers.arcgis.com/javascript/latest/)
- [Vite](https://vite.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)

## Run locally

From the root of this repository:

```sh
cd 2026/app-development-components-frameworks/demo/4-typescript-react-encapsulation
pnpm install --frozen-lockfile
pnpm run dev
```

Requires Node.js 22.22.1 or later and pnpm 12.6.0. Open the URL printed by Vite.

Run `pnpm run build` to generate `dist/` and `pnpm run preview` to preview it.
Run `pnpm run typecheck` before building.

See [shared setup instructions](../../LOCAL_SETUP.md) for the toolchain and browser checks.
