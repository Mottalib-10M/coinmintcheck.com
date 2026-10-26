import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'state-quarters-value',
  group: 'quarters-halves',
  order: 20,
  tool: { kind: 'mini:statequarter' },
  mini: { kind: 'mini:face' },
  related: ['rare-quarters-worth-money', 'bicentennial-quarter-value', 'error-coins', 'mint-marks', 'home'],
  sources: ['stateQuarters', 'mintSpecs', 'mintMarks'],
  en: {
    slug: 'state-quarters-value',
    nav: 'State quarters value',
    card: 'The 50 state quarters of 1999 to 2008: how many Denver and Philadelphia struck for each state, and which ones are the least common.',
    title: 'State Quarters Value: Mintage of All 50 State Designs',
    description: 'State quarters value: how many Denver and Philadelphia struck for each of the 50 designs of 1999 to 2008, which states are least common and the metal value.',
    h1: 'State quarters value: how many were made of mine?',
    intro: 'Pick the state on the back of your quarter: the tool gives the number struck at Denver and Philadelphia, the year of issue and the metal value.',
    resume: (h) => {
      const s = [...h.states].sort((a, b) => a.D + a.P - (b.D + b.P));
      const lo = s[0], hi = s[s.length - 1];
      const all = h.states.reduce((t, x) => t + x.D + x.P, 0);
      return `A state quarter found in change is worth twenty-five cents in almost every case, because none of the fifty designs is scarce. The Mint issued five states a year from 1999 to 2008 and struck ${h.num(all)} of them in total for circulation at Denver and Philadelphia, according to its production pages. The least common state, ${lo.state} (${lo.year}), still counts ${h.num(lo.D + lo.P)} coins; the most common, ${hi.state} (${hi.year}), counts ${h.num(hi.D + hi.P)}. Every one is a copper-nickel clad coin of ${h.grams('cladQuarter')} grams, holding about ${h.meltOf('cladQuarter')} of metal at the prices read on ${h.priceDate}. What can make one worth more is a minting error or a coin from a collector set, such as the San Francisco proofs and silver proofs, which do not appear in these circulation figures. The tool above gives the figures for any state.`;
    },
    faqs: (h) => [
      { q: 'Which state quarter had the smallest mintage?', a: (() => { const s = [...h.states].sort((a, b) => a.D + a.P - (b.D + b.P)); return `${s[0].state}, issued in ${s[0].year}, with ${h.num(s[0].D + s[0].P)} coins for circulation, followed by ${s[1].state} and ${s[2].state}. Even that smallest figure runs to hundreds of millions, so none of the designs is rare as such. A low figure only matters for a coin in perfect condition.`; })() },
      { q: 'Do state quarters have a mint mark?', a: 'Yes, on the front, at the right of Washington’s ponytail. A P means Philadelphia and a D means Denver, the two mints that struck them for circulation. An S marks a proof made in San Francisco for collector sets, in copper-nickel or in silver; those coins were never released into change.' },
      { q: 'Are the 2009 DC and territories quarters part of the series?', a: 'They followed it. In 2009 the Mint struck six more quarters for the District of Columbia, Puerto Rico, Guam, American Samoa, the US Virgin Islands and the Northern Mariana Islands. They are copper-nickel clad like the states and are not counted in the fifty-state figures shown on this page.' },
      { q: 'Is a full set of fifty state quarters worth more than face value?', a: `As circulated coins, not much more than the ${h.money(12.5)} they add up to, since each design was struck by the hundreds of millions. A set has value as a keepsake and a history lesson. Unworn coins from Mint sets and proofs are a different market, which this site does not price.` },
    ],
    body: (h) => {
      const rows = [...h.states].sort((a, b) => a.D + a.P - (b.D + b.P));
      return `
<h2>Ten years, fifty designs</h2>
<p>From 1999 to 2008 the Mint replaced the eagle on the back of the quarter with a design for each state, five a year, starting with Delaware and ending with Hawaii. The coins kept the clad metal of every quarter since 1965: copper-nickel outer layers on a copper core, ${h.grams('cladQuarter')} grams, as the ${h.src('mintSpecs', 'Mint’s coin specifications')} list. The ${h.src('stateQuarters', 'Mint’s production pages')}, read on archived copies, give the number struck at each mint for each state.</p>

<h2>The ten least common state quarters</h2>
<p>The figures below rank the states by total coins struck for circulation. The difference between the least and the most common is more than a factor of three, and the table shows how much smaller the issues of the later years of the program were than those of 1999 and 2000.</p>
${h.table(['State', 'Year', 'Denver', 'Philadelphia', 'Total'], rows.slice(0, 10).map((s) => [s.state, String(s.year), h.num(s.D), h.num(s.P), h.num(s.D + s.P)]), `Circulating production from the ${h.src('stateQuarters', 'US Mint production pages')}; proofs not included.`, ['l', 'l', 'r', 'r', 'r'])}
<p>At the other end, ${rows[rows.length - 1].state} reached ${h.num(rows[rows.length - 1].D + rows[rows.length - 1].P)} coins. None of these numbers makes a state quarter scarce in the sense used for older coins on this site, where a low issue is under a few million. They tell you which designs you will see less often in change, nothing more.</p>

<h2>What can make one worth more than face value</h2>
<p>Errors are the usual reason. The best known concern the 2004 Wisconsin quarter from Denver, where some coins show an extra leaf on the ear of corn; the ${h.a('error-coins', 'error coins guide')} describes what to look for and why only an authentication service can confirm it. Coins from San Francisco with an S, made only for proof sets, are the other: they never circulated, so one found in change was taken out of its set.</p>
<p>The metal will not help. A clad quarter holds about ${h.meltOf('cladQuarter')} of copper and nickel at today’s prices, a fraction of its face value. The tool below compares face and metal value for any denomination and year, which makes the contrast with the silver quarters of 1964 and earlier easy to see.</p>
<!--tool:mini:face-->

<h2>Reading your quarter</h2>
<p>The state name and the year of issue are on the back, above and below the design. The mint mark is on the front, as the ${h.src('mintMarks', 'Mint’s page on mint marks')} explains, to the right of the ribbon in Washington’s hair. With the state selected in the tool at the top of the page, you get the Denver and Philadelphia figures and the year. For quarters of any year, the ${h.a('home', 'coin value checker')} covers the whole denomination.</p>
<p>A last word on condition. A coin pulled from change after years in circulation shows wear on Washington’s cheek and on the high points of the state design, and the figures above count every coin struck, worn or not. Keep yours for the pleasure of the set, and look for errors rather than dates.</p>
`;
    },
  },
});
