import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'should-i-save-pennies',
  group: 'pennies',
  order: 90,
  tool: { kind: 'mini:pennyjar' },
  mini: { kind: 'mini:copperpenny' },
  related: ['penny-discontinued', '1982-penny-value', 'rare-pennies-worth-money', 'wheat-penny-value'],
  sources: ['cfr82', 'pennyRelease', 'pennyFaq', 'mintReport1982'],
  en: {
    slug: 'should-i-save-pennies',
    nav: 'Should I save pennies?',
    card: 'A jar of pennies after the end of production: what it holds in copper and zinc, what the law lets you do with it, and what to pull out first.',
    title: 'Saving Pennies: What a Jar Is Worth After Production Ends',
    description: 'Saving pennies after the end of production: what a jar holds in copper and zinc at today’s prices, what the law forbids and which cents to pull out first.',
    h1: 'Should I save pennies now that the Mint has stopped making them?',
    intro: 'Type how many pennies you have and the share dated 1981 or earlier: the tool splits the jar into copper and zinc and prices the metal.',
    resume: (h) => `A jar of pennies is worth its face value at the bank or in a shop, and the end of circulating production on ${h.date(h.PENNY.finalStrike)} does not change that: the ${h.src('pennyRelease', 'Mint’s announcement')} says pennies remain legal tender. What a jar also holds is metal. Cents dated 1981 or earlier are 95% copper and weigh ${h.grams('bronzeCent')} grams, about ${h.meltOf('bronzeCent')} of metal each at the price read on ${h.priceDate}; zinc cents from 1983 on hold about ${h.meltOf('zincCent')}. The ${h.src('cfr82', '31 CFR Part 82')} rules forbid melting, treating or exporting cents for that metal, with fines of up to ${h.money(h.CFR.fineMax)}, so the copper is not cash. Saving makes sense in two cases: to sort out the scarce dates and errors a jar can hide, or if you simply like keeping old copper. Hoarding modern zinc cents in the hope of a rise has no basis in any official figure.`,
    faqs: (h) => [
      { q: 'How many copper cents are in a typical jar?', a: 'It depends on how old the jar is and where the coins came from, so no official figure exists. The tool asks you for the share dated 1981 or earlier: count a sample of one hundred coins and use that percentage. Coins dated 1982 can be either metal, and a scale is the only reliable way to sort them.' },
      { q: 'Can I take a large jar of pennies abroad?', a: `Not freely. Under 31 CFR Part 82 a traveler may carry pennies and nickels out of the country up to ${h.money(h.CFR.travelerFaceMax)} in face value, or up to ${h.money(h.CFR.travelerHobbyFaceMax)} when the purpose is clearly personal collecting or amusement. Shipments up to ${h.money(h.CFR.exportFaceMax)} in face value are allowed for use as money or for collecting, never for melting.` },
      { q: 'Are pressed souvenir pennies legal if melting is banned?', a: 'Yes. The coin regulations exempt treating cents and nickels for educational, amusement, novelty, jewelry and similar purposes, as long as the volumes and the nature of the work make it clear that the aim is not to profit from the metal. A souvenir press flattening one cent at a time fits that exception; a furnace full of cents does not.' },
    ],
    body: (h) => `
<h2>What the jar holds</h2>
<p>A penny is two different coins depending on its date. Up to 1981 it is bronze of 95% copper weighing ${h.grams('bronzeCent')} grams. From 1983 it is zinc with a thin copper plating, weighing ${h.grams('zincCent')} grams, a change recorded in the ${h.src('mintReport1982', 'Mint’s annual report for fiscal 1982')}; cents dated 1982 come in both kinds. At the prices read on ${h.priceDate}, that puts the metal at about ${h.meltOf('bronzeCent')} for an old cent and ${h.meltOf('zincCent')} for a new one.</p>
${h.table(['Jar of 1,000 pennies', 'Copper cents', 'Zinc cents', 'Metal value'], [10, 25, 50].map((p) => [`${p}% dated 1981 or earlier`, h.num(10 * p), h.num(1000 - 10 * p), h.usd(10 * p * h.meltN('bronzeCent') + (1000 - 10 * p) * h.meltN('zincCent'))]), `Face value of the jar: ${h.money(10)}. Metal prices read on ${h.priceDate}; nickel and zinc at the World Bank monthly average.`, ['l', 'r', 'r', 'r'])}
<p>The tool at the top of this page does the same for your own count. The comparison shows the real interest of an old jar: the copper cents carry most of the metal. A jar of recent zinc cents holds roughly its face value in metal and nothing more.</p>

<h2>What the law lets you do</h2>
<p>The ${h.src('cfr82', 'one-cent and five-cent coin regulations')} were written to stop exactly the idea that a jar of copper invites. Without authorization from the Secretary of the Treasury, nobody may export, melt or treat one-cent or five-cent coins. The exceptions are narrow: small amounts carried or shipped abroad, treatment for education, amusement, novelty or jewelry when profit from the metal is clearly not the aim, coins caught up incidentally in recycling other materials, and wartime silver nickels. Penalties reach ${h.money(h.CFR.fineMax)} in fines and ${h.CFR.prisonYearsMax} years in prison under 31 U.S.C. 5111(d), and other federal penalties can apply on top.</p>
<p>The ${h.src('pennyFaq', 'Mint’s penny FAQs')} repeat after the end of production that melting remains prohibited and that any request for a license goes to the Director of the Mint. Saving copper cents is legal; cashing them as metal is not.</p>

<h2>What to pull out before spending</h2>
<p>Before you roll or deposit a jar, a quick sort is worth an evening. Set aside every wheat cent dated 1958 or earlier, every cent dated 1943, cents with an S under the date, anything that looks doubled, off center or the wrong color, and cents dated 1982 to weigh later. The ${h.a('rare-pennies-worth-money', 'rare pennies page')} ranks the dates struck in the fewest numbers, the ${h.a('wheat-penny-value', 'wheat penny page')} covers the older coins, and the ${h.a('1982-penny-value', '1982 weight test')} sorts copper from zinc. The small tool below prices a pile of copper cents once you have separated them.</p>

<h2>Spend, deposit or keep</h2>
<p>Once sorted, the zinc cents are ordinary money. The Mint says retailers may still price in one-cent steps and the coins may be used for transactions, so spending them or depositing them at a bank that accepts coin is the simplest choice. If a bank or a store offers to count coins for you, check its conditions and any fee before you carry the jar there.</p>
<p>The copper cents are a matter of taste. They take space, they do not earn interest, and the law prevents you from selling their metal, but they are a finite stock that grows no larger now that production has ended, as the ${h.a('penny-discontinued', 'page on the end of the penny')} explains. Keeping a few rolls of old copper costs little; turning a garage into a penny warehouse is a bet that the rules will change, and no official text announces anything of the kind.</p>
`,
  },
});
