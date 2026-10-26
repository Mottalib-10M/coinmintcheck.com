import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'melt-value-calculator',
  group: 'tools',
  order: 10,
  tool: { kind: 'melt', props: { type: 'silverQuarter', qty: 10 } },
  mini: { kind: 'mini:junk' },
  related: ['junk-silver-value', 'silver-coin-years', 'coin-value-lookup', 'home'],
  sources: ['mintBook', 'mintSpecs', 'mintReport1982', 'worldBank', 'goldApi', 'cfr82'],
  en: {
    slug: 'melt-value-calculator',
    nav: 'Melt value calculator',
    card: 'Pick a coin and a quantity: the metal inside at today’s silver and copper price, with face value beside it.',
    title: 'Melt Value Calculator for Silver, Copper and Nickel Coins',
    description: 'Melt value of US coins at the live silver and copper price: dimes, quarters, halves, dollars, nickels and pennies, by the coin or the roll, metal shown.',
    h1: 'Melt value calculator: the metal in your coins at today’s price',
    intro: 'Choose the kind of coin and how many you have. The calculator multiplies weight, metal share and the price of each metal, and you can type your own silver or copper price.',
    resume: (h) => `Melt value is what the metal in a coin would be worth at the market price of that metal, before any refining cost or dealer margin. It depends on three numbers only: the weight of the coin, the share of each metal in its alloy and the price of that metal. A 90% silver quarter weighs ${h.grams('silverQuarter')} grams and holds ${h.oz('silverQuarter')} troy ounce of pure silver, which comes to about ${h.meltOf('silverQuarter')} at ${h.silver} an ounce, the price read on ${h.priceDate}. A modern clad quarter of ${h.grams('cladQuarter')} grams is copper and nickel and is worth about ${h.meltOf('cladQuarter')} in metal. The calculator above does that arithmetic for every circulating type since 1878, by the coin or by the hundred, and lets you replace the live price with your own. Melting pennies and nickels is illegal under 31 CFR Part 82, so for those coins the figure is a measure, not a way to cash in.`,
    faqs: (h) => [
      { q: 'Which price does the melt value calculator use for silver?', a: `The price of the moment from a public price service, asked by your browser when the page opens. If that request fails, it shows the last price read when the site was built, ${h.silver} an ounce on ${h.priceDate}, with that date. You can type any other silver price in the field, for example the one quoted to you, and every figure follows.` },
      { q: 'Why is melt value higher than what a buyer offers for silver coins?', a: 'Melt value is the metal at the market price, with nothing taken off. A buyer has to pay for assay, refining, transport and his own margin, and usually quotes a share of melt value or a multiple of face value. The gap varies from one buyer to the next, which is why this site gives the metal value and no offer.' },
      { q: 'Does the calculator count the copper in silver coins?', a: 'Yes. A 90% silver coin is 10% copper, and the calculator prices that copper at the copper price shown. It adds very little: a few tenths of a cent for a dime, a little more for a dollar. Manganese in wartime nickels and golden dollars is not priced, which the method page explains, and changes the total by less than a cent.' },
      { q: 'Can I use the melt value calculator for a whole bag of coins?', a: 'Yes. Type the number of coins, up to a million, and the total follows. For 90% silver coins bought or sold by face value, the junk silver tool lower on this page is quicker: one dollar of face value in dimes, quarters or halves always holds the same quantity of silver.' },
    ],
    body: (h) => `
<h2>How the melt value is computed</h2>
<p>Each coin type has a weight and an alloy published by the Mint. For coins struck up to 1980 the figures come from the tables of the ${h.src('mintBook', 'Bureau of the Mint’s 1981 book')}; for the copper-plated zinc cent, from the ${h.src('mintReport1982', 'Mint’s report for fiscal 1982')}; for clad coins, nickels and the golden dollar, from the ${h.src('mintSpecs', 'Mint’s coin specifications')}. The calculator multiplies the weight by the share of each metal, converts silver to troy ounces of 31.1035 grams and base metals to pounds of 453.59 grams, then applies the price of each metal.</p>
<p>Silver and copper are priced live by your browser from ${h.src('goldApi', 'gold-api.com')}. Nickel and zinc trade on fewer public feeds, so they use the monthly average of the ${h.src('worldBank', 'World Bank Pink Sheet')} for ${h.wbMonth}. Those two metals make up most of a nickel and a modern penny, so their monthly average is enough for coins worth a few cents.</p>
${h.table(['Coin', 'Weight', 'Metal', 'Melt value of one coin'], [
  ['Dime, 1964 or earlier', `${h.grams('silverDime')} g`, '90% silver', h.meltOf('silverDime')],
  ['Quarter, 1964 or earlier', `${h.grams('silverQuarter')} g`, '90% silver', h.meltOf('silverQuarter')],
  ['Half dollar, 1964 or earlier', `${h.grams('silverHalf')} g`, '90% silver', h.meltOf('silverHalf')],
  ['Kennedy half, 1965 to 1970', `${h.grams('silverCladHalf')} g`, '40% silver', h.meltOf('silverCladHalf')],
  ['Morgan or Peace dollar', `${h.grams('silverDollar')} g`, '90% silver', h.meltOf('silverDollar')],
  ['Wartime nickel', `${h.grams('warNickel')} g`, '35% silver', h.meltOf('warNickel')],
  ['Nickel', `${h.grams('nickel')} g`, 'copper-nickel', h.meltOf('nickel')],
  ['Clad quarter', `${h.grams('cladQuarter')} g`, 'copper-nickel clad', h.meltOf('cladQuarter')],
  ['Penny, 1981 or earlier', `${h.grams('bronzeCent')} g`, '95% copper', h.meltOf('bronzeCent')],
  ['Penny, 1983 or later', `${h.grams('zincCent')} g`, 'copper-plated zinc', h.meltOf('zincCent')],
], `Prices read on ${h.priceDate}: silver ${h.silver} per ounce, copper ${h.copper} per pound.`, ['l', 'r', 'l', 'r'])}

<h2>Silver coins: one rule covers dimes, quarters and halves</h2>
<p>The Mint struck its 90% silver dimes, quarters and half dollars at weights proportional to their face value. A dollar of face value therefore holds ${h.ozPerDollar} troy ounce of silver, whether it is ten dimes, four quarters or two halves. That is why silver coins of this kind are often bought and sold by face value, and why the small tool below converts a face amount straight into ounces and dollars. Silver dollars hold a little more per dollar of face value than the smaller coins.</p>
<!--tool:mini:junk-->
<p>Kennedy halves dated 1965 to 1970 are a different alloy, 40% silver overall, and they hold ${h.oz('silverCladHalf')} ounce each. Every dime and quarter dated 1965 or later is copper-nickel clad, except collector coins struck in silver.</p>

<h2>Base-metal coins and the melting ban</h2>
<p>The copper in an old cent and the copper and nickel in a nickel have value, sometimes more than the face value of the coin. The ${h.src('cfr82', '5-cent and one-cent coin regulations')} forbid melting, treating or exporting those coins, with fines of up to ${h.money(h.CFR.fineMax)} and up to ${h.CFR.prisonYearsMax} years in prison. The only nickels exempted are the wartime pieces of 1942 to 1945 that contain silver. Dimes, quarters, halves and dollars are outside these rules.</p>
<p>For those coins the melt value is still useful: it shows how far metal prices have moved since the coin was designed, and it explains why the Mint changed alloys. The cent went from copper to copper-plated zinc in 1982, and the penny itself ended in 2025 when each one cost more than a cent to make.</p>

<h2>What melt value does not tell you</h2>
<p>A coin can be worth far more than its metal. A low mintage, a well-known error or a coin that never circulated can interest collectors, and their price has nothing to do with melt value. Before treating a coin as metal, read its year and mint mark in the ${h.a('coin-value-lookup', 'coin value lookup')} to see how many were struck, and check the ${h.a('silver-coin-years', 'silver coin years')} to be sure what it is made of.</p>
<p>Melt value is also not a price you will be paid. Whoever buys the metal has to refine it, and quotes accordingly. Use the figure as a floor for silver coins and as a curiosity for copper and nickel ones.</p>
`,
  },
});
