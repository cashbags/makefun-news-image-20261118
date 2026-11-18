// Capture the entry image: open design.html in a real headless Chromium
// and screenshot the 1024x1024 front page as PNG.
//
// This is a build-time step only — the entry program itself (main.ts) never
// touches a browser or a network; it just copies the file this script
// produces. Run from the entry directory:
//
//   NODE_PATH=<dir holding playwright-core> node scripts/capture.mjs
//
// Output: entry.png beside design.html (1024x1024, must stay under 1 MiB).
// Any page error or console error fails the run, so a broken page can never
// silently become the entry image.
import { chromium } from 'playwright-core';
import { statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const entryDir = dirname(here);
const pageUrl = 'file://' + join(entryDir, 'design.html');
const outPath = join(entryDir, 'entry.png');

const browser = await chromium.launch({
  args: ['--no-sandbox', '--disable-gpu-sandbox', '--force-device-scale-factor=1'],
});
let failures = 0;
const page = await browser.newPage({
  viewport: { width: 1024, height: 1024 },
  deviceScaleFactor: 1,
});
page.on('pageerror', (e) => { console.log('pageerror:', String(e).slice(0, 300)); failures += 1; });
page.on('console', (m) => {
  if (m.type() === 'error') { console.log('console error:', m.text().slice(0, 200)); failures += 1; }
});
await page.goto(pageUrl, { waitUntil: 'load', timeout: 60000 });
await page.waitForTimeout(400);
const el = await page.$('.page');
if (!el) { console.log('FAIL: .page element not found'); process.exit(1); }
await el.screenshot({ path: outPath, type: 'png' });
await browser.close();
const size = statSync(outPath).size;
console.log('entry.png bytes=' + size, size <= 1048576 ? 'OK (<=1 MiB)' : 'TOO BIG');
if (size > 1048576) failures += 1;
process.exit(failures ? 1 : 0);
