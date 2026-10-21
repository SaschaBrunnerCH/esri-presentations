---
titleTemplate: '%s'
title: 'ArcGIS Maps SDK for JavaScript: App Development with Components – Using Frameworks'
author: Sascha Brunner
duration: 45min
timer: countdown
mdc: true
colorSchema: light
layout: cover
# Vite bundles image paths; Slidev's raw-path preloader cannot resolve them.
preloadImages: false
---

## ArcGIS Maps SDK for JavaScript:<br>App Development with Components<br>– Using Frameworks

Sascha Brunner

<!--
- One app, five stages: HTML → Vite → React → TypeScript → extracted component.
- Explain what each stage improves for the developer.
-->

---
is: feedback
---

<!--
- Invite feedback through the session survey.
-->

---

# Previous session (earlier today)

[ArcGIS Maps SDK for JavaScript: App Development with Components – Programming Patterns](https://registration.esri.com/flow/esri/26euroepcdev/deveventportal/page/detailed-agenda/session/1785494574001001ahF2)

**Wednesday, 21 October · 09:00–10:00 CEST**  
Harmonie Hall A–C, Level C2 · Congress Center

- Core concepts and programming patterns for SDK web components
- Map and scene components, including functionality from legacy widgets
- Charts and coding components

First in the four-part series. This session builds on those foundations.

<!--
- Build on the earlier component programming patterns session.
- Baseline: connected map, table, search, and elevation profile.
-->

---

# Today's session

Second of four sessions · Wednesday, 21 October · All times CEST

| Time            | App Development with Components                                                                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 09:00–10:00     | [Programming Patterns](https://registration.esri.com/flow/esri/26euroepcdev/deveventportal/page/detailed-agenda/session/1785494574001001ahF2)                |
| **10:30–11:30** | **[Using Frameworks — this session](https://registration.esri.com/flow/esri/26euroepcdev/deveventportal/page/detailed-agenda/session/1785494727635001W1Oa)** |
| 13:00–14:00     | [User Experience](https://registration.esri.com/flow/esri/26euroepcdev/deveventportal/page/detailed-agenda/session/1785494866247001NFxW)                     |
| 14:30–15:30     | [Extending and Styling](https://registration.esri.com/flow/esri/26euroepcdev/deveventportal/page/detailed-agenda/session/1785495003196001fwKB)               |

**Our route:** HTML → Vite → React → TypeScript → component

AI-assisted coding: understand the project, guide changes, verify results.

<!--
- Locate this talk in the four-session conference series.
- Our progression: HTML → Vite → React → TypeScript → encapsulation.
- Point to this afternoon for deeper UX and styling coverage.
- AI can help write code; these fundamentals help us explain the project and judge suggestions.
- Follow the same review habit throughout: start from a working example, provide project context, and check the result.
-->

---

# Calcite Design System

- Platform-agnostic design system by Esri
  - Design guidelines including accessibility, iconography, theming, and
    typography
  - Ensures a consistent, compelling, and cohesive user experience across
    products
- Includes **Calcite components**, an extensive library of reusable web
  components
  - Framework-agnostic, W3C standards-based, and customizable
  - Responsive and follows WCAG for accessibility
- More Calcite guidance in [User Experience](https://registration.esri.com/flow/esri/26euroepcdev/deveventportal/page/detailed-agenda/session/1785494866247001NFxW) later today, 13:00–14:00 CEST

![Calcite components](./assets/calcite.png){ width=250 }

<!--
- Identify Calcite navigation, panels, and statistics chips in the app.
- Highlight reusable UI and design guidance.
- Consider accessibility when composing the application.
- Switch to the online Calcite documentation: https://developers.arcgis.com/calcite-design-system/ (next slide).
-->

---
layout: iframe

url: https://developers.arcgis.com/calcite-design-system/
---

<!--
- Open a component reference.
- Point out properties, slots, and styling guidance.
- Keep the tour focused on where to find answers.
-->

---

# ArcGIS Maps SDK for JavaScript

- A comprehensive and powerful Web GIS mapping library
- Allows developers to build apps where people create, analyze, collaborate on,
  and share maps
- Three main parts of the SDK:
  - **Core API** - The main functionality for maps, layers, data visualization,
    and client-side analysis through its classes, methods, properties, events,
    and type definitions.
  - **Components** - Web components designed to encapsulate complex
    functionality and styling into small chunks of HTML markup (i.e.,
    declarative UI).
  - **Documentation** - Includes docs for getting started, programming patterns,
    tutorials, application templates, sample code, and references.

<!--
- Components: packaged mapping functionality.
- Core API: custom application logic.
- Documentation: guidance connecting both approaches.
- Switch to the online SDK documentation: https://developers.arcgis.com/javascript/latest/; then return to the slides.
-->

---

# How to get the SDK into your app

<v-clicks :at="0">

- Include the ArcGIS CDN in script tag applications for prototyping and getting
  started quickly
  - Single HTML file with no build step
    - Prebuilt versions of the SDK and Calcite are hosted on the ArcGIS CDN
  - Syntax for including modules:
    - `const WebMap = await $arcgis.import("@arcgis/core/WebMap.js");`
- Add the SDK as a dependency when building applications that scale
  (packages installed with pnpm: `@arcgis/core`, `@arcgis/map-components`,
  `@esri/calcite-components`)
  - JavaScript runtime environment and package manager required
  - Work with a bundler (Vite, Parcel, Webpack) and framework (React, Angular,
    Vue)
  - Syntax for including modules:
    - `import WebMap from "@arcgis/core/WebMap.js";`

</v-clicks>

<!--
- Start with the CDN approach visible. Click once to reveal the pnpm approach and its nested points.
- Connect to the first session: start from the same component-based HTML app and its CDN loading approach.
- The CDN supplies hosted SDK files directly to the browser.
- pnpm is the package manager: it downloads packages into node_modules and records dependencies in package.json and pnpm-lock.yaml.
- Name the packages: @arcgis/core for the core API, @arcgis/map-components for mapping components, and @esri/calcite-components for the surrounding UI.
- Vite resolves imports from those installed packages and prepares the browser app.
- Map components are installed from @arcgis/map-components and imported by the application.
- For these existing demos, use pnpm install --frozen-lockfile to reproduce the locked versions.
- Frameworks are optional; the first Vite demo uses plain JavaScript.
-->

---
layout: iframe-right
url: https://developers.arcgis.com/javascript/latest/system-requirements/
---

# What you need to install and run the SDK

- An up-to-date browser
- A JavaScript runtime environment
  - Node.js
- And a package manager
  - pnpm (install separately; pinned version in `package.json`)
- For more information, see the SDK's
  [system requirements](https://developers.arcgis.com/javascript/latest/system-requirements/)
  documentation

<!--
- Browser: runs the application.
- Node and the pnpm package manager: run development tools.
- These demos use pnpm and pnpm-lock.yaml; keep using pnpm install --frozen-lockfile to reproduce their dependencies.
- Check SDK requirements and repository setup instructions.
-->

---

# Scaffold a new app using a single command

- Reminder - We’ll be building on the app from session Part 1 as a starting
  point
- But, you can create a new app using a single command:
  - Run `pnpm create @arcgis` in your terminal and follow the prompts,
  - or skip the prompts by using `pnpm dlx @arcgis/create -n my-arcgis-app -t vite`
  - This CLI tool uses
    [git-sparse-checkout](https://git-scm.com/docs/git-sparse-checkout) to fetch
    app templates from the
    [Esri/jsapi-resources](https://github.com/Esri/jsapi-resources) repository

Use a working template as a reference for AI-assisted changes.

<!--
- Scaffold command: starting project.
- Existing app: follow manual setup guidance.
- Inspect templates in `jsapi-resources`.
- A working template shows packages, imports, and components that belong together.
- For an existing app, generate a template separately and use its code as a reference for the assistant.
- Check that the reference matches the SDK version and the intended behavior.
-->

---
layout: iframe
url: https://developers.arcgis.com/javascript/latest/get-started/
---

<!--
- Locate package installation and framework guidance.
- Preview the component type references used later in the React + TypeScript demo.
-->

---

# Demo: HTML and CDN

Start with the HTML app from the previous session.

Use the ArcGIS CDN to load components without a build step.

Demo source: `demo/0-vanilla`

<!--
1. Open `demo/0-vanilla`; select a trail.
2. Show the connected map, table, popup, and elevation profile.
   - Wait for results, clear selection, and select a trail again.
   - Establish the working behavior to check after any code change.
3. Open `index.html`: CDN entry and component markup.
4. Point to `main.js` for application behavior.
-->

---
layout: intro
---

# Using Bundlers

<!--
- Start from the working baseline app.
- Introduce the development and packaging workflow a bundler adds.
-->

---

# What are bundlers?

Bundlers transform the code that is easiest for developers to write into code
that is most performant for the browser to run.

```mermaid {scale: 0.75}
%%{init: {'flowchart': {'nodeSpacing': 25 }}}%%

graph LR
  subgraph human_files["Human-readable files"]
    direction LR
    JS[JavaScript .js/.ts]
    CSS[CSS/Sass .css/.scss]
    IMG[Assets .jpg/.json]
    PACKAGES[Package dependencies]
  end

  Bundler("Bundler")

  subgraph optimized_output["Browser-optimized output"]
    direction LR
    O_JS[Optimized JavaScript]
    O_CSS[Optimized CSS]
    O_IMG[Optimized Images]
  end

  human_files ==> Bundler ==> optimized_output
```

<!--
- Follow the diagram: source files + dependencies → tooling → browser output.
- Explain that optimization depends on the tooling and configuration.
-->

---

# Bundler benefits

1. Optimize performance (reduce file sizes, split bundles...)
2. Improve development experience (live updates...)
3. Permits consumption of packages installed with pnpm
4. Make testing code simpler

Bonus: can extend the bundlers using plugins (React support, SVG imports,
bundle analysis)

<!--
- Show saved changes appearing in the browser.
- Introduce the production build command.
- Mention dependencies and plugins.
- Bundling alone does not provide tests.
-->

---

# Examples of bundlers

- Parcel
- Webpack
- Vite
  - Used by many Esri teams
  - Great developer experience
  - Large and rapidly growing community

<!--
- Use Vite as the concrete example.
- Focus on its development workflow.
-->

---
layout: center
---

# Demo: Get started with Vite

Local source: `demo/1-javascript`

```sh
cd demo/1-javascript
pnpm install --frozen-lockfile
pnpm run dev
```

AI context: `package.json`, the lockfile, and existing source code.

<!--
1. Open `demo/1-javascript`.
2. Show `package.json`: scripts and dependencies.
   - Point to the SDK version and the dev/build commands.
   - Give an assistant the manifest, lockfile, and relevant source as context.
   - Check that a suggestion fits the installed packages and existing app structure.
3. Trace `index.html` → `src/main.js` → component imports.
4. Change the navigation heading; save and show the browser update.
5. Undo the edit.
6. Recap: same mapping components and application purpose.
-->

---

# Dependencies

- Your application can consume other packages
- Use [npmjs.com](https://www.npmjs.com/) to find packages or find out the
  latest version number

<!--
- Dependencies supply application functionality or development tooling.
- Manifest: what the project needs.
- Documentation and release notes: what packages provide and what changes.
-->

---

# Dependency vs devDependency

package.json:

```json
  // Required for the app to run
  "dependencies": {
    "@arcgis/core": "~5.1.25",
    "@arcgis/map-components": "~5.1.25",
    "@esri/calcite-components": "~5.1.2",
    "react": "^19.2.4",
    "react-dom": "^19.2.4"
  },
  // Only used during development/build
  "devDependencies": {
    "vite": "^8.3.0",
    "typescript": "7.0.2",
    "@vitejs/plugin-react-swc": "^4.3.3",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3"
  }
```

<!--
- Runtime: SDK, Calcite, and React.
- Development/build: Vite, React plugin, TypeScript, and type definitions.
- Manifest: version ranges.
- Lockfile: resolved versions.
-->

---

# Semantic versioning

Example: `5.1.25` → major **5**, minor **1**, patch **25**

`<major>.<minor>.<patch>`

- **major**: breaking changes - read the release notes
- **minor**: backward-compatible features
- **patch**: backward-compatible fixes

Compatibility is the specification’s promise; verify updates with builds and tests.

<!--
- Explain major, minor, and patch.
- Describe intended compatibility.
- Verify updates with release notes, builds, and application checks.
-->

---

# Semantic versioning

As of 5.0.0, `@arcgis/*` packages follow semantic versioning.

| Range     | Allows                                      |
| --------- | ------------------------------------------- |
| `~5.1.25` | Patches: `>=5.1.25 <5.2.0`                  |
| `^5.1.25` | Minor and patch releases: `>=5.1.25 <6.0.0` |

Commit `pnpm-lock.yaml` to record the resolved dependency versions.

Use `pnpm install --frozen-lockfile` to install those versions reproducibly.

<!--
- Tilde in this example: patch updates.
- Caret in this example: minor and patch updates within the major version.
- `pnpm install --frozen-lockfile`: install the locked dependency tree.
- Requires agreement between the lockfile and `package.json`.
-->

---

# Publishing

1. Run the build command: `pnpm run build`
2. Deploy the `dist` folder anywhere!
   - any hosting provider (GitHub Pages, Vercel)
   - or local server (NGINX, Microsoft IIS, Apache)

After the build, verify behavior: select a trail → profile → clear selection.

<!--
1. Run `pnpm run build` in `demo/1-javascript`.
2. Inspect `dist/index.html` and generated assets/chunks.
3. Explain deployment to static hosting.
4. Use `pnpm run preview` to inspect the built app locally.
5. Verify the baseline interaction: select a trail, wait for the profile, clear selection, and select again.
6. A successful build checks that the output can be produced; it does not establish that the app meets the intended behavior. Apply both checks to AI-assisted changes.
-->

---

# Asset handling

- By default, `dist/` does not include component images and translation files
- Instead, they are loaded from Esri's CDN (fast server in the cloud)
- They can be made
  [fully self-hosted](https://developers.arcgis.com/javascript/latest/working-with-assets/)
  if needed

<img src="./assets/cdn-network-5.1.png" alt="Captured requests from the local ArcGIS 5.1 demo to SDK assets on js.arcgis.com" style="max-height: 245px; width: 100%; object-fit: contain; margin-top: 20px" />

<!--
- Point to SDK CDN requests in the capture.
- Explain runtime asset loading and the self-hosting guidance.
- When checking a change, confirm that the running app can still load its assets and data services; a build alone does not verify those requests.
- Offline use also requires considering web maps, basemaps, feature data, and elevation services.
-->

---

# From build tools to app structure

These slides use Vite through [Slidev](https://sli.dev/).

Next: organize UI state and rendering with React.

<!--
- These slides use Vite through Slidev.
- They are published as static output.
- Transition: organizing UI state and rendering with a framework.
-->

---
layout: intro
---

# Using frameworks

<!--
- Keep the same mapping task.
- Introduce state-driven UI, types, and a component boundary.
-->

---

# Frameworks

- Frameworks make app development easier by providing more structure to the way
  we write applications
- React, Angular, and Vue are widely used options
- Web components work in most major frameworks because they are standards-based
- Start with the [application templates](https://github.com/Esri/jsapi-resources/tree/main/templates) or run `pnpm create @arcgis`

<!--
- Frameworks provide shared application patterns.
- Web components integrate with major frameworks; syntax differs.
- Use React for the examples.
-->

---

# React ⚛️

- A library for building user interfaces
- Encourages building app from "components" - reusable building blocks
- Top down data flow
- Declarative rendering and events
  - JSX syntax, which is a mix of JavaScript and HTML
  - TSX: JSX in TypeScript files (`.tsx`)
- Easy state management with "hooks"
- State drives rendered UI, reducing manual DOM wiring in this app
- React 19 has support for web components out of the box

<!--
- Describe UI from inputs and state.
- State changes lead to updated rendering.
- Distinguish React components from browser web components.
- Show how the two work together.
-->

---
layout: full
---

```mermaid
%%{init: {'flowchart': {'wrappingWidth': 300, 'rankSpacing': 25}, 'themeCSS': '.edgeLabel, .edgeLabel span, .edgeLabel p { color: #000 !important; fill: #000 !important; }'}}%%
graph TD
  classDef state fill:#15324a,stroke:#7fd1b9,color:#fff,stroke-width:3px
  classDef component fill:#1f4b6e,stroke:#9ad1ff,color:#fff,stroke-width:2px
  classDef view fill:#355f2e,stroke:#b7d77a,color:#fff,stroke-width:2px

  App["<b>App</b><br/>owns state: { user, filters }"]:::state
  Sidebar["<b>Sidebar</b>"]:::component
  Main["<b>Main content</b>"]:::component
  Toolbar["<b>Toolbar</b>"]:::component
  Login["<b>Login</b><br/>rendered when user is empty"]:::view
  Profile["<b>Profile</b><br/>rendered when user exists"]:::view
  Map["<b>Map / chart / UI</b>"]:::component

  App --> Sidebar
  App --> Main
  App --> Toolbar
  Toolbar -->|user state is empty| Login
  Toolbar -->|user state exists| Profile
  Main --> Map
```

<!--
- Start at App and follow the branches.
- Empty user state → Login.
- Populated user state → Profile.
-->

---
layout: center
---

<video width="640" height="480" controls>
    <source src="./assets/react-tree.webm" type="video/webm">
</video>

<!--
- Play the animation.
- Follow the login/profile branch as state changes.
- Connect the idea to the mapping app’s statistics chips.
-->

---
layout: center
---

# Demo: Get started with React

Local source: `demo/2-react`

```sh
cd demo/2-react
pnpm install --frozen-lockfile
pnpm run dev
```

<!--
1. Open `demo/2-react`: `package.json` and `vite.config.js`.
2. Show the root element in `index.html`, then `createRoot` in `src/main.jsx`.
3. In `src/App.jsx`, locate distance/elevation state.
4. Follow `handleElevationProfileChange` to the conditional chip markup.
5. Select a trail → wait for statistics → clear selection → select again.
6. Show object properties and function callbacks passed through JSX.
-->

---

# React in this app

```mermaid {scale: 0.8}
%%{init: {'flowchart': {'wrappingWidth': 300, 'rankSpacing': 25}, 'themeCSS': '.edgeLabel, .edgeLabel span, .edgeLabel p { color: #000 !important; fill: #000 !important; }'}}%%
graph TD
  classDef root fill:#15324a,stroke:#7fd1b9,color:#fff,stroke-width:3px
  classDef react fill:#1f4b6e,stroke:#9ad1ff,color:#fff,stroke-width:2px
  classDef calcite fill:#355f2e,stroke:#b7d77a,color:#fff,stroke-width:2px
  classDef maps fill:#5b3a1f,stroke:#ffb36b,color:#fff,stroke-width:2px

  App["<b>App.jsx</b><br/>owns state: { distance, elevation }"]:::root
  Chips["<b>Calcite UI</b><br/>&lt;calcite-chip&gt; distance<br/>&lt;calcite-chip&gt; elevation"]:::calcite
  Map["<b>Map component</b><br/>&lt;arcgis-map&gt;"]:::maps
  Profile["<b>Elevation profile</b><br/>&lt;arcgis-elevation-profile&gt;"]:::maps
  Handler["<b>React handler</b><br/>handleElevationProfileChange(event)"]:::react

  App -->|declarative render in JSX| Chips
  App -->|declarative render in JSX| Map
  App -->|declarative render in JSX| Profile
  Profile -->|arcgisPropertyChange| Handler
  Handler -->|updates App state with setDistance / setElevation| App
```

<!--
- Trace: component event → handler → state update → rendered chips.
- `event.target`: emitting component.
- `event.detail`: information about the change.
- Filter property-change events before processing results.
-->

---

# Summary of benefits from React

- Declarative rendering
- Easy to pass properties to components
- Easier event logic
- Less manual DOM wiring in this app
- Easy to consume web components

<!--
- Properties and callbacks sit beside markup.
- Chips render from state.
- Less manual DOM wiring in this app.
- React applications can still need element references.
-->

---
layout: two-cols
class: code-comparison
---

# Vanilla JavaScript

### HTML

```html
<body>
  <calcite-chip id="distance"></calcite-chip>
  <calcite-chip id="elevation"></calcite-chip>
  <arcgis-map
    id="map"
    item-id="a2a490fe264c4363b4fa2981d03f43f5"
    ground="world-elevation"
  ></arcgis-map>
  <arcgis-elevation-profile
    reference-element="map"
  ></arcgis-elevation-profile>
</body>
```

::right::

### JavaScript

```js
const profile = document.querySelector(
  'arcgis-elevation-profile');
const distance = document.getElementById('distance');
const elevation = document.getElementById('elevation');

profile.addEventListener(
  'arcgisPropertyChange', async (event) => {
    if (event.detail.name !== 'progress'
      || profile.progress !== 1) return;
    const view = profile.view;
    if (!view) return;
    const analysisView = await view.whenAnalysisView(
      profile.analysis);
    const stats = analysisView.statistics;
    const units = profile.effectiveDisplayUnits;
    if (!stats || !units || !profile.feature) return;
    distance.textContent =
      `${round(stats.maxDistance)} ${units.distance}`;
    elevation.textContent =
      `${round(stats.elevationGain)} ${units.elevation}`;
  }
);
```

<!--
- Original comparison restored: HTML declares both chips and the map/profile; JavaScript finds elements, attaches an event listener, and updates both text nodes.
- Run this after the declared elements and associated map view are ready; the surrounding app supplies the selected trail to `profile.feature`.
- `round(value)` is the demo helper: `Math.round(((value ?? 0) + Number.EPSILON) * 100) / 100`.
- Both slides filter the same component progress event and use the current `analysisView.statistics` and `effectiveDisplayUnits` APIs.
- The full vanilla demo uses an analysis-progress watcher; this equivalent event-based excerpt restores the original comparison with React.
- Selection, clearing, imports, and lifecycle setup remain in the full demo.
-->

---
layout: two-cols
class: code-comparison
---

# React

### HTML

```html
<body>
  <div id="root"></div>
</body>
```

React renders the chips from state.

::right::

### JSX

```jsx
const [distance, setDistance] = useState('');
const [elevation, setElevation] = useState('');
async function onChange(event) {
  const profile = event.target;
  if (event.detail.name !== 'progress'
    || profile.progress !== 1) return;
  const view = profile.view;
  if (!view) return;
  const analysisView = await view.whenAnalysisView(
    profile.analysis);
  const stats = analysisView.statistics;
  const units = profile.effectiveDisplayUnits;
  if (!stats || !units || !profile.feature) return;
  setDistance(
    `${round(stats.maxDistance)} ${units.distance}`);
  setElevation(
    `${round(stats.elevationGain)} ${units.elevation}`);
}
return (
  <>
    {distance && <calcite-chip>{distance}</calcite-chip>}
    {elevation && <calcite-chip>{elevation}</calcite-chip>}
    <arcgis-elevation-profile
      referenceElement="map"
      feature={selectedGraphic}
      onarcgisPropertyChange={onChange}
    />
  </>
);
```

<!--
- Original comparison restored: the HTML only provides the root; React owns both state variables, the event handler, and conditional rendering of both chips.
- This JSX belongs inside App; import `useState` and mount App at `root` with `createRoot`, as shown in `demo/2-react/src/main.jsx`.
- Use the same `round` helper as the previous slide.
- The surrounding app renders the map with `id="map"` and owns `selectedGraphic`; imports, selection, clearing, and lifecycle setup remain in the full demo.
- Compare the same path on both slides: component progress event → analysis-view statistics → distance and elevation.
- Vanilla updates existing DOM nodes; React updates state and renders the chips conditionally.
-->

---

# TypeScript 🦾

- TypeScript is a superset of JavaScript
- Adds static types to JavaScript
- Improves developer experience and code quality
- The Maps SDK's components and Calcite's components come with TypeScript
  definitions out of the box

<!--
- Types describe expected inputs and outputs.
- Show their value for editor feedback.
- SDK and Calcite packages include type definitions.
- Types complement runtime checks and testing.
-->

---
layout: center
---

# Demo: Get started with React + TypeScript

Local source: `demo/3-typescript`

```sh
cd demo/3-typescript
pnpm install --frozen-lockfile
pnpm run dev
```

<!--
- If editor diagnostics are unavailable, run `pnpm run typecheck`.
1. Open `demo/3-typescript`: `package.json`, `tsconfig.json`, and `src/vite-env.d.ts`; show the React and SDK/Calcite type packages and references.
2. In `src/main.tsx`, show `getElementById("root")!`; temporarily remove `!` to demonstrate the nullable element diagnostic, then undo. The assertion adds no runtime check.
3. In `src/App.tsx`, show `import type`; these imports are erased from the runtime bundle.
4. Hover `popupDockOptions: DockOptions`. Add an unknown property; show the diagnostic; undo the edit.
5. Show `round(value?: number)`: temporarily add `round("wrong")` to demonstrate an invalid argument, then remove it. Explain the optional argument and fallback.
6. Show `useState<boolean>(false)` for `mapLoaded`; temporarily replace `false` with `123`, inspect the diagnostic, then undo.
7. Show `HTMLArcgisMapElement["arcgisViewReadyChange"]`: emitting element plus event name identifies the event type. Demonstrate `event.target` completion, inline documentation, and the unavailable-map guard.
8. Temporarily add `myRandomProp={true}` to `<arcgis-map>` in JSX; show the diagnostic, then undo.
9. Restore all code; run `pnpm run typecheck`. Explain that type checking is separate from the Vite build.
- Steps 2, 3, 5, 6, and 8 restore the original walkthrough examples and can be shortened or skipped to retain the rehearsal timing.
-->

---

# Summary of benefits from TypeScript

- Improved developer experience
- Static types
- IntelliSense
- Error checking
- Give us more confidence in the code we write

<!--
- Recap completion, API documentation, readable contracts, and early diagnostics.
- Mention automatic type inference.
- Transition: group related logic behind a component boundary.
-->

---

# Encapsulating complexity with components

- Application logic can be encapsulated into smaller components
- This makes it easier to manage and reason about the code
- **App:** owns the selected trail
- **ElevationProfilePanel:** owns the profile display, statistics, and event handler

**Demo:** `demo/4-typescript-react-encapsulation`

```sh
cd demo/4-typescript-react-encapsulation
pnpm install --frozen-lockfile
pnpm run dev
```

<!--
1. Compare `src/App.tsx` in `demo/3-typescript` and `demo/4-typescript-react-encapsulation`.
2. Open `src/ElevationProfilePanel.tsx`: the extracted component in its own file.
3. Show its `selectedGraphic` prop, local state, handler, and markup.
4. Show the parent’s conditional render.
5. Select a trail to reveal the panel; clear selection to remove it.
-->

---

# Other frameworks

- Angular and Vue also support web components.
- [Getting started with Angular](https://developers.arcgis.com/javascript/latest/angular/)
- [Vue template application](https://github.com/Esri/jsapi-resources/tree/main/templates/js-maps-sdk-vue)
- [jsapi-resources](https://github.com/Esri/jsapi-resources) repo has samples
  for many frameworks
- Get started with `pnpm create @arcgis` and select your framework of choice

<!--
- Transfer the ideas: properties/events, state ownership, types, and build tooling.
- Point to Angular guidance, the Vue template, and the scaffold command.
-->

---

# Recap and next sessions

<div class="closing-grid">
  <section>
    <h3>One app, five steps</h3>
    <dl class="closing-recap">
      <dt>HTML</dt><dd>A working starting point</dd>
      <dt>Vite</dt><dd>Development server and build</dd>
      <dt>React</dt><dd>State drives the interface</dd>
      <dt>TypeScript</dt><dd>Feedback while writing code</dd>
      <dt>Component</dt><dd>Related behavior in one place</dd>
    </dl>
  </section>
  <section class="closing-sessions">
    <h3>Continue this afternoon</h3>
    <p class="closing-location">Wednesday, 21 October<br />Harmonie Hall D–E · Level C2</p>
    <h4><a href="https://registration.esri.com/flow/esri/26euroepcdev/deveventportal/page/detailed-agenda/session/1785494866247001NFxW">User Experience</a></h4>
    <p>13:00–14:00 CEST · Keith Morrison</p>
    <h4><a href="https://registration.esri.com/flow/esri/26euroepcdev/deveventportal/page/detailed-agenda/session/1785495003196001fwKB">Extending and Styling</a></h4>
    <p>14:30–15:30 CEST · Keith Morrison</p>
  </section>
</div>

<!--
- Closing order: 40 → 41 → 42 → 45 → 46 → 47 → 43 → 44.
- Vite: development and build tooling.
- React: UI updates driven by state.
- TypeScript: editor feedback.
- Components: related behavior grouped together.
- Point to the two follow-on sessions this afternoon.
-->

---

# AI-assisted development

Start from a current **`@arcgis/create` template**, which provides supported files and patterns.

**You need:**

- Node.js LTS and Git
- ArcGIS licensing through Online, Enterprise, or Location Platform
- An AI coding assistant that can edit files and run project commands

**Continue with the guides:**

- [AI-assisted development](https://developers.arcgis.com/javascript/latest/ai-assisted-development/)
- [Create a new app with AI](https://developers.arcgis.com/javascript/latest/ai-assisted-development/create-a-new-app/)

<!--
- Return to the starting point from the scaffold demo: use a current @arcgis/create template for the selected framework and build tool.
- The template supplies supported project files and integration patterns for the assistant to work with.
- Briefly name the prerequisites: Node.js LTS, Git, ArcGIS licensing, and an assistant that can edit project files and run commands.
- Open the overview guide for other workflows, or Create a new app with AI for the template-based starting path.
- Review the generated app, check the installed SDK version, and verify the result in the browser, as demonstrated throughout this session.
-->

---

# AI-assisted development in practice

<div class="ai-blog-grid">
  <a class="ai-blog-card" href="https://www.esri.com/arcgis-blog/products/js-api-arcgis/geoai/building-my-first-js-web-app-with-ai" target="_blank" rel="noopener noreferrer">
    <img src="./assets/ai-assisted-development/building-my-first-js-web-app-with-ai.png" alt="Malbork Castle app title image" />
    <div class="ai-blog-caption">
      <h3>Building my first JS web app with AI</h3>
      <p>Agnieszka Rozniak</p>
    </div>
  </a>
  <a class="ai-blog-card" href="https://www.esri.com/arcgis-blog/products/js-api-arcgis/geoai/rethinking-application-migrations" target="_blank" rel="noopener noreferrer">
    <img src="./assets/ai-assisted-development/rethinking-application-migrations.png" alt="Application migration title image" />
    <div class="ai-blog-caption">
      <h3>Rethinking Application Migrations</h3>
      <p>Dagmara Pasiak and Sascha Brunner</p>
    </div>
  </a>
</div>

<!--
- Two ArcGIS Blog articles to continue after the session: creating an app with AI and modernizing an existing application.
- Open either article by clicking its image or title.
- The original title images are stored locally; assets/ai-assisted-development/source.json records the article and image URLs.
-->

---
layout: full
title: Tonight's Dev & Tech Summit Party
---

<img
  class="absolute inset-0 h-full w-full object-contain"
  src="./assets/eudts-2026/party-original.png"
  alt="Join us for tonight’s Dev & Tech Summit Party! Collect your ticket with boat assignment from the Registration Desk, 10:00–16:30. Shuttles begin loading after sessions conclude at 17:00. Boats depart promptly at 18:15; arrive early. Mainkai 36, 60311 Frankfurt am Main."
/>

<!--
- Original slide 1 from Euro Dev and Tech Summit 2026 Party.pptx, exported unchanged through Microsoft PowerPoint.
- Collect your ticket with boat assignment from the Registration Desk, 10:00–16:30.
- Shuttles begin loading after sessions conclude at 17:00.
- Boats depart promptly at 18:15; arrive early.
- Mainkai 36, 60311 Frankfurt am Main.
- Continue directly to Questions.
-->

---
layout: center
---

# Questions?

<!--
- Invite questions.
- Return to relevant source examples where useful.
-->

---
src: ./footer.md
---
