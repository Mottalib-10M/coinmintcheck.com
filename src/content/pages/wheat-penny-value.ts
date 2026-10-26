import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'wheat-penny-value',
  group: 'pennies',
  order: 20,
  tool: { kind: 'mini:wheat' },
  mini: { kind: 'mini:copperpenny' },
  related: ['penny-value', 'rare-pennies-worth-money', '1943-steel-penny-value', 'lincoln-penny-value', 'home'],
  sources: ['mintBook', 'pennyFaq', 'mintMarks', 'anatomy', 'cfr82'],
  en: {
    slug: 'wheat-penny-value',
    nav: 'Wheat penny value',
    card: 'Lincoln cents with two wheat ears on the back, 1909 to 1958: number struck at each mint, copper inside and the scarce dates.',
    title: 'Wheat Penny Value: Mintage and Copper Worth, 1909 to 1958',
    description: 'Wheat penny value by year and mint mark: how many each mint struck from 1909 to 1958, the copper in every cent at today’s price and dates worth a closer look.',
    h1: 'Wheat penny value: which wheat cents are worth more than a cent?',
    intro: 'Pick the year and the letter under the date: the tool reads the number struck at that mint in the Bureau of the Mint tables and prices the copper inside.',
    resume: (h) => `A wheat penny is a Lincoln cent with two ears of wheat on the reverse, the design the Mint used from 1909 to 1958 according to its ${h.src('pennyFaq', 'penny FAQs')}. Every wheat cent except those dated 1943 is ${h.alloy('bronzeCent').label.toLowerCase()} weighing ${h.grams('bronzeCent')} grams, so the metal alone is worth about ${h.meltOf('bronzeCent')} at the copper price read on ${h.priceDate}, while the 1943 cents are zinc-coated steel. Most wheat cents are common: Philadelphia alone struck ${h.mint('cent', 1944, 'P')} of them in 1944. The ones that matter come from short runs at Denver and San Francisco, and the lowest figures in the Bureau of the Mint tables are ${h.lowestList('cent', 1909, 1958, 4)}. A low number is a reason to look at the condition and have an expert see the coin, not a price in itself, and this page publishes no dealer price because no official source exists for one.`,
    faqs: (h) => [
      { q: 'How do I tell a wheat penny from a later Lincoln cent?', a: 'Turn the coin over. A wheat cent shows two curved ears of wheat on either side of the words ONE CENT, and its date runs from 1909 to 1958. From 1959 the reverse shows the Lincoln Memorial building instead, then shields and other designs from 2009. The portrait of Lincoln on the front stayed the same throughout.' },
      { q: 'Are all wheat pennies made of copper?', a: `All but one year. Wheat cents dated 1909 to 1942 and 1944 to 1958 are 95% copper and weigh ${h.grams('bronzeCent')} grams. Those dated 1943 were struck in zinc-coated steel weighing ${h.grams('steelCent')} grams, which is why they look gray and stick to a magnet. A copper-colored 1943 cent needs testing before you believe it.` },
      { q: 'Which wheat penny mint marks are the scarcest?', a: `In the Bureau of the Mint tables the shortest runs come from San Francisco and Denver, not Philadelphia. The four lowest wheat cent figures are ${h.lowestList('cent', 1909, 1958, 4)}. Philadelphia never struck fewer than several million cents a year in that period, so a wheat cent with no letter is rarely scarce by number alone.` },
      { q: 'Should I clean an old wheat penny before checking it?', a: 'No. Cleaning, polishing or dipping removes the original surface, leaves fine scratches and changes the color, and collectors treat a cleaned coin as damaged. Look at it as it is, under a good light and a simple magnifier, read the date and mint mark, then type them into the tool at the top of this page.' },
    ],
    body: (h) => `
<h2>Fifty years of the same reverse</h2>
<p>The wheat reverse appeared with Lincoln in 1909, when he became the first president to appear on a coin, for the centenary of his birth, and stayed until the Lincoln Memorial replaced it in 1959, as the ${h.src('pennyFaq', 'Mint’s penny FAQs')} explain. Over those fifty years the Mint ran the cent through three mints: Philadelphia, which put no letter on its coins, Denver, marked D, and San Francisco, marked S, with the letter under the date on the front, as the ${h.src('mintMarks', 'Mint’s page on mint marks')} describes. San Francisco stopped striking cents after ${h.MARKS.sClosedAfter}, which is why no wheat cent after that year carries an S.</p>
<p>Production grew enormously across the period. The table below, read in the ${h.src('mintBook', 'Bureau of the Mint’s 1981 tables')}, gives a few years spread across the series: compare the first decade with the last.</p>
${h.table(['Year', 'Philadelphia', 'Denver', 'San Francisco'], [1911, 1924, 1931, 1939, 1949, 1955].map((y) => [String(y), h.mint('cent', y, 'P'), h.mint('cent', y, 'D'), h.mint('cent', y, 'S')]), 'Pieces struck in the calendar year, Bureau of the Mint, Domestic and Foreign Coins Manufactured by Mints of the United States 1793-1980.', ['l', 'r', 'r', 'r'])}
<p>The pattern is clear: a wheat cent from the 1910s or early 1930s from a branch mint can come from a run of a few million, while a wheat cent from the 1940s or 1950s almost always comes from hundreds of millions. That is why the year and the letter are the first things to read.</p>

<h2>The short runs, ranked</h2>
<p>The tool below ranks the lowest figures among wheat cents. The 1909-S figure counts Indian Head and Lincoln cents together, because the Mint counted pieces by calendar year and the Lincoln design started that summer. Several of the lowest are Denver and San Francisco coins of the 1910s and 1920s.</p>
<!--tool:mini:rarecent-->
<p>Two cautions apply. The tables count coins struck, not coins surviving: some issues were melted, lost or worn smooth, and none of that is measured anywhere official. And condition decides most of what a collector pays: a worn coin of a short run and a sharp coin of a long run can end up in the same range. Treat the ranking as a sorting aid that tells you which coins deserve a careful look under a magnifier.</p>

<h2>Reading wear on a wheat cent</h2>
<p>Wear shows first on the highest points of the design. On the front, look at Lincoln’s cheekbone, the hair above his ear and his jaw line. On the back, look at the lines inside each ear of wheat: on a coin that has barely circulated they are separate and crisp; on a well-worn coin they merge into a smooth band. A coin that still shows the original orange-red color of fresh copper has spent little time in pockets. The ${h.a('coin-grading', 'grading guide')} turns these signs into a short quiz.</p>
<p>Damage is not wear. Holes, bends, scratches, corrosion and cleaning all reduce what a collector will consider, even on a scarce date. A wheat cent dug out of the ground with green spots is still worth its copper, but rarely more.</p>

<h2>Copper you can measure but not cash</h2>
<p>Each bronze wheat cent holds about ${h.num(h.alloy('bronzeCent').grams * 0.95, 2)} grams of copper. The small tool after the main checker multiplies that by your count at the price of the day, which is useful to see how far copper has moved since the coins were made. The ${h.src('cfr82', 'coin regulations in 31 CFR Part 82')} still forbid melting, treating or exporting cents for their metal, with fines of up to ${h.money(h.CFR.fineMax)}, so the metal figure is a floor for comparison, not money you can collect.</p>
<p>The one exception in the series is 1943. Those cents are steel, are not priced as metal here, and have their own ${h.a('1943-steel-penny-value', 'page and magnet test')}. The ${h.src('anatomy', 'Mint’s anatomy of a coin page')} notes that a few 1943 cents were struck in copper by accident, which is the single most famous wheat cent mistake.</p>

<h2>A routine for a box of wheat cents</h2>
<p>Sort first by decade, then pull every coin with a D or an S from before 1935 and every 1943 cent. Check each of those in the tool at the top of this page. Set aside the ones whose mintage band reads very low or low, and look at their condition with a light from the side. Everything else can go back in the box: as a group it holds real copper and real history, and the ${h.a('rare-pennies-worth-money', 'rare pennies page')} lists what else to look for.</p>
`,
  },
});
