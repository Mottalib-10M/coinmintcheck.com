import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'penny-value',
  group: 'pennies',
  order: 10,
  tool: { kind: 'mini:penny' },
  mini: { kind: 'mini:copperpenny' },
  related: ['wheat-penny-value', '1982-penny-value', 'rare-pennies-worth-money', 'penny-discontinued', 'home'],
  sources: ['mintBook', 'mintReport1982', 'pennyFaq', 'pennyRelease', 'cfr82'],
  en: {
    slug: 'penny-value',
    nav: 'Penny value',
    card: 'Any Lincoln cent from 1909: how many were struck at its mint, what metal it holds and that metal at today’s price.',
    title: 'Penny Value: What Your Lincoln Cent Is Worth by Year',
    description: 'Penny value by year and mint mark: the number struck in the Mint tables, copper or zinc inside, the metal at today’s price and which dates collectors look for.',
    h1: 'Penny value: what is my Lincoln cent worth?',
    intro: 'Type the year and pick the mint mark under the date: the tool gives the number struck at that mint, the metal inside and what that metal is worth now.',
    resume: (h) => `Almost every penny you find is worth one cent as money and a little more or a little less as metal, and only a short list of dates and errors is worth real money to collectors. The deciding facts are on the coin itself: the year and the mint mark under it. A cent dated 1981 or earlier is ${h.alloy('bronzeCent').label.toLowerCase()} and weighs ${h.grams('bronzeCent')} grams, so its metal is worth about ${h.meltOf('bronzeCent')} at the copper price read on ${h.priceDate}. From 1982 the Mint switched to copper-plated zinc of ${h.grams('zincCent')} grams, worth about ${h.meltOf('zincCent')} in metal, and both kinds were struck that year. What lifts a cent above that is scarcity and condition: the Bureau of the Mint tables show ${h.mint('cent', 1931, 'S')} cents struck at San Francisco in 1931 against ${h.mint('cent', 1944, 'P')} at Philadelphia in 1944. The tool above reads those tables for any year and mint; melting cents for their copper is illegal under 31 CFR Part 82.`,
    faqs: (h) => [
      { q: 'Is a penny from the 1970s worth more than one cent?', a: `As metal, a little: a cent dated 1981 or earlier holds ${h.grams('bronzeCent')} grams of 95% copper alloy, about ${h.meltOf('bronzeCent')} at the price read on ${h.priceDate}. As a collectible, almost never, because the Mint struck billions of them each year. Melting them to recover that copper is banned under 31 CFR Part 82, so the metal value is a curiosity, not a way to make money.` },
      { q: 'Where is the mint mark on a Lincoln penny?', a: 'On the front, just under the year. A D means Denver and an S means San Francisco. Philadelphia cents carry no letter at all, except those dated 2017, which the Mint struck with a P for its 225th anniversary. Cents dated 1965 to 1967 have no mint mark from any mint, by law at the time.' },
      { q: 'Which pennies are worth keeping when I sort change?', a: 'Keep wheat cents dated 1958 or earlier, any 1943 cent, cents with an S mint mark from before 1975, and anything that looks doubled or struck off center. Check the low-mintage dates in the Mint tables, such as 1909-S, 1914-D, 1922-D and 1931-S. Everything else is worth its face value in a store.' },
      { q: 'Does the Mint still make pennies after the end of production?', a: `Not for circulation. The final circulating cent was struck in Philadelphia on ${h.date(h.PENNY.finalStrike)}, after ${h.PENNY.years} years. The Mint said it will keep making collector versions in limited numbers for sets, and that existing pennies remain legal tender, so a cent you find can still be spent.` },
    ],
    body: (h) => `
<h2>Three facts on the coin decide its value</h2>
<p>The year tells you the metal and the design. Lincoln replaced the Indian Head on the cent in 1909, with two wheat stalks on the back until 1958, the Lincoln Memorial from 1959 to 2008, four Bicentennial designs in 2009 and the Union Shield since 2010, as the ${h.src('pennyFaq', 'Mint’s penny FAQs')} recount. The mint mark tells you where it was struck, and therefore how many twins it has. The condition, judged on the high points of Lincoln’s cheek and hair, tells a collector how much it has suffered in circulation.</p>
<p>Those three facts combine into very different outcomes. A worn 1944 cent from Philadelphia is one of ${h.mint('cent', 1944, 'P')} struck that year and is worth its copper. A worn 1931-S is one of ${h.mint('cent', 1931, 'S')}, and collectors look for it in any condition. The tool reads the number struck for any year from 1909 to 1980 in the ${h.src('mintBook', 'Bureau of the Mint’s own tables')}, and for 2010 to 2012 and 2016 to 2023 in the Mint’s production reports.</p>
${h.table(['Years', 'Metal', 'Weight', 'Metal value of one cent'], [
  ['1909 to 1942, 1944 to 1981', '95% copper', `${h.grams('bronzeCent')} g`, h.meltOf('bronzeCent')],
  ['1943', 'zinc-coated steel', `${h.grams('steelCent')} g`, 'steel is not priced'],
  ['1982', 'either alloy', '3.11 g or 2.50 g', 'weigh it'],
  ['1983 to 2025', 'copper-plated zinc', `${h.grams('zincCent')} g`, h.meltOf('zincCent')],
], `Weights from the ${h.src('mintBook', 'Bureau of the Mint, 1981')} and the ${h.src('mintReport1982', 'Mint annual report for fiscal 1982')}; prices read on ${h.priceDate}.`, ['l', 'l', 'r', 'r'])}

<h2>Why most pennies are worth one cent</h2>
<p>Production numbers explain it. In 1972 alone the Mint struck ${h.mint('cent', 1972, 'P')} cents at Philadelphia and ${h.mint('cent', 1972, 'D')} at Denver. In fiscal 2024 pennies were still ${h.PENNY.fy2024SharePct}% of all circulating coins made, about ${h.num(h.PENNY.fy2024Billions, 1)} billion pieces, and the Mint estimates that ${h.PENNY.inCirculationBillions} billion are in circulation. A coin that common only becomes interesting when it is unusual in some other way: a rare mint, an error, or a coin that never circulated and kept its original red color.</p>
<p>The copper in an old cent is real, but you cannot cash it. The ${h.src('cfr82', '5-cent and one-cent coin regulations, 31 CFR Part 82')}, ban melting, treating or exporting cents and nickels, with fines of up to ${h.money(h.CFR.fineMax)} and up to ${h.CFR.prisonYearsMax} years in prison. The small batch tool below shows what a roll or a jar of copper cents holds, as a measure of how much the metal has risen since those coins were made, not as an offer.</p>
<!--tool:mini:pennyjar-->

<h2>The pennies that are worth more</h2>
<p>Scarcity starts with the number struck. The lowest figures among Lincoln cents in the Mint tables are ${h.lowestList('cent', 1909, 1958, 5)}. The 1909-S figure mixes Indian Head and Lincoln cents, because the Mint counted coins by calendar year. A low number is a lead, not a price: what a collector pays depends on how many survived and in what condition, which is why this site does not publish dealer prices.</p>
<p>Then come the accidents. The Mint itself says that a few 1943 cents were struck in copper by accident and are highly valuable today; the normal 1943 cent is steel and sticks to a magnet, as the ${h.a('1943-steel-penny-value', '1943 penny page')} shows. Doubled dies, such as the ${h.a('1972-double-die-penny', '1972 doubled die')}, show every letter of the date and motto twice. The ${h.a('error-coins', 'error coins guide')} lists what to check, and the ${h.a('rare-pennies-worth-money', 'rare pennies page')} ranks the lowest mintages.</p>
<p>Coins dated 1982 deserve a scale rather than a magnifier. The ${h.src('mintReport1982', 'Mint’s report for fiscal 1982')} records that the copper-plated zinc cent was phased in with the bronze one that year, with the weight changing from 3.11 grams to 2.50 grams and the diameter unchanged. The ${h.a('1982-penny-value', '1982 penny page')} turns a weight into an answer.</p>

<h2>After the last circulating penny</h2>
<p>On ${h.date(h.PENNY.finalStrike)}, the Treasurer struck the final circulating cent at Philadelphia, ending a ${h.PENNY.years}-year run, according to the ${h.src('pennyRelease', 'Mint’s press release')}. Each cent had come to cost ${h.num(h.PENNY.costTo, 2)} cents to make, against ${h.num(h.PENNY.costFrom, 2)} cents a decade earlier. Pennies remain legal tender, shops may keep pricing in one-cent steps, and the Mint goes on striking collector versions. None of this changes what an ordinary cent is worth today: there are simply no new ones joining the billions already out there. The ${h.a('penny-discontinued', 'penny end page')} covers what changes in practice and the ${h.a('should-i-save-pennies', 'saving pennies page')} weighs whether a jar is worth keeping.</p>
<p>If you only remember one step, read the date and the letter under it and type them into the tool at the top of this page. It tells you in a few seconds whether you hold one of billions or one of a few hundred thousand.</p>
`,
  },
});
