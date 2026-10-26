/**
 * Mini-tools of the pages (RECETTE §9.3): one subject = one calculation, always through the coin engine
 * (`lib/engine/coins.ts`), mintages.json and params-2026.json, never a second formula.
 */
import type { MiniSpec, MiniCtx } from './mini-types';
import P from '../data/params-2026.json';
import { usd, money, formatNumberL, price } from './format-l';
import {
  lookup, melt, silverOz, ozPerFaceDollar90, mintage, lowest, band, centByWeight, alloy, yearTotal, variants, seriesFor, markOnCoin,
  STATES, FACE, DENOM_LABEL, DENOMS, MINT_LABEL, type Denom, type Mint, type AlloyKey,
} from './engine/coins';

const n0 = (v: number) => formatNumberL(v);
const clamp = (x: number, a: number, b: number) => Math.max(a, Math.min(b, Math.round(x || a)));
const yn = [{ value: '0', label: 'No' }, { value: '1', label: 'Yes' }];
const priceNote = (c: MiniCtx, what: 'silver' | 'copper' | 'both' = 'silver') => {
  const s = `silver ${price(c.prices.silverOz)} per troy oz`, cu = `copper ${price(c.prices.copperLb)} per lb`;
  const t = what === 'silver' ? s : what === 'copper' ? cu : `${s}, ${cu}`;
  return `At ${t} (${c.live ? 'live' : 'last price read'}).`;
};
const mintOpts = (ms: Mint[]) => ms.map((m, i) => ({ value: String(i), label: MINT_LABEL[m] }));
const struck = (d: Denom, y: number, m: Mint) => { const r = mintage(d, y, m); return r.n != null ? `${n0(r.n)}${r.approx ? ' (rounded)' : ''}` : 'no figure in our tables'; };

/** One series: year + mint → metal value, number struck and mintage band. */
function seriesSpec(o: { denom: Denom; title: string; from: number; to: number; def: number; mints: Mint[]; defMint?: number; cta: string; ctaPage?: string; variant?: number }): () => MiniSpec {
  return () => ({
    title: o.title, cta: o.cta, ctaPage: o.ctaPage,
    inputs: [
      { id: 'y', label: 'Year on the coin', def: o.def, min: o.from, max: o.to, year: true },
      { id: 'm', label: 'Mint mark', def: o.defMint ?? 0, options: mintOpts(o.mints) },
    ],
    run: (v, c) => {
      const y = clamp(v.y, o.from, o.to);
      const m = o.mints[clamp(v.m ?? 0, 0, o.mints.length - 1)];
      const r = lookup(o.denom, y, m, o.variant ?? 0, c.prices);
      const rows: Array<[string, string]> = [['Struck at this mint', struck(o.denom, y, m)]];
      if (r.band) rows.push(['Mintage band', r.band.label]);
      rows.push(['Metal', alloy(r.alloy).label]);
      rows.push(['Mint mark on the coin', r.mark]);
      return { head: [`Metal value of one ${y} coin`, usd(r.melt.total)], rows, note: [r.mintage.notes[0], priceNote(c, r.melt.silverOz > 0 ? 'silver' : 'copper')].filter(Boolean).join(' ') };
    },
  });
}
/** A batch of one kind of coin: how many → metal value. */
function batchSpec(o: { key: AlloyKey; face: number; title: string; def: number; cta: string; ctaPage?: string; note?: string }): () => MiniSpec {
  return () => ({
    title: o.title, cta: o.cta, ctaPage: o.ctaPage,
    inputs: [{ id: 'q', label: 'How many coins', def: o.def, max: 1_000_000 }],
    run: (v, c) => {
      const q = clamp(v.q, 0, 1_000_000);
      const one = melt(o.key, c.prices);
      const rows: Array<[string, string]> = [['One coin', usd(one.total)], ['Face value', money(o.face * q)]];
      if (one.silverOz) rows.push(['Pure silver', `${formatNumberL(one.silverOz * q, 'en', 3)} troy oz`]);
      return { head: [`Melt value of ${n0(q)} coin${q === 1 ? '' : 's'}`, usd(one.total * q)], rows, note: [o.note, priceNote(c, one.silverOz ? 'silver' : 'copper')].filter(Boolean).join(' ') };
    },
  });
}
/** Lowest mintages of a denomination between two years. */
function rareSpec(o: { denom: Denom; title: string; from: number; to: number; defFrom: number; defTo: number; cta: string; ctaPage?: string; mints?: Mint[] }): () => MiniSpec {
  return () => ({
    title: o.title, cta: o.cta, ctaPage: o.ctaPage,
    inputs: [{ id: 'a', label: 'From year', def: o.defFrom, min: o.from, max: o.to, year: true }, { id: 'b', label: 'To year', def: o.defTo, min: o.from, max: o.to, year: true }],
    run: (v) => {
      const a = clamp(v.a, o.from, o.to), b = clamp(v.b, o.from, o.to);
      const list = lowest(o.denom, Math.min(a, b), Math.max(a, b), 4, o.mints);
      if (!list.length) return { head: ['Lowest mintage', 'none in range'], rows: [], note: 'No figure for these years in the Mint tables we hold.' };
      const lab = (r: (typeof list)[number]) => `${r.year}${r.mint === 'P' ? '' : `-${r.mint}`}`;
      return { head: [`Lowest mintage ${Math.min(a, b)} to ${Math.max(a, b)}`, `${lab(list[0])}: ${n0(list[0].n)}`], rows: list.slice(1).map((r) => [lab(r), n0(r.n)] as [string, string]), note: 'Number struck, from the Bureau of the Mint tables; San Francisco proof-heavy years 1965 to 1980 are left out. A low mintage is a lead, not a price: survival and condition decide what a collector pays.' };
    },
  });
}

