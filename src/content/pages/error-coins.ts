import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'error-coins',
  group: 'tools',
  order: 70,
  tool: { kind: 'mini:variety' },
  mini: { kind: 'mini:steel1943' },
  related: ['1972-double-die-penny', '1943-steel-penny-value', 'coin-grading', 'rare-pennies-worth-money', 'home'],
  sources: ['anatomy', 'mintBook', 'stateQuarters', 'mintSpecs'],
  en: {
    slug: 'error-coins',
    nav: 'Error coins',
    card: 'Nine well-known varieties, from the 1943 copper cent to the Wisconsin extra leaf: what to check on your coin and the size of the issue it hides in.',
    title: 'Error Coins Worth Checking: Known Varieties and Signs',
    description: 'Error coins worth a closer look: 1943 copper cent, doubled dies of 1955 and 1972, 1922 no D, three-legged Buffalo, with what to check and each issue size.',
    h1: 'Error coins: which varieties to look for and how to check',
    intro: 'Pick a known variety. The tool tells you what to look for on the coin and how many coins of the whole issue were struck, since the Mint does not count errors apart.',
    resume: (h) => `An error coin is a coin that left the Mint different from the design, through a fault in the die, the blank or the striking. Most errors are minor and common, but a handful of varieties are famous enough that collectors search change for them. The Mint itself acknowledges the best known: its ${h.src('anatomy', 'anatomy of a coin page')} notes that a few 1943 cents were struck in copper by accident, when that year’s cents were made of zinc-coated steel. Doubled dies, such as the cents of 1955 and 1972, show every letter of the date and motto twice. Others come from worn or filled dies, like the 1922 cent with no D. The Mint does not publish how many of any variety exist, so this page gives the figure for the whole issue the variety hides in, read in the ${h.src('mintBook', 'Bureau of the Mint tables')}, and says plainly what to check. Only an authentication service can confirm a find.`,
    faqs: (h) => [
      { q: 'How can I tell a doubled die from ordinary machine doubling?', a: 'A true doubled die shows two complete, rounded outlines of the letters, because the die itself carried the doubled design. Machine doubling, which is far more common and adds little value, looks like a flat shelf or shadow beside the letters, caused by a die that bounced during the strike. Compare with photographs from an authentication service before getting excited.' },
      { q: 'Is a 1943 penny that does not stick to a magnet always copper?', a: `No. Many are copper-plated steel that still sticks, or 1948 cents with an altered date, or plated zinc. A genuine 1943 bronze cent does not stick and weighs about ${h.grams('bronzeCent')} grams, against ${h.grams('steelCent')} grams for steel. If both tests point to copper, look at the date closely for alteration and send it to an authentication service.` },
      { q: 'Are off-center and clipped coins worth more than face value?', a: 'Often a little, sometimes more, depending on how dramatic the error is and on the coin. They come from a blank fed wrongly into the press or punched from the edge of a strip. Because no official source publishes their prices, this site gives none; the honest guide is several independent offers after authentication.' },
      { q: 'Can error coins come out of a modern bank roll?', a: 'Yes, though rarely. The Mint inspects production, but some faulty pieces still leave the facility in rolls and bags. A modern clad coin with an error is worth only what collectors pay for it, since its metal is worth little. Keep any oddity aside and compare it with known varieties before spending it.' },
    ],
    body: (h) => {
      const wi = h.states.find((s) => s.state === 'Wisconsin');
      return `
<h2>Known varieties and the issues they hide in</h2>
${h.table(['Variety', 'What to check', 'Whole issue struck'], [
  ['1943 copper cent', 'not magnetic, about 3.1 g', h.mint('cent', 1943, 'P')],
  ['1944 steel cent', 'sticks to a magnet', h.mint('cent', 1944, 'P')],
  ['1955 doubled die cent', 'strong doubling of date and LIBERTY, no mint mark', h.mint('cent', 1955, 'P')],
  ['1972 doubled die cent', 'doubling of LIBERTY, motto and date, no mint mark', h.mint('cent', 1972, 'P')],
  ['1909-S VDB cent', 'S under the date, VDB on the reverse', `${h.mint('cent', 1909, 'S')} (all 1909-S cents)`],
  ['1922 cent, no D', 'no mint mark on a 1922 cent', `${h.mint('cent', 1922, 'D')} (Denver)`],
  ['1937-D three-legged Buffalo', 'bison missing a front leg', h.mint('nickel', 1937, 'D')],
  ['1942/1 Mercury dime', 'a 1 under the final 2', h.mint('dime', 1942, 'P')],
  ['2004-D Wisconsin extra leaf', 'extra leaf left of the corn', wi ? h.num(wi.D) : 'no figure'],
], `Issue sizes from the ${h.src('mintBook', 'Bureau of the Mint tables')} and, for Wisconsin, the ${h.src('stateQuarters', 'Mint’s state quarter production pages')} (archived copies). The variety itself is a small, uncounted part of each issue.`, ['l', 'l', 'r'])}
<p>The tool at the top of the page shows the same checks one variety at a time, with the mintage band of the host issue. A variety from a large issue is still rare, because only a few dies were affected; the figure simply shows how many ordinary coins you will sort through to find one.</p>

<h2>The 1943 cent: a test anyone can do</h2>
<p>Cents dated 1943 were struck in zinc-coated steel, ${h.grams('steelCent')} grams, to save copper during the war. The few struck on leftover bronze blanks of ${h.grams('bronzeCent')} grams are the best-known US error, and copies are common. A magnet and a kitchen scale reading to a hundredth of a gram eliminate most of them in a minute. The tool below runs that test.</p>
<!--tool:mini:steel1943-->
<p>The reverse error exists for 1944: a few cents struck on steel blanks left over from 1943. A magnet finds those too, since a normal 1944 cent is bronze and is not attracted.</p>

<h2>Kinds of errors you may meet</h2>
<ul>
<li><strong>Die varieties</strong>: the die itself was different, so every coin it struck carries the feature. Doubled dies, overdates such as 1942/1 and missing details belong here.</li>
<li><strong>Planchet errors</strong>: the blank was wrong. Wrong metal, as in 1943 and 1944, clipped blanks with a curved bite, and laminations where a layer peels.</li>
<li><strong>Striking errors</strong>: the press misbehaved. Off-center strikes, double strikes and brockages, where a struck coin pressed its image into the next one.</li>
</ul>
<p>Damage after the coin left the Mint is not an error: a coin squeezed in a vise, plated, cut or worn on a conveyor has no collector interest. A coin that looks too strange to be real often is just that.</p>

<h2>What to do with a suspected error</h2>
<p>Stop handling it, store it apart, and do not clean it. Compare it with the descriptions above and with the ${h.a('coin-grading', 'grading guide')} to judge its condition. Weigh it against the ${h.src('mintSpecs', 'Mint’s published specifications')} where relevant. Only then consider an authentication service, and weigh its fee against what the coin could be worth. No dealer, auction or forum figure is quoted on this site, because no official source publishes one.</p>
`;
    },
  },
});
