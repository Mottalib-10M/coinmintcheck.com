import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'sacagawea-dollar-value',
  group: 'dollars',
  order: 30,
  tool: { kind: 'mini:golden' },
  mini: { kind: 'mini:face' },
  related: ['peace-dollar-value', 'coin-value-lookup', 'error-coins', 'melt-value-calculator', 'home'],
  sources: ['mintSpecs', 'modernProduction', 'mintHistory', 'mintBook', 'mintMarks'],
  en: {
    slug: 'sacagawea-dollar-value',
    nav: 'Sacagawea dollar value',
    card: 'The golden dollar since 2000: what it is made of, how many the Mint produced for circulation each year it published, and its metal value.',
    title: 'Sacagawea Dollar Value: Golden Dollar Mintage and Metal',
    description: 'Sacagawea and Native American dollar value: manganese-brass alloy, metal against face value, and yearly production at Philadelphia and Denver from Mint reports.',
    h1: 'Sacagawea dollar value: what a golden dollar is worth',
    intro: 'Type the date and choose P or D. The tool gives the Mint’s circulating production for that year when it was published, the alloy and the metal value of one coin.',
    resume: (h) => `The golden dollar, first issued in 2000 with Sacagawea on the front, is not gold and contains no silver. The ${h.src('mintSpecs', 'Mint’s coin specifications')} describe it as manganese-brass bonded to a copper core, ${h.grams('goldenDollar')} grams in all, which gives it its golden color. Its metal is worth about ${h.meltOf('goldenDollar')} at the copper price read on ${h.priceDate}, far below its face value of one dollar, so an ordinary golden dollar is worth one dollar. Since 2009 the back has changed every year under the Native American dollar program, while Sacagawea stayed on the front. The ${h.src('modernProduction', 'Mint’s production reports')} show how circulation orders collapsed: ${h.mint('dollar', 2011, 'P')} pieces at Philadelphia in 2011, then ${h.mint('dollar', 2012, 'P')} in 2012 and ${h.mint('dollar', 2022, 'P')} in 2022. Those small recent figures still count in the hundreds of thousands to millions, so scarcity alone rarely lifts a golden dollar above face value. The tool above reads each year and mint we hold.`,
    faqs: (h) => [
      { q: 'Is a Sacagawea dollar made of gold?', a: `No. The golden color comes from manganese-brass, an alloy of copper, zinc, manganese and nickel, around a pure copper core. The coin weighs ${h.grams('goldenDollar')} grams and its metal is worth a few cents, about ${h.meltOf('goldenDollar')} at the price read on ${h.priceDate}. Its value as money is the one dollar printed on it, and banks accept it at that value.` },
      { q: 'Why are recent golden dollar mintages so small?', a: `Because circulation orders fell after 2011, as the Mint’s production reports show: ${h.mint('dollar', 2011, 'D')} at Denver in 2011 against ${h.mint('dollar', 2012, 'D')} in 2012. The reports give the figures without explaining the drop in the table itself. Even the smallest recent issues are around a million coins, small for a circulating coin but large for a scarce one.` },
      { q: 'Where are the date and mint mark on a golden dollar?', a: 'On coins dated 2000 to 2008, the date and mint mark are on the front, below Sacagawea. From 2009, they moved to the edge of the coin, lettered with the motto E PLURIBUS UNUM. Turn the coin and read the edge under good light. A golden dollar without edge lettering from those years is a known error.' },
    ],
    body: (h) => `
<h2>Production for circulation, by year and mint</h2>
${h.table(['Year', 'Philadelphia', 'Denver'], [2010, 2011, 2012, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023].map((y) => [String(y), h.mint('dollar', y, 'P'), h.mint('dollar', y, 'D')]), `Native American dollars for circulation, from the ${h.src('modernProduction', 'Mint’s circulating production reports')} read on archived copies; published in millions. Proof and uncirculated set coins are not included, and Presidential dollars are counted apart.`, ['l', 'r', 'r'])}
<p>Years 2000 to 2009 and 2013 to 2015 are missing from this table because we did not find a complete per-mint official figure we could read. The tool says so for those years instead of showing an estimate. The figures we do have tell the story: tens of millions a year in 2010 and 2011, then about a tenth of that or less.</p>

<h2>Metal against face value</h2>
<p>Unlike the silver dollars of the past, a modern dollar coin is token money: its metal is a small fraction of its face value. The tool below shows metal value against face value for any coin and year, and makes the contrast plain between a golden dollar and a ${h.a('peace-dollar-value', 'Peace dollar')}, which still holds its weight in silver.</p>
<!--tool:mini:face-->
<p>The Susan B. Anthony dollar that came before it, struck from 1979, had the same weight of ${h.grams('sbaDollar')} grams and the same size, but a silver-colored copper-nickel clad surface. The ${h.src('mintHistory', 'Mint’s history of circulating coins')} traces the move to a golden color in 2000. Before both came the large Eisenhower dollar of 1971, ${h.grams('cladDollar')} grams of copper-nickel clad for circulation, recorded in the ${h.src('mintBook', 'Bureau of the Mint tables')} with ${h.mint('dollar', 1971, 'P')} pieces at Philadelphia and ${h.mint('dollar', 1971, 'D')} at Denver in its first year.</p>

<h2>When a golden dollar is worth more than a dollar</h2>
<p>Three situations deserve a closer look. First, a coin that never circulated and still has full luster, from a roll or a Mint set: condition then matters, as explained in the ${h.a('coin-grading', 'grading guide')}. Second, an error such as missing edge lettering on a coin dated 2009 or later, or a golden dollar struck on the wrong blank; the ${h.a('error-coins', 'error coins page')} lists what to check. Third, a year with an unusually small figure in the table above, kept in the condition it left the Mint.</p>
<p>For everything else, a golden dollar found in change is worth one dollar, and banks accept it at face value. This site gives no collector price, because no free official source publishes them.</p>

<h2>Reading your coin</h2>
<p>A golden dollar is easy to tell from a quarter or an Anthony dollar by its color and its edge without reeding, and from a Presidential dollar by the portrait: Sacagawea carrying her infant son on the front. Check the date and letter as described in the questions below, type them into the tool at the top of this page, and compare the mintage band with other years. A coin from a low production year in worn condition is still, in most cases, worth its face value, because even a small issue counts hundreds of thousands of coins. The ${h.a('coin-value-lookup', 'coin value lookup')} reads every other denomination the same way.</p>
`,
  },
});
