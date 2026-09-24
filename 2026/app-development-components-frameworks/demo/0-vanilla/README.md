# Vanilla JavaScript demo

[Session Description](../..)

This is a base no-bundler sample that we will be enhancing today.

See
[Part 1](https://registration.esri.com/flow/esri/26euroepcdev/deveventportal/page/detailed-agenda/session/1785494574001001ahF2)
of this series for more details.

## Technologies used:

- [Calcite Design System](https://developers.arcgis.com/calcite-design-system/)
- [ArcGIS Maps SDK for JavaScript's ES modules](https://developers.arcgis.com/javascript/latest/)

## Run locally

From the root of this repository:

```sh
cd 2026/app-development-components-frameworks/demo/0-vanilla
python3 -m http.server 5174 --bind 127.0.0.1
```

Open http://localhost:5174/. Serve this example over HTTP; opening the HTML
file directly blocks its local JavaScript module. Python 3 is needed only for
this server command; any local static HTTP server also works.

See [shared setup instructions](../../LOCAL_SETUP.md) for the toolchain and browser checks.
