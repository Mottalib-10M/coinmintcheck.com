import { definePage } from '../../lib/guide-types';

export default definePage({
  id: '1972-double-die-penny',
  group: 'pennies',
  order: 70,
  tool: { kind: 'mini:variety' },
  mini: { kind: 'mini:memorial' },
  related: ['rare-pennies-worth-money', 'error-coins', 'lincoln-penny-value', 'coin-grading'],
  sources: ['mintBook', 'mintMarks', 'pennyFaq', 'cfr82'],
  en: {
    slug: '1972-double-die-penny',
    nav: '1972 doubled die penny',
    card: 'What a true 1972 doubled die cent shows, how it differs from machine doubling, and the size of the issue it hides in.',
    title: '1972 Double Die Penny: How to Spot the Doubled Die Cent',
    description: '1972 double die penny: where the doubling shows on a real one, how to tell it from common machine doubling, and how many 1972 cents it hides among in all.',
    h1: '1972 double die penny: is mine the real one?',
    intro: 'Pick the variety you think you have: the tool says what to look for and how many coins of that issue were struck.',
    resume: (h) => `The 1972 doubled die is a Lincoln cent struck at Philadelphia, so it carries no mint mark, from a die that bore a doubled image. Every coin from that die shows LIBERTY, IN GOD WE TRUST and the date with two distinct, rounded outlines, offset from each other. It hides among ${h.mint('cent', 1972, 'P')} cents struck at Philadelphia in 1972, according to the ${h.src('mintBook', 'Bureau of the Mint tables')}, and the Mint publishes no separate count of the variety, so any figure you read elsewhere is an estimate by collectors, not an official number. Most cents that look doubled are something else: machine doubling, a flat shelf-like shadow caused by a loose die bouncing on the coin, which is common and adds nothing. A 1972 cent with a D or an S under the date cannot be this variety. The tool at the top of this page lists what to check; only an authentication service can confirm one.`,
    faqs: (h) => [
      { q: 'Can a 1972-D or 1972-S cent be the doubled die?', a: `No. The known 1972 doubled die cent comes from a Philadelphia die, and Philadelphia put no letter on its cents that year. A cent with a D under the date comes from Denver, which struck ${h.mint('cent', 1972, 'D')} cents in 1972, and one with an S from San Francisco. Those can show other doubling, but not this variety.` },
      { q: 'What does machine doubling look like on a 1972 cent?', a: 'Flat and stepped. The second image looks like a shelf or a thin shadow pressed into the field, usually on one side of each letter, with sharp square edges. It comes from a die that moved slightly while striking. On a true doubled die the second outline is raised and rounded like the main letter, because it was part of the die itself.' },
      { q: 'Is the 1972 doubled die cent copper?', a: `Yes, like every cent dated 1981 or earlier it is the bronze alloy of 95% copper, weighing ${h.grams('bronzeCent')} grams. Its metal is worth about ${h.meltOf('bronzeCent')} at the prices read on ${h.priceDate}, the same as any other 1972 cent. What a collector values is the doubling and the condition, not the metal, which cannot legally be melted anyway.` },
    ],
    body: (h) => `
<h2>Where the doubling shows</h2>
<p>Look at the front of the coin under a magnifier of at least five times, in a light coming from the side. On the variety, the strongest doubling appears on the letters of LIBERTY behind Lincoln’s head, on IN GOD WE TRUST above it and on the four digits of the date. Each letter shows a second, slightly offset copy of itself with its own rounded edges, as if the coin had been struck twice in slightly different places. The portrait itself shows little.</p>
<p>The back of the coin, with the Lincoln Memorial, is ordinary. If you see doubling only on the back, or only on one letter, you are probably looking at something else. The variety tool at the top of this page shows the same checklist for the 1972 cent and for the other known varieties, with the number struck in each host issue.</p>
<p>Rounded, raised and separate: those three words describe a doubled die. Flat, stepped and shadow-like describe machine doubling. Damage, such as a scratch beside a letter, shows neither pattern and is the most common false alarm of all.</p>

<h2>Why the Mint cannot tell you how many exist</h2>
<p>The Mint counts coins by mint and year, not by die. The ${h.src('mintBook', 'Bureau of the Mint tables')} give one figure for Philadelphia cents in 1972 and one for Denver, and no publication of the Mint separates the coins of a faulty die from the rest. Any number of known pieces you see quoted comes from collectors and authentication services counting what has been submitted to them. This site does not repeat such estimates as fact.</p>
${h.table(['Mint', 'Mark', 'Cents struck in 1972'], [['Philadelphia', 'none', h.mint('cent', 1972, 'P')], ['Denver', 'D', h.mint('cent', 1972, 'D')], ['San Francisco', 'S', h.mint('cent', 1972, 'S')]], 'Bureau of the Mint tables, calendar year 1972. The San Francisco figure includes proof coins made for collector sets.', ['l', 'l', 'r'])}
<p>What the table does tell you is the scale of the search: billions of 1972 cents without a mint mark were made, so even a variety of several thousand pieces would be a tiny share of them. Most people who check a jar of 1972 cents find none, and that is the expected result.</p>

<h2>Imitations and altered coins</h2>
<p>Because the variety is well known, coins with doubling added or exaggerated after striking also circulate. Warning signs are a date or letters that look smeared or tooled, doubling that appears on the whole coin evenly, a surface that looks cast, grainy or soft, and an unusual weight. A genuine 1972 cent weighs about ${h.grams('bronzeCent')} grams like any bronze cent; a cast copy is often lighter or heavier.</p>
<p>If your coin passes your own checks, an authentication service is the next step, and the ${h.a('coin-grading', 'grading guide')} explains what it will judge. Do not clean the coin first: cleaning damages the surface and the edges of the doubling, which is exactly what the expert needs to see.</p>

<h2>The rest of the 1972 cents</h2>
<p>An ordinary 1972 cent is a copper Lincoln Memorial cent from a year in which Philadelphia alone struck billions, and the small tool below shows its number struck and metal for any year from 1959 on. It holds about ${h.meltOf('bronzeCent')} of copper alloy, and the ${h.src('cfr82', 'rules in 31 CFR Part 82')} forbid melting it. For the other doubled dies and press errors, see the ${h.a('error-coins', 'error coins guide')}; for the cents that are scarce by number struck, the ${h.a('rare-pennies-worth-money', 'rare pennies ranking')}.</p>
`,
  },
});
