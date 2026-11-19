# DESIGN.md — "The World, Today": one front page for 18 November 2026

This is the design record for the entry image: what the page is trying to do
for the judge, why each story was chosen, where each fact came from, and what
was deliberately left out. It is written for the next person who opens the
code, and for the judge reading the source outline.

## The idea in one paragraph

A newspaper front page, not a collage. The judge has no news feed and is not
told which day the contest is about, so the image has to do three jobs at
once: name the day unmistakably, show the day's most consequential stories
across regions and fields, and stay legible when it is shrunk to about 300
pixels across. A front page does all three by convention — a masthead with
the date in full, a lead story with the biggest headline, smaller stories in
ranked order, and a source line — so a viewer who missed the day can tell
what happened from the image alone, and a viewer at 300 pixels can still
read the masthead, the date, and every headline.

## Why these six stories

The day's news was gathered from the daily briefs published for Wednesday 18
November 2026 and checked story by story against wire reporting (Reuters,
AP, BBC, Al Jazeera). On 19 November, with the whole day over everywhere,
all six were re-checked against the full day's reporting before this retry;
the only change that re-check produced is the rail wording in story 1 (see
"Re-verification, 19 November"). The six that made the page are the ones
that recur across every brief of the day and that span the most ground:

1. **The bridge war (lead).** Ukraine struck the Kerch Bridge — the
   road-and-rail link from Russia to occupied Crimea — for a second straight
   day; the road arch collapsed into the strait, halting traffic. Hours
   earlier, Russian missiles hit two of Kyiv's main bridges over the Dnipro
   (the Northern and Southern), closing both and disrupting water and
   heating in the capital. President Zelenskyy called the strike an
   "unprecedented operation". This is the lead because it is the day's most
   consequential event and because both sides' bridge strikes belong in one
   story, not two.
2. **Bahrain.** Iran's Revolutionary Guard said its drones targeted a US
   radar system at Isa Air Base in Bahrain — the third such attack in five
   days, after claims on Friday and Sunday. Bahrain said its air defences
   stopped the drones, and US Central Command said they were intercepted
   with no damage to US equipment and no American personnel hurt. The page
   says Tehran *claims* a hit and the US and Bahrain say *intercepted*,
   because no outlet had established a hit on the day.
3. **Asia.** Trump arrived in Manila late Tuesday for the Quad leaders'
   meeting — the first in two years — and on Wednesday holds a state visit
   and lunch with President Marcos before flying to Shenzhen, where a
   first-ever trilateral meeting of Trump, Xi and Putin is set for Thursday
   19 November, with nuclear arms the stated focus. The page states the
   meeting as set for Thursday, not as having happened.
4. **Nvidia.** Revenue of $115.8bn for the quarter, up 103% on a year ago
   and above the roughly $109bn forecast, in the first report since founder
   Jensen Huang resigned as chief executive on 12 November. Interim chief
   Colette Kress steered the call; chair Harvey Jones said the board does
   not intend to reinstate Huang. The quarter guided next is $130bn. A
   reported SEC civil probe is left out of the page — it was a same-day
   report, not the earnings themselves, and the page has no room for it.
5. **Settlements.** Britain sanctioned companies it said are involved in
   building settlements in the occupied West Bank, and joined eleven other
   nations pledging curbs on settlement trade, in a joint statement to
   safeguard a two-state solution. The US ambassador to Israel warned of
   repercussions. The page says "Britain and 11 nations move on
   settlements" and names the warning, not the full twelve-country list.
6. **Measles (strip).** The Pan American Health Organization formally
   announced that the United States has lost its measles-elimination
   status after 26 years, with more than 5,400 cases in 2026 — the most
   since 1991 — and Mexico and Bolivia losing the status too. It runs as
   the bottom strip because it is a status ruling, not a breaking event,
   and the strip is where a front page puts exactly that kind of story.

Stories that were considered and cut: Cyclone Akvan intensifying in the Bay
of Bengal (a weather watch, not yet a landfall story); MS Dhoni retiring
from the IPL (sport, one country); and the Canada–China trade extension
(real, but folded into the APEC week the Asia story already covers). The
18 November Gulf picture also grew during the day — Iran claimed a drone
attack on Ali Al-Salem Air Base in Kuwait, and the US struck a missile site
on Qeshm Island on 17 November — but the Bahrain box already carries the
Gulf beat, and the page has no room for a seventh story.

## Re-verification, 19 November

With the day complete, each story was checked again against the full day's
reporting (19 November, before the retry capture):

- **Kerch / Kyiv:** confirmed — 227-metre road arch span fell into the
  strait, Zelenskyy called it "unprecedented", Kyiv's North and South
  bridges hit by seven ballistic missiles, water and heating disrupted.
  One fix: the first edition said rail was "back on one track". The
  day's reporting disagrees on the rail — Russia's transport ministry was
  quoted saying rail traffic was not interrupted, while other reports
  describe limited service resuming. The page now says "rail traffic
  reported running", which is the wording every account supports.
