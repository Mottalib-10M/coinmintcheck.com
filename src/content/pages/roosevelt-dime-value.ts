import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'roosevelt-dime-value',
  group: 'nickels-dimes',
  order: 60,
  tool: { kind: 'mini:roosevelt' },
  mini: { kind: 'mini:silverdime' },
  related: ['silver-dime-value', 'mercury-dime-value', 'silver-coin-years', 'mint-marks', 'home'],
  sources: ['mintBook', 'mintHistory', 'mintMarks', 'mintSpecs', 'modernProduction'],
  en: {
    slug: 'roosevelt-dime-value',
    nav: 'Roosevelt dime value',
    card: 'Roosevelt dimes from 1946: silver until 1964, clad after, with the number struck at each mint and the metal value.',
    title: 'Roosevelt Dime Value: Silver or Clad, Year by Year',
    description: 'Roosevelt dime value by year and mint: silver from 1946 to 1964, copper-nickel clad from 1965, with the number struck at each mint and the metal in each coin.',
    h1: 'Roosevelt dime value: silver or clad?',
    intro: 'Type the year and pick the mint letter: the tool says whether the dime is silver, how many were struck at that mint and what its metal is worth.',
    resume: (h) => `A Roosevelt dime dated from 1946 to 1964 is 90% silver and holds ${h.oz('silverDime')} troy ounce of pure silver, worth about ${h.meltOf('silverDime')} at the price read on ${h.priceDate}. One dated 1965 or later is copper-nickel clad, weighs ${h.grams('cladDime')} grams and holds about ${h.meltOf('cladDime')} of metal, less than its face value. That single date line decides most of what a Roosevelt dime is worth. The design was first struck in 1946, the year after President Franklin D. Roosevelt died, and the Mint struck it in huge numbers: ${h.mint('dime', 1964, 'D')} at Denver for the 1964 date alone, according to the Bureau of the Mint tables. Even the smallest silver issues, such as ${h.lowestList('dime', 1946, 1964, 3)}, number in the millions. For most Roosevelt dimes, the question is therefore silver or not, and the tool above answers it with the mintage of your year and mint.`,
    faqs: (h) => [
      { q: 'What year did Roosevelt dimes stop being silver?', a: `The last year of 90% silver for circulation is 1964. Dimes dated 1965 and later are copper-nickel clad, with a copper core visible on the edge. The Mint kept striking 1964-dated silver dimes into 1966 to meet demand, which is why the tables show ${h.mint('dime', 1964, 'P')} for Philadelphia under that date.` },
      { q: 'Where is the mint mark on a Roosevelt dime?', a: `It moved. From 1946 to 1964 the letter is on the back, at the left of the base of the torch. From ${h.MARKS.obverseFrom} it is on the front, above the date. Dimes dated ${h.MARKS.noMarkFrom} to ${h.MARKS.noMarkTo} carry no mark, and Philadelphia dimes show a P only from ${h.MARKS.pAllButCentFrom}.` },
      { q: 'Is a clad Roosevelt dime ever worth more than ten cents?', a: 'Rarely, and only through scarcity or an error rather than metal. The clad dime holds less metal than its face value, so spending it is always the better deal unless something unusual sets it apart, such as a missing mint mark where one should be. The Mint struck hundreds of millions of most clad dates.' },
    ],
    body: (h) => `
<h2>Two metals under one portrait</h2>
<p>The Roosevelt dime replaced the Mercury dime in 1946, according to the ${h.src('mintHistory', 'Mint’s history of circulating coins')}. For its first nineteen years it kept the old alloy: ${h.grams('silverDime')} grams of 90% silver and 10% copper. From 1965 it became a clad coin of copper-nickel outer layers bonded to a pure copper core, ${h.grams('cladDime')} grams, the composition still listed in the ${h.src('mintSpecs', 'Mint’s coin specifications')}.</p>
${h.table(['Years', 'Metal', 'Weight', 'Metal value'], [
  ['1946 to 1964', '90% silver', `${h.grams('silverDime')} g`, h.meltOf('silverDime')],
  ['1965 and later', 'copper-nickel clad', `${h.grams('cladDime')} g`, h.meltOf('cladDime')],
], `Weights from the ${h.src('mintBook', 'Bureau of the Mint, 1981')} and the ${h.src('mintSpecs', 'Mint’s coin specifications')}; prices read on ${h.priceDate}.`, ['l', 'l', 'r', 'r'])}
<p>The edge gives it away even without reading the date: a silver dime has an even, pale edge, while a clad dime shows a thin copper line between two white layers. A dime that looks old but has a copper stripe is clad, whatever its wear.</p>

<h2>Silver Roosevelt dimes by year and mint</h2>
<p>All twenty years of silver Roosevelt dimes are listed below. The figures are pieces made in each calendar year at each mint, read in the ${h.src('mintBook', 'Bureau of the Mint tables')}. San Francisco stopped striking dimes after 1955, which is why the column ends there.</p>
${h.seriesTable('dime', 1946, 1964, ['P', 'D', 'S'], `Dimes struck per calendar year, from the ${h.src('mintBook', 'Bureau of the Mint, 1981')}.`)}
<p>None of these issues is small by the standards of older series: the lowest is ${h.lowestList('dime', 1946, 1964, 1)}. That is why silver Roosevelt dimes are usually counted by face value as silver rather than sorted by date. The batch tool below turns a number of silver dimes into ounces and dollars.</p>
<!--tool:mini:silverdime-->

<h2>Mint marks after 1964</h2>
<p>The ${h.src('mintMarks', 'Mint’s page on mint marks')} explains the changes that matter for clad dimes. Coins dated ${h.MARKS.noMarkFrom} to ${h.MARKS.noMarkTo} have no letter at all. From ${h.MARKS.obverseFrom} the letter moved to the front, above the date, and from ${h.MARKS.pAllButCentFrom} Philadelphia added its P. San Francisco dimes of later years with an S are proof coins made for collector sets, so an S dime in pocket change usually came out of a set.</p>
<p>For clad dates, the Bureau of the Mint tables run to 1980, and the ${h.src('modernProduction', 'Mint’s production reports')} give rounded figures for several later years. Both appear in the tool at the top of the page. Recent clad dimes number in the hundreds of millions each year, and their value is their face value.</p>

<h2>What to do with a jar of dimes</h2>
<p>Pick out every dime dated 1964 or earlier: those are silver. Among them, check any Mercury dimes on the ${h.a('mercury-dime-value', 'Mercury dime page')}, since some of those dates are scarce. Count the silver Roosevelts by face value, using the ${h.a('silver-dime-value', 'silver dime calculator')}. The clad dimes can go back into circulation.</p>
`,
  },
});
