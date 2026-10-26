import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'mercury-dime-value',
  group: 'nickels-dimes',
  order: 50,
  tool: { kind: 'mini:mercury' },
  mini: { kind: 'mini:raredime' },
  related: ['silver-dime-value', 'roosevelt-dime-value', 'junk-silver-value', 'coin-grading', 'home'],
  sources: ['mintBook', 'mintHistory', 'mintMarks', 'goldApi'],
  en: {
    slug: 'mercury-dime-value',
    nav: 'Mercury dime value',
    card: 'Mercury dimes 1916 to 1945: the number struck at each mint, the 1916-D and 1921 dates, and the silver in every coin.',
    title: 'Mercury Dime Value: Mintage, Silver and the Key Dates',
    description: 'Mercury dime value by date and mint mark: the number struck from 1916 to 1945 in the Mint tables, the 1916-D and 1921 key dates and the silver in each coin.',
    h1: 'Mercury dime value: is my dime a key date?',
    intro: 'Type the date and pick the letter on the back, left of the bundle of rods: the tool gives the number struck at that mint and the silver value.',
    resume: (h) => `A Mercury dime is always worth at least its silver: ${h.grams('silverDime')} grams at 90% silver, ${h.oz('silverDime')} troy ounce, about ${h.meltOf('silverDime')} at the price read on ${h.priceDate}. The design, officially the Winged Liberty Head, was struck from 1916 to 1945 at Philadelphia, Denver and San Francisco, and the output of each mint varied enormously. The Bureau of the Mint tables show ${h.mint('dime', 1916, 'D')} dimes struck at Denver in 1916, the lowest figure of the series, against ${h.mint('dime', 1944, 'P')} at Philadelphia in 1944. The 1921 dates are next, with ${h.mint('dime', 1921, 'P')} at Philadelphia and ${h.mint('dime', 1921, 'D')} at Denver. The mint mark sits on the back, at the bottom left of the fasces, the bundle of rods. Read the date and mark, enter them above, and the tool tells you whether your dime belongs to one of these small issues or to the hundreds of millions struck during the war.`,
    faqs: (h) => [
      { q: 'Why is it called a Mercury dime when it shows Liberty?', a: 'The Mint named the design the Winged Liberty Head: the figure is Liberty wearing a cap with wings, meant to stand for freedom of thought. Many people took the winged cap for the helmet of the Roman god Mercury, and the nickname stuck. Both names refer to the same silver dime struck from 1916 to 1945.' },
      { q: 'Where do I look for the mint mark on a Mercury dime?', a: 'On the back, near the rim at the lower left, just beside the base of the bundle of rods and the olive branch. A small D means Denver and an S means San Francisco. Philadelphia dimes of this design carry no letter at all, so a blank space there is normal and not a sign of a rare coin.' },
      { q: 'How rare is a 1916-D Mercury dime?', a: `The Bureau of the Mint tables record ${h.mint('dime', 1916, 'D')} dimes struck at Denver in 1916, the smallest figure of the whole series by a wide margin. A coin that scarce is exactly the kind people alter or copy, so a 1916-D should be checked by an expert before anyone treats it as genuine.` },
      { q: 'Are Mercury dimes from the war years worth more?', a: `Usually not as dates: the Mint struck ${h.mint('dime', 1943, 'P')} at Philadelphia in 1943 alone, and the silver content was the same as in other years. Their floor is the silver value, ${h.meltOf('silverDime')} each at the price read on ${h.priceDate}. Very well preserved coins are a different question, which depends on condition rather than date.` },
    ],
    body: (h) => `
<h2>A silver dime struck for thirty years</h2>
<p>The Winged Liberty Head dime replaced the Barber dime in 1916 and was itself replaced by the Roosevelt dime in 1946, as the ${h.src('mintHistory', 'Mint’s history of circulating coins')} recounts. Throughout, its alloy stayed at 90% silver and 10% copper, its weight at ${h.grams('silverDime')} grams, according to the ${h.src('mintBook', 'Bureau of the Mint tables')}. That makes the metal value identical for every date: ${h.meltOf('silverDime')} at ${h.silver} an ounce. Only the date, the mint and the condition separate one Mercury dime from another.</p>

<h2>Number struck at each mint, year by year</h2>
<p>The table below reads the figures for every year of the design. Note that 1916 counts Barber and Mercury dimes struck that year together, because the Bureau of the Mint counted pieces by calendar year, and that a few years have no figure for one mint because it struck no dimes then.</p>
${h.seriesTable('dime', 1916, 1945, ['P', 'D', 'S'], `Dimes struck per calendar year, from the ${h.src('mintBook', 'Bureau of the Mint, 1981')}.`)}
<p>Several small issues stand out from the table: the Denver dimes of 1916, both 1921 dates, the 1926-S and the 1931 dates. The tool below ranks the lowest figures over any range you choose, which is handy when you hold a few dozen Mercury dimes and want to know which ones to look at first.</p>
<!--tool:mini:raredime-->

<h2>Condition and the bands on the back</h2>
<p>For a common date, a worn Mercury dime is a silver coin and little more. For a well preserved coin, collectors look at the horizontal bands that tie the bundle of rods on the back. When they are sharply struck and split, collectors call the coin full bands, a detail that only appears on coins struck with fresh dies and never worn. Judging that needs a magnifier and good light, and the ${h.a('coin-grading', 'grading guide')} explains how wear is read on the high points of a coin.</p>
<p>This site does not publish collector prices: no official or freely licensed source gives them. What it does give is the number struck, the band it belongs to and the silver value, which together tell you whether a coin deserves an expert opinion.</p>

<h2>Sorting a group of Mercury dimes</h2>
<ol>
<li>Read the date on the front, behind the neck of Liberty.</li>
<li>Look for the mint letter on the back, at the left of the base of the rods, as the ${h.src('mintMarks', 'Mint’s page on mint marks')} explains.</li>
<li>Put aside any 1916-D, 1921 or 1921-D, and any coin the tool places in a low band.</li>
<li>Count the rest by face value: ten dimes hold ${h.ozPerDollar} troy ounce of silver, as the ${h.a('junk-silver-value', 'junk silver page')} shows.</li>
</ol>
<p>Silver prices come from ${h.src('goldApi', 'gold-api.com')} as the page loads. For the dimes that followed, see the ${h.a('roosevelt-dime-value', 'Roosevelt dime page')}, and for a straight silver count, the ${h.a('silver-dime-value', 'silver dime page')}.</p>
`,
  },
});
