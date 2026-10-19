import assert from 'node:assert/strict';
import { chromium } from 'playwright-chromium';
import { presentations } from './presentations.mjs';

const target = process.argv[2];
assert(target, 'Usage: pnpm check:site <presentation-index-url>');
const base = new URL(target.endsWith('/') ? target : `${target}/`);
assert(['http:', 'https:'].includes(base.protocol), 'Use an HTTP(S) URL.');
const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || undefined,
  headless: true,
});

try {
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
  });
  // Slidev's keep-screen-awake preference has no purpose in a headless run.
  // Use its normal setting; all other browser exceptions still fail the check.
  await page.addInitScript(() => {
    localStorage.setItem('slidev-wake-lock', 'false');
  });
  page.setDefaultTimeout(30000);
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('response', (response) => {
    if (!response.url().startsWith(base.href)) return;
    if (response.status() >= 400) {
      errors.push(`${response.status()} ${response.url()}`);
    } else if (
      response.request().resourceType() === 'image' &&
      response.headers()['content-type']?.startsWith('text/html')
    ) {
      // Preview servers can return the SPA HTML for a missing image with 200.
      errors.push(`Image request returned HTML: ${response.url()}`);
    }
  });
  const index = await page.goto(base.href, { waitUntil: 'load' });
  assert(index?.ok(), 'Presentation index must load.');
  for (const presentation of presentations) {
    assert.equal(
      await page.locator(`a[href="./${presentation.path}/"]`).count(),
      1,
      `Index must link to ${presentation.path}`,
    );
  }
  for (const presentation of presentations) {
    const deck = new URL(`${presentation.path}/`, base);
    await page.goto(`${deck.href}#/1`, { waitUntil: 'load' });
    await page
      .locator('#slide-content')
      .getByRole('heading', {
        name: new RegExp(presentation.title, 'i'),
      })
      .first()
      .waitFor({ state: 'visible' });
    await page.waitForFunction(() =>
      [...document.images].every(
        (image) => image.complete && image.naturalWidth > 0,
      ),
    );
    for (const { slide, clicks } of presentation.videos ?? []) {
      await page.goto(`${deck.href}#/${slide}?clicks=${clicks}`, {
        waitUntil: 'load',
      });
      const video = page.locator(
        `#slide-content [data-slidev-no="${slide}"] video`,
      );
      await video.waitFor({ state: 'visible' });
      // Decode an actual frame, rather than accepting a successful file request.
      await video.evaluate(async (element) => {
        element.muted = true;
        await element.play();
      });
      await page.waitForFunction((slide) => {
        const video = document.querySelector(
          `#slide-content [data-slidev-no="${slide}"] video`,
        );
        return video?.videoWidth > 0 && video.currentTime > 0;
      }, slide);
      await video.evaluate((element) => element.pause());
    }
    console.log(
      `Loaded ${deck.href}; images and ${presentation.videos?.length ?? 0} videos checked.`,
    );
  }
  assert.deepEqual(errors, [], 'No browser errors or failing site resources.');
} finally {
  await browser.close();
}
