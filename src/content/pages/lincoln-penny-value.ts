import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'lincoln-penny-value',
  group: 'pennies',
  order: 30,
  tool: { kind: 'mini:memorial' },
  mini: { kind: 'mini:weight1982' },
  related: ['penny-value', '1982-penny-value', '1972-double-die-penny', 'wheat-penny-value', 'penny-discontinued'],
  sources: ['mintBook', 'pennyFaq', 'mintMarks', 'mintReport1982', 'modernProduction', 'cfr82'],
  en: {
    slug: 'lincoln-penny-value',
    nav: 'Lincoln Memorial cent',
    card: 'Lincoln cents from 1959 on: Memorial, Bicentennial and Shield reverses, numbers struck by mint and the copper or zinc inside.',
    title: 'Lincoln Memorial Penny Value: 1959 Onward, Year by Year',
    description: 'Lincoln Memorial penny value from 1959 on: numbers struck at each mint, copper before 1982 and zinc after, years without mint marks and what makes one rare.',
    h1: 'Lincoln Memorial and Shield cents: what are they worth?',
    intro: 'Type the year and pick the mint: the tool gives the number struck where the Mint published it and the metal value of that cent.',
    resume: (h) => `Lincoln cents dated 1959 and later are the coins most people find in change, and almost all of them are worth one cent as money. The ${h.src('pennyFaq', 'Mint’s penny FAQs')} date the Lincoln Memorial reverse from 1959 to 2008, followed by four Bicentennial designs in 2009 and the Union Shield from 2010. Up to 1981 these cents are 95% copper and weigh ${h.grams('bronzeCent')} grams, about ${h.meltOf('bronzeCent')} of metal at the copper price read on ${h.priceDate}; from 1983 they are copper-plated zinc of ${h.grams('zincCent')} grams, about ${h.meltOf('zincCent')}, and 1982 has both. Philadelphia and Denver struck billions a year: ${h.mint('cent', 1974, 'D')} at Denver in 1974 alone. The San Francisco figures of these years include proof coins made for collector sets. What lifts a Memorial cent above face value is an error or a doubled die, not its date, so this page shows the metal, the number struck and what to check.`,
    faqs: (h) => [
      { q: 'Why do some Lincoln Memorial cents have no mint mark at all?', a: `Two reasons. Philadelphia put no letter on its cents in these years, except in ${h.MARKS.pCent}, when it added a P for the Mint’s anniversary. And cents dated ${h.MARKS.noMarkFrom} to ${h.MARKS.noMarkTo} carry no mark from any mint, because the Coinage Act of 1965 removed mint marks for three years, as the Mint explains on its mint marks page.` },
      { q: 'Is a Lincoln Memorial penny from the 1960s copper?', a: `Yes. Every Memorial cent dated 1959 to 1981 is the bronze alloy of 95% copper and 5% zinc, weighing ${h.grams('bronzeCent')} grams. Only from 1982 did the Mint change to copper-plated zinc, and only cents dated 1983 and later are always zinc. That copper is worth more than a cent today, but melting cents remains banned under 31 CFR Part 82.` },
      { q: 'What do the San Francisco Lincoln cents from the 1970s count?', a: 'The Bureau of the Mint tables give one figure per mint and year, and from 1965 the San Francisco figure includes proof coins struck for collector sets as well as any coins made for circulation. The table does not split the two. This site therefore leaves San Francisco figures from 1965 to 1980 out of its rankings of lowest mintages, so that a set coin is not mistaken for a scarce date.' },
      { q: 'Which reverse does a 2009 Lincoln cent show?', a: 'One of the four designs of the Lincoln Bicentennial One Cent Program, struck for the 200th anniversary of his birth, as the Mint’s penny FAQs list them. They replaced the Lincoln Memorial for that year only. From 2010 the reverse shows the Union Shield, the design the Mint kept until it ended circulating production.' },
    ],
    body: (h) => `
<h2>Four reverses, one portrait</h2>
<p>Lincoln’s portrait on the front has not changed since 1909. The back has. Frank Gasparro designed the Lincoln Memorial reverse for the 150th anniversary of Lincoln’s birth and it ran from 1959 to 2008; in 2009 four Bicentennial designs followed; from 2010 the Union Shield, which the ${h.src('pennyFaq', 'Mint’s penny FAQs')} describe as a symbol of Lincoln’s preservation of the country as one nation. The tool at the top of this page covers all of them, with figures for 1959 to 1980 from the ${h.src('mintBook', 'Bureau of the Mint’s 1981 tables')} and for 2010 to 2012 and 2016 to 2023 from the ${h.src('modernProduction', 'Mint’s production reports')}.</p>
${h.table(['Year', 'Philadelphia', 'Denver', 'Metal'], [[1959, 'bronze'], [1964, 'bronze'], [1969, 'bronze'], [1974, 'bronze'], [1979, 'bronze'], [2012, 'zinc'], [2020, 'zinc']].map(([y, m]) => [String(y), h.mint('cent', y as number, 'P'), h.mint('cent', y as number, 'D'), m as string]), 'Pieces struck. 1959 to 1979: Bureau of the Mint tables, by calendar year. 2012 and 2020: Mint production reports, published in rounded figures.', ['l', 'r', 'r', 'l'])}
<p>Even the smallest of these is in the hundreds of millions. A Memorial cent is never scarce because of its date and mint alone, which is a useful thing to know before spending time on a jar of them.</p>

<h2>Copper years and zinc years</h2>
<p>The real dividing line in this series is metal. The ${h.src('mintReport1982', 'Mint’s report for fiscal 1982')} records the change from bronze of 95% copper to copper-plated zinc of 97.5% zinc, with the weight going from 3.11 to 2.50 grams and the diameter unchanged. Both were struck during 1982, so a coin of that year can be either. A scale reading to a hundredth of a gram settles it, and the small tool below turns a weight into an answer.</p>
<p>The difference in metal value is real: a copper Memorial cent holds about ${h.meltOf('bronzeCent')} of metal against ${h.meltOf('zincCent')} for a zinc one, at prices read on ${h.priceDate}. It does not give anyone a way to profit, because the ${h.src('cfr82', '31 CFR Part 82')} rules ban melting, treating or exporting cents, apart from small exceptions such as pressed souvenir pennies and jewelry where the metal value is clearly not the point.</p>

<h2>Mint marks on Memorial cents</h2>
<p>The mint mark sits under the date. In these years you will see D for Denver and S for San Francisco; Philadelphia added a P only on cents dated ${h.MARKS.pCent}. The ${h.src('mintMarks', 'Mint’s page on mint marks')} explains the gap of ${h.MARKS.noMarkFrom} to ${h.MARKS.noMarkTo}, when the Coinage Act of 1965 removed mint marks to discourage collecting while the Mint worked to meet the country’s coinage needs, before they returned in 1968. A cent dated 1966 with a D is therefore not a variety but an altered coin.</p>
<p>San Francisco is a special case. It stopped striking cents after ${h.MARKS.sClosedAfter} and appears again in the tables from 1968, with figures that include proof coins sold in collector sets: ${h.mint('cent', 1968, 'S')} in 1968 and ${h.mint('cent', 1975, 'S')} in 1975. Proof coins have mirror-like fields and frosted portraits and were not meant for change. The tool shows these figures with a warning, and the ${h.a('rare-pennies-worth-money', 'rare pennies ranking')} leaves them out.</p>

<h2>What makes one worth a second look</h2>
<p>Not the date. Look for doubling of the letters and numbers that shows as a clear second outline, such as the ${h.a('1972-double-die-penny', '1972 doubled die')}; for a 1982 cent of the wrong weight for its look; for coins struck off center or on the wrong blank. A cent still bright orange from the Mint in a sealed roll is pleasant but common. Everything else in a jar of Memorial cents is spending money, and the ${h.a('should-i-save-pennies', 'page on saving pennies')} works out what a jar holds now that the Mint has stopped making new ones.</p>
<p>The end of circulating production, on ${h.date(h.PENNY.finalStrike)}, does not turn Memorial cents into collectibles overnight. The Mint estimates ${h.PENNY.inCirculationBillions} billion pennies in circulation, far more than commerce needs. A coin made in the billions stays common for a very long time.</p>
`,
  },
});
