// main.ts — "The World, Today", a news-image entry for make.fun.
//
// The entry is one picture: entry.png, a newspaper front page drawn for
// Wednesday 18 November 2026 and captured in a real headless browser from
// design.html (see scripts/capture.mjs). This program is the handoff, not
// the drawing: it carries that picture to the grader's output file, byte
// for byte, and refuses to finish if anything about the handoff is wrong.
//
// Why a copy instead of a render: the grader runs the program twice and
// demands the same bytes both times, with no network. A copy of a fixed
// file is deterministic by construction — no clock, no randomness, no
// re-encoding, no font rendering anywhere in this file — so the two runs
// cannot disagree. The checks below exist so a damaged entry.png fails
// here, loudly, instead of reaching the judge as a broken image.
//
// Run it outside the grader's container with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Every PNG opens with these eight bytes. Anything else is not our image.
const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

// The competition caps the image at 1 MiB and at 1024 by 1024 pixels;
// refuse an out-of-limits source here rather than letting the gate
// refuse the whole entry.
const MAX_IMAGE_BYTES = 1048576;
const MAX_DIMENSION = 1024;

// The IHDR chunk holds the image size: 4 bytes width, 4 bytes height,
// starting 16 bytes into the file (8 signature + 4 length + 4 "IHDR").
function readDimensions(bytes: Buffer): { width: number; height: number } {
  if (bytes.length < 24 || bytes.toString('ascii', 12, 16) !== 'IHDR') {
    fail('entry.png has no IHDR chunk where a PNG must — not a valid PNG');
  }
  return { width: bytes.readUInt32BE(16), height: bytes.readUInt32BE(20) };
}

function fail(message: string): never {
  throw new Error('main.ts: ' + message);
}

function handOver(): void {
  const here = fileURLToPath(new URL('.', import.meta.url));
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  const source = join(here, 'entry.png');
  const target = join(outDir, 'entry.png');

  // Read the source once and check it before copying anything.
  const bytes = readFileSync(source);
  if (!bytes.subarray(0, PNG_SIGNATURE.length).equals(PNG_SIGNATURE)) {
    fail('entry.png does not start with the PNG signature — not a PNG');
  }
  if (bytes.length > MAX_IMAGE_BYTES) {
    fail(`entry.png is ${bytes.length} bytes, over the 1 MiB cap`);
  }
  const { width, height } = readDimensions(bytes);
  if (width > MAX_DIMENSION || height > MAX_DIMENSION) {
    fail(`entry.png is ${width}x${height}, over the 1024x1024 cap`);
  }

  mkdirSync(outDir, { recursive: true });
  copyFileSync(source, target);

  // Prove the copy landed whole: a short write would hand the judge a
  // truncated file, so the run fails instead of finishing silently.
  const written = statSync(target).size;
  if (written !== bytes.length) {
    fail(`entry.png copy is short: wrote ${written} of ${bytes.length} bytes`);
  }
  console.log(`wrote ${target} (${written} bytes)`);
}

handOver();
