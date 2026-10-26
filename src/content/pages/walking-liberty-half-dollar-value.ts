import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'walking-liberty-half-dollar-value',
  group: 'quarters-halves',
  order: 60,
  tool: { kind: 'mini:walking' },
  mini: { kind: 'mini:silveryear' },
  related: ['kennedy-half-dollar-value', 'silver-coin-years', 'junk-silver-value', 'coin-grading', 'home'],
  sources: ['mintBook', 'mintHistory', 'mintMarks', 'goldApi'],
  en: {
    slug: 'walking-liberty-half-dollar-value',
    nav: 'Walking Liberty half value',
    card: 'Walking Liberty halves 1916 to 1947 and Franklin halves 1948 to 1963: the silver in each coin and the number struck by year and mint.',
    title: 'Walking Liberty Half Dollar Value: Silver and Mintage',
    description: 'Walking Liberty half dollar value by year and mint, with the Franklin halves that followed: the silver in each 90% coin and the number struck per Mint tables.',
    h1: 'Walking Liberty half dollar value: silver and scarcity',
    intro: 'Type the date and pick the mint letter: the tool gives the number struck that year at that mint, the metal and the silver value now.',
    resume: (h) => `A Walking Liberty half dollar is a 90% silver coin of ${h.grams('silverHalf')} grams holding ${h.oz('silverHalf')} troy ounce of pure silver, about ${h.meltOf('silverHalf')} at the price read on ${h.priceDate}. That is its floor whatever its date. The design, Liberty striding toward the sun with the flag over her shoulders, was struck from 1916 to 1947 and replaced by the Franklin half in 1948, which kept the same weight and silver until 1963. What separates one coin from another is the number struck and the condition. The Bureau of the Mint tables show ${h.mint('half', 1941, 'P')} halves made at Philadelphia in 1941 and ${h.mint('half', 1916, 'S')} at San Francisco in 1916. Two counting traps apply: 1916 mixes the last Barber halves with the first Walking Liberty ones, and the silver tables count commemorative halves with the circulating coins, so this site subtracts the commemoratives listed in the Mint’s own table of commemorative coinage before showing a figure.`,
    faqs: (h) => [
      { q: 'Where is the mint mark on a Walking Liberty half?', a: 'On early 1916 and 1917 coins it is on the front, below the motto IN GOD WE TRUST. From 1917 it moved to the back, at the lower left near the rim, under the pine branch. Philadelphia halves carry no letter. A 1917 half can therefore show its D or S in either place, and both kinds were struck.' },
      { q: 'How much silver does a Walking Liberty half contain?', a: `${h.oz('silverHalf')} troy ounce. The coin weighs ${h.grams('silverHalf')} grams and is 90% silver, 10% copper, according to the Bureau of the Mint. Two of them, one dollar of face value, hold ${h.ozPerDollar} ounce, the same as ten silver dimes or four silver quarters. Franklin halves of 1948 to 1963 hold exactly the same amount.` },
      { q: 'Why does the tool say no regular half exists for some dates?', a: 'Because in some years a mint struck only commemorative halves for sale to collectors, such as Philadelphia from 1922 to 1928 or San Francisco in 1938. The Bureau of the Mint silver tables count them with the regular coins; this site subtracts them using the Mint’s own commemorative table, and a few dozen assay pieces are all that remain. A Walking Liberty half with such a date and mint would not be genuine.' },
    ],
    body: (h) => `
<h2>A 90% silver coin from 1916 to 1963</h2>
<p>The Walking Liberty half replaced the Barber half in 1916 and gave way to the Franklin half in 1948, which in turn gave way to the Kennedy half in 1964, as the ${h.src('mintHistory', 'Mint’s history of circulating coins')} recounts. Through all three designs until 1964 the half dollar kept the same alloy and weight: ${h.grams('silverHalf')} grams of 90% silver and 10% copper, recorded in the ${h.src('mintBook', 'Bureau of the Mint tables')}. Every coin of these series is therefore worth at least ${h.meltOf('silverHalf')} in silver at ${h.silver} an ounce, the price from ${h.src('goldApi', 'gold-api.com')} read on ${h.priceDate}.</p>
<p>The quick tool below tells you, for any denomination and year, whether a coin is silver and how much it holds. It is handy when a bag of old halves also contains 40% Kennedy halves or clad coins.</p>
<!--tool:mini:silveryear-->

<h2>Reading the Mint tables for half dollars</h2>
<p>The Bureau of the Mint counted pieces made in each calendar year, not coins of each design. For half dollars that has two effects. In 1916 the year total mixes Barber and Walking Liberty halves. In many years from 1918 to 1954 it also includes commemorative half dollars, struck for anniversaries and sold to collectors above face value. Those are listed apart in the same book, in its table of annual commemorative coinage, so this site subtracts them: for 1936, for instance, the Philadelphia figure loses ${h.num(h.commem('half', 1936, 'P'))} commemoratives. Where nothing remains but a few dozen assay pieces, as for Philadelphia from 1922 to 1928, Denver in 1933 or San Francisco in 1938, the tool says that no regular half of that date and mint was struck.</p>
<p>The war years show the scale of Walking Liberty production at its peak:</p>
${h.seriesTable('half', 1941, 1945, ['P', 'D', 'S'], `Half dollars struck per calendar year, from the ${h.src('mintBook', 'Bureau of the Mint, 1981')}.`)}
<p>Compare those tens of millions with the first year of the design, when San Francisco struck ${h.mint('half', 1916, 'S')} halves and Denver ${h.mint('half', 1916, 'D')}, all designs together. The early dates and the branch-mint coins of the 1910s and 1920s are where scarce Walking Liberty halves are found.</p>

<h2>Where the mint mark hides</h2>
<p>The ${h.src('mintMarks', 'Mint’s page on mint marks')} lists the D and S letters for these years. On the first Walking Liberty halves the letter sits on the front, under the motto; during 1917 it moved to the back, near the rim at the lower left. Franklin halves carry it on the back, above the Liberty Bell beam. No letter, on any of these coins, means Philadelphia.</p>

<h2>Condition comes first</h2>
<p>Liberty’s hand, her head and the lines of her skirt are the high points of the design, and they wear smooth quickly. A coin where those details remain is far less common than one where they have gone, which is why two coins of the same date can mean very different things to a collector. The ${h.a('coin-grading', 'grading guide')} explains how wear is read. This site does not publish collector prices: no official or freely licensed source gives them, so it shows the number struck and the silver instead.</p>
<p>For a lot of mixed silver coins, the ${h.a('junk-silver-value', 'junk silver page')} counts the silver by face value, and the ${h.a('kennedy-half-dollar-value', 'Kennedy half page')} covers the halves that came after.</p>
`,
  },
});
