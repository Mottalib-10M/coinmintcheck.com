import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'peace-dollar-value',
  group: 'dollars',
  order: 20,
  tool: { kind: 'mini:peace' },
  mini: { kind: 'mini:silverdollar' },
  related: ['morgan-silver-dollar-value', 'sacagawea-dollar-value', 'junk-silver-value', 'coin-value-lookup', 'home'],
  sources: ['mintBook', 'mintMarks', 'mintHistory', 'goldApi'],
  en: {
    slug: 'peace-dollar-value',
    nav: 'Peace dollar value',
    card: 'The Peace dollar of 1921 to 1935, year by year: how many each mint struck, the lowest issues and the silver inside at today’s price.',
    title: 'Peace Dollar Value: Mintage, Silver and Scarce Dates',
    description: 'Peace dollar value by year and mint, 1921 to 1935: number struck at Philadelphia, Denver and San Francisco, the lowest issues and the silver at the live price.',
    h1: 'Peace dollar value: the number struck and the silver inside',
    intro: 'Type the date and choose the mint letter. The tool returns the Mint’s production figure for that year and mint and prices the silver at the moment you look.',
    resume: (h) => `The Peace dollar replaced the Morgan dollar at the end of 1921 and was struck until 1928, then again in 1934 and 1935, always in 90% silver. Every coin weighs ${h.grams('silverDollar')} grams and holds ${h.oz('silverDollar')} troy ounce of pure silver, worth about ${h.meltOf('silverDollar')} at ${h.silver} an ounce, the price read on ${h.priceDate}. Three mints struck it: Philadelphia with no letter, Denver with a D and San Francisco with an S. Production was heavy at the start and fell sharply after 1925. The ${h.src('mintBook', 'Bureau of the Mint tables')} count ${h.mint('dollar', 1922, 'P')} dollars at Philadelphia in 1922 but only ${h.mint('dollar', 1928, 'P')} there in 1928, the lowest figure of the series. Coins dated 1921 are a special case: the Philadelphia figure for that year mixes them with the last Morgans. The tool above reads any date and mint; this page gives no collector price, because no free official source publishes one.`,
    faqs: (h) => [
      { q: 'Which Peace dollar has the lowest mintage?', a: `The 1928 from Philadelphia, with ${h.mint('dollar', 1928, 'P')} pieces in the Bureau of the Mint tables. Next come the 1927 issues, ${h.mint('dollar', 1927, 'P')} at Philadelphia, ${h.mint('dollar', 1927, 'S')} at San Francisco and ${h.mint('dollar', 1927, 'D')} at Denver, and the 1934 Philadelphia issue of ${h.mint('dollar', 1934, 'P')}. Survival and condition, not the figure alone, decide what collectors pay.` },
      { q: 'How many Peace dollars were struck in 1921?', a: 'The tables do not separate them. They count pieces made at Philadelphia in calendar 1921, and that figure includes the Morgan dollars of the year as well as the first Peace dollars, coined from late December. Denver and San Francisco struck only Morgans in 1921. A Peace dollar dated 1921 therefore comes from a small part of the Philadelphia total.' },
      { q: 'Where is the mint mark on a Peace dollar?', a: 'On the reverse, near the bottom left, under the word ONE and close to the tip of the eagle’s wing. A D means Denver, an S San Francisco, and no letter means Philadelphia. The letter is small and wears easily, so use a magnifier with light from the side before deciding which mint struck your coin.' },
    ],
    body: (h) => `
<h2>Number struck, year by year</h2>
${h.seriesTable('dollar', 1922, 1935, ['P', 'D', 'S'], 'Pieces made in each calendar year, Bureau of the Mint, 1981. No silver dollars were struck from 1929 to 1933; a dash means that mint struck none.')}
<p>The rows show how quickly orders fell. Philadelphia, Denver and San Francisco together struck ${h.num(h.total('dollar', 1922))} silver dollars in 1922, against ${h.num(h.total('dollar', 1928))} in 1928. Denver struck none in 1924, 1925 and 1928, and none in 1935.</p>

<h2>The scarce dates</h2>
<p>The lowest figures of the series in the ${h.src('mintBook', 'Mint tables')} are ${h.lowestList('dollar', 1922, 1935, 5)}. None of them is rare in the sense of a few hundred coins: they are hundreds of thousands to a little over a million pieces. Their interest to collectors comes from how few survive in fine condition, which the tables cannot tell. For a worn coin of a common date, such as 1922 or 1923, the value is close to the silver.</p>
<p>The ${h.a('morgan-silver-dollar-value', 'Morgan dollar page')} gives the same figures for the earlier design, which includes several issues smaller than any Peace dollar.</p>

<h2>The silver in a Peace dollar</h2>
<p>The Peace dollar kept the weight and fineness of the Morgan: ${h.grams('silverDollar')} grams, 90% silver, 10% copper. The tool below counts the silver in any number of them at the price of the moment. A dollar of face value in Peace dollars holds more silver than a dollar in dimes, quarters or halves of the same era, so the ${h.a('junk-silver-value', 'junk silver')} rule of ${h.ozPerDollar} ounce per dollar does not apply to them.</p>
<!--tool:mini:silverdollar-->
<p>Silver prices change through the day. The figure in the tools comes from a public price service read by your browser, with the last price read on ${h.priceDate} if that fails.</p>

<h2>Checking a Peace dollar in hand</h2>
<p>Start with the date on the front, below Liberty’s neck, then turn the coin over and look for the letter near the eagle’s wing tip. Type both into the tool at the top of the page. Then put the coin on a scale: a genuine piece weighs close to ${h.grams('silverDollar')} grams, and a copy is usually lighter or attracted by a magnet. Leave any dark toning alone, since cleaning a silver dollar lowers what a collector will pay far more than it improves its look. If the date is one of the low issues listed above and the design still shows sharp feathers on the eagle, the ${h.a('coin-grading', 'grading guide')} explains what to look at next.</p>

<h2>After the Peace dollar</h2>
<p>No dollar coin was struck for circulation from 1936 until the Eisenhower dollar of 1971, which was copper-nickel for circulation; the ${h.src('mintHistory', 'Mint’s history of circulating coins')} traces the designs that followed, through the small Susan B. Anthony dollar of 1979 to the ${h.a('sacagawea-dollar-value', 'golden dollar')} of 2000. None of those circulating dollars contains silver. The Peace dollar was the last 90% silver dollar made for circulation in the United States, and the date and mint letter on yours are the two facts that decide whether it is worth more than its metal.</p>
`,
  },
});
