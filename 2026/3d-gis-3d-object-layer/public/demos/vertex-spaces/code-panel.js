import {
  faces,
  worldPositions,
  localOrigin,
  localPositions,
} from './mesh-data.js';

const code = document.querySelector('#code');
const explanation = document.querySelector('#explanation');
const worldButton = document.querySelector('#world');
const localButton = document.querySelector('#local');
const facesCode = document.querySelector('#faces');
const panel = document.querySelector('.code-panel');
let hovered = null;
let focused = null;
export let selectedVertex = null;

function updatePreview() {
  const target = hovered ?? focused;
  selectedVertex = target
    ? { mesh: target.dataset.mesh, vertex: target.dataset.vertex }
    : null;
  for (const button of panel.querySelectorAll('.coordinate')) {
    button.classList.toggle(
      'is-preview',
      !!selectedVertex &&
        button.dataset.mesh === selectedVertex.mesh &&
        button.dataset.vertex === selectedVertex.vertex,
    );
  }
  document.dispatchEvent(new Event('vertex-preview'));
}

function coordinate(text, mesh, vertex, label) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'coordinate';
  button.dataset.mesh = mesh;
  button.dataset.vertex = String(vertex);
  button.textContent = text;
  button.setAttribute('aria-label', label);
  return button;
}

panel.addEventListener('pointerover', (event) => {
  if (event.pointerType === 'touch') return;
  hovered = event.target.closest('.coordinate');
  updatePreview();
});
panel.addEventListener('pointerout', (event) => {
  if (event.pointerType === 'touch') return;
  hovered = event.relatedTarget?.closest?.('.coordinate') ?? null;
  updatePreview();
});
panel.addEventListener('focusin', (event) => {
  hovered = null;
  focused = event.target.closest('.coordinate');
  updatePreview();
});
panel.addEventListener('focusout', () => {
  focused = null;
  updatePreview();
});
panel.addEventListener('click', (event) => {
  const target = event.target.closest('.coordinate');
  if (target) {
    target.focus({ preventScroll: true });
    focused = target;
    updatePreview();
  }
});
panel.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    hovered = null;
    document.activeElement.blur();
    focused = null;
    updatePreview();
  }
});

function showCoordinates(local) {
  hovered = null;
  focused = null;
  const mesh = local ? 'local' : 'world';
  const name = local ? 'Blue mesh' : 'Red mesh';
  worldButton.setAttribute('aria-pressed', String(!local));
  localButton.setAttribute('aria-pressed', String(local));
  explanation.textContent = local
    ? 'The origin locates the model. Vertices are offsets in meters.'
    : 'Every vertex has longitude, latitude and elevation.';
  const positions = local ? localPositions : worldPositions;
  code.replaceChildren();
  if (local) {
    code.append(
      'vertexSpace: new MeshLocalVertexSpace({\n  origin: [',
      coordinate(localOrigin.join(', '), mesh, 'origin', 'Blue mesh origin'),
      ']\n})',
    );
  } else {
    code.append('vertexSpace: new MeshGeoreferencedVertexSpace()');
  }
  code.append(
    `\n\n// x, y, z${local ? ' (meters)' : ' (rounded for display)'}\nposition: [\n`,
  );
  for (let i = 0; i < positions.length; i += 3) {
    const values = positions
      .slice(i, i + 3)
      .map((value, axis) =>
        local ? String(value) : value.toFixed(axis === 2 ? 3 : 8),
      );
    code.append(
      '  ',
      coordinate(
        values.join(', '),
        mesh,
        i / 3,
        `${name} vertex ${i / 3}: ${values.join(', ')}`,
      ),
      `, // ${i / 3}\n`,
    );
  }
  code.append(']');

  facesCode.replaceChildren('// Vertex indices start at 0\nfaces: [\n');
  for (let triangle = 0; triangle < 2; triangle++) {
    facesCode.append('  ');
    for (const index of faces.slice(triangle * 3, triangle * 3 + 3)) {
      facesCode.append(
        coordinate(String(index), mesh, index, `${name} vertex ${index}`),
        ', ',
      );
    }
    facesCode.append(`// triangle ${triangle + 1}\n`);
  }
  facesCode.append('  // …\n]');
  updatePreview();
}

worldButton.addEventListener('click', () => showCoordinates(false));
localButton.addEventListener('click', () => showCoordinates(true));
showCoordinates(false);