const VARIETIES: Array<{ label: string; d: Denom; y: number; m: Mint; check: string; state?: string }> = [
  { label: '1943 copper cent', d: 'cent', y: 1943, m: 'P', check: 'Not attracted by a magnet and about 3.1 g; a normal 1943 cent is steel, sticks to a magnet and weighs about 2.7 g.' },
  { label: '1944 steel cent', d: 'cent', y: 1944, m: 'P', check: 'Sticks to a magnet, while a normal 1944 cent is brass-colored copper alloy and does not.' },
  { label: '1955 doubled die cent', d: 'cent', y: 1955, m: 'P', check: 'No mint mark; the date and LIBERTY show strong, clear doubling of every letter, not a flat shadow.' },
  { label: '1972 doubled die cent', d: 'cent', y: 1972, m: 'P', check: 'No mint mark; doubling on LIBERTY, IN GOD WE TRUST and the date, with rounded double outlines.' },
  { label: '1909-S VDB cent', d: 'cent', y: 1909, m: 'S', check: 'An S under the date and the initials VDB at the bottom of the reverse, between the wheat stalks.' },
  { label: '1922 cent with no D', d: 'cent', y: 1922, m: 'D', check: 'Only Denver struck cents in 1922: a 1922 cent without a D comes from worn or filled Denver dies.' },
  { label: '1937-D three-legged Buffalo nickel', d: 'nickel', y: 1937, m: 'D', check: 'A D under FIVE CENTS and a bison with the front leg on the viewer side missing.' },
  { label: '1942/1 Mercury dime', d: 'dime', y: 1942, m: 'P', check: 'The tail of a 1 visible inside or beside the final 2 of the date.' },
  { label: '2004-D Wisconsin extra leaf quarter', d: 'quarter', y: 2004, m: 'D', state: 'Wisconsin', check: 'An extra leaf on the left of the corn ear, either high or low, on a Denver Wisconsin quarter.' },
];