- **Bahrain:** confirmed — IRGC said its drones targeted the US radar at
  Isa Air Base; Bahrain and CENTCOM said intercepted, no damage, no
  injuries. Counts differ between outlets (third vs fourth attack in the
  sequence); the page keeps the hedged claim/counter-claim wording and
  does not settle the count.
- **Asia:** confirmed — Quad meets for the first time in two years, Trump
  in Manila, Xi and Putin opened the APEC summit in Shenzhen ahead of his
  arrival, trilateral set for Thursday.
- **Nvidia:** confirmed in full — $115.8bn, +103%, beat of ~$109bn
  expected, first report under interim CEO Colette Kress since Huang's
  12 November resignation, board chair Harvey Jones ruling out
  reinstatement, $130bn guided next quarter.
- **Settlements:** confirmed — Britain sanctioned eight Israeli companies
  building in the West Bank (plus Tzav 9), twelve countries pledging curbs
  on settlement trade.
- **Measles:** confirmed — PAHO withdrew elimination status from the US,
  Mexico and Bolivia; US 5,412 confirmed cases as of 12 November, most
  since 1991. The page keeps the rounded "5,400 cases", the figure the
  briefs carried; a higher count (over 5,700) appears in one roundup and
  is not used.

## What the page does not claim

- No casualty numbers. The Crimea and Kyiv strikes killed people in some
  reports, but the counts differed between outlets on the day and the two
  events are easy to conflate, so the page carries none.
- No attribution the reporting did not support: the Bahrain drones are
  "Tehran claims a hit" against "intercepted, no damage" — both claims are
  carried, neither is settled by the page.
- No day attached to the Nvidia or measles items beyond the page's own
  date: both were first reported late on Tuesday in some time zones and led
  the Wednesday briefs; the masthead dates the page, the stories do not
  re-date themselves.
- The trilateral meeting is dated Thursday, in the future relative to the
  page: "to meet", "set for Thursday", never "met".

## The layout, and why it is shaped this way

- **Masthead (top, ~150 px).** "The World, Today" in 56 pt serif, then
  "WEDNESDAY · 18 NOVEMBER 2026" in 28 pt letterspaced sans. The date is
  the second-biggest text on the page on purpose: the judge's first
  criterion is that the image names its day, and a date that size cannot be
  missed at 300 pixels either.
- **Lead (~270 px).** One illustration on the left, headline and deck on
  the right. The bridge drawing shows the fact itself: two standing arches,
  a gap where the middle arch was, a span tilted down into the water,
  smoke, a truck stopped at the edge, and the strait labelled. A reader who
  reads no words still gets "bridge broken".
- **Two rows of two stories (~170 px each).** Each story gets a small
  140 px illustration and a headline of 24 pt. The illustrations are
  pictograms of the fact — drones at a radar dish with an interception
  burst, a dashed flight arc from Manila to Shenzhen with three dots for
  the three leaders, a chip beside a rising bar chart, a document stamped
  SANCTIONED — drawn as inline SVG in `design.html`, every shape original
  to this entry. No photographs: the entry must be ours to license, and a
  photo would also be unreadable at 300 pixels.
- **Bottom strip.** The sixth story in one line, with its tag. The strip
  exists so the page reaches six stories without a seventh box crowding the
  grid.
- **Footer.** "As reported on the day by Reuters · AP · BBC · Al Jazeera"
  plus the date again. The second date is belt and braces: if the masthead
  were ever cropped in a repost, the footer still dates the page.

## Legibility at 300 pixels

The page was downscaled to 300×300 and viewed. The masthead title, the
date line, the lead headline and all four story headlines remain readable;
the deck paragraphs blur into grey, which is expected and acceptable — the
headlines carry the news, the decks carry the detail for the full-size
viewer. Nothing on the page depends on text smaller than 16 pt at full
size, and no headline wraps past three lines.

## The build

`design.html` is the whole design: one HTML file, inline CSS, inline SVG,
DejaVu Serif/Sans (the fonts the capture machine has). `scripts/capture.mjs`
loads it in headless Chromium through playwright-core and screenshots the
`.page` element at 1024×1024 as PNG. `main.ts` copies the resulting
`entry.png` to `/output/entry.png` and verifies the PNG signature, the
1 MiB cap, and the byte length, so a corrupt source fails at build time
instead of at the gate. The program is deterministic: two runs write
byte-identical output (see `CHECK.md`).

## Revisions during this retry

The previous edition (submitted 18 November, rejected by the server on the
run record, not on the image) was viewed again at full size and at 300 px
before this rewrite: masthead, date, lead headline, all four story
headlines, the measles strip and the footer were all present and legible,
with no clipping and no overlapping labels. Two things changed in this
retry: the design was re-authored in this session (CSS reorganised around
shared variables, comments rewritten) and the rail wording was tightened
after the 19 November re-verification (see above). The capture was then
re-run from the rewritten page and viewed again at both sizes; see
`CHECK.md` for the numbers.
