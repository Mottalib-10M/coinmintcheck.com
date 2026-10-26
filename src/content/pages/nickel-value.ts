import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'nickel-value',
  group: 'nickels-dimes',
  order: 10,
  tool: { kind: 'coin', props: { denom: 'nickel', year: 1942, mint: 'P' } },
  mini: { kind: 'mini:oldnickel' },
  related: ['jefferson-nickel-value', 'buffalo-nickel-value', 'melt-value-calculator', 'mint-marks', 'home'],
  sources: ['mintBook', 'mintSpecs', 'mintMarks', 'mintHistory', 'modernProduction', 'cfr82'],
  en: {
    slug: 'nickel-value',
    nav: 'Nickel value',
    card: 'Any five-cent piece from Buffalo to Jefferson: number struck at its mint, copper-nickel or wartime silver, and the metal at today’s prices.',
    title: 'Nickel Value by Year: Mintage, Metal and Wartime Silver',
    description: 'Nickel value by year and mint mark: number struck in the Mint tables, copper and nickel inside, the silver war nickels of 1942 to 1945 and the scarcest dates.',
    h1: 'Nickel value: what is my five-cent piece worth?',
    intro: 'Type the year, choose the mint mark and, for 1942, the metal: the tool returns the number struck, the metal inside and its value now.',
    resume: (h) => `A nickel is worth more as metal than as money: its ${h.grams('nickel')} grams of 75% copper and 25% nickel, the alloy given in the ${h.src('mintSpecs', 'Mint’s coin specifications')}, hold about ${h.meltOf('nickel')} at the prices read on ${h.priceDate}. Melting it is still banned under 31 CFR Part 82, so for an ordinary nickel that figure is a curiosity. The exceptions are the wartime nickels struck from ${h.date(h.MARKS.warNickelFrom)} to ${h.date(h.MARKS.warNickelTo)} in an alloy of 56% copper, 35% silver and 9% manganese: each holds ${h.oz('warNickel')} troy ounce of silver, about ${h.meltOf('warNickel')} at the silver price of the day, and the regulations exempt them from the melting ban. They are easy to spot by the large mint mark above Monticello on the back. Scarcity by number is concentrated in Buffalo nickels from branch mints and a few Jefferson dates, with the lowest figures in the Bureau of the Mint tables at ${h.lowestList('nickel', 1913, 1980, 4)}.`,
    faqs: (h) => [
      { q: 'Is a nickel really worth more than five cents in metal?', a: `At the prices read on ${h.priceDate}, yes: about ${h.meltOf('nickel')} of copper and nickel for a coin worth five cents. You cannot turn that into money, because 31 CFR Part 82 forbids melting, treating or exporting nickels for their metal, except the wartime silver ones. A nickel spent in a shop is still worth exactly five cents.` },
      { q: 'How do I recognize a silver war nickel?', a: `Look at the back, above the dome of Monticello. A wartime nickel dated 1942 to 1945 carries a large P, D or S there, while ordinary Jefferson nickels show a small letter to the right of the building or none at all. Philadelphia put a P on a coin for the first time on these nickels, according to the Mint.` },
      { q: 'Which nickels have no mint mark?', a: `Philadelphia nickels before 1980 carry none, except the wartime pieces with a large P. Nickels dated ${h.MARKS.noMarkFrom} to ${h.MARKS.noMarkTo} have no mark from any mint, because the Coinage Act of 1965 removed them for three years. From ${h.MARKS.obverseFrom} the mark moved to the front, and from ${h.MARKS.pAllButCentFrom} Philadelphia nickels show a P.` },
      { q: 'Why does a 1942 nickel need an extra choice in the checker?', a: 'Because 1942 had two metals. Nickels struck before the wartime alloy began in October 1942 are the usual copper and nickel, while later ones from Philadelphia and San Francisco contain 35% silver. Denver struck only the regular alloy that year. The large mint mark above Monticello tells you which you hold.' },
    ],
    body: (h) => `
<h2>Three designs, two metals</h2>
<p>The five-cent pieces you are likely to find belong to two designs. The Buffalo nickel, with a bison on the back, ran from 1913 to 1938. The Jefferson nickel replaced it in 1938, part of the move the ${h.src('mintHistory', 'Mint’s history of circulating coins')} describes as presidents taking over from Liberty: the cent in 1909, the quarter in 1932, the nickel in 1938. Both 1913 and 1938 mix two designs in the Mint’s tables, because coins were counted by calendar year, and the checker warns you.</p>
<p>The metal stayed the same throughout, 75% copper and 25% nickel at ${h.grams('nickel')} grams, with one exception. From ${h.date(h.MARKS.warNickelFrom)} to ${h.date(h.MARKS.warNickelTo)}, nickel was removed from the coin during World War II, as the ${h.src('mintMarks', 'Mint’s page on mint marks')} recalls, and replaced by a mix of copper, silver and manganese.</p>
${h.table(['Coin', 'Weight', 'Metal', 'Metal value today'], [['Nickel, regular alloy', `${h.grams('nickel')} g`, '75% copper, 25% nickel', h.meltOf('nickel')], ['Wartime nickel, 1942 to 1945', `${h.grams('warNickel')} g`, '56% copper, 35% silver, 9% manganese', h.meltOf('warNickel')]], `Bureau of the Mint and Mint specifications; prices read on ${h.priceDate}, manganese not priced.`, ['l', 'r', 'l', 'r'])}

<h2>How many were struck</h2>
<p>The ${h.src('mintBook', 'Bureau of the Mint tables')} give the number struck at each mint for every year to 1980, and the ${h.src('modernProduction', 'Mint’s production reports')} give rounded figures for 2010 to 2012 and 2016 to 2023. A few figures show the range:</p>
${h.table(['Year', 'Philadelphia', 'Denver', 'San Francisco'], [1926, 1938, 1950, 1964, 1979].map((y) => [String(y), h.mint('nickel', y, 'P'), h.mint('nickel', y, 'D'), h.mint('nickel', y, 'S')]), 'Pieces struck in the calendar year. San Francisco figures from 1965 include proof coins for collector sets.', ['l', 'r', 'r', 'r'])}
<p>The lowest figures of all come from San Francisco Buffalo nickels of the 1910s to the early 1930s, with the 1950-D the lowest Jefferson figure in the tables. The ${h.a('buffalo-nickel-value', 'Buffalo nickel page')} and the ${h.a('jefferson-nickel-value', 'Jefferson nickel page')} rank each series.</p>

<h2>Where to find the mint mark</h2>
<p>On Buffalo nickels the mark sits on the back, under the words FIVE CENTS. On Jefferson nickels before 1965 it sits on the back to the right of Monticello, except on wartime coins, where a large letter appears above the dome and Philadelphia used a P for the first time. After the three years without marks, the letter moved to the front in ${h.MARKS.obverseFrom}, and Philadelphia nickels show a P from ${h.MARKS.pAllButCentFrom}. The ${h.a('mint-marks', 'mint marks guide')} covers every coin.</p>

<h2>Recent nickels</h2>
<p>Nickels of the last fifteen years are made in the hundreds of millions at each of Philadelphia and Denver. The Mint’s production reports give ${h.mint('nickel', 2012, 'P')} at Philadelphia and ${h.mint('nickel', 2012, 'D')} at Denver for 2012, and ${h.mint('nickel', 2023, 'P')} and ${h.mint('nickel', 2023, 'D')} for 2023, figures the Mint publishes in millions. No recent date is scarce by number, and their metal is the same copper and nickel as any regular nickel since 1946. What sets a modern nickel apart, when anything does, is a striking error or a coin from a collector set, and those are counted apart or not at all.</p>
<p>So the order of work for any nickel is the same: read the date and the letter, check whether it falls in the wartime years, then look up the number struck in the tool at the top of this page.</p>

<h2>Metal you may not cash, except silver</h2>
<p>The small tool below shows the metal in a stack of ordinary nickels. The ${h.src('cfr82', 'rules in 31 CFR Part 82')} forbid melting, treating or exporting five-cent coins with fines up to ${h.money(h.CFR.fineMax)}, but they specifically exempt nickels dated 1942 to 1945 made of copper, silver and manganese. Those wartime pieces are the only nickels you may legally sell for their metal, and the ${h.a('melt-value-calculator', 'melt value calculator')} prices any number of them at the silver price of the moment.</p>
`,
  },
});
