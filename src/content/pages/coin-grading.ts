import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'coin-grading',
  group: 'tools',
  order: 60,
  tool: { kind: 'quiz' },
  mini: { kind: 'mini:grading' },
  related: ['coin-value-lookup', 'error-coins', 'mint-marks', 'rare-pennies-worth-money', 'home'],
  sources: ['anatomy', 'mintBook', 'mintMarks'],
  en: {
    slug: 'coin-grading',
    nav: 'Coin grading guide',
    card: 'A ten-question quiz on wear, luster, cleaning and handling, and a tool that checks whether paying for grading makes sense.',
    title: 'Coin Grading Guide and Quiz: Judge Wear Before You Pay',
    description: 'Coin grading guide with a quiz: where coins wear first, what luster and contact marks mean, why cleaning ruins value, and when a grading fee is worth paying.',
    h1: 'Coin grading: learn to judge condition with a quiz',
    intro: 'Answer the ten questions to learn what a grader looks at. Your best score stays in this browser only; nothing is sent.',
    resume: (h) => `Grading is the judgment of a coin’s condition: how much detail it has lost to wear, how much original shine is left, and how many marks and scratches it carries. Two coins of the same date and mint can differ in value many times over because of condition alone, which is why collectors pay attention to it and why private services sell an opinion sealed in a plastic holder. You do not need a service to make a first judgment. Wear starts on the highest points of the design, such as the cheek and hair of a portrait, and a coin that has never circulated keeps an unbroken luster that moves when you tilt it. Cleaning leaves fine lines and removes that surface for good. The quiz above trains those reflexes in ten questions written by this site. The small tool below then compares a grading fee with the difference grading might make, using your own figures, before you decide to send a coin anywhere.`,
    faqs: (h) => [
      { q: 'Can I grade a coin myself without a service?', a: 'You can judge it roughly, and that is enough for most coins. Look at the high points under a lamp with a magnifier, tilt the coin to see the luster, and compare both faces. A common date in worn condition does not need a service at all. A professional opinion matters only when the date is scarce or the coin looks unworn, and the value at stake exceeds the fee.' },
      { q: 'Should I clean an old coin before having it graded?', a: 'No. Cleaning, rubbing, dipping or polishing removes the original surface and leaves hairlines that a trained eye spots at once. Graders mark such coins down or describe them as cleaned, and collectors avoid them. Leave dirt and toning as they are. If a coin is sticky or wet, let it dry on a soft cloth and handle it by the edge.' },
      { q: 'What makes a grading fee worth paying?', a: 'Only a clear gap between what the coin is worth raw and what it would be worth graded, larger than the fee, postage and insurance together. The tool on this page does that comparison with your own estimates. For a common coin worth its metal, the fee usually costs more than grading could add, whatever the condition.' },
    ],
    body: (h) => `
<h2>What a grader looks at</h2>
<p>Every judgment of condition comes back to the same handful of points.</p>
<ul>
<li><strong>Wear on the high points.</strong> The parts of the design that stand highest touch fingers and other coins first. On a portrait that is the cheekbone, the hair above the ear and the jaw; on a reverse, the top of a wing, a dome or a wheat stalk. The ${h.src('anatomy', 'Mint’s anatomy of a coin')} names the parts of a coin, from the field to the rim.</li>
<li><strong>Luster.</strong> A freshly struck coin reflects light in a soft, moving sheen that comes from the metal flowing under the die. Circulation and cleaning break it into dull patches.</li>
<li><strong>Marks.</strong> Even coins that never circulated show small nicks from contact with other coins in bins and bags. Fewer and smaller marks mean a better grade.</li>
<li><strong>Strike.</strong> Some coins left the press with soft details, which is not wear. Telling the two apart takes practice, and the quiz shows the difference.</li>
<li><strong>Eye appeal.</strong> Even color and the absence of spots or scratches in prominent places.</li>
</ul>

<h2>Handling a coin that might matter</h2>
<p>Hold a coin by its edge between thumb and finger, over a towel or a padded tray. Skin oils leave fingerprints that etch into copper over time, and a coin dropped on a hard floor picks up a rim nick. Store it in an inert holder or a paper envelope, never loose in a jar with other coins. These habits cost nothing and protect the one coin in a hundred that turns out to be worth keeping.</p>
<p>The worst thing to do to a coin is to make it look new. Silver polish, baking soda, vinegar and erasers all leave the surface scratched or etched. A coin that looks naturally old is worth more than the same coin made shiny.</p>

<h2>When grading is worth the money</h2>
<p>A graded coin is easier to sell at a distance, because the buyer trusts the holder more than a photograph. That benefit has a price: the service fee, two-way insured postage and weeks of waiting. It pays only for coins whose value depends heavily on condition, typically scarce dates and coins that never circulated. The tool below compares the fee with the value you expect before and after grading, using your own estimates. This site does not publish those values, because no free official source does.</p>
<!--tool:mini:grading-->
<p>Before any grading decision, check how many coins of that date and mint were struck in the ${h.a('coin-value-lookup', 'coin value lookup')}, which reads the ${h.src('mintBook', 'Bureau of the Mint tables')}. A coin from an issue of hundreds of millions rarely justifies a fee unless it shows an error, and the ${h.a('error-coins', 'error coins guide')} lists the known ones.</p>

<h2>Proofs, uncirculated sets and circulated coins</h2>
<p>Coins from collector sets were never meant to circulate. A proof shows mirror-like fields and frosted design; an uncirculated set coin looks like a new circulating coin. Neither should be taken out of its original packaging if you want to keep its condition. Coins found in change, on the other hand, have almost always circulated, and their grade is a matter of how much they wore, not whether they wore. Many proofs carry an S, the ${h.src('mintMarks', 'mint mark')} of San Francisco, and the San Francisco figures in the Mint tables from 1965 include coins made for those sets.</p>
`,
  },
});
