import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'rare-pennies-worth-money',
  group: 'pennies',
  order: 60,
  tool: { kind: 'mini:rarecent' },
  mini: { kind: 'mini:variety' },
  related: ['wheat-penny-value', '1943-steel-penny-value', '1972-double-die-penny', 'error-coins', 'coin-grading'],
  sources: ['mintBook', 'anatomy', 'mintMarks', 'pennyRelease'],
  en: {
    slug: 'rare-pennies-worth-money',
    nav: 'Rare pennies',
    card: 'The Lincoln cents struck in the smallest numbers, ranked from the Mint tables, and the known varieties worth checking for.',
    title: 'Rare Pennies Worth Money: Lowest Mintages of Lincoln Cents',
    description: 'Rare pennies worth money, ranked from the Mint’s own tables: the Lincoln cents struck in the fewest numbers, the known varieties and what to check first.',
    h1: 'Rare pennies: which Lincoln cents are actually scarce?',
    intro: 'Choose a range of years: the tool ranks the Lincoln cents struck in the smallest numbers, by year and mint, from the Bureau of the Mint tables.',
    resume: (h) => `Rarity in Lincoln cents starts with a number the Mint published: how many pieces each mint struck in a year. The ${h.src('mintBook', 'Bureau of the Mint’s 1981 tables')} put the lowest figures from 1909 to 1980 at ${h.lowestList('cent', 1909, 1980, 5)}, all from the wheat period and all from branch mints. Every Lincoln cent struck after 1958 runs to hundreds of millions or billions, so a modern date is never rare by number alone. The second road to rarity is accident: the ${h.src('anatomy', 'Mint’s anatomy of a coin page')} confirms that a few 1943 cents were struck in copper by mistake, and collectors seek doubled dies and other errors that the Mint does not count. This page ranks the numbers and lists what to check for each known variety; it does not give dealer prices, because no free official source publishes them and condition changes everything.`,
    faqs: (h) => [
      { q: 'Does a low mintage always make a penny valuable?', a: 'No. The tables count coins struck, not coins that survived or their condition. A short run that was saved by collectors at the time may be easier to find than a larger run that wore out in circulation. A low number tells you a coin deserves a careful look and perhaps an expert opinion, but only demand from collectors and condition set what one would pay.' },
      { q: 'Why are the rarest Lincoln cents all from Denver or San Francisco?', a: `Because Philadelphia made by far the most cents in every year of the wheat period, never fewer than ${h.num(Math.floor(h.mintN('cent', 1932, 'P') / 1e6))} million in the tables, while the branch mints sometimes struck fewer than a million or only a few million. San Francisco stopped striking cents after ${h.MARKS.sClosedAfter}, so its short runs all fall before that year.` },
      { q: 'Is a cent with no mint mark from 1922 a rare variety?', a: `Only Denver struck cents dated 1922, ${h.mint('cent', 1922, 'D')} in the tables, so a 1922 cent without a D did not come from Philadelphia. It comes from Denver dies that were worn or filled so that the letter did not print. Collectors look for it, but a mint mark scraped off a 1922-D imitates it, so look for scratches around the date.` },
      { q: 'How rare is a 1955 cent with doubled letters?', a: `The Mint publishes no count of this variety. What the tables give is the whole Philadelphia issue it hides in, ${h.mint('cent', 1955, 'P')} cents dated 1955, which tells you how many coins there are to search. A true doubled die shows every letter of LIBERTY and the date with a clear second outline, not a flat shadow beside them.` },
    ],
    body: (h) => `
<h2>The lowest numbers, ranked</h2>
<p>The table below takes every Lincoln cent from 1909 to 1980 in the ${h.src('mintBook', 'Bureau of the Mint tables')} and keeps the ten lowest figures. San Francisco figures from 1965 onward are left out because they include proof coins made for collector sets, which never circulated and would crowd the list with coins that are easy to buy from sets.</p>
${h.lowestTable('cent', 1909, 1980, 10, 'Pieces struck in the calendar year, Bureau of the Mint tables. The 1909-S figure counts Indian Head and Lincoln cents together.')}
<p>The tool at the top of this page redoes the ranking for any range of years you choose. Try 1959 to 1980: the lowest figures are still in the hundreds of millions, which is the simplest way to see why Memorial cents are not rare by date.</p>
<p>Two features of the list are worth noticing. Denver and San Francisco dominate, because Philadelphia always struck far more. And several years appear twice, because both branch mints had small runs at the same time.</p>

<h2>Varieties the Mint did not count</h2>
<p>Some of the cents collectors want most were not separate issues at all, but coins that left the press different from their twins. The Mint counts them inside the issue they belong to. The small tool below lists the best-known ones with the detail to check and the size of the issue each hides in.</p>
<ul>
<li><strong>1943 in copper.</strong> The ${h.src('anatomy', 'Mint’s anatomy of a coin page')} confirms that a few were struck by accident. A magnet does not pick one up and it weighs about ${h.grams('bronzeCent')} grams. See the ${h.a('1943-steel-penny-value', '1943 penny page')}.</li>
<li><strong>Doubled dies of 1955 and 1972.</strong> The die itself carried a doubled image, so every coin it struck shows the letters twice, with rounded double outlines. The ${h.a('1972-double-die-penny', '1972 doubled die page')} explains what to look at.</li>
<li><strong>1909-S VDB.</strong> An S under the date and the initials VDB at the bottom of the reverse. The S already makes it one of the shortest runs in the series.</li>
<li><strong>1922 without a D.</strong> Only Denver struck cents that year, so a cent with no mark comes from a worn or filled Denver die.</li>
</ul>
<!--tool:mini:variety-->
<p>For each of these, imitations exist: plated steel cents, altered dates, added or removed mint marks. A magnifier, a magnet and a scale answer most questions at home; an authentication service answers the rest.</p>

<h2>From a number to a decision</h2>
<p>A sensible order of work is to read the date and mint mark, check the band in the ${h.a('home', 'coin value checker')}, then look at condition. A coin in a very low or low band, without holes, cleaning or corrosion, is worth showing to an expert. A coin in a high or very high band is worth its metal unless it shows one of the varieties above. The ${h.a('coin-grading', 'grading guide')} explains how wear is judged, and the ${h.a('error-coins', 'error coins guide')} covers off-center strikes, wrong blanks and other press accidents.</p>
<p>The end of circulating penny production does not change this ranking. The ${h.src('pennyRelease', 'Mint’s announcement of the last circulating cent')} estimates ${h.PENNY.inCirculationBillions} billion pennies still in circulation; the scarce ones were scarce a century ago and remain so, and the common ones remain common.</p>
`,
  },
});
