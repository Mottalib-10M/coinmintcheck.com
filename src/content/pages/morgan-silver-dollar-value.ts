import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'morgan-silver-dollar-value',
  group: 'dollars',
  order: 10,
  tool: { kind: 'mini:morgan' },
  mini: { kind: 'mini:silverdollar' },
  related: ['peace-dollar-value', 'mint-marks', 'melt-value-calculator', 'coin-grading', 'home'],
  sources: ['mintBook', 'mintMarks', 'goldApi'],
  en: {
    slug: 'morgan-silver-dollar-value',
    nav: 'Morgan dollar value',
    card: 'Every Morgan dollar date from 1878 to 1921 with the number struck at each mint, the silver inside and its value today.',
    title: 'Morgan Silver Dollar Value: Mintage by Year and Mint',
    description: 'Morgan silver dollar value by date and mint: number struck at Philadelphia, New Orleans, San Francisco, Carson City and Denver, and the silver at today’s price.',
    h1: 'Morgan silver dollar value: how many were struck, and the silver inside',
    intro: 'Type the date and choose the mint letter on the back, under the wreath. The tool gives the number struck at that mint and the silver at the price of the moment.',
    resume: (h) => `The Morgan dollar was struck from 1878 to 1904 and once more in 1921, in 90% silver, at up to five mints: Philadelphia with no letter, and New Orleans, San Francisco, Carson City and, in 1921 only, Denver, each marked with O, S, CC or D on the back under the wreath. Each coin weighs ${h.grams('silverDollar')} grams and holds ${h.oz('silverDollar')} troy ounce of pure silver, worth about ${h.meltOf('silverDollar')} at ${h.silver} an ounce on ${h.priceDate}. That is the floor of its value. Above it, the date and mint decide: the ${h.src('mintBook', 'Bureau of the Mint tables')} show ${h.mint('dollar', 1878, 'P')} dollars struck at Philadelphia in 1878 but only ${h.mint('dollar', 1893, 'S')} at San Francisco in 1893. The lowest figures in the tables are ${h.lowestList('dollar', 1878, 1904, 5)}. This page does not quote collector prices, because no free official source publishes them: it gives the mintage, the band it falls into and the metal.`,
    faqs: (h) => [
      { q: 'Where is the mint mark on a Morgan dollar?', a: 'On the reverse, just below the wreath that surrounds the eagle. It is a small O, S, CC or D. A Morgan dollar with no letter there was struck at Philadelphia. Check with a magnifier, because a worn or filled letter can be missed and the mint changes the mintage enormously.' },
      { q: 'How much silver is in one Morgan silver dollar?', a: `Each weighs ${h.grams('silverDollar')} grams at 90% silver, so it holds ${h.oz('silverDollar')} troy ounce of pure silver and a little copper. At ${h.silver} an ounce, the price read on ${h.priceDate}, the metal is worth about ${h.meltOf('silverDollar')}. The live tool on this page updates that figure with the price of the moment.` },
      { q: 'Why does the 1921 Morgan dollar figure look so high?', a: 'The Bureau of the Mint counted coins by calendar year. The 1921 Philadelphia figure includes Morgan dollars and also the first Peace dollars, struck from December 1921. The Denver and San Francisco figures for 1921 are Morgan dollars only. 1921 Morgans are, in any case, among the most common dates of the series.' },
    ],
    body: (h) => `
<h2>Number struck at each mint</h2>
<p>The table below lists every Morgan year with a figure in the ${h.src('mintBook', 'Bureau of the Mint’s tables')}, by mint. Years 1905 to 1920 are absent because no silver dollars were struck. The ${h.src('mintMarks', 'Mint’s page on mint marks')} explains the letters.</p>
${h.seriesTable('dollar', 1878, 1904, ['P', 'O', 'S', 'CC'], 'Pieces made in each calendar year. A dash means that mint struck no silver dollars that year.')}
<p>For 1921 the tables give ${h.mint('dollar', 1921, 'P')} at Philadelphia (Morgan and Peace together), ${h.mint('dollar', 1921, 'D')} at Denver and ${h.mint('dollar', 1921, 'S')} at San Francisco.</p>

<h2>Reading the figures</h2>
<p>A Morgan dollar from an issue of several million is common, and in worn condition it is valued close to its silver. An issue of a few hundred thousand is a different matter, and the very lowest figures are well known to collectors. The tool below ranks the lowest numbers between any two years and mints you choose.</p>
<!--tool:mini:raredollar-->
<p>Remember what a mintage does not say. Silver dollars were often stored in bags for decades rather than circulated, and the Mint tables say nothing of later losses, so the number that survives can be very different from the number struck. A date that looks common in the tables can be scarce in fine condition, and the reverse. Condition decides most of the gap, which is why the ${h.a('coin-grading', 'grading guide')} matters for this series more than for most.</p>

<h2>The silver in a Morgan dollar</h2>
<p>Every Morgan dollar has the same specification, ${h.grams('silverDollar')} grams of 90% silver, whatever its date or mint. The small tool below counts the silver in any number of them at the live price.</p>
<!--tool:mini:silverdollar-->
<p>Per dollar of face value, a silver dollar contains slightly more silver than ten dimes or four quarters of the same period. That makes worn common Morgans a slightly different product from junk silver, valued on their own. The ${h.a('melt-value-calculator', 'melt value calculator')} compares them with any other coin.</p>

<h2>Checking a Morgan dollar you found</h2>
<ol>
<li>Read the date on the front, under Liberty’s head.</li>
<li>Find the letter on the back, under the wreath, or note its absence.</li>
<li>Type both into the tool at the top of this page to see the number struck and its band.</li>
<li>Weigh it if you can: a genuine coin weighs about ${h.grams('silverDollar')} grams. Copies are common, and a light or magnetic coin is a copy.</li>
<li>Do not clean it. Toning is normal for old silver.</li>
</ol>
<p>The Morgan dollar was followed by the ${h.a('peace-dollar-value', 'Peace dollar')} from late 1921, struck to the same weight and fineness.</p>
`,
  },
});
