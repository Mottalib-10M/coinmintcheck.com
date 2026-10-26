import { definePage } from '../../lib/guide-types';

export default definePage({
  id: '1982-penny-value',
  group: 'pennies',
  order: 50,
  tool: { kind: 'mini:weight1982' },
  mini: { kind: 'mini:copperpenny' },
  related: ['penny-value', 'lincoln-penny-value', 'should-i-save-pennies', 'rare-pennies-worth-money'],
  sources: ['mintReport1982', 'mintReport1983', 'mintSpecs', 'mintBook', 'cfr82'],
  en: {
    slug: '1982-penny-value',
    nav: '1982 penny: copper or zinc',
    card: 'Both metals were struck in 1982: weigh your cent to know which one you have and what its metal is worth today.',
    title: '1982 Penny Value: Copper or Zinc? The Simple Weight Test',
    description: '1982 penny value depends on its metal: the Mint struck both 95% copper cents of 3.11 g and zinc cents of 2.50 g that year. Weigh yours to know which you have.',
    h1: '1982 penny: copper or zinc, and what is it worth?',
    intro: 'Type the weight shown by a gram scale: the tool tells you which 1982 cent you hold and prices its metal.',
    resume: (h) => `A cent dated 1982 can be one of two different coins. The ${h.src('mintReport1982', 'Mint’s annual report for fiscal 1982')} records that the copper-plated zinc cent was phased in with the bronze one that year: composition changed from 95% copper and 5% zinc to 97.5% zinc and 2.5% copper, weight from 3.11 grams to 2.50 grams, diameter unchanged. So the date does not tell you the metal; a scale does. A copper one holds about ${h.meltOf('bronzeCent')} of metal and a zinc one about ${h.meltOf('zincCent')} at the copper and zinc prices read on ${h.priceDate}. Both kinds were struck in huge numbers at Philadelphia and Denver, so neither is scarce, and melting either is banned by 31 CFR Part 82. The weight test is still worth doing on a jar of cents, because it tells you how much copper you have kept.`,
    faqs: (h) => [
      { q: 'How much should a copper 1982 penny weigh?', a: `About ${h.grams('bronzeCent')} grams, the weight of the bronze cents of earlier years, while a zinc cent weighs about ${h.grams('zincCent')} grams. The gap is a little over half a gram, so a kitchen scale reading to one gram cannot tell them apart. Use a scale that reads to 0.01 gram, of the kind sold for jewelry or postage, and weigh several cents together for a steadier result.` },
      { q: 'Can I tell a copper 1982 cent from a zinc one without a scale?', a: 'Not reliably by eye, because the zinc cent is plated with copper and has the same color and size. Some people compare the sound when two coins are dropped on a hard table, or the way a stack balances, but those tricks need practice and give false readings. A scale reading to 0.01 gram costs little and gives a clear answer in seconds.' },
      { q: 'Is a zinc 1982 penny worth more than one cent?', a: `Rarely. Its ${h.grams('zincCent')} grams of zinc with a thin copper plating hold about ${h.meltOf('zincCent')} of metal at the prices read on ${h.priceDate}, and the Mint made billions of cents in that period. Only a striking error, a doubled die or an exceptional coin straight from a Mint roll would interest a collector. Otherwise spend it or keep it for its story.` },
    ],
    body: (h) => `
<h2>Why 1982 has two coins</h2>
<p>The early 1980s brought the cent its largest change since 1943. The ${h.src('mintReport1982', 'annual report for fiscal 1982')} lists, among the year’s main events, the production conversion from copper cents to the new copper-plated zinc cents and the resolution of a cent crisis that had begun to develop in 1980. It gives the specification change in a few lines:</p>
${h.table(['', 'Before', 'After'], [['Name', 'Bronze', 'Copper-plated zinc (CPZ)'], ['Composition', '95% copper, 5% zinc', '97.5% zinc, 2.5% copper'], ['Weight', '3.11 g', '2.50 g'], ['Diameter', 'unchanged', 'unchanged'], ['Metal value today', h.meltOf('bronzeCent'), h.meltOf('zincCent')]], `Mint annual report, fiscal 1982; metal values at prices read on ${h.priceDate}.`, ['l', 'l', 'l'])}
<p>The changeover took more than one fiscal year. The ${h.src('mintReport1983', 'report for fiscal 1983')} says total conversion was completed that year, and that of the ${h.num(h.PENNY.fy1983CentsBillions, 1)} billion cents manufactured, ${h.num(h.PENNY.fy1983CpzBillions, 1)} billion were of the new alloy. Fiscal 1983 began on October 1, 1982, so the report does not say which date those last bronze cents carry, and this site does not guess.</p>

<h2>The weight test step by step</h2>
<p>A scale is the only simple test that works. Set it to grams with two decimals and check it against a known weight if it has one. Weigh the cent alone, then type the figure into the tool at the top of this page. The tool places the cut-off halfway between the two specifications, at ${h.num((h.alloy('bronzeCent').grams + h.alloy('zincCent').grams) / 2, 2)} grams, and warns you when a reading falls outside the usual range, which usually means a damp coin, a dirty pan or a scale that needs calibrating.</p>
<p>For a whole roll, weigh fifty cents of 1982 together and divide. If the average sits between the two weights, the roll is mixed, and you can sort it coin by coin. Cents dated 1981 and earlier need no test: they are bronze. Cents dated 1983 and later are zinc, as the ${h.src('mintSpecs', 'Mint’s current coin specifications')} confirm for the modern cent.</p>

<h2>What the copper is worth, and what you may do with it</h2>
<p>At the prices read on ${h.priceDate}, the copper in a bronze cent is worth several times its face value, while the zinc cent holds about ${h.meltOf('zincCent')}, close to its face value. The small tool below adds up a batch of bronze cents so you can see the gap on a roll or a jar. It is a measure, not an offer: the ${h.src('cfr82', 'regulations in 31 CFR Part 82')} prohibit melting, treating or exporting one-cent coins, with exceptions only for small amounts carried abroad, novelty and jewelry uses, and recycling where coins are incidental. Penalties reach ${h.money(h.CFR.fineMax)} and ${h.CFR.prisonYearsMax} years in prison.</p>
<p>Why keep sorting, then? Because the copper cents are a finite stock. The Mint stopped circulating cent production on ${h.date(h.PENNY.finalStrike)}, and the bronze cent itself ended with the conversion completed in fiscal 1983. Whether to keep them is a personal choice; this site only measures what they hold.</p>

<h2>Neither kind is scarce by number</h2>
<p>The Bureau of the Mint tables used on this site stop at 1980, and the Mint’s yearly production pages that it can read start later, so the tool shows no mintage for 1982. The fiscal 1983 figure above, ${h.num(h.PENNY.fy1983CentsBillions, 1)} billion cents in one year, gives the order of magnitude. A 1982 cent is worth more than a cent only through its copper, an error or exceptional condition. The ${h.a('lincoln-penny-value', 'Lincoln Memorial cent page')} covers the rest of the series, and the ${h.a('should-i-save-pennies', 'saving pennies page')} looks at a whole jar.</p>
`,
  },
});
