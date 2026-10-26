import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'bicentennial-quarter-value',
  group: 'quarters-halves',
  order: 10,
  tool: { kind: 'mini:bicentennial' },
  mini: { kind: 'mini:silverquarter' },
  related: ['state-quarters-value', 'rare-quarters-worth-money', 'silver-quarter-value', 'kennedy-half-dollar-value', 'home'],
  sources: ['mintBook', 'mintHistory', 'mintSpecs', 'goldApi'],
  en: {
    slug: 'bicentennial-quarter-value',
    nav: 'Bicentennial quarter value',
    card: 'The 1776-1976 drummer boy quarter: how many each mint struck, how to spot the 40% silver version and what the metal is worth.',
    title: 'Bicentennial Quarter Value: 1776-1976 Drummer Boy Coin',
    description: 'Bicentennial quarter value: how many 1776-1976 quarters each mint struck, how to tell the 40% silver S coins from clad ones and what the metal is worth.',
    h1: 'Bicentennial quarter value: is my 1776-1976 quarter special?',
    intro: 'Pick the mint mark under the ribbon, right of Washington’s neck: the tool gives the number struck at that mint, the metal and its value now.',
    resume: (h) => `Almost every Bicentennial quarter you find is worth twenty-five cents. The coins dated 1776-1976, with a colonial drummer on the back, were struck in 1975 and 1976 in very large numbers: the Bureau of the Mint tables record ${h.mint('quarter', 1976, 'P')} at Philadelphia, with no mint mark, and ${h.mint('quarter', 1976, 'D')} at Denver. Those are copper-nickel clad coins of ${h.grams('cladQuarter')} grams, holding about ${h.meltOf('cladQuarter')} of metal. The exception is San Francisco, whose S coins were made for collectors, part of them in a 40% silver-clad alloy of ${h.grams('silverCladQuarter')} grams worth about ${h.meltOf('silverCladQuarter')} at the silver price read on ${h.priceDate}. The tables give ${h.mint('quarter', 1976, 'S')} San Francisco pieces, proof and silver together. An S quarter with no copper stripe on its edge is the one to set aside; the tool above shows what each version holds.`,
    faqs: (h) => [
      { q: 'Why is there no quarter dated 1975?', a: 'Because the Mint replaced it with the Bicentennial design. Quarters, half dollars and dollars struck from mid 1975 through 1976 all carry the double date 1776-1976 instead of the year they were made. The Bureau of the Mint therefore lists them in a table of its own, by the date they bear, rather than by calendar year.' },
      { q: 'How can I tell a silver Bicentennial quarter from a regular one?', a: `Look first for the S under the ribbon: Philadelphia and Denver never struck the silver version. Then check the edge for a copper line, which only clad coins show. A kitchen scale accurate to a hundredth of a gram helps too: ${h.grams('silverCladQuarter')} grams for silver against ${h.grams('cladQuarter')} for copper-nickel.` },
      { q: 'Is a Bicentennial quarter with a D mint mark rare?', a: `No. Denver struck ${h.mint('quarter', 1976, 'D')} of them according to the Bureau of the Mint tables, even more than Philadelphia. A worn D or no-mark Bicentennial quarter is worth its face value. Only an error, such as a coin struck off center or on the wrong blank, or an unworn piece with no marks at all, could lift one above that.` },
    ],
    body: (h) => `
<h2>A coin dated with two years</h2>
<p>For the two hundredth anniversary of independence, the Mint changed the backs of three coins at once: a colonial drummer on the quarter, Independence Hall on the half dollar and the Liberty Bell over the Moon on the Eisenhower dollar, as the ${h.src('mintHistory', 'Mint’s history of circulating coins')} describes. Washington stayed on the front, with the double date 1776-1976 under his neck. No quarter bears the date 1975, and the coins struck that year are counted with those of 1976 in the separate table of dated coins kept by the ${h.src('mintBook', 'Bureau of the Mint')}.</p>
${h.table(['Mint', 'Mark', 'Struck', 'Metal'], [
  ['Philadelphia', 'none', h.mint('quarter', 1976, 'P'), 'copper-nickel clad'],
  ['Denver', 'D', h.mint('quarter', 1976, 'D'), 'copper-nickel clad'],
  ['San Francisco', 'S', h.mint('quarter', 1976, 'S'), 'clad proof and 40% silver'],
], `Quarters bearing the date 1776-1976, from the ${h.src('mintBook', 'Bureau of the Mint, 1981')}.`, ['l', 'l', 'r', 'l'])}

<h2>The silver ones come from San Francisco</h2>
<p>Only San Francisco struck Bicentennial quarters in silver, for sets sold to collectors. Those coins have outer layers of 80% silver bonded to a core of about 21% silver, which averages out to 40% silver for the whole coin, the same alloy as the Kennedy halves of 1965 to 1970. San Francisco also struck copper-nickel proofs with the same S. The Bureau of the Mint figure counts both together, so it is not possible to say from the official tables how many of each exist.</p>
<p>A silver Bicentennial quarter holds ${h.oz('silverCladQuarter')} troy ounce of pure silver, about ${h.meltOf('silverCladQuarter')} at ${h.silver} an ounce. That is a modest premium over face value, but a real one. A 90% silver quarter dated 1964 or earlier holds more than twice as much; the tool below counts the silver in a stack of those.</p>
<!--tool:mini:silverquarter-->

<h2>What makes an ordinary one worth more</h2>
<p>With more than a billion and a half struck for circulation, scarcity cannot lift a Philadelphia or Denver Bicentennial quarter. Three things can. A minting error, such as a coin struck off center, doubled or on a blank meant for another coin, is the first; the ${h.a('error-coins', 'error coins guide')} shows what to look for. The second is condition: a coin that never circulated and shows no marks is far rarer than the mintage suggests. The third is simply an S mint mark, which tells you the coin came from a collector set.</p>
<p>This site gives no dealer or collector price for any of them: no official or freely licensed source publishes such prices. It gives the number struck and the metal, which already rule out most of the claims seen online that every Bicentennial quarter is valuable.</p>

<h2>Checking yours in three steps</h2>
<ol>
<li>Find the mint mark just right of Washington’s ponytail, under the ribbon. None means Philadelphia.</li>
<li>If it is an S, look at the edge: no copper line suggests silver; a scale settles it.</li>
<li>Enter the mark in the tool at the top of the page to see the figure and the metal value.</li>
</ol>
<p>If you have a whole jar of 1776-1976 quarters, the answer is quick: with no S among them, they are worth their face value, and you can spend them or keep them as souvenirs of the anniversary. A single S coin in the lot is worth weighing before it goes anywhere.</p>
<p>The ${h.a('kennedy-half-dollar-value', 'Kennedy half dollar page')} covers the Bicentennial half, and the ${h.a('state-quarters-value', 'state quarters page')} the quarters that followed in 1999.</p>
`,
  },
});
