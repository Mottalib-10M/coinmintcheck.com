import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'rare-quarters-worth-money',
  group: 'quarters-halves',
  order: 30,
  tool: { kind: 'mini:rarequarter' },
  mini: { kind: 'mini:washington' },
  related: ['silver-quarter-value', 'state-quarters-value', 'bicentennial-quarter-value', 'error-coins', 'coin-grading'],
  sources: ['mintBook', 'mintMarks', 'mintHistory', 'modernProduction'],
  en: {
    slug: 'rare-quarters-worth-money',
    nav: 'Rare quarters',
    card: 'The quarters struck in the smallest numbers since 1916, ranked from the Mint tables, with the 1932-D and 1932-S and the W quarters of 2019.',
    title: 'Rare Quarters Worth Money: Lowest Mintages Since 1916',
    description: 'Rare quarters ranked by number struck in the Mint tables: the 1932-D and 1932-S Washington quarters, Standing Liberty key dates and the West Point W quarters.',
    h1: 'Rare quarters: which dates were struck in the smallest numbers?',
    intro: 'Choose a range of years: the tool ranks the quarters struck in the smallest numbers at each mint, with the figure from the Mint tables.',
    resume: (h) => `The quarters most worth looking for are the ones the Mint struck in the smallest numbers, and the official tables make them easy to list. Since the Standing Liberty design of 1916, the lowest figures are ${h.lowestList('quarter', 1916, 1980, 5)}, according to the Bureau of the Mint. The two 1932 branch-mint Washington quarters stand out: ${h.mint('quarter', 1932, 'D')} at Denver and ${h.mint('quarter', 1932, 'S')} at San Francisco, in the first year of a design later struck by the hundreds of millions. In modern times the Mint created scarcity on purpose: in ${h.MARKS.wQuarters} it released about ${h.MARKS.wQuartersMillions} million quarters with the W mark of West Point into circulation. A low mintage is a reason to look closely, not a price: survival and condition decide what a collector pays, and this site publishes no collector prices. Every quarter dated 1964 or earlier is also 90% silver, worth about ${h.meltOf('silverQuarter')} in metal.`,
    faqs: (h) => [
      { q: 'Why are the 1932-D and 1932-S quarters so scarce?', a: `The Washington quarter was introduced in 1932, and the branch mints struck few that year: ${h.mint('quarter', 1932, 'D')} at Denver and ${h.mint('quarter', 1932, 'S')} at San Francisco, against ${h.mint('quarter', 1932, 'P')} at Philadelphia. No quarters at all were struck in 1931 or 1933, so the 1932 branch-mint coins have no neighbors to dilute them.` },
      { q: 'How many West Point W quarters were released?', a: `The Mint released about ${h.MARKS.wQuartersMillions} million quarters with the W mark in ${h.MARKS.wQuarters}, mixed into ordinary circulation rather than sold in sets. Compared with the billions of quarters struck that year, it is a small number, but large next to the true key dates of the 1930s.` },
      { q: 'Is a Standing Liberty quarter worth more if the date is worn?', a: 'Less, usually. On this design the date sits on a raised step and wears away quickly, so many surviving coins have a partial date or none. Without a readable date, a coin cannot be matched to its mintage and is generally counted as silver, at 90% purity like every quarter dated 1964 or earlier.' },
      { q: 'Does a quarter without a mint mark mean it is rare?', a: `Rarely. Philadelphia struck its quarters without a letter until ${h.MARKS.pAllButCentFrom}, and coins dated ${h.MARKS.noMarkFrom} to ${h.MARKS.noMarkTo} carry no mark from any mint. A missing letter only matters on a coin and year where every piece should have one, which is the kind of error an expert needs to confirm.` },
    ],
    body: (h) => `
<h2>The lowest numbers struck since 1916</h2>
<p>The ranking below reads the ${h.src('mintBook', 'Bureau of the Mint tables')} for every quarter from 1916 to 1980, and leaves out the San Francisco figures of 1965 onwards, which mostly count proof coins made for collector sets. It counts pieces made in each calendar year at each mint. The 1916 figures mix the last Barber quarters with the first Standing Liberty quarters, so the true number of 1916 Standing Liberty coins is smaller than the year total.</p>
${h.lowestTable('quarter', 1916, 1980, 12, `Quarters struck per calendar year and mint, from the ${h.src('mintBook', 'Bureau of the Mint, 1981')}; San Francisco 1965 to 1980 excluded.`)}
<p>Most of the list belongs to the Standing Liberty years of 1916 to 1930, when San Francisco and Denver struck quarters in small batches. The two Washington quarters of 1932 are the only ones of that design with figures under a million.</p>

<h2>Washington quarters, year by year</h2>
<p>From 1932 the Washington quarter took over, and production quickly rose into the tens of millions. The tool below reads the figure for any year from 1932 to 1998 at each mint. It is the fastest way to check a quarter from a drawer or an inherited roll against the official tables.</p>
<!--tool:mini:washington-->
<p>Two pages complete this one: the ${h.a('silver-quarter-value', 'silver quarter page')} for coins dated 1964 or earlier, which are worth their silver whatever their date, and the ${h.a('state-quarters-value', 'state quarters page')} for the fifty designs of 1999 to 2008, none of which is scarce.</p>

<h2>Scarcity made on purpose: the W quarters</h2>
<p>West Point usually strikes collector and bullion coins. In ${h.MARKS.wQuarters}, according to the ${h.src('mintMarks', 'Mint’s page on mint marks')}, it struck about ${h.MARKS.wQuartersMillions} million America the Beautiful quarters with a W and released them into circulation. Next to the hundreds of millions of Denver and Philadelphia quarters of the same years, read in the ${h.src('modernProduction', 'Mint’s production reports')}, a W quarter is worth a look and worth keeping, but it is not rare in the sense of the 1932 coins.</p>

<h2>From a low figure to a real value</h2>
<p>A figure from the tables tells you how many coins were made, not how many survive or in what state. Collectors pay for the combination of a low mintage, a well preserved coin and, for some types, a full strike. The ${h.a('coin-grading', 'grading guide')} explains how condition is judged, and the ${h.a('error-coins', 'error coins guide')} covers the doubled dies and other varieties that sit outside the tables entirely. This site does not give prices, because no official or freely licensed source publishes them.</p>
<p>A practical order of work for a box of old quarters: first separate the silver ones, dated 1964 or earlier; then read the date and mint of each silver coin against the ranking above; finally look over the modern clad coins for a W. Anything that passes one of these filters is worth a second look under a magnifier.</p>
`,
  },
});
