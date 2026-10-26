import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'junk-silver-value',
  group: 'tools',
  order: 30,
  tool: { kind: 'mini:junk' },
  mini: { kind: 'mini:silverdime' },
  related: ['melt-value-calculator', 'silver-coin-years', 'silver-quarter-value', 'kennedy-half-dollar-value', 'home'],
  sources: ['mintBook', 'worldBank', 'goldApi', 'cfr82'],
  en: {
    slug: 'junk-silver-value',
    nav: 'Junk silver value',
    card: 'Face value of pre-1965 dimes, quarters and halves in, troy ounces of silver and their value at today’s price out.',
    title: 'Junk Silver Value: Face Value to Ounces and Dollars',
    description: 'Junk silver value from face value: how many troy ounces of silver are in pre-1965 dimes, quarters and halves, and what they are worth at the live silver price.',
    h1: 'Junk silver value: what is a dollar of old silver coins worth?',
    intro: 'Add up the face value of your 90% silver dimes, quarters and halves and type it in. The tool converts it to pure silver and prices it at the silver price of the moment.',
    resume: (h) => `“Junk silver” is the trade name for common 90% silver coins valued for their metal rather than for their date: dimes, quarters and half dollars dated 1964 or earlier that are worn, ordinary or damaged. Because the Mint struck them at weights proportional to their face value, every dollar of face value contains the same quantity of silver, ${h.ozPerDollar} troy ounce, whatever mix of coins makes it up. That figure follows from the weights and fineness published by the ${h.src('mintBook', 'Bureau of the Mint')}: a dime of ${h.grams('silverDime')} grams, a quarter of ${h.grams('silverQuarter')} grams and a half of ${h.grams('silverHalf')} grams, all 90% silver. At ${h.silver} an ounce, the price read on ${h.priceDate}, ten dollars of face value holds metal worth about ${h.usd(h.silverN * 10 * Number(h.ozPerDollar))}. The tool above does the conversion for any amount at the live price, and the one below counts single coins. Check the date of each coin first: a scarce date is worth more than its silver.`,
    faqs: (h) => [
      { q: 'Which coins count as junk silver?', a: 'Dimes, quarters and half dollars dated 1964 or earlier, which are 90% silver, when they are common dates in ordinary condition. Kennedy halves of 1965 to 1970 are 40% silver and are counted separately. Silver dollars hold slightly more silver per dollar of face value and are usually valued on their own. Nickels and pennies are never junk silver, except wartime nickels.' },
      { q: 'Why does a dollar of junk silver hold less than an ounce of silver?', a: `Because the coins were money first. A quarter of ${h.grams('silverQuarter')} grams at 90% silver holds ${h.oz('silverQuarter')} troy ounce, so four of them hold ${h.ozPerDollar} ounce. Worn coins have lost a little metal over decades in circulation, so the true content of a bag is often slightly lower than the figure computed from the original weight.` },
      { q: 'Should I sort junk silver before valuing it by face?', a: 'Yes. Read every date and mint mark first. A few dates were struck in small numbers and interest collectors, so treating them as metal throws value away. The coin value lookup and the rare quarters and dimes pages list the lowest mintages. What remains after that sort is the part to value by face.' },
    ],
    body: (h) => `
<h2>Why face value is enough to value 90% silver</h2>
<p>The 90% silver dime, quarter and half dollar of the twentieth century were designed as a family. The quarter weighs two and a half times the dime and the half twice the quarter, and all three are nine parts silver to one part copper. The silver in a coin is therefore proportional to its face value, and so is its melt value. A roll of fifty dimes, a roll of twenty quarters and a roll of ten halves each have a face value of five dollars, and each holds the same ${h.num(Number(h.ozPerDollar) * 5, 3)} troy ounces of silver.</p>
${h.table(['Coin', 'Weight', 'Pure silver per coin', 'Coins per $1 face', 'Silver per $1 face'], [
  ['Dime', `${h.grams('silverDime')} g`, `${h.oz('silverDime')} oz`, '10', `${h.ozPerDollar} oz`],
  ['Quarter', `${h.grams('silverQuarter')} g`, `${h.oz('silverQuarter')} oz`, '4', `${h.ozPerDollar} oz`],
  ['Half dollar', `${h.grams('silverHalf')} g`, `${h.oz('silverHalf')} oz`, '2', `${h.ozPerDollar} oz`],
  ['Silver dollar', `${h.grams('silverDollar')} g`, `${h.oz('silverDollar')} oz`, '1', `${h.oz('silverDollar')} oz`],
  ['Kennedy half, 1965 to 1970', `${h.grams('silverCladHalf')} g`, `${h.oz('silverCladHalf')} oz`, '2', `${h.num(2 * Number(h.oz('silverCladHalf')), 4)} oz`],
], `Weights and fineness from the ${h.src('mintBook', 'Bureau of the Mint, 1981')}; one troy ounce is 31.1035 grams.`, ['l', 'r', 'r', 'r', 'r'])}
<p>The silver dollar is the exception in the table: it was struck to an older standard and holds more silver per dollar than the smaller coins. The 40% Kennedy halves hold well under half as much per dollar. Mixing them into a 90% count overstates the silver, so count them apart.</p>

<h2>Counting by the coin</h2>
<p>When you have a few coins rather than a bag, counting them one by one is simpler. The tool below takes a number of 90% dimes and returns face value, silver content and metal value at the same price as the main tool.</p>
<!--tool:mini:silverdime-->
<p>For quarters, halves, dollars and wartime nickels, the ${h.a('melt-value-calculator', 'melt value calculator')} works the same way for every coin type.</p>

<h2>Prices, wear and what a buyer pays</h2>
<p>The silver price comes from ${h.src('goldApi', 'gold-api.com')}, asked by your browser when the page opens; the World Bank’s ${h.src('worldBank', 'monthly average')} for ${h.wbMonth} is kept as a reference. Silver moves every minute the markets are open, so the figure on your screen is the one to use, not a number in an old article.</p>
<p>Worn coins lighten slowly in circulation, so a bag of heavily used quarters contains a little less silver than the arithmetic says. The difference is small but it is one reason buyers quote below the full metal value, together with their refining and handling costs. The tool shows the full value of the metal so that you can compare any offer against it.</p>

<h2>Before you sell or melt</h2>
<p>Read every date. Low-mintage dates exist among Mercury dimes, Washington quarters and Walking Liberty halves, and they are worth more as coins than as metal; the ${h.a('silver-coin-years', 'silver coin years')} page helps you separate silver from clad first. Unlike pennies and nickels, silver dimes, quarters and halves are not covered by the ${h.src('cfr82', 'melting ban of 31 CFR Part 82')}, which applies only to one-cent and five-cent coins. Keep in mind that the metal value is the floor, never the ceiling, of what an old coin can be worth.</p>
`,
  },
});
