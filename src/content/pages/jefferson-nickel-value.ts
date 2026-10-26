import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'jefferson-nickel-value',
  group: 'nickels-dimes',
  order: 20,
  tool: { kind: 'mini:jefferson' },
  mini: { kind: 'mini:warnickel' },
  related: ['nickel-value', 'buffalo-nickel-value', 'junk-silver-value', 'mint-marks'],
  sources: ['mintBook', 'mintMarks', 'mintHistory', 'mintSpecs', 'modernProduction', 'cfr82'],
  en: {
    slug: 'jefferson-nickel-value',
    nav: 'Jefferson nickel value',
    card: 'Jefferson nickels from 1938: number struck at each mint, the silver war nickels of 1942 to 1945 and the dates struck in short runs.',
    title: 'Jefferson Nickel Value: Rare Dates and Silver War Nickels',
    description: 'Jefferson nickel value from 1938: the number struck at each mint, the 35% silver war nickels and their silver at today’s price, and short runs such as 1950-D.',
    h1: 'Jefferson nickel value: which ones are worth more than five cents?',
    intro: 'Type the year and choose the mint: the tool reads the number struck in the Mint tables and prices the metal of that nickel.',
    resume: (h) => `Thomas Jefferson has been on the nickel since 1938, the year the ${h.src('mintHistory', 'Mint’s history of circulating coins')} gives for the nickel joining the coins with presidents, with his house, Monticello, on the back. Most Jefferson nickels were struck by the hundreds of millions and are worth their metal, about ${h.meltOf('nickel')} for ${h.grams('nickel')} grams of copper and nickel at prices read on ${h.priceDate}, which the law does not let you cash. Two groups stand out. The wartime nickels dated 1942 to 1945 contain 35% silver, ${h.oz('warNickel')} troy ounce each, worth about ${h.meltOf('warNickel')} at the silver price of the day, and may legally be melted. And a handful of dates had short runs: the lowest figures in the ${h.src('mintBook', 'Bureau of the Mint tables')} are ${h.lowestList('nickel', 1938, 1980, 4)}. The tool above reads any year and mint; the small tool below prices a stack of war nickels.`,
    faqs: (h) => [
      { q: 'How much silver is in a Jefferson war nickel?', a: `Each wartime nickel weighs ${h.grams('warNickel')} grams and is 35% silver, so it holds ${h.oz('warNickel')} troy ounce of pure silver, along with copper and manganese. At ${h.silver} per ounce, the price read on ${h.priceDate}, that silver is worth about ${h.meltOf('warNickel')} per coin. Twenty war nickels, a dollar in face value, hold about ${h.num(h.alloy('warNickel').grams * 0.35 * 20 / 31.1034768, 2)} troy ounce.` },
      { q: 'Why is the 1950-D Jefferson nickel known as a key date?', a: `Because Denver struck only ${h.mint('nickel', 1950, 'D')} nickels in 1950, the smallest figure for any Jefferson nickel in the Bureau of the Mint tables to 1980. Philadelphia made ${h.mint('nickel', 1950, 'P')} that year and San Francisco none. A short run attracts collectors, but only condition and demand decide what one is worth in practice.` },
      { q: 'Why can I not find a Philadelphia Jefferson nickel from the late 1960s?', a: 'In the Bureau of the Mint tables, Philadelphia has no nickel figure from 1966 to 1970; Denver and San Francisco produced them. Coins dated 1966 and 1967 carry no mint mark from any mint, and from 1968 the letter moved to the front, so a nickel from those years shows a D or an S, or nothing at all if dated before 1968.' },
    ],
    body: (h) => `
<h2>The series in four periods</h2>
<p>The Jefferson nickel is one long series with clear breaks. From 1938 to 1942 it is the regular copper and nickel alloy with a small mint mark to the right of Monticello. From late 1942 to 1945 comes the wartime alloy with a large mark above the dome. From 1946 the regular alloy and the small mark return, until the three years without marks from ${h.MARKS.noMarkFrom} to ${h.MARKS.noMarkTo}. From ${h.MARKS.obverseFrom} the letter sits on the front, and from ${h.MARKS.pAllButCentFrom} Philadelphia coins show a P, as the ${h.src('mintMarks', 'Mint’s page on mint marks')} explains.</p>
${h.table(['Period', 'Metal', 'Mint mark', 'Example: struck'], [['1938 to 1942', '75% copper, 25% nickel', 'small, right of Monticello; none at Philadelphia', `1939-D: ${h.mint('nickel', 1939, 'D')}`], ['1942 to 1945', '35% silver', 'large, above the dome; P used', `1944 P: ${h.mint('nickel', 1944, 'P')}`], ['1946 to 1964', '75% copper, 25% nickel', 'small, right of Monticello', `1955 P: ${h.mint('nickel', 1955, 'P')}`], ['1965 to 1980', '75% copper, 25% nickel', 'none to 1967, then on the front', `1970-D: ${h.mint('nickel', 1970, 'D')}`]], 'Bureau of the Mint tables, pieces struck in the calendar year.', ['l', 'l', 'l', 'r'])}

<h2>The silver war nickels</h2>
<p>The wartime alloy ran from ${h.date(h.MARKS.warNickelFrom)} to ${h.date(h.MARKS.warNickelTo)}. It replaced nickel with a mix of 56% copper, 35% silver and 9% manganese at the same ${h.grams('warNickel')} grams, and Philadelphia put a P on a coin for the first time to mark the change. All three mints took part:</p>
${h.table(['Year', 'Philadelphia (P)', 'Denver (D)', 'San Francisco (S)'], [1943, 1944, 1945].map((y) => [String(y), h.mint('nickel', y, 'P'), h.mint('nickel', y, 'D'), h.mint('nickel', y, 'S')]), 'Bureau of the Mint tables. 1942 is left out because its figures mix the two alloys.', ['l', 'r', 'r', 'r'])}
<p>The ${h.src('cfr82', 'coin regulations in 31 CFR Part 82')} exempt five-cent coins dated 1942 to 1945 made of copper, silver and manganese from the ban on melting, treating and exporting. Their silver can therefore be valued like that of dimes and quarters from before 1965, and the small tool below gives the silver in any number of them at the price of the moment. For 1942, check the mark: a large P or S above the dome means silver; a small letter or none beside the building means the regular alloy.</p>

<h2>Short runs worth checking</h2>
<p>Jefferson nickels were never struck in the tiny numbers of some Buffalo nickels, but several dates came in well under ten million:</p>
${h.lowestTable('nickel', 1938, 1980, 8, 'Lowest Jefferson nickel figures 1938 to 1980, Bureau of the Mint tables. San Francisco figures from 1965 left out: they include proof coins for collector sets.')}
<p>The 1950-D stands alone at the bottom, and the 1939-D and 1938-S follow. Philadelphia appears with 1950 and 1955, years when it struck fewer than ten million. The checker at the top of this page places any date in its band.</p>

<h2>Modern Jefferson nickels</h2>
<p>In recent years the Mint has varied the design, including the Westward Journey Nickel Series the ${h.src('mintHistory', 'Mint’s history page')} lists among its recent programs, but the metal remains ${h.grams('nickel')} grams of copper and nickel as in the ${h.src('mintSpecs', 'current specifications')}. Production runs to hundreds of millions a year at each of Philadelphia and Denver: ${h.mint('nickel', 2021, 'P')} and ${h.mint('nickel', 2021, 'D')} in 2021 according to the ${h.src('modernProduction', 'Mint’s production reports')}. Their value is their face, plus the metal you may not melt, unless an error makes one stand out. The ${h.a('nickel-value', 'nickel value page')} covers Buffalo nickels and the rest of the five-cent coins.</p>
`,
  },
});
