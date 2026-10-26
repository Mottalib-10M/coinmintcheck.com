import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'coin-value-lookup',
  group: 'tools',
  order: 20,
  tool: { kind: 'coin', props: { denom: 'dime', year: 1945, mint: 'S' } },
  mini: { kind: 'mini:coinyear' },
  related: ['mint-marks', 'silver-coin-years', 'melt-value-calculator', 'coin-grading', 'home'],
  sources: ['mintBook', 'stateQuarters', 'modernProduction', 'mintMarks', 'mintSpecs'],
  en: {
    slug: 'coin-value-lookup',
    nav: 'Coin value lookup',
    card: 'Denomination, date and mint letter in; number struck, metal, silver content and melt value out, for any year with an official figure.',
    title: 'Coin Value Lookup by Year and Mint Mark, Any US Coin',
    description: 'Coin value lookup by date and mint mark: how many of your coin were struck, its alloy, silver content and metal value, from the official Mint production tables.',
    h1: 'Coin value lookup: year and mint mark to mintage and metal',
    intro: 'Pick the kind of coin, type the date and choose the letter you see near it. The lookup reads the Mint’s own production figure for that year and mint and prices the metal inside.',
    resume: (h) => `A coin’s value starts with two small details printed on it: the date and the mint mark, the letter that tells which Mint facility struck it. Together with the denomination, they point to one line in the Mint’s production tables, and that line says whether the coin is one of millions or one of a few hundred thousand. The lookup above reads those tables: the ${h.src('mintBook', 'Bureau of the Mint’s figures for 1878 to 1980')}, the Mint’s state quarter pages for 1999 to 2008 and its production reports for 2010 to 2012 and 2016 to 2023. For a 1945 dime from San Francisco it returns ${h.mint('dime', 1945, 'S')} pieces, against ${h.mint('dime', 1945, 'P')} at Philadelphia the same year. It then gives the alloy, the silver content and the metal value at ${h.silver} an ounce of silver, read on ${h.priceDate}. It does not quote a collector price, because no free official source publishes one.`,
    faqs: (h) => [
      { q: 'Why does the coin value lookup show no figure for some years?', a: 'The tables we hold cover 1878 to 1980 from the Bureau of the Mint book, 1999 to 2008 for state quarters, and 2010 to 2012 and 2016 to 2023 from the Mint’s production reports. For the other recent years we found no official per-mint table we could read in full, so the lookup says so instead of filling the gap with an estimate.' },
      { q: 'Does a mintage figure in the lookup count proof coins?', a: 'For most years before 1965 the figures count all pieces made in the calendar year. From 1965, San Francisco figures include proof coins made for collector sets, and the lookup adds a note. Figures from the modern production reports count circulating coins only, without proofs or uncirculated sets, and are rounded by the Mint to the nearest ten thousand.' },
      { q: 'Is a coin from a low-mintage year automatically valuable?', a: 'No. A low figure means fewer were made, but price depends on how many survive, in what condition, and how many people collect that series. Some low-mintage dates are common in collections because they were saved. Treat a very low or low band as a reason to look closer, then compare condition and ask an authentication service.' },
      { q: 'What if my coin has a letter the lookup does not list for that year?', a: `Check the letter first with a magnifier, since a worn D and a worn S can look alike. Then compare with the mint marks guide. A letter that never existed for that date can mean an altered or counterfeit coin. Coins dated ${h.MARKS.noMarkFrom} to ${h.MARKS.noMarkTo} have no letter at all, whichever mint struck them.` },
    ],
    body: (h) => `
<h2>What to read on the coin</h2>
<p>Three details are enough. The denomination is written on the coin, from ONE CENT to ONE DOLLAR. The date sits on the front of every circulating coin. The mint mark is a single letter: D for Denver, S for San Francisco, P for Philadelphia when it appears, O for New Orleans and CC for Carson City on older silver, and W for West Point on a few recent issues, as the ${h.src('mintMarks', 'Mint’s page on mint marks')} explains. Philadelphia left its coins unmarked for most of their history; the ${h.a('mint-marks', 'mint marks guide')} lists the exceptions year by year.</p>
<p>Look at the coin under a strong light and a magnifier. A letter can be worn almost flat on a coin that circulated for decades, and dirt in the recess can hide it. Do not scrub or polish the coin to read it: cleaning harms a coin that might have turned out scarce.</p>

<h2>What the lookup returns</h2>
<ul>
<li><strong>Design</strong>: the series struck that year, with a link to its page. In years when the design changed, both are named, because the Mint counted coins by calendar year.</li>
<li><strong>Struck at this mint</strong>: the number of pieces from the official table, with notes where the figure mixes designs or includes proofs.</li>
<li><strong>Mintage band</strong>: very low under one million, low up to five million, moderate up to twenty million, high up to two hundred million, very high above. These bands are this site’s reading aid, explained on the method page.</li>
<li><strong>Metal</strong>: the alloy and weight, with a choice where two metals were used the same year, as for 1943 and 1982 cents, 1942 nickels and 1976 quarters from San Francisco.</li>
<li><strong>Melt value</strong>: the metal at the price of the moment.</li>
</ul>
<p>The gaps between mints are often wider than people expect. In 1932, Denver struck ${h.mint('quarter', 1932, 'D')} quarters and San Francisco ${h.mint('quarter', 1932, 'S')}, against ${h.mint('quarter', 1932, 'P')} at Philadelphia. In 1950, the dime figures were ${h.mint('dime', 1950, 'P')} at Philadelphia, ${h.mint('dime', 1950, 'D')} at Denver and ${h.mint('dime', 1950, 'S')} at San Francisco. The same date can therefore be ordinary from one mint and scarce from another.</p>

<h2>Every coin of one year at a glance</h2>
<p>When you hold a handful of coins with the same date, the tool below lists every denomination for that year: the total struck at all mints and the metal value of one coin. It is a quick way to see that a 1964 dime, quarter and half are all 90% silver, while a 1965 dime and quarter hold none and a 1965 half holds 40%.</p>
<!--tool:mini:coinyear-->
<p>Totals add the mints together. For the per-mint figure, which is the one that matters for scarcity, use the main lookup at the top of the page.</p>

<h2>From a figure to a decision</h2>
<p>If the coin is common and silver, its value is close to its metal: the ${h.a('melt-value-calculator', 'melt value calculator')} gives that figure for any quantity. If it is common and not silver, it is worth its face value, unless it shows an error. If the band is low or very low, or the coin looks unworn, keep it as it is, read the ${h.a('coin-grading', 'grading guide')} to judge its condition, and only then consider an authentication service, comparing the fee with what grading could change.</p>
<p>Figures come from official publications, transcribed and checked against the printed totals, and each page cites its source. Where a table rounds or mixes designs, the lookup says it next to the number.</p>
`,
  },
});
