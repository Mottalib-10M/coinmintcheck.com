import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'mint-marks',
  group: 'tools',
  order: 50,
  tool: { kind: 'mini:mintmark' },
  mini: { kind: 'mini:coinyear' },
  related: ['coin-value-lookup', 'penny-value', 'morgan-silver-dollar-value', 'state-quarters-value', 'home'],
  sources: ['mintMarks', 'mintBook', 'anatomy', 'stateQuarters', 'pennyFaq'],
  en: {
    slug: 'mint-marks',
    nav: 'Mint marks',
    card: 'What P, D, S, O, CC and W mean, where the letter sits on each coin, and the years when Philadelphia or every mint left it off.',
    title: 'Mint Marks on US Coins: Letters, Places and Years Used',
    description: 'Mint marks explained: what P, D, S, O, CC and W stand for, where the letter sits on each coin, the years with no mark at all, and why it changes the mintage.',
    h1: 'Mint marks: which letter, where, and what it changes',
    intro: 'Choose a coin and a date to see which letter a Philadelphia coin carries that year and which mints have a production figure in the official tables.',
    resume: (h) => `A mint mark is the small letter that identifies the Mint facility that struck a coin. The ${h.src('mintMarks', 'Mint’s own page on mint marks')} lists them: P for Philadelphia, D for Denver, S for San Francisco and W for West Point today, with O for New Orleans and CC for Carson City on older coins. The letter matters because each mint has its own production figure, and the same date can be common from one mint and scarce from another. Philadelphia, the main mint, left most of its coins unmarked until it began adding a P to every denomination except the cent in ${h.MARKS.pAllButCentFrom}; the cent received a P only in ${h.MARKS.pCent}. Coins dated ${h.MARKS.noMarkFrom} to ${h.MARKS.noMarkTo} carry no letter from any mint. Since ${h.MARKS.obverseFrom} the mark has been placed on the front of the coin. The tool above tells you what letter a Philadelphia coin of any year carries and which mints have a figure that year.`,
    faqs: (h) => [
      { q: 'What does it mean if my coin has no mint mark?', a: `Usually that it was struck at Philadelphia, which put no letter on most coins before ${h.MARKS.pAllButCentFrom} and none on cents except those dated ${h.MARKS.pCent}. For coins dated ${h.MARKS.noMarkFrom} to ${h.MARKS.noMarkTo}, no letter appears whichever mint struck them, so the absence tells you nothing about origin. A missing letter can also be worn away on an old coin.` },
      { q: 'Which mint mark is the rarest on US coins?', a: `Among circulating coins, CC for Carson City, used from ${h.MARKS.ccFrom} to ${h.MARKS.ccTo}, and O for New Orleans appear only on older silver. The W of West Point appeared on circulating quarters for the first time in ${h.MARKS.wQuarters}, when the Mint released about ${h.MARKS.wQuartersMillions} million of them into circulation among billions of P and D quarters.` },
      { q: 'Where is the mint mark on a coin dated before 1968?', a: 'It depends on the design. On wheat cents it sits under the date; on Mercury dimes and silver Washington quarters it is on the back, near the bottom; on Morgan dollars it is under the wreath on the back; on wartime nickels it is a large letter above the dome of Monticello. The Mint’s mint marks page shows each position.' },
    ],
    body: (h) => `
<h2>The letters and the mints</h2>
${h.table(['Letter', 'Mint', 'On circulating coins in our tables'], [
  ['none or P', 'Philadelphia', 'every year; P on most coins from ' + h.MARKS.pAllButCentFrom],
  ['D', 'Denver', 'from 1906 on dimes, quarters and halves'],
  ['S', 'San Francisco', 'to 1955, then from coins dated 1964 or 1965, and on proofs'],
  ['O', 'New Orleans', 'silver dollars, 1879 to 1904'],
  ['CC', 'Carson City', `${h.MARKS.ccFrom} to ${h.MARKS.ccTo}`],
  ['W', 'West Point', `quarters dated ${h.MARKS.wQuarters} and later issues`],
], `From the ${h.src('mintMarks', 'US Mint page on mint marks')} and the years with a figure in the ${h.src('mintBook', 'Bureau of the Mint tables')}.`, ['l', 'l', 'l'])}
<p>The New Orleans and Carson City rows reflect what this site’s tables hold, which is silver dollars for those two mints; both also struck smaller silver coins in the nineteenth century, outside the tables transcribed here. San Francisco disappears from the cent tables after 1955 and returns with coins dated 1964, which the book counts in a separate table of coins by date.</p>

<h2>Where to look on the coin</h2>
<p>Since ${h.MARKS.obverseFrom}, the mark is on the obverse, the side with the portrait, usually near the date. Before that it moved from design to design: on the reverse of most silver coins, under the date on Lincoln cents, and above Monticello on the wartime nickels of 1942 to 1945, where a large P appeared for the first time. The ${h.src('anatomy', 'Mint’s anatomy of a coin')} names each part of the coin if the terms are unfamiliar.</p>
<p>Use a magnifier and light from the side. A D and an S can look alike when worn, and the letter can be filled with grime. Never pick at it with a pin: a scratch is permanent.</p>

<h2>Why the letter changes the count</h2>
<p>Each mint had its own presses and its own orders, so the numbers differ widely. In 1931, cents were struck at ${h.mint('cent', 1931, 'P')} pieces in Philadelphia, ${h.mint('cent', 1931, 'D')} in Denver and only ${h.mint('cent', 1931, 'S')} in San Francisco. In 1893, silver dollars from Carson City numbered ${h.mint('dollar', 1893, 'CC')} and from San Francisco ${h.mint('dollar', 1893, 'S')}. The tool below lists every denomination of a given year with its total, as a first step before reading the per-mint figure.</p>
<!--tool:mini:coinyear-->
<p>For the per-mint figure of a single coin, the ${h.a('coin-value-lookup', 'coin value lookup')} reads the line for that date and letter.</p>

<h2>Years without any mint mark</h2>
<p>Coins dated ${h.MARKS.noMarkFrom} to ${h.MARKS.noMarkTo} carry no mint mark at all, as the Mint’s page on marks records, although Denver and San Francisco struck coins in those years. A 1966 quarter with no letter can therefore come from any mint, and the tables count each mint separately while the coins themselves look identical. Marks returned with the date ${h.MARKS.obverseFrom}, moved to the obverse.</p>
<p>Two later exceptions are worth knowing. In 1975, San Francisco struck dimes for circulation without a letter, which the lookup notes. And cents dated ${h.MARKS.pCent} carry a P, for the 225th anniversary of the Mint, as the ${h.src('pennyFaq', 'Mint’s penny FAQs')} recall; the ${h.a('penny-value', 'penny value page')} covers the other cent details.</p>
<p>A letter that should not exist for a date, such as a mint mark on a coin dated 1966, is a warning sign of an altered or counterfeit coin rather than a discovery.</p>
`,
  },
});
