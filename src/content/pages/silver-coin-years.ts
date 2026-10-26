import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'silver-coin-years',
  group: 'tools',
  order: 40,
  tool: { kind: 'mini:silveryear' },
  mini: { kind: 'mini:silverquarter' },
  related: ['junk-silver-value', 'melt-value-calculator', 'kennedy-half-dollar-value', 'jefferson-nickel-value', 'home'],
  sources: ['mintBook', 'mintSpecs', 'usc5112', 'cfr82'],
  en: {
    slug: 'silver-coin-years',
    nav: 'Silver coin years',
    card: 'Which dates of dimes, quarters, halves, dollars and nickels contain silver, how much, and how to tell silver from clad.',
    title: 'Silver Coin Years: Which US Dimes, Quarters and Halves',
    description: 'Silver coin years for every denomination: 90% silver up to 1964, 40% Kennedy halves of 1965 to 1970, wartime nickels, and how to spot silver by edge and weight.',
    h1: 'Silver coin years: is my coin silver?',
    intro: 'Choose the coin and type its date. The tool says whether that date was struck in silver, how much pure silver it holds and what that is worth today.',
    resume: (h) => `The rule for US circulating coins is short. Dimes, quarters and half dollars dated 1964 or earlier are 90% silver and 10% copper, and so are the Morgan and Peace silver dollars. Half dollars dated 1965 to 1970 are 40% silver overall. Nickels struck from October 1, 1942 to the end of 1945 hold 35% silver and carry a large mint mark above Monticello. Every other circulating coin, including every dime and quarter dated 1965 or later, contains no silver, apart from special collector issues. The weights and alloys come from the ${h.src('mintBook', 'Bureau of the Mint’s 1981 tables')}. At ${h.silver} an ounce, the price read on ${h.priceDate}, a 90% silver quarter holds metal worth about ${h.meltOf('silverQuarter')}, a 40% half about ${h.meltOf('silverCladHalf')} and a wartime nickel about ${h.meltOf('warNickel')}. The tool above answers for any coin and date, and the edge of the coin confirms it in a second.`,
    faqs: (h) => [
      { q: 'Is a 1965 quarter silver?', a: 'No. The change to copper-nickel clad dimes and quarters took effect with coins dated 1965, so a 1965 quarter is clad, with a copper stripe visible on its edge. A silver 1965 quarter would be a rare error, struck on a leftover silver blank, and would weigh about 6.25 grams instead of 5.67. A scale reading to a hundredth of a gram settles it.' },
      { q: 'Are Kennedy half dollars after 1970 silver?', a: `Circulating ones are not. From 1971 the half dollar is copper-nickel clad like the dime and quarter, ${h.grams('cladHalf')} grams with no silver. The Mint has struck silver versions for collector sets, sold in proof and special packaging rather than released through banks. A half from a bank roll dated after 1970 is clad.` },
      { q: 'Which nickels are silver?', a: `Only the wartime nickels struck from October 1942 to 1945, when nickel was reserved for the war effort. They are 56% copper, 35% silver and 9% manganese and show a large P, D or S above the dome of Monticello on the back. Each holds ${h.oz('warNickel')} troy ounce of silver. Every other nickel is copper-nickel.` },
      { q: 'How can I check if a coin is silver without a scale?', a: 'Look at the edge. A clad coin shows a copper-colored stripe between two silver-colored layers; a 90% silver coin shows a solid silver-gray edge. Then check the date. Dropping a coin to hear its ring, or testing with chemicals, damages coins or gives unreliable results and is best avoided.' },
    ],
    body: (h) => `
<h2>The silver years, coin by coin</h2>
${h.table(['Coin', 'Silver years', 'Silver share', 'Pure silver per coin', 'Metal value today'], [
  ['Dime', '1964 and earlier', '90%', `${h.oz('silverDime')} oz`, h.meltOf('silverDime')],
  ['Quarter', '1964 and earlier', '90%', `${h.oz('silverQuarter')} oz`, h.meltOf('silverQuarter')],
  ['Half dollar', '1964 and earlier', '90%', `${h.oz('silverHalf')} oz`, h.meltOf('silverHalf')],
  ['Half dollar', '1965 to 1970', '40%', `${h.oz('silverCladHalf')} oz`, h.meltOf('silverCladHalf')],
  ['Silver dollar', 'Morgan and Peace, to 1935', '90%', `${h.oz('silverDollar')} oz`, h.meltOf('silverDollar')],
  ['Nickel', 'October 1942 to 1945', '35%', `${h.oz('warNickel')} oz`, h.meltOf('warNickel')],
], `Weights and alloys from the ${h.src('mintBook', 'Bureau of the Mint, 1981')}; silver at ${h.silver} an ounce on ${h.priceDate}.`, ['l', 'l', 'r', 'r', 'r'])}
<p>Two details catch people out. First, coins dated 1964 kept being struck in 1965 and early 1966, so the date, not the year of striking, is what matters. Second, the Eisenhower dollars struck at San Francisco for collectors from 1971 were 40% silver, while those made for circulation were copper-nickel. The tool above offers both metals where the date allows both.</p>

<h2>Why the silver disappeared</h2>
<p>The Coinage Act of 1965 replaced silver in the dime and quarter with a sandwich of copper-nickel outer layers bonded to a pure copper core, and cut the half dollar to 40% silver; the specifications still in force are set out in ${h.src('usc5112', '31 U.S.C. 5112')}. The half lost its silver from 1971. Today a clad quarter weighs ${h.grams('cladQuarter')} grams and contains about ${h.meltOf('cladQuarter')} of copper and nickel.</p>

<h2>The last silver coins were the most numerous</h2>
<p>Coins dated 1964 are the easiest silver to find, because the Mint struck them in enormous numbers and kept the date on the dies into 1966. The ${h.src('mintBook', 'Bureau of the Mint tables')} count ${h.mint('quarter', 1964, 'P')} quarters dated 1964 from Philadelphia and ${h.mint('quarter', 1964, 'D')} from Denver, and ${h.mint('half', 1964, 'P')} and ${h.mint('half', 1964, 'D')} half dollars from the same two mints. A 1964 coin is therefore silver but almost never scarce: its value is its metal unless it is in exceptional condition. Older silver coins were struck in far smaller numbers, and among them the dates worth more than their silver are found.</p>

<h2>How to tell silver from clad in hand</h2>
<ol>
<li><strong>Read the date.</strong> It settles almost every case.</li>
<li><strong>Look at the edge.</strong> A copper stripe means clad. A uniform gray edge means silver, or a 40% half whose stripe is only faintly visible.</li>
<li><strong>Weigh it.</strong> A 90% quarter weighs ${h.grams('silverQuarter')} grams against ${h.grams('cladQuarter')} for a clad one; a 90% dime ${h.grams('silverDime')} grams against ${h.grams('cladDime')}.</li>
</ol>
<p>The small tool below counts the silver in any number of 90% quarters, the most common silver coin found in old jars and drawers.</p>
<!--tool:mini:silverquarter-->

<h2>What silver content means for value</h2>
<p>Silver sets a floor. A 90% coin is worth at least its metal, and common dates in worn condition trade close to that value; the ${h.a('junk-silver-value', 'junk silver page')} explains how they are counted by face value. A scarce date, or a coin that never circulated, can be worth much more, so read the mint mark and date in the ${h.a('home', 'coin value checker')} before selling anything by weight.</p>
<p>Silver coins are not covered by the ${h.src('cfr82', 'melting and export ban of 31 CFR Part 82')}, which concerns only pennies and nickels and itself exempts the wartime silver nickels.</p>
`,
  },
});
