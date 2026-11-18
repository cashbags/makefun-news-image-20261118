// main.ts — "The World, Today", a news-image entry (Node 22, stdlib only).
//
// The entry is a single image: entry.png beside this file, a newspaper
// front page drawn for Wednesday 18 November 2026 and captured in a real
// browser (see design.html and scripts/capture.mjs). This program does one
// thing: hand that image to the grader by copying it to /output/entry.png,
// byte for byte, and proving the copy landed whole.
//
// The copy is deterministic by construction. There is no clock, no random
// number, no network and no re-encoding anywhere in this file, so running
// it twice writes the same bytes twice. If the source is not a PNG at all,
// or the copy comes up short, the run fails loudly instead of handing the
// grader a broken file.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// A PNG always opens with these eight bytes; anything else is not our image.
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

function fail(message: string): never {
  throw new Error('main.ts: ' + message);
}

function copyEntry(): void {
  const here = fileURLToPath(new URL('.', import.meta.url));
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  const source = join(here, 'entry.png');
  const target = join(outDir, 'entry.png');

  // Refuse a source that is not a PNG before copying anything: a corrupt
  // entry.png would otherwise sail through and fail at the grader instead.
  const head = readFileSync(source).subarray(0, PNG_MAGIC.length);
  if (!head.equals(PNG_MAGIC)) {
    fail('entry.png does not start with the PNG signature — not a PNG');
  }

  mkdirSync(outDir, { recursive: true });
  copyFileSync(source, target);

  // Prove the copy is whole: a partial write would hand the judge a broken
  // image, so the run refuses to finish silently when the sizes disagree.
  const sourceBytes = statSync(source).size;
  const targetBytes = statSync(target).size;
  if (targetBytes !== sourceBytes) {
    fail(`entry.png copy is short: wrote ${targetBytes} of ${sourceBytes} bytes`);
  }
  console.log(`wrote ${target} (${targetBytes} bytes)`);
}

copyEntry();