const SPECS: Record<string, () => MiniSpec> = {
  penny: seriesSpec({ denom: 'cent', title: 'What is my penny worth in metal?', from: 1909, to: 2026, def: 1964, mints: ['P', 'D', 'S'], cta: 'Check any coin', ctaPage: 'home' }),
  wheat: seriesSpec({ denom: 'cent', title: 'Wheat penny: mintage and metal by year', from: 1909, to: 1958, def: 1931, mints: ['P', 'D', 'S'], defMint: 2, cta: 'Rare pennies by mintage', ctaPage: 'rare-pennies-worth-money' }),
  memorial: seriesSpec({ denom: 'cent', title: 'Lincoln cent after 1959: year and mint', from: 1959, to: 2026, def: 1970, mints: ['P', 'D', 'S'], cta: 'The 1982 weight test', ctaPage: '1982-penny-value' }),
  buffalo: seriesSpec({ denom: 'nickel', title: 'Buffalo nickel: mintage and metal by year', from: 1913, to: 1938, def: 1926, mints: ['P', 'D', 'S'], defMint: 2, cta: 'All nickels', ctaPage: 'nickel-value' }),
  jefferson: seriesSpec({ denom: 'nickel', title: 'Jefferson nickel: year, mint and metal', from: 1938, to: 2026, def: 1950, mints: ['P', 'D', 'S'], defMint: 1, cta: 'Nickel value by year', ctaPage: 'nickel-value' }),
  mercury: seriesSpec({ denom: 'dime', title: 'Mercury dime: mintage and silver by year', from: 1916, to: 1945, def: 1921, mints: ['P', 'D', 'S'], defMint: 1, cta: 'Silver dime value', ctaPage: 'silver-dime-value' }),
  roosevelt: seriesSpec({ denom: 'dime', title: 'Roosevelt dime: silver or clad by year', from: 1946, to: 2025, def: 1964, mints: ['P', 'D', 'S'], defMint: 1, cta: 'Silver dime value', ctaPage: 'silver-dime-value' }),
  washington: seriesSpec({ denom: 'quarter', title: 'Washington quarter: year, mint and metal', from: 1932, to: 1998, def: 1932, mints: ['P', 'D', 'S'], defMint: 1, cta: 'Rare quarters by mintage', ctaPage: 'rare-quarters-worth-money' }),
  kennedy: seriesSpec({ denom: 'half', title: 'Kennedy half: silver content by year', from: 1964, to: 2026, def: 1967, mints: ['P', 'D', 'S'], defMint: 1, cta: 'Melt value calculator', ctaPage: 'melt-value-calculator' }),
  walking: seriesSpec({ denom: 'half', title: 'Walking Liberty and Franklin halves by year', from: 1916, to: 1963, def: 1938, mints: ['P', 'D', 'S'], defMint: 1, cta: 'Kennedy half dollar value', ctaPage: 'kennedy-half-dollar-value' }),
  morgan: seriesSpec({ denom: 'dollar', title: 'Morgan dollar: mintage at each mint', from: 1878, to: 1921, def: 1893, mints: ['P', 'O', 'S', 'CC', 'D'], defMint: 2, cta: 'Peace dollar value', ctaPage: 'peace-dollar-value' }),
  peace: seriesSpec({ denom: 'dollar', title: 'Peace dollar: mintage at each mint', from: 1921, to: 1935, def: 1928, mints: ['P', 'D', 'S'], cta: 'Morgan silver dollar value', ctaPage: 'morgan-silver-dollar-value' }),
  golden: seriesSpec({ denom: 'dollar', title: 'Golden dollar: production and metal by year', from: 2000, to: 2026, def: 2012, mints: ['P', 'D'], cta: 'Check any coin', ctaPage: 'home' }),

  silverdime: batchSpec({ key: 'silverDime', face: 0.1, title: 'How much are my silver dimes worth?', def: 10, cta: 'Melt value calculator', ctaPage: 'melt-value-calculator' }),
  silverquarter: batchSpec({ key: 'silverQuarter', face: 0.25, title: 'How much are my silver quarters worth?', def: 4, cta: 'Melt value calculator', ctaPage: 'melt-value-calculator' }),
  silverdollar: batchSpec({ key: 'silverDollar', face: 1, title: 'Silver in Morgan and Peace dollars', def: 1, cta: 'Melt value calculator', ctaPage: 'melt-value-calculator' }),
  warnickel: batchSpec({ key: 'warNickel', face: 0.05, title: 'Silver in wartime nickels', def: 20, cta: 'Jefferson nickel value', ctaPage: 'jefferson-nickel-value', note: 'These are the one kind of nickel that 31 CFR Part 82 lets you melt or export.' }),
  oldnickel: batchSpec({ key: 'nickel', face: 0.05, title: 'Metal in ordinary nickels', def: 40, cta: 'Nickel value by year', ctaPage: 'nickel-value', note: 'Melting nickels is banned by 31 CFR Part 82: this shows the metal, not something you may cash in.' }),
  copperpenny: batchSpec({ key: 'bronzeCent', face: 0.01, title: 'Copper in pre-1982 pennies', def: 100, cta: 'The 1982 weight test', ctaPage: '1982-penny-value', note: 'Melting pennies is banned by 31 CFR Part 82: this is the metal inside, not money you can collect.' }),

  junk: () => ({
    title: 'Junk silver: face value to silver ounces', cta: 'Melt value calculator', ctaPage: 'melt-value-calculator',
    inputs: [{ id: 'f', label: 'Face value of 90% silver coins', def: 10, unit: '$', max: 100000 }],
    run: (v, c) => {
      const f = clamp(v.f, 0, 100000);
      const oz = ozPerFaceDollar90() * f;
      return { head: ['Melt value', usd(oz * c.prices.silverOz)], rows: [['Pure silver', `${formatNumberL(oz, 'en', 3)} troy oz`], ['Silver per $1 face value', `${formatNumberL(ozPerFaceDollar90(), 'en', 4)} troy oz`], ['Metal value against face value', `${formatNumberL((oz * c.prices.silverOz) / Math.max(f, 1e-9), 'en', 1)} times`]], note: `Dimes, quarters and halves dated 1964 or earlier. ${priceNote(c)}` };
    },
  }),
  weight1982: () => ({
    title: '1982 penny: copper or zinc by weight', cta: 'All pennies', ctaPage: 'penny-value',
    inputs: [{ id: 'g', label: 'Weight on a gram scale', def: 3.1, unit: 'g', decimals: 2, max: 10 }],
    run: (v, c) => {
      const g = Math.max(0, Math.min(10, v.g || 0));
      const k = centByWeight(g);
      const odd = g < 2.3 || g > 3.3;
      return { head: ['Your 1982 cent is', k === 'bronzeCent' ? '95% copper' : 'copper-plated zinc'], rows: [['Expected weight', `${formatNumberL(alloy(k).grams, 'en', 2)} g`], ['Metal value', usd(melt(k, c.prices).total)], ['Cut-off used', `${formatNumberL((alloy('bronzeCent').grams + alloy('zincCent').grams) / 2, 'en', 2)} g`]], note: odd ? 'Outside the usual range: weigh again on a scale that reads to 0.01 g.' : 'Both kinds were struck in 1982, so the date alone does not tell them apart.' };
    },
  }),
  steel1943: () => ({
    title: 'Is my 1943 penny steel or copper?', cta: 'Rare pennies', ctaPage: 'rare-pennies-worth-money',
    inputs: [{ id: 'mag', label: 'Does it stick to a magnet?', def: 1, options: yn }, { id: 'g', label: 'Weight, if you have a scale', def: 2.7, unit: 'g', decimals: 2, max: 10 }],
    run: (v) => {
      const steel = (v.mag ?? 1) === 1;
      const g = v.g || 0;
      const head = steel ? 'zinc-coated steel, the normal 1943 cent' : g > 2.95 ? 'possibly copper: have it authenticated' : 'not magnetic but light: likely plated or altered';
      return { head: ['Your 1943 cent is', head], rows: [['Steel cent weight', `${formatNumberL(alloy('steelCent').grams, 'en', 2)} g`], ['Bronze cent weight', `${formatNumberL(alloy('bronzeCent').grams, 'en', 2)} g`], ['1943 cents struck, all mints', n0(yearTotal('cent', 1943) ?? 0)]], note: 'The Mint says a few 1943 cents were struck in copper by accident and are highly valuable; copper-plated steel fakes exist, and a magnet catches them.' };
    },
  }),
  pennycost: () => ({
    title: 'What your pennies cost the Mint to make', cta: 'Should I save pennies?', ctaPage: 'should-i-save-pennies',
    inputs: [{ id: 'q', label: 'Number of pennies', def: 500, max: 10_000_000 }],
    run: (v, c) => {
      const q = clamp(v.q, 0, 10_000_000);
      return { head: ['Face value', money(q / 100)], rows: [[`Cost to make at ${formatNumberL(P.penny.costTo, 'en', 2)}¢ each`, money((q * P.penny.costTo) / 100)], [`Cost ten years earlier at ${formatNumberL(P.penny.costFrom, 'en', 2)}¢`, money((q * P.penny.costFrom) / 100)], ['Zinc and copper inside', usd(melt('zincCent', c.prices).total * q)]], note: 'Unit costs from the US Mint (penny FAQs). Pennies remain legal tender after the end of production.' };
    },
  }),
  pennyjar: () => ({
    title: 'Copper and zinc in a jar of pennies', cta: '1982 weight test', ctaPage: '1982-penny-value',
    inputs: [{ id: 'q', label: 'Pennies in the jar', def: 1000, max: 10_000_000 }, { id: 'p', label: 'Share dated 1981 or earlier', def: 20, unit: '%', max: 100 }],
    run: (v, c) => {
      const q = clamp(v.q, 0, 10_000_000), p = clamp(v.p, 0, 100) / 100;
      const old = Math.round(q * p), zinc = q - old;
      const cu = melt('bronzeCent', c.prices).total * old, zn = melt('zincCent', c.prices).total * zinc;
      return { head: ['Metal in the jar', usd(cu + zn)], rows: [['Face value', money(q / 100)], [`${n0(old)} copper cents`, usd(cu)], [`${n0(zinc)} zinc cents`, usd(zn)]], note: 'Melting or treating pennies for their metal is banned by 31 CFR Part 82, with fines up to $10,000. Both kinds were struck in 1982.' };
    },
  }),
  statequarter: () => ({
    title: 'State quarter: how many were struck?', cta: 'Rare quarters', ctaPage: 'rare-quarters-worth-money',
    inputs: [{ id: 's', label: 'State on the quarter', def: STATES.findIndex((s) => s.state === 'Wisconsin'), options: STATES.map((s, i) => ({ value: String(i), label: `${s.state} (${s.year})` })) }],
    run: (v, c) => {
      const s = STATES[clamp(v.s, 0, STATES.length - 1)];
      return { head: [`${s.state} quarters struck`, n0(s.D + s.P)], rows: [['Denver (D)', n0(s.D)], ['Philadelphia (P)', n0(s.P)], ['Year of issue', String(s.year)], ['Metal value', usd(melt('cladQuarter', c.prices).total)]], note: 'Circulating production per the US Mint; proof and silver proof quarters from San Francisco are not counted.' };
    },
  }),
  bicentennial: () => ({
    title: 'Bicentennial quarter: which one do I have?', cta: 'Rare quarters', ctaPage: 'rare-quarters-worth-money',
    inputs: [{ id: 'm', label: 'Mint mark under the ribbon', def: 0, options: [{ value: '0', label: 'None (Philadelphia)' }, { value: '1', label: 'D (Denver)' }, { value: '2', label: 'S, copper-nickel (proof)' }, { value: '3', label: 'S, 40% silver (collector set)' }] }],
    run: (v, c) => {
      const i = clamp(v.m, 0, 3);
      const m: Mint = i === 0 ? 'P' : i === 1 ? 'D' : 'S';
      const k: AlloyKey = i === 3 ? 'silverCladQuarter' : 'cladQuarter';
      return { head: ['Metal value', usd(melt(k, c.prices).total)], rows: [['Struck at this mint (1776-1976 dated)', struck('quarter', 1976, m)], ['Metal', alloy(k).label], ['Weight', `${formatNumberL(alloy(k).grams, 'en', 2)} g`]], note: 'The San Francisco figure counts copper-nickel proofs and 40% silver coins together. A silver one weighs about 5.75 g against 5.67 g, and shows no copper stripe on its edge.' };
    },
  }),
  rarecent: rareSpec({ denom: 'cent', title: 'Lowest-mintage Lincoln cents', from: 1909, to: 1980, defFrom: 1909, defTo: 1958, cta: 'Wheat penny value', ctaPage: 'wheat-penny-value' }),
  rarequarter: rareSpec({ denom: 'quarter', title: 'Lowest-mintage quarters', from: 1916, to: 1980, defFrom: 1932, defTo: 1964, cta: 'Silver quarter value', ctaPage: 'silver-quarter-value' }),
  raredime: rareSpec({ denom: 'dime', title: 'Lowest-mintage dimes', from: 1916, to: 1980, defFrom: 1916, defTo: 1945, cta: 'Mercury dime value', ctaPage: 'mercury-dime-value' }),
  raredollar: rareSpec({ denom: 'dollar', title: 'Lowest-mintage silver dollars', from: 1878, to: 1935, defFrom: 1878, defTo: 1904, cta: 'Peace dollar value', ctaPage: 'peace-dollar-value' }),
  rarenickel: rareSpec({ denom: 'nickel', title: 'Lowest-mintage nickels', from: 1913, to: 1980, defFrom: 1913, defTo: 1938, cta: 'Buffalo nickel value', ctaPage: 'buffalo-nickel-value' }),

  coinyear: () => ({
    title: 'All coins of one year', cta: 'Check one coin', ctaPage: 'home',
    inputs: [{ id: 'y', label: 'Year', def: 1964, min: 1878, max: 2023, year: true }],
    run: (v, c) => {
      const y = clamp(v.y, 1878, 2023);
      const rows = DENOMS.map((d) => {
        const t = yearTotal(d, y);
        const vs = variants(d, y)[0];
        return [`${DENOM_LABEL[d]}${seriesFor(d, y).length ? '' : ' (none dated)'}`, t != null ? `${n0(t)} · ${usd(melt(vs.key, c.prices).total)}` : `no figure · ${usd(melt(vs.key, c.prices).total)}`] as [string, string];
      });
      const sum = DENOMS.reduce((s, d) => s + (yearTotal(d, y) ?? 0), 0);
      return { head: [`Coins struck in ${y}, all mints`, sum ? n0(sum) : 'no figure'], rows, note: `Number struck · metal value of one coin. ${priceNote(c, 'both')}` };
    },
  }),
  silveryear: () => ({
    title: 'Is my coin silver?', cta: 'Silver coin years', ctaPage: 'silver-coin-years',
    inputs: [{ id: 'd', label: 'Coin', def: 3, options: DENOMS.map((d, i) => ({ value: String(i), label: DENOM_LABEL[d] })) }, { id: 'y', label: 'Year on the coin', def: 1965, min: 1878, max: 2026, year: true }],
    run: (v, c) => {
      const d = DENOMS[clamp(v.d, 0, 5)], y = clamp(v.y, 1878, 2026);
      const vs = variants(d, y);
      const k = vs[0].key;
      const oz = silverOz(k);
      return { head: [`${DENOM_LABEL[d]} dated ${y}`, oz > 0 ? `${formatNumberL(alloy(k).ag! * 100)}% silver` : 'no silver'], rows: [['Metal', alloy(k).label], ['Pure silver', oz ? `${formatNumberL(oz, 'en', 4)} troy oz` : 'none'], ['Metal value', usd(melt(k, c.prices).total)]].concat(vs.length > 1 ? [['Other possibility', vs[1].label]] : []) as Array<[string, string]>, note: oz ? priceNote(c) : 'Only the collector value of a scarce date or variety can lift it above face value.' };
    },
  }),
  mintmark: () => ({
    title: 'Which mint mark can my coin have?', cta: 'Mint marks explained', ctaPage: 'mint-marks',
    inputs: [{ id: 'd', label: 'Coin', def: 0, options: DENOMS.map((d, i) => ({ value: String(i), label: DENOM_LABEL[d] })) }, { id: 'y', label: 'Year on the coin', def: 1970, min: 1878, max: 2026, year: true }],
    run: (v) => {
      const d = DENOMS[clamp(v.d, 0, 5)], y = clamp(v.y, 1878, 2026);
      const ms = (['P', 'D', 'S', 'O', 'CC', 'W'] as Mint[]).filter((m) => mintage(d, y, m).n != null);
      return { head: ['Philadelphia coins show', markOnCoin(d, y, 'P')], rows: [['Mints with a figure this year', ms.length ? ms.join(', ') : 'none in our tables'], ['Other mints show', markOnCoin(d, y, 'D') === 'D' ? 'their letter' : markOnCoin(d, y, 'D')]], note: 'From the US Mint page on mint marks and the Bureau of the Mint tables.' };
    },
  }),
  grading: () => ({
    title: 'Is grading worth the fee?', cta: 'Coin grading guide', ctaPage: 'coin-grading',
    inputs: [{ id: 'raw', label: 'Value you expect ungraded', def: 40, unit: '$', max: 1_000_000 }, { id: 'gr', label: 'Value you expect once graded', def: 90, unit: '$', max: 1_000_000 }, { id: 'fee', label: 'Fee, postage and insurance', def: 45, unit: '$', max: 100_000 }],
    run: (v) => {
      const gain = (v.gr || 0) - (v.raw || 0) - (v.fee || 0);
      return { head: [gain >= 0 ? 'Grading could add' : 'Grading would cost you', money(Math.abs(gain))], rows: [['Value difference', money((v.gr || 0) - (v.raw || 0))], ['Total cost of grading', money(v.fee || 0)], ['Break-even graded value', money((v.raw || 0) + (v.fee || 0))]], note: 'Type the fee schedule of the service you would use; the values you expect are your own estimate, not a quote.' };
    },
  }),
  variety: () => ({
    title: 'Known varieties: what to check', cta: 'Error coins explained', ctaPage: 'error-coins',
    inputs: [{ id: 'k', label: 'Variety', def: 0, options: VARIETIES.map((x, i) => ({ value: String(i), label: x.label })) }],
    run: (v) => {
      const x = VARIETIES[clamp(v.k, 0, VARIETIES.length - 1)];
      const host = x.state ? STATES.find((s) => s.state === x.state && s.year === x.y) : null;
      const n = host ? host.D : mintage(x.d, x.y, x.m).n;
      return { head: ['Look for', x.check], rows: [[`All ${x.y}${x.m === 'P' ? '' : `-${x.m}`} ${x.state ?? DENOM_LABEL[x.d].toLowerCase()} coins struck`, n != null ? n0(n) : 'no figure'], ['Mintage band of that issue', n != null ? band(n).label : 'unknown']], note: 'The Mint does not count varieties apart: the figure is the whole issue they hide in. Only an authentication service can confirm one.' };
    },
  }),
  face: () => ({
    title: 'Face value against metal value', cta: 'Melt value calculator', ctaPage: 'melt-value-calculator',
    inputs: [{ id: 'd', label: 'Coin', def: 2, options: DENOMS.map((d, i) => ({ value: String(i), label: DENOM_LABEL[d] })) }, { id: 'y', label: 'Year on the coin', def: 2020, min: 1878, max: 2026, year: true }],
    run: (v, c) => {
      const d = DENOMS[clamp(v.d, 0, 5)], y = clamp(v.y, 1878, 2026);
      const k = variants(d, y)[0].key;
      const m = melt(k, c.prices).total;
      return { head: ['Metal value', usd(m)], rows: [['Face value', usd(FACE[d])], ['Metal against face', `${formatNumberL(m / FACE[d], 'en', 2)} times`], ['Metal', alloy(k).label]], note: priceNote(c, 'both') };
    },
  }),
};

export function getSpec(kind: string): MiniSpec {
  const f = SPECS[kind];
  if (!f) throw new Error(`Unknown mini-tool: ${kind}`);
  return f();
}
export const MINI_KINDS = Object.keys(SPECS);
