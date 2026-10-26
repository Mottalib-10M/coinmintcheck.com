import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'penny-discontinued',
  group: 'pennies',
  order: 80,
  demarche: true,
  tool: { kind: 'mini:pennycost' },
  mini: { kind: 'mini:pennyjar' },
  related: ['should-i-save-pennies', 'penny-value', 'lincoln-penny-value', '1982-penny-value'],
  sources: ['pennyRelease', 'pennyFaq', 'usc5112', 'gao19300', 'cfr82'],
  en: {
    slug: 'penny-discontinued',
    nav: 'End of the penny',
    card: 'The last circulating cent was struck on November 12, 2025: what the Mint decided, why, and what it changes for the coins you hold.',
    title: 'Penny Discontinued: The Last Circulating Cent and Its Cost',
    description: 'Penny discontinued: the Mint struck its last circulating cent on November 12, 2025. Why, what each one cost to make, and what changes for the pennies you hold.',
    h1: 'The penny is discontinued: what it means for your coins',
    intro: 'Type a number of pennies: the tool shows what they are worth as money, what the Mint spent to make them and the metal inside.',
    resume: (h) => `The United States Mint struck its final circulating one-cent coin at Philadelphia on ${h.date(h.PENNY.finalStrike)}, ending a ${h.PENNY.years}-year production run, according to its ${h.src('pennyRelease', 'press release')}. The ${h.src('pennyFaq', 'Mint’s penny FAQs')} explain that the Secretary of the Treasury decided to suspend production after determining that new cents were no longer needed, a power given by 31 U.S.C. 5111(a) and 5112. The cost of making each penny had risen from ${h.num(h.PENNY.costFrom, 2)} to ${h.num(h.PENNY.costTo, 2)} cents over a decade, and the Mint expects to save about ${h.money(h.PENNY.savingsMillionsPerYear * 1e6)} a year. Pennies remain legal tender, shops may still price in one-cent steps, an estimated ${h.PENNY.inCirculationBillions} billion are in circulation, and collector versions continue in limited numbers. Melting pennies is still banned. For an ordinary cent, nothing about its value changes.`,
    faqs: (h) => [
      { q: 'Can shops refuse pennies now that production has stopped?', a: 'The Mint says the penny remains legal tender and may still be used for transactions, and that retailers can continue to price goods in one-cent increments. How a particular shop handles cash and rounding is its own policy, but the coin itself has not lost its status as money. Nothing in the announcement withdraws existing pennies from circulation.' },
      { q: 'How much did one penny cost the Mint to make before production ended?', a: `${h.num(h.PENNY.costTo, 2)} cents, according to the Mint’s most recent estimate, against ${h.num(h.PENNY.costFrom, 2)} cents a decade earlier. Each new cent therefore cost more than three times its face value. With about ${h.num(h.PENNY.fy2024Billions, 1)} billion pennies produced in fiscal 2024, the Mint puts the yearly savings from stopping at about ${h.money(h.PENNY.savingsMillionsPerYear * 1e6)}.` },
      { q: 'Will pennies dated 2025 become valuable?', a: 'Not because of the date alone. The Mint produced billions of cents in its last full years, and the pennies already in circulation far exceed what commerce needs, so ordinary 2025 cents remain common. The Mint will keep making collector versions in limited numbers, and those are sold in sets, not found in change. Condition and errors still matter as for any cent.' },
      { q: 'Is it now legal to melt pennies for their metal?', a: `No. The Mint’s FAQs say that melting, treating or exporting pennies and nickels remains prohibited under 31 CFR 82, with limited exceptions such as jewelry and novelty uses. Penalties reach ${h.money(h.CFR.fineMax)} in fines and ${h.CFR.prisonYearsMax} years in prison. Any request for a melting license goes to the Director of the Mint.` },
    ],
    body: (h) => `
<h2>What the Mint announced</h2>
<p>On ${h.date(h.PENNY.finalStrike)}, the Treasurer of the United States struck the final circulating cent during a ceremony at the Philadelphia Mint. The ${h.src('pennyRelease', 'Mint’s press release')} gives the essentials: the penny, first authorized by the Coinage Act of 1792, ends a ${h.PENNY.years}-year run as a circulating coin; economic and production factors combined with changing consumer behavior made continued production unsustainable; the penny remains legal tender; and the Mint will continue to produce numismatic versions in limited quantities for historical and collector purposes.</p>
<p>The legal basis is short. Under ${h.src('usc5112', '31 U.S.C. 5112')} and section 5111(a), the Secretary of the Treasury mints and issues one-cent coins in the amounts needed to meet the needs of the United States. The ${h.src('pennyFaq', 'Mint’s penny FAQs')} say that the Secretary may therefore suspend production upon determining that new coins are no longer needed, and that until now no Secretary had made that determination.</p>

<h2>The numbers behind the decision</h2>
${h.table(['Figure', 'Value', 'Source'], [['Cost to make one penny, a decade earlier', `${h.num(h.PENNY.costFrom, 2)}¢`, 'Mint FAQs'], ['Cost to make one penny, latest estimate', `${h.num(h.PENNY.costTo, 2)}¢`, 'Mint FAQs'], ['Pennies produced in fiscal 2024', `about ${h.num(h.PENNY.fy2024Billions, 1)} billion`, 'Mint FAQs'], ['Share of all circulating coins made in fiscal 2024', `${h.PENNY.fy2024SharePct}% of ${h.num(h.PENNY.fy2024AllCoinsBillions, 2)} billion`, 'Mint FAQs'], ['Expected yearly savings', h.money(h.PENNY.savingsMillionsPerYear * 1e6), 'Mint FAQs'], ['Pennies estimated in circulation', `${h.PENNY.inCirculationBillions} billion`, 'Mint press release'], ['Typical lifespan of a coin', `${h.PENNY.lifespanYears} years`, 'GAO-19-300, cited by the Mint']], 'Figures as published by the United States Mint and the Government Accountability Office.', ['l', 'r', 'l'])}
<p>The Mint says the rising cost influenced the decision: a coin that costs more than three cents to make and is worth one is a loss on every piece. Pennies were still more than half of all circulating coins the Mint produced in fiscal 2024, so the decision removes most of the Mint’s circulating coin volume in a single step. The tool at the top of this page applies these unit costs to any number of pennies.</p>
<p>The lifespan figure explains why stopping production does not create a shortage overnight. According to the ${h.src('gao19300', 'Government Accountability Office report')} the Mint cites, a coin typically lasts about ${h.PENNY.lifespanYears} years, and the stock already in circulation is described as far exceeding what commerce needs.</p>

<h2>What changes for the pennies you hold</h2>
<p>Very little. A penny is still worth one cent in a shop and keeps its metal: about ${h.meltOf('zincCent')} for a zinc cent dated 1983 or later and about ${h.meltOf('bronzeCent')} for a copper one dated 1981 or earlier, at prices read on ${h.priceDate}. The small tool below works out the split for a jar. The ban on melting under ${h.src('cfr82', '31 CFR Part 82')} stays in force, so the copper remains a figure to know rather than money to collect.</p>
<p>For collectors, the end of production closes the series of circulating Lincoln cents that began in 1909. It does not make ordinary recent cents scarce, since billions of each recent year exist, but it does mean that the list of dates and mint marks is now complete. The ${h.a('lincoln-penny-value', 'Lincoln Memorial and Shield cent page')} gives the figures by year.</p>

<h2>Rounding and everyday change</h2>
<p>The Mint’s statements are about production, not about how prices are paid. They say that businesses can keep pricing in one-cent steps and that pennies may still be used. How cash totals are rounded when pennies are scarce in a till is a matter for each business and for any future rule, and this site will add it here only when an official text sets it out. Card and electronic payments are unaffected in any case. If you have a jar, the ${h.a('should-i-save-pennies', 'page on saving pennies')} helps decide whether to spend, deposit or sort it.</p>
`,
  },
});
