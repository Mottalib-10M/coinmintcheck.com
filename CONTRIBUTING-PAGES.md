# Adding or editing a page

One page = one file `src/content/pages/<id>.ts` exporting `definePage({...})` (types in
`src/lib/guide-types.ts`). The file name must equal `id`. Model: `penny-value.ts`. The page is built at
`/en/<en.slug>/`; menus, footer, home lists and sitemap follow by themselves. English only (en-US).

## Fields

- `group`: `tools`, `pennies`, `nickels-dimes`, `quarters-halves` or `dollars`; `order`: position in its group.
- `tool`: the main tool, shown right under the H1 (first screen, RECETTE §5):
  - `{ kind: 'coin', props?: { denom, year, mint } }` (coin checker: mintage, metal, melt value)
  - `{ kind: 'melt', props?: { type, qty } }` (melt value calculator)
  - `{ kind: 'quiz' }` (grading quiz)
  - `{ kind: 'mini:<spec>' }`, specs in `src/lib/mini-specs.ts`, always computed by `src/lib/engine/coins.ts`.
- `mini`: a second tool under the citable block (same kinds).
- In a body, `<!--tool:mini:pennyjar-->` places a tool between paragraphs.
- `related`: 3–5 page ids. `sources`: keys of `src/data/params-2026.json` → `sources`.

## Text rules (checked by `npx vitest run tests/pages.test.ts`, then `npm run check`)

- `title` 50–60 characters, key term first ("Penny Value: …"), never "How…", "What…", "US…" first.
- `description` 150–160 characters.
- `resume(h)`: ONE paragraph (no tags but links) of at least 120 words answering the page's query with figures.
- `faqs(h)`: 3–5 questions unique across the site, each answer 42–88 words, plain text.
- `body(h)`: HTML with at least three `<h2>` sections; resume + body at least 650 words. No `<h1>`.
- No em dash; US spelling; dates in words ("November 12, 2025").
- Pages must read differently (check-unique): no shared boilerplate paragraph.
- Links only to official sources (`h.src(key, text)`) and internal pages (`h.a(id, text)`). Never a dealer,
  auction house, grading service, price guide or forum; never mention a search engine or another site.
- No collector or dealer price: no free official source publishes them. Melt value and mintage only.

## Figures

Never type a mintage, a weight or a price: read them through `h` (`src/lib/helpers.ts`): `h.mint(denom, year, mint)`,
`h.total`, `h.meltOf(alloyKey)`, `h.grams`, `h.alloy`, `h.lowestList`, `h.lowestTable`, `h.seriesTable`, `h.silver`,
`h.copper`, `h.priceDate`, `h.PENNY`, `h.MARKS`, `h.CFR`, `h.states`, `h.date(iso)`, `h.table(headers, rows, caption, align)`.
A fact that is not in an official publication is not written.

## Data

- `data/mint-tables/*.txt`: our transcription of the Bureau of the Mint tables (1981) and of the Mint production
  pages; `python3 scripts/build-mintages.py` rebuilds `src/data/mintages.json`.
- `src/data/params-2026.json`: weights, alloys, dates and monthly metal prices (date in `retrieved_at`), the World
  Bank prices checked monthly by `scripts/update-data.py` (workflow `.github/workflows/update-data.yml`, exit code 2
  on a change).
- `src/data/spot-snapshot.json`: silver and copper price read at build time by `scripts/fetch-spot.mjs`
  (gold-api.com); the browser then reads the price of the moment.
