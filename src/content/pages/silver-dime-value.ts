import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'silver-dime-value',
  group: 'nickels-dimes',
  order: 40,
  tool: { kind: 'mini:silverdime' },
  mini: { kind: 'mini:roosevelt' },
  related: ['mercury-dime-value', 'roosevelt-dime-value', 'junk-silver-value', 'silver-coin-years', 'melt-value-calculator'],
  sources: ['mintBook', 'goldApi', 'worldBank', 'mintSpecs'],
  en: {
    slug: 'silver-dime-value',
    nav: 'Silver dime value',
    card: 'Dimes dated 1964 or earlier are 90% silver: the silver in one or a hundred of them at the price of the moment.',
    title: 'Silver Dime Value: Melt Price of Old 90% Silver Dimes',
    description: 'Silver dime value at the live silver price: dimes dated 1964 and earlier hold 90% silver. Type how many you have to see the silver content and the metal value.',
    h1: 'Silver dime value: what are my old dimes worth in silver?',
    intro: 'Type how many silver dimes you have: the tool gives the pure silver they contain and its value at the live price, which you can replace with your own.',
    resume: (h) => `Every dime dated 1964 or earlier is made of 90% silver and 10% copper and weighs ${h.grams('silverDime')} grams, so it holds ${h.oz('silverDime')} troy ounce of pure silver. At ${h.silver} an ounce, the price read on ${h.priceDate}, that is ${h.meltOf('silverDime')} of silver in a single dime, many times its face value. From 1965 the Mint switched the dime to a copper and nickel sandwich of ${h.grams('cladDime')} grams with no silver, worth about ${h.meltOf('cladDime')} as metal. The quickest test is the date; the second is the edge, which shows a copper stripe on a clad dime and an even silver color on an old one. Ten silver dimes contain the same silver as four silver quarters or two silver halves, because the Mint struck them in proportion to face value. The tool above multiplies by the number you hold, and the price follows the market as the page loads.`,
    faqs: (h) => [
      { q: 'How much silver is in one dime from before 1965?', a: `${h.oz('silverDime')} troy ounce. The coin weighs ${h.grams('silverDime')} grams, and 90% of that is silver, according to the Bureau of the Mint specifications. Multiply by the price of an ounce of silver to get the metal value; the tool does it with the live price, or with a price you type yourself.` },
      { q: 'Are any dimes after 1964 made of silver?', a: 'Not for circulation. Every dime dated 1965 or later that you get in change is copper-nickel clad. Silver dimes made since then are collector pieces sold in sets, not coins released into circulation, so they are very unlikely to reach your pocket. A 1965 or later dime with no copper edge is worth checking with a scale.' },
      { q: 'Does a worn silver dime contain less silver?', a: `A little. Wear removes metal, so a dime that circulated for decades weighs slightly under ${h.grams('silverDime')} grams. The difference is usually small, so the figure in the tool remains a fair guide. Weigh a handful together if you want to see the effect on your own coins.` },
      { q: 'Which silver dimes are worth more than their silver?', a: `Mostly scarce dates and mints. Among Mercury dimes, the Bureau of the Mint tables show ${h.mint('dime', 1916, 'D')} struck at Denver in 1916, against tens of millions in most other years. Check the date and mint of each dime in the tool at the bottom of the page before treating a batch only as silver.` },
    ],
    body: (h) => `
<h2>Why a dime from 1964 is worth more than a dime from 1965</h2>
<p>Until 1964 the United States struck its dimes, quarters and halves in 90% silver. From 1965 dimes and quarters were struck in copper-nickel clad instead, and the ${h.src('mintBook', 'Bureau of the Mint tables')} move them from the silver tables to the clad ones that year. Coins dated 1964 were in fact struck into 1966 to meet demand, which is why ${h.mint('dime', 1964, 'D')} dimes carry the 1964 date and a D.</p>
${h.table(['Dime', 'Metal', 'Weight', 'Silver', 'Metal value'], [
  ['1964 and earlier', '90% silver, 10% copper', `${h.grams('silverDime')} g`, `${h.oz('silverDime')} oz`, h.meltOf('silverDime')],
  ['1965 and later', 'copper-nickel clad', `${h.grams('cladDime')} g`, 'none', h.meltOf('cladDime')],
], `Weights from the ${h.src('mintBook', 'Bureau of the Mint, 1981')} and the ${h.src('mintSpecs', 'Mint’s coin specifications')}; silver at ${h.silver} per ounce on ${h.priceDate}.`, ['l', 'l', 'r', 'r', 'r'])}

<h2>From a roll to a bag: counting silver by face value</h2>
<p>Old silver coins are often counted by their face value rather than one by one. A dollar of face value in 90% silver dimes, ten coins, holds ${h.ozPerDollar} troy ounce of pure silver; so does a dollar in quarters or halves. A roll of fifty dimes is five dollars of face and about ${h.num(h.P.alloys.silverDime.grams * 0.9 * 50 / h.P.troyOunceGrams, 2)} troy ounces. That rule makes it easy to check any offer for a mixed jar: count the face value, multiply by the silver per dollar and by the price.</p>
<p>Prices come from ${h.src('goldApi', 'gold-api.com')} when your browser can reach it, and otherwise from the last reading at build time, with its date. The ${h.src('worldBank', 'World Bank monthly average')} for ${h.wbMonth} was ${h.price(h.P.metals.silverUsdOz)} an ounce, a useful check on how much the price moves from month to month.</p>

<h2>Sorting dimes before counting them as silver</h2>
<p>A silver dime is never worth less than its metal, but a few are worth much more. Before you treat a batch as bulk silver, sort it by design and date. Mercury dimes run from 1916 to 1945 and include some of the lowest mintages of the century; the ${h.a('mercury-dime-value', 'Mercury dime page')} lists them. Roosevelt dimes from 1946 to 1964 are silver too, and were struck in far larger numbers; the tool below reads their figures by year and mint.</p>
<!--tool:mini:roosevelt-->
<p>Older Barber dimes, dated up to 1916, are also 90% silver and appear in the coin checker on the ${h.a('home', 'home page')}. For a mix of dimes, quarters and halves, the ${h.a('junk-silver-value', 'junk silver page')} converts any face value into ounces in one step.</p>

<h2>What melt value does not tell you</h2>
<p>Melt value is the value of the metal at the price shown, not what a buyer will pay. Anyone buying silver coins works with a margin, and this site does not track those margins or recommend a buyer. It also does not give collector prices: no official source publishes them. Silver dimes are not covered by the melting ban of 31 CFR Part 82, which concerns cents and nickels, so the silver figure is a real measure of the metal, not only a curiosity. Keep a note of the price and the date you used, since the silver price can move by several percent within a single month.</p>
`,
  },
});
