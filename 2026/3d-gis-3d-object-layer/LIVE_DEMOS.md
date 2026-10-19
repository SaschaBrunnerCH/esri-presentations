# Live demos and video fallback

Slides **25, 33, 35 and 39** offer **Open live demo**, **Play video** and **Next slide**. Choose per demonstration, including during the talk. The normal final click still starts the recording.

Open the live app in its new tab. After presenting it, return to the slide and choose **Next slide** to continue without playing the video. If the app fails, return and choose **Play video**. Arrow Left hides a playing video and returns to the slide's previous reveal.

## Readiness

Checked on 19 October 2026. An available app page does not establish that its data and complete workflow are ready.

| Slide | Demo                                                                                         | Current preparation                                                                                                                                                                  |
| ----- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 25    | [Vertex spaces](http://localhost:3032/demos/vertex-spaces/index.html)                        | Ready: Windows GPU rendering, points, origin, faces, keyboard and recording checked. No sign-in required.                                                                            |
| 33    | [Prague e-Submission](https://arnofiva.github.io/e-submission/)                              | App responds and requests ArcGIS sign-in. Access and analysis workflow still need rehearsal with your account. Source repository was unavailable.                                    |
| 35    | [City Download Portal](https://esri.github.io/city-download-portal/) → Blender               | City chooser offers St. Gallen and Vigo. Selection, export and Blender import still need an end-to-end rehearsal and a prepared model. Blender 4.5 is installed on this workstation. |
| 38    | [Query 3D models](https://developers.arcgis.com/javascript/latest/sample-code/query-models/) | Windows rendering, model metadata, GLB bytes, picking, format filter and Clear checked. Screenshot fallback on this slide; no recording.                                             |
| 39    | [IFC viewer](https://arnofiva.github.io/ifc-viewer/)                                         | App responds and requests ArcGIS sign-in. Scene access, original IFC download and parsing still need rehearsal with your account.                                                    |

For Prague and IFC, sign in inside the presentation browser window before the talk. If access remains unavailable, use the recording. The referenced scenes currently deny anonymous access:

- Prague: [919557e6548e472ea8a7793a5bf9b3d7](https://www.arcgis.com/home/item.html?id=919557e6548e472ea8a7793a5bf9b3d7).
- IFC: [e454c0b94ede494687ae3f1be792f2da](https://www.arcgis.com/home/item.html?id=e454c0b94ede494687ae3f1be792f2da).

## 25 — Vertex spaces

1. Start with **Red · world coordinates**. Hover vertex 4, then a lower corner: each row places a point using longitude, latitude and elevation.
2. Choose **Blue · local offsets**. Hover the origin, then vertex 4. The origin locates the mesh; its vertices are offsets in meters.
3. Hover the face indices **0, 1, 4**, then **1, 2, 4**. Each triple connects three vertices into a triangle.
4. Click a number to keep a marker highlighted. Escape clears it; **Reset camera** restores the initial view.

The same sequence is in the 1:19 recording. Conversion utilities follow on slide 26.

## 33 — Prague building checks

1. Open the app and confirm the Prague scene, prepared proposal and regulation results are available.
2. Show the building-height check and locate the relevant high point on the model. Explain the connection to mesh vertices and vertex-space conversion.
3. Show the 2D footprint and its intersection with infrastructure, such as the gas-pipeline example.
4. Explain the result as an example of a custom review workflow. Height checks need consistent units, ground reference and an applicable height definition.

The sequence comes from the original recording at 30:49–33:10. The controls and available proposal must be confirmed after sign-in; no prepared proposal file has been supplied locally.

## 35 — City Download Portal → Blender

Before the talk, export a small area and save both its GLB and a prepared Blender scene. Keep the same area and model origin for the browser and Blender portions.

1. Open the portal home page and choose **St. Gallen**. Use the home page: a direct GitHub Pages city URL returned 404 when opened independently.
2. Select a small area containing a few buildings. Show the selected buildings and model origin.
3. Export the model. Explain that it combines queried building meshes with a generated terrain mesh.
4. In Blender, use **File → Import → glTF 2.0** to open the GLB, or switch to the prepared scene if import would interrupt the explanation.
5. Select a building, then the terrain as separate objects. Explain how the shared origin supports a subsequent building-design workflow. Undo any illustrative edits.

The original presenter used a prepared Blender model from a different area; use one consistent area in this version. Source: [Esri City Download Portal](https://github.com/Esri/city-download-portal).

## 38 — Query 3D models sample

After the API explanations on slides 36–37, show the screenshot on slide 38 and open the [official sample](https://developers.arcgis.com/javascript/latest/sample-code/query-models/?view=full) and its playground. Pick a building → inspect Source models → switch Show to All models → download an available GLB. Optionally select a small polygon and Clear. Explain queryModels → queryModel → file.arrayBuffer, and distinguish file retrieval from queryFeatures mesh geometry or toBinaryGLTF export. Read the actual formats; IFC is not guaranteed.

This new demo has no embedded recording. If the sample is unavailable, use the screenshot on slide 38 and explain the code, then continue to the IFC example on slide 39. The tab launcher opens the sample page.

## 39 — IFC viewer

1. Open the app, sign in and choose the prepared building/project.
2. Start with **Shell**: the building is a single feature in the source layer.
3. Choose **Interior**. Wait for the original IFC to download and parse, then show individual parts and filter a floor.
4. Choose **Spaces**. Show usage categories and area statistics.
5. Explain that `web-ifc` parses the original asset into client-side geometries. Floor filtering and statistics belong to this custom app; this is not a Building Scene Layer workflow.

The default scene contains the expected project layer. A replacement scene would need compatible app configuration and source IFC access. Source: [IFC viewer](https://github.com/arnofiva/ifc-viewer). Original sequence: 38:32–41:33.
