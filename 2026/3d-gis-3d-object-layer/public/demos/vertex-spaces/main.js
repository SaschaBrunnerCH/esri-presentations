import MeshLocalVertexSpace from 'esri/geometry/support/MeshLocalVertexSpace.js';
import MeshGeoreferencedVertexSpace from 'esri/geometry/support/MeshGeoreferencedVertexSpace.js';
import SolidEdges3D from 'esri/symbols/edges/SolidEdges3D.js';
import FillSymbol3DLayer from 'esri/symbols/FillSymbol3DLayer.js';
import MeshSymbol3D from 'esri/symbols/MeshSymbol3D.js';
import Graphic from 'esri/Graphic.js';
import GraphicsLayer from 'esri/layers/GraphicsLayer.js';
import Point from 'esri/geometry/Point.js';
import Mesh from 'esri/geometry/Mesh.js';
import SpatialReference from 'esri/geometry/SpatialReference.js';
import Camera from 'esri/Camera.js';
import WebScene from 'esri/WebScene.js';
import SceneView from 'esri/views/SceneView.js';
import PointSymbol3D from 'esri/symbols/PointSymbol3D.js';
import IconSymbol3DLayer from 'esri/symbols/IconSymbol3DLayer.js';
import { convertVertexSpace } from 'esri/geometry/support/meshUtils.js';
import { selectedVertex } from './code-panel.js';
import {
  faces,
  worldPositions,
  localOrigin,
  localPositions,
} from './mesh-data.js';

const context = new GraphicsLayer({ title: 'Ground plane', listMode: 'hide' });
const highlightLayer = new GraphicsLayer({
  title: 'Highlighted vertex',
  listMode: 'hide',
  elevationInfo: { mode: 'absolute-height' },
});
const map = new WebScene({
  basemap: null,
  ground: { opacity: 0 },
  layers: [context, highlightLayer],
});
const view = new SceneView({ container: 'viewDiv', map, popupEnabled: false });

const camera = new Camera({
  position: {
    longitude: -119.26657435,
    latitude: 35.23123826,
    z: 110.8411,
  },
  heading: 329.72,
  tilt: 56.47,
});

const worldMesh = new Mesh({
  spatialReference: SpatialReference.WGS84,
  components: [{ faces, material: { color: 'red' } }],
  vertexSpace: new MeshGeoreferencedVertexSpace(),
  vertexAttributes: { position: worldPositions },
});
const localMesh = new Mesh({
  spatialReference: SpatialReference.WGS84,
  components: [{ faces, material: { color: 'blue' } }],
  vertexSpace: new MeshLocalVertexSpace({ origin: localOrigin }),
  vertexAttributes: { position: localPositions },
});

document.querySelector('#reset').addEventListener('click', () => {
  view.camera = camera.clone();
});

// Public application objects also let learners inspect the meshes in DevTools.
window.vertexSpaceDemo = { view, worldMesh, localMesh, highlightLayer };

let vertexPoints;
const vertexLabel = document.querySelector('#vertex-label');
const markerSymbol = new PointSymbol3D({
  symbolLayers: [
    new IconSymbol3DLayer({
      resource: { primitive: 'circle' },
      material: { color: '#ffdc62' },
      outline: { color: '#102b3e', size: 2 },
      size: 14,
      occludedVisibility: { mode: 'visible' },
    }),
  ],
});

function showSelectedVertex() {
  highlightLayer.removeAll();
  vertexLabel.hidden = true;
  if (!vertexPoints || !selectedVertex) return;
  const { mesh, vertex } = selectedVertex;
  const point =
    vertex === 'origin'
      ? new Point({
          longitude: localOrigin[0],
          latitude: localOrigin[1],
          z: localOrigin[2],
        })
      : vertexPoints[mesh][Number(vertex)];
  highlightLayer.add(new Graphic({ geometry: point, symbol: markerSymbol }));
  vertexLabel.textContent =
    vertex === 'origin'
      ? 'Blue mesh · origin'
      : `${mesh === 'local' ? 'Blue' : 'Red'} mesh · vertex ${vertex}`;
  vertexLabel.hidden = false;
}
document.addEventListener('vertex-preview', showSelectedVertex);

const status = document.querySelector('#status');
async function initialize() {
  await view.when();
  view.camera = camera.clone();
  const floor = Mesh.createPlane(
    new Point({ longitude: -119.26674691, latitude: 35.23148188, z: 89.5 }),
    { size: 45, material: { color: '#d5dfe3' } },
  );
  context.add(
    new Graphic({
      geometry: floor,
      symbol: new MeshSymbol3D({ symbolLayers: [new FillSymbol3DLayer()] }),
    }),
  );

  for (const mesh of [localMesh, worldMesh]) {
    view.graphics.add(
      new Graphic({
        geometry: mesh,
        symbol: new MeshSymbol3D({
          symbolLayers: [
            new FillSymbol3DLayer({
              material: { color: [255, 255, 255, 0.2] },
              edges: new SolidEdges3D({ color: [255, 255, 255] }),
            }),
          ],
        }),
      }),
    );
  }
  // Use the SDK's conversion so local offsets map to the rendered mesh exactly.
  const convertedLocalMesh = await convertVertexSpace(
    localMesh,
    new MeshGeoreferencedVertexSpace(),
  );
  vertexPoints = {};
  for (const [name, mesh] of [
    ['world', worldMesh],
    ['local', convertedLocalMesh],
  ]) {
    const positions = mesh.vertexAttributes.position;
    vertexPoints[name] = Array.from(
      { length: positions.length / 3 },
      (_, index) =>
        new Point({
          x: positions[index * 3],
          y: positions[index * 3 + 1],
          z: positions[index * 3 + 2],
          spatialReference: mesh.spatialReference,
        }),
    );
  }
  showSelectedVertex();
  status.dataset.state = 'ready';
  status.hidden = true;
}

initialize().catch((error) => {
  console.error(error);
  status.dataset.state = 'error';
  status.textContent =
    'The scene could not load. Check your connection and reload.';
});
