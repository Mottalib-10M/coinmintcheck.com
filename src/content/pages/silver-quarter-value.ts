import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'silver-quarter-value',
  group: 'quarters-halves',
  order: 40,
  tool: { kind: 'mini:silverquarter' },
  mini: { kind: 'mini:washington' },
  related: ['rare-quarters-worth-money', 'junk-silver-value', 'silver-dime-value', 'melt-value-calculator', 'bicentennial-quarter-value'],
  sources: ['mintBook', 'mintSpecs', 'goldApi', 'worldBank'],
  en: {
    slug: 'silver-quarter-value',
    nav: 'Silver quarter value',
    card: 'Quarters dated 1964 or earlier are 90% silver: the silver in any number of them at the price of the moment, and how to spot them.',
    title: 'Silver Quarter Value: Melt Price of 1964 and Older',
    description: 'Silver quarter value at the live silver price: every quarter dated 1964 or earlier is 90% silver. Type how many you hold to see the silver and its metal value.',
    h1: 'Silver quarter value: what is a 90% silver quarter worth?',
    intro: 'Type how many silver quarters you have: the tool gives the pure silver they hold and its value at the live price, which you can replace with your own.',
    resume: (h) => `A quarter dated 1964 or earlier weighs ${h.grams('silverQuarter')} grams and is 90% silver, so it holds ${h.oz('silverQuarter')} troy ounce of pure silver. At ${h.silver} an ounce, the price read on ${h.priceDate}, that is about ${h.meltOf('silverQuarter')} of metal in one coin. Four of them, one dollar of face value, contain ${h.ozPerDollar} ounce. Quarters dated 1965 and later are copper-nickel clad, weigh ${h.grams('cladQuarter')} grams and hold about ${h.meltOf('cladQuarter')} of metal, which is why a single date line separates a coin worth twenty-five cents from one worth many times more. The test takes a second: read the date, then look at the edge, where a clad quarter shows a copper stripe and a silver one does not. Most silver quarters found today are Washington quarters of 1932 to 1964, struck by the hundreds of millions, so their value is the silver; the few scarce dates are listed on the rare quarters page.`,
    faqs: (h) => [
      { q: 'How much silver is in a 1964 quarter?', a: `${h.oz('silverQuarter')} troy ounce of pure silver. The coin weighs ${h.grams('silverQuarter')} grams at 90% silver and 10% copper, the alloy used for every quarter until 1964 according to the Bureau of the Mint. At the price read on ${h.priceDate}, that silver is worth about ${h.meltOf('silverQuarter')}; the tool uses the live price when your browser can reach it.` },
      { q: 'Are 1965 quarters silver?', a: 'No. Quarters dated 1965 and later were struck for circulation in copper-nickel clad, with no silver at all. A 1965 quarter with a copper edge is a normal coin worth its face value. A 1965 quarter that weighs about 6.25 grams instead of 5.67 would have been struck on the wrong blank and deserves an expert look.' },
      { q: 'How many silver quarters make an ounce of silver?', a: `About ${h.num(1 / (h.P.alloys.silverQuarter.grams * 0.9 / h.P.troyOunceGrams), 1)} quarters, since each holds ${h.oz('silverQuarter')} troy ounce. Put another way, a roll of forty silver quarters, ten dollars of face value, holds about ${h.num(40 * h.P.alloys.silverQuarter.grams * 0.9 / h.P.troyOunceGrams, 2)} troy ounces. Wear removes a little metal over decades of use, so a worn roll holds slightly less than that figure.` },
    ],
    body: (h) => `
<h2>The date line of 1964</h2>
<p>Every quarter struck for circulation up to the 1964 date is 90% silver and 10% copper, ${h.grams('silverQuarter')} grams, as the ${h.src('mintBook', 'Bureau of the Mint tables')} record. From 1965 the quarter became a clad coin: two outer layers of 75% copper and 25% nickel bonded to a pure copper core, ${h.grams('cladQuarter')} grams in all according to the ${h.src('mintSpecs', 'Mint’s coin specifications')}. Coins dated 1964 kept being struck in silver into 1966, which is why the 1964 figures are so high: ${h.mint('quarter', 1964, 'P')} at Philadelphia and ${h.mint('quarter', 1964, 'D')} at Denver.</p>
${h.table(['Quarter', 'Metal', 'Weight', 'Silver', 'Metal value'], [
  ['1964 and earlier', '90% silver', `${h.grams('silverQuarter')} g`, `${h.oz('silverQuarter')} oz`, h.meltOf('silverQuarter')],
  ['1776-1976 S, collector', '40% silver', `${h.grams('silverCladQuarter')} g`, `${h.oz('silverCladQuarter')} oz`, h.meltOf('silverCladQuarter')],
  ['1965 and later', 'copper-nickel clad', `${h.grams('cladQuarter')} g`, 'none', h.meltOf('cladQuarter')],
], `Silver at ${h.silver} per ounce on ${h.priceDate}; weights from the ${h.src('mintBook', 'Bureau of the Mint, 1981')}.`, ['l', 'l', 'r', 'r', 'r'])}

<h2>Three ways to spot a silver quarter</h2>
<ul>
<li><strong>The date.</strong> 1964 or earlier means silver, with the single exception of collector coins struck later in silver, which carry an S.</li>
<li><strong>The edge.</strong> Silver quarters have a uniform silver edge. Clad quarters show a reddish copper band between two white layers.</li>
<li><strong>The weight.</strong> ${h.grams('silverQuarter')} grams for silver, ${h.grams('cladQuarter')} grams for clad. A scale that reads to a hundredth of a gram separates them, even when the date is worn.</li>
</ul>
<p>The weight test is the one to trust when the date is worn smooth or the edge is dirty. Weigh several coins together and divide, which evens out the small scale errors of kitchen scales.</p>

<h2>Is any silver quarter worth more than its silver?</h2>
<p>A few. Among Washington quarters, the 1932 coins from Denver and San Francisco were struck in numbers under half a million each. Older Standing Liberty and Barber quarters include more small issues. The tool below reads the figure for any Washington quarter by year and mint, and the ${h.a('rare-quarters-worth-money', 'rare quarters page')} ranks the lowest of all.</p>
<!--tool:mini:washington-->
<p>For everything else, the silver is the value. Prices come from ${h.src('goldApi', 'gold-api.com')} as the page loads, and the ${h.src('worldBank', 'World Bank’s monthly average')} for ${h.wbMonth}, ${h.price(h.P.metals.silverUsdOz)} an ounce, gives a check on how much the price has moved.</p>

<h2>Counting a mixed lot of silver coins</h2>
<p>When dimes, quarters and halves of 1964 or earlier come mixed, count them by face value: each dollar of face holds ${h.ozPerDollar} troy ounce of silver, because the Mint kept weight proportional to value. The ${h.a('junk-silver-value', 'junk silver page')} does that in one step. Kennedy halves of 1965 to 1970 and the 1776-1976 S quarters are 40% silver and must be counted apart, as the ${h.a('melt-value-calculator', 'melt value calculator')} allows. This site gives the metal value, not a buying price: anyone who buys silver coins works with a margin, and this site recommends no buyer.</p>
<p>Keep a written note of the count, the face value and the price you used, with its date. Silver can move several dollars an ounce within a month, as the World Bank averages show, and a dated note lets you compare any later offer with the market of the day rather than with a figure you remember.</p>
`,
  },
});
