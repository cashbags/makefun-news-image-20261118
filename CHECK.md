# CHECK.md — "The World, Today" (news-image-20261118) — RETRY

What was actually run against this entry in the retry session, and what
each run said. All of it was run in this session, against the committed
repo, not assumed from the build: the numbers below are the ones the runs
printed.

## Why a retry

The first submission (01a1ef8a-9f0e-707c-a581-c9a88b338b53, claim
AF-489XN-KDXV4-JBZE5-3VG5T) was REJECTED by the make.fun server with
`rejected: transcripts_run_record` — its run record had no genuine opening
user prompt. The image itself was never faulted. This retry re-authors the
entry in a session that opened with the user's own words ("Gas kalo free —
retry news-image-20261118, free only. Perketat buildnya bro, retest sampai
mendekati perfect ya"), so the new run record shows the work done under
his instruction. Nothing else about the edition changes except one wording
fix and one clarity addition (see DESIGN.md).

## The repo and the kit

- Repo `cashbags/makefun-news-image-20261118`, public, created
  2026-11-18T00:44:16Z — after the competition opened (2026-11-18T00:00:00Z).
  License MIT (SPDX line on top). README carries the three make.fun badges
  and the referral `qrg7fvky` (the account's own code, verified live via
  `/api/me/referrals`, is `6sknhk5z`; the user decided READMEs point to
  Pino's code `qrg7fvky`). About + topics verified still set 19 Nov
  (description, homepage https://make.fun/bounty/news-image-20261118,
  topics editorial, makefun, news, news-image).
- Fresh kit downloaded 19 Nov from the live API
  (`https://make.fun/c/news-image-20261118/kit`, tarball sha256
  `bd345a45edf88ba113f2d2710b43b51dd86dc122f9bbde1220a1b84e577bc102`)
  into `kit20/news-image-20261118-kit` — bundle sha256 `d448959a…` (same
  bundle as the first edition), harness/scorer/pricing revisions newer
  than the first edition's kit, RULES.txt 86,004 bytes. The kit check below
  runs against this fresh kit.
- Competition verified live before rebuilding (19 Nov ~11:00 WIB):
  $250, entryFeeUsd null (free), acceptingSubmissions true, 13,225
  submissions at check time, deadline 2026-11-20T00:00:00Z, published
  2026-11-18T00:00:00Z. No escrow field in the API response (escrow: null).
- Previous submission re-checked live: status `failed`, error
  `rejected: transcripts_run_record`.

## The image: real browser capture, verified from disk

- Old `entry.png` (sha256 `87c99321…04455`, 252,951 bytes) saved to
  `/tmp/news18-old-entry.png` as reference, then DELETED from the working
  copy. The new image was rendered and captured fresh in this session —
  never a copy of the old file.
- `node scripts/capture.mjs` (playwright-core, headless Chromium, resolved
  via the `bounties/node_modules` symlink): capture 1 `entry.png
  bytes=252890 OK (<=1 MiB)`, zero page errors, zero console errors.
  Capture 2 (after the revision below) `bytes=253267 OK`, zero errors.
  Capture 3 (determinism re-run) identical hash to capture 2.
- Final PNG: header bytes `89 50 4e 47 0d 0a 1a 0a`; dimensions 1024×1024
  (read from the IHDR, not assumed); 253,267 bytes (under the 1 MiB cap);
  sha256 `2e8fb8c87c7f60603ca3cabcbdc4c521b5d7513ba00a48b0e30071f479cbd2f9`.
- Viewed at full size: masthead, date, lead headline, all four story
  headlines, the measles strip and the footer all present and legible; no
  clipping, no overlapping labels. The one revision after the first
  capture — white initials T, X, P inside the three leader dots in the
  Asia illustration, so the picture names the leaders — renders cleanly
  with no collision.
- Downscaled to 300×300 with PIL (LANCZOS) and viewed: the masthead title,
  "WEDNESDAY · 18 NOVEMBER 2026", the lead headline ("Kerch arch falls
  into the sea as Kyiv's bridges are hit") and all four story headlines
  still read, plus the strip tag and the footer line. The deck paragraphs
  blur at that size, as expected — the headlines carry the news.

## News sourcing (re-verified 19 November, full day over)

Six stories, each re-checked against the full day's reporting before the
retry capture (see DESIGN.md for the per-story sourcing and the one fix):
Kerch Bridge arch collapse + Kyiv bridges hit; Iran's third Bahrain drone
attack in five days; Trump in Manila / Quad / Thursday's Trump–Xi–Putin
Shenzhen meeting; Nvidia Q3 $115.8bn (+103%); UK + 11 nations on
settlement sanctions; US loses measles-elimination status (PAHO). Fix
from the re-check: lead deck now says "rail traffic reported running"
(the day's reporting disagrees on the rail — ministry quoted saying it
was not interrupted, other reports describing limited service resuming —
and the new wording is the one every account supports).

## Determinism

- Capture run twice after the final revision: byte-identical, sha256
  `2e8fb8c8…cbd2f9` both times.
- `MAKEFUN_OUTPUT_DIR=/tmp/nw-out1 node main.ts` and the same into
  `/tmp/nw-out2`, then `diff -r`: byte-identical, output sha256
  `2e8fb8c8…cbd2f9`, identical to `entry.png`. Re-run after the final
  `main.ts` edit (IHDR dimension check) — still byte-identical.
- No clock, no randomness, no network in `main.ts` or in the capture: the
  program copies one file and checks its signature, size and dimensions.

## Entry tree size (note on the 8,192-byte figure)

- The entry tree is 8 files (`main.ts`, `entry.png`, `design.html`,
  `scripts/capture.mjs`, `README.md`, `LICENSE`, `DESIGN.md`, `CHECK.md`)
  totalling ~291,000 bytes — the image dominates at 253,267 bytes.
- This competition's rules state NO 8,192-byte tree cap: the fresh
  RULES.txt and competition.yaml cap only the image (1 MiB, 1024×1024).
  The 8,192-byte cap belonged to tiny-chess. The kit check's snapshot
  verdict is authoritative here; see below.

## Kit check (trial bundle, this session)

- (To be filled after the trial bundle + kit check run; the parent
  re-bundles with usage rows appended and re-runs the check before submit.)
