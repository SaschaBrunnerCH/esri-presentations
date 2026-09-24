// Browser diagnostic for the demo's selection → elevation-profile workflow.
// Uses public ArcGIS APIs. This is not a physical-GPU or performance test.
import assert from 'node:assert/strict';
import { chromium } from 'playwright-chromium';

const url = process.argv[2];
assert(url, 'Usage: node scripts/check-demo.mjs <demo-url>');
const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || undefined,
  headless: true,
});

try {
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
  });
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(
    () =>
      document.querySelector('arcgis-map')?.view?.ready &&
      document.querySelector('arcgis-feature-table')?.layer?.loaded,
    null,
    { timeout: 60000 },
  );

  const selection = await page.evaluate(async () => {
    const map = document.querySelector('arcgis-map');
    const layer = document.querySelector('arcgis-feature-table').layer;
    const result = await layer.queryFeatures({
      geometry: map.view.extent,
      where: '1=1',
      outFields: ['*'],
      returnGeometry: true,
      num: 1,
    });
    if (!result.features.length)
      throw new Error('No trail found in the map extent');
    const objectId = result.features[0].getObjectId();
    map.view.selectionManager.replace(layer, [objectId]);
    return {
      objectId,
      layer: layer.title,
      trail: result.features[0].attributes.TRLNAME,
    };
  });

  await page.waitForFunction(
    () =>
      document.querySelector('arcgis-elevation-profile')?.progress === 1 &&
      /\d/.test(document.querySelector('#distance')?.textContent ?? '') &&
      /\d/.test(document.querySelector('#elevation')?.textContent ?? ''),
    null,
    { timeout: 30000 },
  );
  const statistics = await page.evaluate(() => ({
    distance: document.querySelector('#distance').textContent.trim(),
    elevation: document.querySelector('#elevation').textContent.trim(),
    trail: document.querySelector('arcgis-elevation-profile').feature.attributes
      .TRLNAME,
  }));
  assert.equal(
    statistics.trail,
    selection.trail,
    'Selected trail attributes must remain available to the popup',
  );
  assert.deepEqual(errors, [], 'Unexpected browser exceptions');
  if (process.env.SCREENSHOT_PATH) {
    await page.screenshot({ path: process.env.SCREENSHOT_PATH });
  }
  await page.evaluate(() => {
    document.querySelector('arcgis-map').view.selectionManager.clear();
  });
  await page.waitForFunction(
    () =>
      !document.querySelector('arcgis-elevation-profile')?.feature &&
      !/\d/.test(document.querySelector('#distance')?.textContent ?? '') &&
      !/\d/.test(document.querySelector('#elevation')?.textContent ?? '') &&
      !document.querySelector('arcgis-map').view.popup?.visible,
    null,
    { timeout: 15000 },
  );
  await page.evaluate(({ objectId }) => {
    const map = document.querySelector('arcgis-map');
    const layer = document.querySelector('arcgis-feature-table').layer;
    map.view.selectionManager.replace(layer, [objectId]);
  }, selection);
  await page.waitForFunction(
    () =>
      document.querySelector('arcgis-elevation-profile')?.progress === 1 &&
      /\d/.test(document.querySelector('#distance')?.textContent ?? ''),
    null,
    { timeout: 30000 },
  );
  assert.deepEqual(errors, [], 'No exceptions during clear and reselect');
  console.log(
    JSON.stringify({
      url,
      selection,
      statistics,
      clearedAndReselected: true,
      errors,
    }),
  );
} finally {
  await browser.close();
}
