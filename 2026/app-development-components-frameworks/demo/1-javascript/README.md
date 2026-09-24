# Vite + vanilla JavaScript demo

[Session Description](../..)

Create a similar starting project with `pnpm create @arcgis -n my-arcgis-app -t vite`. [More details](https://github.com/Esri/jsapi-resources/tree/main/templates/js-maps-sdk-vite).

## Technologies used:

- [Calcite Design System](https://developers.arcgis.com/calcite-design-system/)
- [ArcGIS Maps SDK for JavaScript's ES modules](https://developers.arcgis.com/javascript/latest/)
- [Vite](https://vite.dev/)

## Run locally

From the root of this repository:

```sh
cd 2026/app-development-components-frameworks/demo/1-javascript
pnpm install --frozen-lockfile
pnpm run dev
```

Requires Node.js 22.22.1 or later and pnpm 12.6.0. Open the URL printed by Vite.

Run `pnpm run build` to generate `dist/` and `pnpm run preview` to preview it.

See [shared setup instructions](../../LOCAL_SETUP.md) for the toolchain and browser checks.
