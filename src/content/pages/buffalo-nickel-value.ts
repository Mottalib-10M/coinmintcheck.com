import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'buffalo-nickel-value',
  group: 'nickels-dimes',
  order: 30,
  tool: { kind: 'mini:buffalo' },
  mini: { kind: 'mini:rarenickel' },
  related: ['nickel-value', 'jefferson-nickel-value', 'rare-pennies-worth-money', 'mint-marks', 'home'],
  sources: ['mintBook', 'mintHistory', 'mintMarks', 'cfr82'],
  en: {
    slug: 'buffalo-nickel-value',
    nav: 'Buffalo nickel value',
    card: 'Buffalo nickels 1913 to 1938: how many each mint struck, the scarce San Francisco and Denver dates, and the metal inside.',
    title: 'Buffalo Nickel Value: Mintage by Year and Mint Mark',
    description: 'Buffalo nickel value by year and mint mark: the number struck in the Mint tables from 1913 to 1938, the scarce S and D dates and the metal inside each coin.',
    h1: 'Buffalo nickel value: which dates are scarce?',
    intro: 'Type the date and pick the letter under the words FIVE CENTS on the back: the tool gives the number struck at that mint and the metal value.',
    resume: (h) => `A Buffalo nickel is worth what its scarcity and its condition make it worth to a collector, and at least its metal, which is the same ${h.grams('nickel')} gram mix of 75% copper and 25% nickel as a modern five-cent piece, worth about ${h.meltOf('nickel')} at the prices read on ${h.priceDate}. The design ran from 1913 to 1938, and the Bureau of the Mint tables show how unequal the dates are: Philadelphia struck ${h.mint('nickel', 1937, 'P')} in 1937 while San Francisco struck only ${h.mint('nickel', 1926, 'S')} in 1926. The mint mark is a small D or S on the back, below the words FIVE CENTS; no letter means Philadelphia. The lowest figures in the tables are ${h.lowestList('nickel', 1914, 1937, 4)}. Because the date sits on a raised part of the design, many found today show a worn date, and a nickel without a readable year cannot be placed in the tables at all.`,
    faqs: (h) => [
      { q: 'How do I read a Buffalo nickel with the date worn off?', a: 'Without a year the coin cannot be matched to a mintage, so it is treated as an ordinary Buffalo nickel worth about its metal. Chemical date restorers sold for this purpose make the date visible by etching the metal, which leaves a permanent mark that collectors notice. Many people keep dateless pieces as souvenirs rather than treat them.' },
      { q: 'Where is the mint mark on a Buffalo nickel?', a: 'On the back, under the words FIVE CENTS, below the bison standing on its mound. Look for a small D for Denver or S for San Francisco. A coin with no letter there was struck in Philadelphia, which did not mark its five-cent pieces during these years.' },
      { q: 'Can I melt Buffalo nickels for their copper and nickel?', a: `No. The five-cent and one-cent coin regulations in 31 CFR Part 82 ban melting or treating any five-cent coin, with the single exception of the wartime silver nickels of 1942 to 1945. Penalties reach ${h.money(h.CFR.fineMax)} and ${h.CFR.prisonYearsMax} years in prison, so the metal figure is a floor for comparison only.` },
      { q: 'Why does the 1913 Buffalo nickel figure look so high?', a: `Because the Bureau of the Mint counted coins by calendar year, and 1913 also saw the last Liberty Head nickels. The tables give ${h.mint('nickel', 1913, 'P')} for Philadelphia that year, all designs together. The same happens in 1938, when the Jefferson nickel replaced the bison late in the year.` },
    ],
    body: (h) => `
<h2>The design and the metal</h2>
<p>The Buffalo nickel, which the Mint also calls the Indian Head nickel, shows a Native American profile on the front and an American bison on the back. It replaced the Liberty Head design in 1913 and gave way to the Jefferson nickel in 1938, according to the ${h.src('mintHistory', 'Mint’s history of circulating coins')}. Its metal never changed: ${h.grams('nickel')} grams of 75% copper and 25% nickel, the alloy recorded in the ${h.src('mintBook', 'Bureau of the Mint tables of 1981')}. The silver nickels came only later, during the Second World War.</p>
<p>That alloy sets a modest floor. At the prices read on ${h.priceDate}, one coin holds about ${h.meltOf('nickel')} of metal, a little more than the five cents written on it. Melting it is illegal under the ${h.src('cfr82', 'coin regulations of 31 CFR Part 82')}, so the figure only shows that a Buffalo nickel is never worth less than a modern one.</p>

<h2>Number struck at each mint</h2>
<p>Three mints struck Buffalo nickels, and their output varied by a factor of more than fifty. The table below reads the Bureau of the Mint figures for every year of the series. Years 1913 and 1938 mix two designs, and a few years have no Denver or San Francisco issue at all, shown by a dash.</p>
${h.seriesTable('nickel', 1913, 1938, ['P', 'D', 'S'], `Buffalo nickels struck per calendar year, from the ${h.src('mintBook', 'Bureau of the Mint, 1981')}.`)}
<p>A coin from a large Philadelphia year is one of tens of millions and turns up in old jars and inherited rolls. San Francisco dates of the 1920s are a different matter. The small tool below ranks the lowest figures for any span of years you choose, so you can see where your date falls.</p>
<!--tool:mini:rarenickel-->

<h2>What decides the value of a scarce date</h2>
<p>A low number struck is the first filter, not the answer. Two other facts weigh as much. The first is survival: millions of these coins were worn smooth in circulation over a quarter of a century, and many were lost. The second is the state of the coin. On this design the date and the horn of the bison are high points that wear first, so a nickel with a full date and a full horn is much rarer than the mintage suggests.</p>
<p>This site does not publish prices for collector coins, because no official or freely licensed source gives them, and a made-up figure would do harm. What it can tell you is whether your coin belongs to an issue of millions or of a few hundred thousand, through the tool at the top of the page. For a coin that ranks among the lowest, the ${h.a('coin-grading', 'grading guide')} explains how condition is judged and when an expert opinion is worth its fee.</p>

<h2>Checking a Buffalo nickel step by step</h2>
<ol>
<li>Find the year on the front, at the shoulder of the portrait. If it is gone, the coin cannot be dated by mintage.</li>
<li>Turn it over and look under FIVE CENTS for a D or an S, as the ${h.src('mintMarks', 'Mint’s page on mint marks')} describes for coins of this period.</li>
<li>Enter both in the tool: it returns the number struck at that mint, its band and the metal value.</li>
<li>If the band reads low or very low, look closely at wear on the date and the horn before deciding what to do with it.</li>
</ol>
<p>For later five-cent coins, the ${h.a('jefferson-nickel-value', 'Jefferson nickel page')} covers the wartime silver pieces, and the ${h.a('nickel-value', 'nickel value page')} covers every date from 1938.</p>
`,
  },
});
