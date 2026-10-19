# Sources

The presentation is adapted from Esri's `EUDTS 2026 - 3D GIS - Working with the 3D Object Layer.pptx`. Presenter notes identify the corresponding PowerPoint slide numbers and recording timestamps. The original PowerPoint and full recording are retained privately.

Event artwork reuses the [Using Frameworks assets](../../app-development-components-frameworks/assets/eudts-2026/README.md). Layouts use HTML/CSS, with original illustrations retained where they explain the concepts better. Other diagrams are recreated, and code screenshots are transcribed into editable snippets. The unbound `geometry` variable in the source conversion/persistence example is replaced with `geometry: mesh`.

The seven original section titles (PowerPoint 4, 11, 18, 22, 32, 42 and 46) are retained in order, using the shared event section artwork without presenter labels.

## Images

Images in `source/` come from the following PowerPoint media. Descriptive filenames identify original images or crops that focus on the relevant controls without resampling:

| Files                                                                                                      | Original slide | Content                     |
| ---------------------------------------------------------------------------------------------------------- | -------------- | --------------------------- |
| `placement-detail.png` (from `image31.png`)                                                                | 10, 29         | Precise building placement  |
| `cache-panel-full.png` (uncropped `image35.png`)                                                           | 16             | Cache management settings   |
| `portal-new-item.png`, `portal-3d-layer.png`, `portal-object-layer.png` (from `image36.png`–`image38.png`) | 19             | Creating a 3D object layer  |
| `image40.png`                                                                                              | 24             | Editor and building model   |
| `image42.gif`                                                                                              | 26             | SDK upload/editing sample   |
| `image47.png`                                                                                              | 31             | Vertex-space tent meshes    |
| `image55.png`                                                                                              | 43             | Prague e-submission example |
| `image59.png`                                                                                              | 45             | Custom IFC viewer           |

`scene-layer-types.png` is the original illustrated scene-layer overview from PowerPoint slide 9, rendered by Microsoft PowerPoint at 3200 × 1800 and cropped to the seven-column illustration without resampling. It retains the original images, labels, arrow and Gaussian Splat badge.

The following original graphics are restored as native-resolution crops of Microsoft PowerPoint exports at 3200 × 1800. Cropping removes surrounding slide titles/background; the diagrams themselves are not redrawn or resampled. Successive source states are revealed with presentation clicks.

| Files in `source/`                       | Original slides     | Current slide |
| ---------------------------------------- | ------------------- | ------------- |
| `layer-architecture*.png`                | 12–13               | 10            |
| `cache-request.png`, `cache-rebuild.png` | 14–15               | 11            |
| `vertex-space-*.png`                     | 34, 36–37 (hidden)  | 28            |
| `web-mercator*.png`                      | 38–40               | 29            |
| `spatial-reference-decision.png`         | 41 (repeated on 48) | 30            |

The Mercator illustration retains its original © Encyclopaedia Britannica, Inc. attribution, including in each annotated state.

`creating-3d-object-layers-original.png` is an exact, uncropped 3200 × 1800 Microsoft PowerPoint export of original slide 19. Current slide 15 reaches the complete original composition on its second click, including title, screenshots, circles, arrows and background. `creating-3d-object-layers-step-0.png` and `creating-3d-object-layers-step-1.png` are native exports of that same slide with later screenshots, circles and arrows hidden in memory; the original PowerPoint is unchanged.

Feedback uses the [shared original artwork](../../.meta/assets/README.md) for both reminders. The shared image is the unchanged PowerPoint 2 export.

The five `model-*.png` examples on current slide 8 are unmodified original media `image16.png`–`image20.png` from PowerPoint 7. `cache-panel-full.png` preserves the full `image35.png` screenshot from PowerPoint 16. `create-service-parameters.png` is the unmodified `image39.png` code image from PowerPoint 21, shown on current slide 17.

`social-original.png` is the exact, uncropped 3200 × 1800 Microsoft PowerPoint export of original slide 52, shown on current slide 46. The original artwork and text are unchanged; transparent links keep all seven channel rows clickable.

## Videos and posters

The first two videos come from the PowerPoint's embedded media. Prague, City Download and IFC are excerpts from [3D GIS: Working with the 3D Object Layer — Esri MediaSpace](https://mediaspace.esri.com/media/t/1_cwrea8bp), uploaded 31 March 2026. Vertex spaces is a new recording of the standalone demo. Footage and source/data attribution remain visible. All presentation copies are muted H.264 at 1920 × 1080, prepared for browser playback.

| File in `public/media/`      | Source                                                                |
| ---------------------------- | --------------------------------------------------------------------- |
| `scene-viewer.mp4`           | PowerPoint slide 5, embedded `media1.mp4`, approximately 1:08         |
| `xr.mp4`                     | PowerPoint slide 6, embedded `media2.mp4`, approximately 2:00         |
| `vertex-spaces.mp4`          | Standalone demo recorded locally on 19 October 2026, SDK 5.1.27; 1:19 |
| `prague-building-checks.mp4` | Recording 30:49–33:10                                                 |
| `city-download-blender.mp4`  | Recording 34:40–36:36                                                 |
| `ifc-viewer.mp4`             | Recording 38:32–41:33                                                 |

PNG posters use the source's embedded poster or a frame captured from the corresponding video. The vertex-space poster is the new recording's first frame. City Download Portal uses a recording frame, reflecting the St. Gallen app demonstrated there rather than the older Zürich screenshot in the PowerPoint.

The vertex-space recording captures Windows Chrome on the physical NVIDIA GPU, with browser chrome excluded. It shows world-coordinate vertices, local offsets and origin, then both triangles' face indices, linking the numbers to highlighted scene points. Its sequence follows the original explanation at 24:17–26:11. The earlier excerpt is retained privately.

The demonstration applications are credited to [Esri City Download Portal](https://github.com/Esri/city-download-portal) and [Arno Fiva's IFC viewer](https://github.com/arnofiva/ifc-viewer). These two applications are recorded examples and are not bundled with this deck.

The standalone vertex-space demo adapts the original Esri playground code supplied for this session. The mesh buffers, face indices and camera are preserved, and the SDK is updated from 4.32 to 5.1.27. A simple ground plane replaces the original portal scene; the page adds a coordinate comparison panel and a camera reset. Displayed world coordinates are rounded for readability, while rendering uses the original precision. It uses the browser's ESM imports and does not need the original page's additional AMD loader.

The SDK 5.1 model-inspection and download slides adapt the [official Query 3D models sample](https://developers.arcgis.com/javascript/latest/sample-code/query-models/) and current SceneLayer/ModelFileInfo references, checked 19 October 2026. They replace the source deck’s raw query3d REST example. This sample runs on its official page and is not bundled or recorded here.

`query-models.png` is a real screenshot of the official Query 3D models sample, captured on 19 October 2026 in Windows Chrome on the physical NVIDIA GPU. It captures Description view: the official explanation, code editor and scene preview together, retaining the page header and map attribution. The image is a PNG captured at native resolution without resampling.
