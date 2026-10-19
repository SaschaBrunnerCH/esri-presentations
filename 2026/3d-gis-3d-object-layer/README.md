# 3D GIS: Working with the 3D Object Layer

47 slides adapted from the Esri European Developer & Technology Summit 2026 PowerPoint, with demonstration footage from the [original Esri recording](https://mediaspace.esri.com/media/t/1_cwrea8bp).

## Run locally

After `pnpm install --frozen-lockfile` at the repository root:

```sh
cd 2026/3d-gis-3d-object-layer
pnpm run start --port 3032
```

Open <http://localhost:3032>. Use `pnpm run build`, `pnpm run export` or `pnpm run preview` in this directory. PDF export requires Chromium: `pnpm exec playwright install chromium` from the repository root.

Videos appear and play on the final click: slides **6, 7, 25, 33, 35 and 39**. Playback is muted for presenter narration; leaving the slide resets playback. Source cues and demo instructions are in presenter notes.

Slides **25, 33, 35 and 39** also offer a live demo and a **Play video** fallback. After a live demo, choose **Next slide** to skip the recording. See [live workflows and access requirements](LIVE_DEMOS.md).

All seven original section title slides are retained. Repeated PowerPoint states become click reveals. The seven template examples and unused hidden material are omitted. Vertex-space explanations from the hidden slides are condensed into the main flow.

[Asset sources](assets/SOURCES.md) records the original videos, clip ranges and image provenance. Full source material, transcript and rehearsal preparation stay in the private preparation repository.

Slides **36–38** explain SDK 5.1 model inspection and download, with a link to the [official Query 3D models sample](https://developers.arcgis.com/javascript/latest/sample-code/query-models/). Slide 38 shows the sample, and its tab opens from the launcher. The live demo uses the sample page playground and has a screenshot and code fallback; no embedded recording is supplied.

## Vertex-space demo

Open <http://localhost:3032/demos/vertex-spaces/index.html> or use the link on slide 25. Both tents appear on a simple ground plane while the code panel switches between world coordinates and local offsets. Hover or focus coordinates or face indices to mark their vertex in the scene; the local origin can be highlighted too. Click to keep a point highlighted; Escape clears it. [Scene code](public/demos/vertex-spaces/main.js) and [mesh data](public/demos/vertex-spaces/mesh-data.js) are separate files. The demo uses SDK 5.1.27 with the original camera and geometry; no portal scene or sign-in is required.

The existing Pages build copies this standalone HTML/CSS/JavaScript demo alongside the deck. It needs access to the ArcGIS CDN, but no Codespace for viewing. For editing in Codespaces, run the same startup command and forward port **3032**; the 3D scene renders in your local browser. Local changes must first be available inside that Codespace.

## Open the session tabs

With the local slides running, open the deck, vertex demo and source files, City Download Portal, and reference pages in a Chrome incognito window. Run from this presentation directory:

**Windows PowerShell**

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\presentation-tools\open-presentation-tabs.ps1
```

**WSL**

```bash
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "$(wslpath -w ./presentation-tools/open-presentation-tabs.ps1)"
```

**macOS** (not tested on a Mac)

```bash
bash presentation-tools/open-presentation-tabs-macos.sh
```

Add `-ListOnly` on Windows/WSL or `--list` on macOS to preview the 18 tabs. To use published slides after deployment, pass the deck URL with `-BaseUrl` or `--base-url`. Edit [tabs.tsv](presentation-tools/tabs.tsv) to change the shared tab list. Prague, IFC and the Zürich Scene Viewer tabs are included; their recordings remain available inside the slides.
