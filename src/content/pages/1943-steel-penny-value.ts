import { definePage } from '../../lib/guide-types';

export default definePage({
  id: '1943-steel-penny-value',
  group: 'pennies',
  order: 40,
  tool: { kind: 'mini:steel1943' },
  mini: { kind: 'mini:wheat' },
  related: ['wheat-penny-value', 'rare-pennies-worth-money', 'error-coins', 'penny-value'],
  sources: ['mintBook', 'anatomy', 'pennyFaq', 'cfr82'],
  en: {
    slug: '1943-steel-penny-value',
    nav: '1943 steel penny',
    card: 'The gray 1943 cent: how many each mint struck, the magnet and weight test for a copper one, and what the steel is worth.',
    title: '1943 Steel Penny Value: Magnet Test and Numbers Struck',
    description: '1943 steel penny value: how many Philadelphia, Denver and San Francisco struck, the magnet and weight test that tells steel from copper, and how to spot fakes.',
    h1: '1943 steel penny: what is it worth and is mine copper?',
    intro: 'Answer two questions about your coin: whether a magnet picks it up and, if you have a scale, what it weighs. The tool tells you which kind you hold.',
    resume: (h) => `The 1943 cent is the only Lincoln cent struck in zinc-coated steel instead of copper alloy: it weighs ${h.grams('steelCent')} grams against ${h.grams('bronzeCent')} for a bronze cent, looks gray rather than brown and sticks to a magnet. The ${h.src('mintBook', 'Bureau of the Mint tables')} count ${h.mint('cent', 1943, 'P')} struck at Philadelphia, ${h.mint('cent', 1943, 'D')} at Denver and ${h.mint('cent', 1943, 'S')} at San Francisco in 1943, about ${h.num(h.total('cent', 1943) / 1e9, 2)} billion in all, so an ordinary steel cent is common and its steel is not priced by this site. The famous exception is the copper 1943 cent: the ${h.src('anatomy', 'Mint’s anatomy of a coin page')} says a few were struck in copper by accident and are highly valuable. Because steel cents are often plated with copper to imitate one, a magnet and a scale come before any hope, and a coin that passes both still needs authentication by an expert.`,
    faqs: (h) => [
      { q: 'Why does my 1943 penny stick to a magnet?', a: `Because it is steel, which is exactly what it should be. Almost every cent dated 1943 was struck on a zinc-coated steel blank weighing ${h.grams('steelCent')} grams. A magnet picking it up confirms an ordinary 1943 cent, one of more than a billion made that year across the three mints.` },
      { q: 'My 1943 penny looks copper colored: is it the rare one?', a: `Probably not. Steel cents were often plated with copper later to look like the rare version, and some cents of other years have had their date altered to read 1943. Test it with a magnet first: copper is not attracted. Then weigh it: a genuine bronze cent weighs about ${h.grams('bronzeCent')} grams. A coin passing both tests should go to an authentication service.` },
      { q: 'Why are some 1943 steel cents rusty or black?', a: 'The zinc coating protects the steel only while it stays intact. Once it wears through in a pocket or is scratched, the steel underneath can rust and the zinc darkens. That is damage, and it lowers the appeal of the coin to a collector, but it does not change the date, the mint or the number struck.' },
    ],
    body: (h) => `
<h2>One year in steel</h2>
<p>For one year the cent changed metal completely. The ${h.src('mintBook', 'Bureau of the Mint’s 1981 tables')} list the 1943 cent as zinc-coated steel of ${h.grams('steelCent')} grams, between bronze cents of ${h.grams('bronzeCent')} grams dated 1942 and 1944. The three mints all took part, and the letter under the date tells you which one made yours.</p>
${h.table(['Mint', 'Mark under the date', 'Steel cents struck in 1943'], [['Philadelphia', 'none', h.mint('cent', 1943, 'P')], ['Denver', 'D', h.mint('cent', 1943, 'D')], ['San Francisco', 'S', h.mint('cent', 1943, 'S')], ['All three', '', h.num(h.total('cent', 1943))]], 'Bureau of the Mint, Domestic and Foreign Coins Manufactured by Mints of the United States 1793-1980.', ['l', 'l', 'r'])}
<p>None of these runs is small. The lowest of the three, at San Francisco, still passes ${h.num(Math.floor(h.mintN('cent', 1943, 'S') / 1e6))} million. An ordinary steel cent is a fine piece of history to keep, and the tool at the top of this page confirms that you hold one in two clicks.</p>

<h2>The copper 1943 cent</h2>
<p>What makes people search for this coin is a mistake. The ${h.src('anatomy', 'Mint’s anatomy of a coin page')} says that a few 1943 cents were struck in copper by accident and are highly valuable today. The Mint does not publish how many exist, and neither does this site: there is no official count, only the statement that they are few.</p>
<p>Imitations of this coin come in two kinds. The first is a steel cent plated with copper: it looks right, but a magnet still picks it up. The second is a bronze cent of another year with the last digit filed or reshaped to read 1943: it fails no magnet test, so compare the shape of the 3 with an ordinary steel cent of the same year under a magnifier, and look for tool marks around the date. A scale reading to a hundredth of a gram adds a check, because steel and bronze differ by about ${h.num(h.alloy('bronzeCent').grams - h.alloy('steelCent').grams, 2)} grams.</p>
<p>A coin that is not magnetic, weighs about ${h.grams('bronzeCent')} grams and shows a clean, unaltered date is worth showing to an authentication service. This site does not grade or authenticate coins and gives no price for one.</p>

<h2>Steel cents and the wheat series</h2>
<p>Apart from the metal, the 1943 cent is an ordinary wheat cent: same portrait, same two ears of wheat on the back, same three mints. The tool below reads the number struck for any wheat cent from 1909 to 1958, so you can compare 1943 with the years around it. In the tables, 1943 sits between ${h.num(h.total('cent', 1942))} cents struck in 1942 and ${h.num(h.total('cent', 1944))} in 1944, all mints together.</p>
<p>The reverse case also exists. The variety tool on the ${h.a('error-coins', 'error coins page')} describes a 1944 cent struck in steel, which a magnet picks up while a normal 1944 cent is bronze and is not attracted. The same two tests, magnet and scale, apply.</p>

<h2>Caring for a steel cent</h2>
<p>Keep it dry and away from fingers, which leave moisture and salts on the surface. Do not try to remove rust or dark spots with chemicals or abrasives: you would strip the zinc coating and make it worse. A small paper or inert plastic holder is enough. Like every cent, a steel cent cannot legally be melted or treated for its metal under ${h.src('cfr82', '31 CFR Part 82')}, which in any case would yield nothing but a little steel and zinc. The ${h.a('rare-pennies-worth-money', 'rare pennies page')} lists the cents that are scarce by number struck.</p>
`,
  },
});
