import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'kennedy-half-dollar-value',
  group: 'quarters-halves',
  order: 50,
  tool: { kind: 'mini:kennedy' },
  mini: { kind: 'mini:junk' },
  related: ['walking-liberty-half-dollar-value', 'silver-coin-years', 'junk-silver-value', 'bicentennial-quarter-value', 'melt-value-calculator'],
  sources: ['mintBook', 'mintHistory', 'mintSpecs', 'goldApi'],
  en: {
    slug: 'kennedy-half-dollar-value',
    nav: 'Kennedy half dollar value',
    card: 'Kennedy halves: 90% silver in 1964, 40% from 1965 to 1970, clad after, with the number struck at each mint and the silver value.',
    title: 'Kennedy Half Dollar Value: 90%, 40% or Clad by Year',
    description: 'Kennedy half dollar value by year: 90% silver in 1964, 40% from 1965 to 1970 and clad after, with the number struck at each mint and the metal in each coin.',
    h1: 'Kennedy half dollar value: how much silver is in mine?',
    intro: 'Type the year and pick the mint mark: the tool gives the metal of the coin, the number struck at that mint and what its silver is worth now.',
    resume: (h) => `The value of a Kennedy half dollar starts with its date, because the coin was made in three different metals. A 1964 half is 90% silver, weighs ${h.grams('silverHalf')} grams and holds ${h.oz('silverHalf')} troy ounce of silver, about ${h.meltOf('silverHalf')} at the price read on ${h.priceDate}. Halves dated 1965 to 1970 are 40% silver-clad, ${h.grams('silverCladHalf')} grams with ${h.oz('silverCladHalf')} ounce of silver, about ${h.meltOf('silverCladHalf')}. From 1971 the coin is copper-nickel clad, worth about ${h.meltOf('cladHalf')} in metal. The Bureau of the Mint tables show ${h.mint('half', 1964, 'P')} halves dated 1964 from Philadelphia, struck in the year after President Kennedy’s death, against only ${h.mint('half', 1970, 'D')} at Denver in 1970, the smallest regular issue of the series. The tool above gives the metal and the figure for any year and mint.`,
    faqs: (h) => [
      { q: 'Which Kennedy half dollars are silver?', a: `Those dated 1964, at 90% silver, and those dated 1965 to 1970, at 40%. Halves from 1971 onward are copper-nickel clad, except some San Francisco collector coins of the 1776-1976 design. A 40% half holds ${h.oz('silverCladHalf')} troy ounce of silver, less than half of the ${h.oz('silverHalf')} in a 1964 coin.` },
      { q: 'Why is the 1970-D Kennedy half so scarce?', a: `The Bureau of the Mint tables record only ${h.mint('half', 1970, 'D')} halves struck at Denver in 1970, and no Philadelphia figure for that year. Every other year from 1964 counts tens or hundreds of millions. The 1970-D is also the last half with silver struck at Denver, at 40%, which adds metal value to its scarcity.` },
      { q: 'How do I tell a 40% silver Kennedy half from a clad one?', a: `Read the date first: 1965 to 1970 means 40% silver. If it is worn, look at the edge. A 40% half shows a faint grayish line rather than the bright copper stripe of a clad coin. A scale also works: ${h.grams('silverCladHalf')} grams for 40% silver against ${h.grams('cladHalf')} grams for clad.` },
    ],
    body: (h) => `
<h2>One portrait, three metals</h2>
<p>The Kennedy half dollar replaced the Franklin half in 1964, as the ${h.src('mintHistory', 'Mint’s history of circulating coins')} records. Its metal changed twice in its first seven years, according to the ${h.src('mintBook', 'Bureau of the Mint tables')} and the ${h.src('mintSpecs', 'Mint’s coin specifications')}.</p>
${h.table(['Date on the coin', 'Metal', 'Weight', 'Silver', 'Metal value'], [
  ['1964', '90% silver', `${h.grams('silverHalf')} g`, `${h.oz('silverHalf')} oz`, h.meltOf('silverHalf')],
  ['1965 to 1970', '40% silver-clad', `${h.grams('silverCladHalf')} g`, `${h.oz('silverCladHalf')} oz`, h.meltOf('silverCladHalf')],
  ['1971 and later', 'copper-nickel clad', `${h.grams('cladHalf')} g`, 'none', h.meltOf('cladHalf')],
], `Silver at ${h.silver} per ounce on ${h.priceDate}.`, ['l', 'l', 'r', 'r', 'r'])}
<p>The 40% coins are the only regular circulating coin of that alloy, which is why they need their own line in any silver count. A dollar of face value in 40% halves, two coins, holds ${h.num(2 * h.P.alloys.silverCladHalf.grams * 0.4 / h.P.troyOunceGrams, 4)} troy ounce of silver, against ${h.ozPerDollar} in 90% coins.</p>

<h2>Number struck in the silver years</h2>
<p>The figures below come from the dated tables of the Bureau of the Mint for 1964 to 1966 and from its calendar tables after that. Coins dated 1965 to 1967 carry no mint mark at all, whatever the mint, so the Denver and San Francisco columns cannot be told apart on the coins themselves for those years. San Francisco figures from 1965 include proofs made for collector sets.</p>
${h.seriesTable('half', 1964, 1970, ['P', 'D', 'S'], `Half dollars struck, from the ${h.src('mintBook', 'Bureau of the Mint, 1981')}.`)}
<p>The 1970-D stands alone: a figure of a couple of million where every other year counts in the tens of millions or more. After 1970, with the coin made of clad metal, mintages returned to the hundreds of millions before falling in the late 1970s, as the tool at the top of the page shows year by year.</p>

<h2>Counting a roll of Kennedy halves</h2>
<p>A mixed roll or box of halves usually holds all three metals. Sort them into 1964, 1965 to 1970 and later dates, then count each group. The tool below takes the face value of 90% silver coins and of 40% halves and turns them into ounces and dollars at the live price, from ${h.src('goldApi', 'gold-api.com')}.</p>
<!--tool:mini:junk-->
<p>Clad halves from 1971 on can be spent or kept, but their metal is worth less than their face value. The ${h.a('silver-coin-years', 'silver coin years page')} lists every silver issue of every denomination, and the ${h.a('melt-value-calculator', 'melt value calculator')} handles any other mix.</p>

<h2>Beyond the metal</h2>
<p>Apart from the 1970-D, Kennedy halves were struck in large numbers, and their value is their metal or their face. Collector interest goes to coins in exceptional condition and to proofs, which this site does not price: no official or freely licensed source publishes such prices. The 1776-1976 Bicentennial half, with Independence Hall on the back, follows the same rule as the quarter of that design; see the ${h.a('bicentennial-quarter-value', 'Bicentennial quarter page')}. Older silver halves, from the Walking Liberty to the Franklin, are on the ${h.a('walking-liberty-half-dollar-value', 'Walking Liberty half dollar page')}.</p>
<p>If you inherited a box of Kennedy halves, start by reading every date and putting the 1964 coins in one pile, the 1965 to 1970 coins in another and the rest in a third. The first two piles hold all the silver. The third can usually go to the bank at face value, and the second deserves one more look for any 1970 coin with a D.</p>
`,
  },
});
