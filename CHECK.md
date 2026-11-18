# CHECK.md — "The World, Today" (news-image-20261118)

What was actually run against this entry, and what each run said. All of it
was run in this session, against the committed repo, not assumed from the
build: the numbers below are the ones the runs printed.

## The repo and the kit

- Repo `cashbags/makefun-news-image-20261118`, public, created
  2026-11-18T00:44:16Z — after the competition opened (2026-11-18T00:00:00Z).
  License MIT (SPDX line on top). README carries the three make.fun badges
  and the referral `qrg7fvky` (the account's own code, verified live via
  `/api/me/referrals`, is `6sknhk5z`; the user decided READMEs point to
  Pino's code `qrg7fvky`). About + topics set (editorial, makefun, news,
  news-image) — topics via the dedicated endpoint, since PATCH alone leaves
  them empty.
- Kit downloaded from the live API and unpacked at
  `../kit/news-image-20261118-kit` (bundle sha256 `d448959a…` per kit.json);
  the starter's `main.ts` was read, not copied — this entry's `main.ts` is
  written fresh in this session with its own structure (PNG signature check
  plus byte-length proof, wrapped in a helper with a named fail path).
- Competition verified live before building: $250, entryFeeUsd null (free),
  acceptingSubmissions true, 527 submissions at check time, deadline
  2026-11-20T00:00:00Z, published 2026-11-18T00:00:00Z. No escrow field in
  the API response (escrow: null) — the submit step decides whether a
  signed entry is needed; the keypair is on hand if so.

## The image: real browser capture, verified from disk

- `node scripts/capture.mjs` (playwright-core 1.55.0, headless Chromium,
  resolved via a `node_modules` symlink at `bounties/node_modules` pointing
  at the threejs-fps-02 tools install — ESM ignores NODE_PATH, so the
  symlink is how the import resolves; the entry tree itself holds no
  node_modules): final capture `entry.png bytes=252951 OK (<=1 MiB)`, zero
  page errors, zero console errors.
- PNG header bytes `89 50 4e 47 0d 0a 1a 0a`; dimensions 1024×1024
  (read from the IHDR, not assumed); sha256
  `87c993212df740ebbdd39fca50c7b3ecfa98be8a51dcd71e5d1ed8099c604455`.
- Viewed at full size: masthead, date, lead headline, all four story
  headlines, the measles strip and the footer all present and legible.
  Two defects were caught by viewing and fixed, each re-captured and
  re-viewed (see DESIGN.md): the first capture clipped the strip and
  footer (content overflowed the 1024 px page), and two illustration
  labels overlapped their artwork (SANCTIONED stamp over "12 NATIONS",
  "ISA AIR BASE" over the radar base). The final view confirms all six
  stories and the footer are in frame and the stamp reads SANCTIONED in
  full inside its box.
- Downscaled to 300×300 with PIL (LANCZOS) and viewed: the masthead title,
  "WEDNESDAY · 18 NOVEMBER 2026", the lead headline ("Kerch arch falls
  into the sea as Kyiv's bridges are hit") and all four story headlines
  still read, plus the strip tag and the footer line. The deck paragraphs
  blur at that size, as expected — the headlines carry the news.

## Determinism

- `MAKEFUN_OUTPUT_DIR=/tmp/nw-out1 node main.ts` and the same into
  `/tmp/nw-out2`, then `diff -r`: byte-identical, output sha256
  `87c99321…04455`, identical to `entry.png`. Run once, after the final
  capture; `main.ts` was not edited afterwards.
- No clock, no randomness, no network in `main.ts` or in the capture: the
  program copies one file and checks its length.

## Entry tree size (tiny-chess lesson)

- Local kit check does NOT enforce every competition's snapshot tree cap,
  so it is checked by hand here: the entry tree is 7 files
  (`main.ts`, `entry.png`, `design.html`, `scripts/capture.mjs`, `README.md`,
  `LICENSE`, `DESIGN.md`) totalling 283,951 bytes — the image dominates at
  252,951 bytes and the text files total 31,000 bytes. This competition's
  rules state no 8,192-byte tree cap (that cap belonged to tiny-chess);
  the kit check itself reports the snapshot "within the intake's caps",
  and the gta6 entry passed with a 2.8 MB tree.

## Kit check (trial bundle, this session — 2026-11-18 00:55 WIB)

- Command: `node cli/makefun.mjs check --kit <kit> --repo <entry> --transcripts transcripts.tar.gz`
  (trial bundle `transcripts.tar.gz`, 155,503 B, sha256
  `1870bd1213ef1f0551ccc131dd096c11ad140d38661a02ec123c21b652690b90`,
  1 session, 42 turns, 165 lines).
- Result: **12 passed, 1 failed, 5 skipped, 5 checked at submission** —
  `not ready: fix thinking_priced, then check again`.
- Passes: competition_open, snapshot (7 files, 283,951 bytes, within caps),
  license_osi (MIT), entrypoint (main.ts, node22), transcripts_present (1
  muse-app session), transcripts_recorded, thinking_wellformed (103
  messages, 60 tool results answering their calls; 1 tool call without a
  result — a hosted tool still running when the trial bundle was taken),
  thinking_in_window (all 102 timestamps between opening
  2026-11-18T00:00:00Z and receipt), thinking_reproduces **53.8% (243 of
  451 counted lines authored; 1 copied, 206 read, 1 absent; entrypoint
  main.ts 23 authored lines; unwritten 0.0%)**, thinking_turns (31, need
  5), thinking_revised (design.html from 3 messages), transcripts_run_record
  (handed-off prompt, agent facts, system prompt in-session, instruction
  files collected, no MCP).
- The one failure, thinking_priced, is structural to this subagent run and
  expected: 0 usage rows, because a subagent's usage rows land in muse.db
  only after its run completes. Fix (parent, after this run): run the SELECT
  with agent_ids `0f517a1d-f348-4fd3-beba-04116e63a21e` (builder) and
  `5b140a2e-8965-4909-b8eb-07f820a6be0e` (parent), append the rows to
  `~/.makefun/muse-usage-news-image-20261118.jsonl`, re-bundle from the
  top-level agent with `--session` + `--no-family` + `--muse-usage`, and
  re-run the kit check. Nothing needs rebuilding.
- At-submission items (site-side): repo_public (repo IS public, verified),
  repo_owner (owner cashbags = the account's GitHub login),
  repo_created_after_open (created 2026-11-18T00:44:16Z, after opening),
  commit_in_repo (the local commit `02e8f16…` was never pushed as a commit
  — files went up via the Contents API, one commit per file), 
  duplicate_snapshot. NOTE: submit the **GitHub HEAD** commit, not the
  local commit — the commit in the repo is the GitHub HEAD (see STATUS.md
  for the current value after the CHECK.md push below).

## News sourcing

Six stories, each checked against the day's reporting before it was drawn
(see DESIGN.md for the per-story sourcing): Kerch Bridge arch collapse +
Kyiv bridges hit; Iran's third Bahrain drone attack in five days; Trump in
Manila / Quad / Thursday's Trump–Xi–Putin Shenzhen meeting; Nvidia Q3
$115.8bn (+103%); UK + 11 nations on settlement sanctions; US loses
measles-elimination status (PAHO). Cut: Cyclone Akvan, Dhoni's IPL
retirement, Canada–China trade extension (folded into the Asia story).
