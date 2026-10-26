/**
 * Coin engine: series, alloy, mintage, rarity band and melt value of a US circulating coin.
 * Pure functions, no network. Inputs: mintages.json (built from the Bureau of the Mint tables by
 * scripts/build-mintages.py) and params-2026.json (alloys, metal prices, dates).
 */
import P from '../../data/params-2026.json';
import M from '../../data/mintages.json';

export type Denom = 'cent' | 'nickel' | 'dime' | 'quarter' | 'half' | 'dollar';
export type Mint = 'P' | 'D' | 'S' | 'O' | 'CC' | 'W';
export type AlloyKey = Exclude<keyof typeof P.alloys, '_note'>;
export const DENOMS: Denom[] = ['cent', 'nickel', 'dime', 'quarter', 'half', 'dollar'];
export const MINTS: Mint[] = ['P', 'D', 'S', 'O', 'CC', 'W'];
export const FACE: Record<Denom, number> = { cent: 0.01, nickel: 0.05, dime: 0.1, quarter: 0.25, half: 0.5, dollar: 1 };
export const DENOM_LABEL: Record<Denom, string> = { cent: 'Cent (penny)', nickel: 'Nickel', dime: 'Dime', quarter: 'Quarter', half: 'Half dollar', dollar: 'Dollar' };
export const MINT_LABEL: Record<Mint, string> = { P: 'Philadelphia (P or no mark)', D: 'Denver (D)', S: 'San Francisco (S)', O: 'New Orleans (O)', CC: 'Carson City (CC)', W: 'West Point (W)' };
export const FIRST_YEAR = 1878;
export const LAST_YEAR = 2026;

const G_OZ = P.troyOunceGrams;
const G_LB = P.poundGrams;
const LB_PER_MT = P.tonneGrams / P.poundGrams;

type Alloy = { label: string; grams: number; cu?: number; zn?: number; ni?: number; ag?: number; mn?: number; steel?: number };
export const alloy = (k: AlloyKey): Alloy => (P.alloys as unknown as Record<string, Alloy>)[k];

// ---------- series -----------------------------------------------------------------------
export interface Series { id: string; denom: Denom; name: string; from: number; to: number }
/** Designs on circulating coins (US Mint history and specification pages, Bureau of the Mint 1981). */
export const SERIES: Series[] = [
  { id: 'indian-cent', denom: 'cent', name: 'Indian Head cent', from: 1878, to: 1909 },
  { id: 'wheat-cent', denom: 'cent', name: 'Lincoln wheat cent', from: 1909, to: 1958 },
  { id: 'memorial-cent', denom: 'cent', name: 'Lincoln Memorial cent', from: 1959, to: 2008 },
  { id: 'bicentennial-cent', denom: 'cent', name: 'Lincoln Bicentennial cent', from: 2009, to: 2009 },
  { id: 'shield-cent', denom: 'cent', name: 'Lincoln Union Shield cent', from: 2010, to: 2026 },
  { id: 'liberty-nickel', denom: 'nickel', name: 'Liberty Head nickel', from: 1883, to: 1912 },
  { id: 'buffalo-nickel', denom: 'nickel', name: 'Buffalo nickel', from: 1913, to: 1938 },
  { id: 'jefferson-nickel', denom: 'nickel', name: 'Jefferson nickel', from: 1938, to: 2026 },
  { id: 'barber-dime', denom: 'dime', name: 'Barber dime', from: 1892, to: 1916 },
  { id: 'seated-dime', denom: 'dime', name: 'Seated Liberty dime', from: 1878, to: 1891 },
  { id: 'mercury-dime', denom: 'dime', name: 'Mercury (Winged Liberty) dime', from: 1916, to: 1945 },
  { id: 'roosevelt-dime', denom: 'dime', name: 'Roosevelt dime', from: 1946, to: 2025 },
  { id: 'liberty-dime', denom: 'dime', name: 'Emerging Liberty dime', from: 2026, to: 2026 },
  { id: 'seated-quarter', denom: 'quarter', name: 'Seated Liberty quarter', from: 1878, to: 1891 },
  { id: 'barber-quarter', denom: 'quarter', name: 'Barber quarter', from: 1892, to: 1916 },
  { id: 'standing-quarter', denom: 'quarter', name: 'Standing Liberty quarter', from: 1916, to: 1930 },
  { id: 'washington-quarter', denom: 'quarter', name: 'Washington quarter', from: 1932, to: 1998 },
  { id: 'state-quarter', denom: 'quarter', name: '50 State quarter', from: 1999, to: 2008 },
  { id: 'territories-quarter', denom: 'quarter', name: 'DC and Territories quarter', from: 2009, to: 2009 },
  { id: 'parks-quarter', denom: 'quarter', name: 'America the Beautiful quarter', from: 2010, to: 2021 },
  { id: 'women-quarter', denom: 'quarter', name: 'American Women quarter', from: 2022, to: 2025 },
  { id: 'semiquincentennial-quarter', denom: 'quarter', name: 'Semiquincentennial quarter', from: 2026, to: 2026 },
  { id: 'seated-half', denom: 'half', name: 'Seated Liberty half dollar', from: 1878, to: 1891 },
  { id: 'barber-half', denom: 'half', name: 'Barber half dollar', from: 1892, to: 1915 },
  { id: 'walking-half', denom: 'half', name: 'Walking Liberty half dollar', from: 1916, to: 1947 },
  { id: 'franklin-half', denom: 'half', name: 'Franklin half dollar', from: 1948, to: 1963 },
  { id: 'kennedy-half', denom: 'half', name: 'Kennedy half dollar', from: 1964, to: 2026 },
  { id: 'morgan-dollar', denom: 'dollar', name: 'Morgan dollar', from: 1878, to: 1921 },
  { id: 'peace-dollar', denom: 'dollar', name: 'Peace dollar', from: 1921, to: 1935 },
  { id: 'ike-dollar', denom: 'dollar', name: 'Eisenhower dollar', from: 1971, to: 1978 },
  { id: 'anthony-dollar', denom: 'dollar', name: 'Susan B. Anthony dollar', from: 1979, to: 1999 },
  { id: 'golden-dollar', denom: 'dollar', name: 'Sacagawea and Native American dollar', from: 2000, to: 2026 },
];
export const seriesById = (id: string) => SERIES.find((s) => s.id === id);
/** Every design struck for this denomination and year (two in a changeover year). */
export function seriesFor(d: Denom, y: number): Series[] {
  const s = SERIES.filter((x) => x.denom === d && y >= x.from && y <= x.to);
  if (d === 'dollar') {
    if (y > 1904 && y < 1921) return [];
    if (y > 1935 && y < 1971) return [];
    if (y >= 1922 && y <= 1935) return s.filter((x) => x.id === 'peace-dollar' && (y <= 1928 || y >= 1934));
    if (y > 1981 && y < 1999) return [];
    if (y === 1999) return s.filter((x) => x.id === 'anthony-dollar');
  }
  if (d === 'quarter' && y === 1931) return [];
  return s;
}

// ---------- alloy ------------------------------------------------------------------------
export interface Variant { key: AlloyKey; label: string }
/** The possible metals for a coin of this denomination, year and mint (first = the usual one). */
export function variants(d: Denom, y: number, mint: Mint = 'P'): Variant[] {
  const v = (key: AlloyKey, label = alloy(key).label): Variant => ({ key, label });
  switch (d) {
    case 'cent':
      if (y === 1943) return [v('steelCent'), { key: 'bronzeCent', label: 'Bronze (a 1943 copper cent, struck by accident)' }];
      if (y === 1982) return [{ key: 'zincCent', label: 'Zinc cent, about 2.5 g' }, { key: 'bronzeCent', label: 'Bronze cent, about 3.1 g' }];
      return y < 1982 ? [v('bronzeCent')] : [v('zincCent')];
    case 'nickel':
      if (y >= 1943 && y <= 1945) return [v('warNickel')];
      if (y === 1942 && mint !== 'D') return [{ key: 'nickel', label: 'Regular nickel (no large mint mark above Monticello)' }, { key: 'warNickel', label: 'Wartime 35% silver (large P or S above Monticello)' }];
      return [v('nickel')];
    case 'dime': return y <= 1964 ? [v('silverDime')] : [v('cladDime')];
    case 'quarter':
      if (y <= 1964) return [v('silverQuarter')];
      if (y === 1976 && mint === 'S') return [v('cladQuarter'), v('silverCladQuarter')];
      return [v('cladQuarter')];
    case 'half':
      if (y <= 1964) return [v('silverHalf')];
      if (y <= 1970) return [v('silverCladHalf')];
      if (y === 1976 && mint === 'S') return [v('cladHalf'), { key: 'silverCladHalf', label: '40% silver-clad (collector sets)' }];
      return [v('cladHalf')];
    case 'dollar':
      if (y <= 1935) return [v('silverDollar')];
      if (y >= 1971 && y <= 1976 && mint === 'S') return [v('cladDollar'), v('silverCladDollar')];
      if (y >= 1971 && y <= 1978) return [v('cladDollar')];
      if (y >= 1979 && y <= 1999) return [v('sbaDollar')];
      return [v('goldenDollar')];
  }
}

// ---------- metal prices and melt value ---------------------------------------------------
export interface Prices { silverOz: number; copperLb: number; nickelLb: number; zincLb: number }
/** Monthly World Bank averages from params-2026.json, converted to $ per pound for base metals. */
export const DEFAULT_PRICES: Prices = {
  silverOz: P.metals.silverUsdOz,
  copperLb: P.metals.copperUsdMt / LB_PER_MT,
  nickelLb: P.metals.nickelUsdMt / LB_PER_MT,
  zincLb: P.metals.zincUsdMt / LB_PER_MT,
};
export const perLbFromMt = (usdMt: number) => usdMt / LB_PER_MT;
export interface Melt { total: number; silverOz: number; parts: Array<{ metal: string; grams: number; value: number }> }
/** Metal value of one coin. Steel, tin and manganese are not priced (counted at zero). */
export function melt(k: AlloyKey, p: Prices = DEFAULT_PRICES): Melt {
  const a = alloy(k);
  const parts: Melt['parts'] = [];
  const add = (metal: string, share: number | undefined, value: (g: number) => number) => {
    if (!share) return;
    const g = a.grams * share;
    parts.push({ metal, grams: g, value: value(g) });
  };
  add('silver', a.ag, (g) => (g / G_OZ) * p.silverOz);
  add('copper', a.cu, (g) => (g / G_LB) * p.copperLb);
  add('nickel', a.ni, (g) => (g / G_LB) * p.nickelLb);
  add('zinc', a.zn, (g) => (g / G_LB) * p.zincLb);
  add('manganese', a.mn, () => 0);
  add('steel', a.steel, () => 0);
  return { total: parts.reduce((s, x) => s + x.value, 0), silverOz: a.ag ? (a.grams * a.ag) / G_OZ : 0, parts };
}
/** Pure silver content in troy ounces of one coin. */
export const silverOz = (k: AlloyKey) => { const a = alloy(k); return a.ag ? (a.grams * a.ag) / G_OZ : 0; };
/** Junk silver: face value of 90% coins → troy ounces of silver (dime, quarter, half: same silver per dollar). */
export const ozPerFaceDollar90 = () => silverOz('silverDime') / 0.1;

// ---------- mintages ---------------------------------------------------------------------
type Row = Partial<Record<Mint, number>>;
const CAL = M.calendar as Record<Denom, Record<string, Row>>;
const MOD = M.modern as Record<string, Record<string, Row>>;
const MOD_KEY: Partial<Record<Denom, string>> = { cent: 'cent', nickel: 'nickel', dime: 'dime', quarter: 'quarter', half: 'half', dollar: 'nativeDollar' };
export interface Mintage { n: number | null; source: 'book' | 'dated' | 'modern' | 'none'; approx: boolean; notes: string[] }
export const DATED_YEARS = [1964, 1965, 1966, 1974];

/** Pieces struck for this denomination, year and mint, with the caveats that apply. */
export function mintage(d: Denom, y: number, mint: Mint): Mintage {
  const notes: string[] = [];
  let n: number | null = null;
  let source: Mintage['source'] = 'none';
  let approx = false;
  if (y <= 1980) {
    const row = CAL[d][String(y)];
    if (row && row[mint] != null) { n = row[mint]!; source = DATED_YEARS.includes(y) || (y === 1976 && ['quarter', 'half', 'dollar'].includes(d)) ? 'dated' : 'book'; }
  } else {
    const k = MOD_KEY[d];
    const row = k ? MOD[k]?.[String(y)] : undefined;
    if (row && row[mint] != null) { n = row[mint]!; source = 'modern'; approx = true; }
    if (d === 'dollar' && y >= 2010 && y !== 2010 && n != null) notes.push('Native American dollars only; Presidential dollars are counted apart.');
  }
  // commemoratives (table LIII), subtracted at build time
  const cm = (M as any).commemoratives?.[d]?.[String(y)]?.[mint] as number | undefined;
  const only = ((M as any).commemorativesOnly as Array<{ denom: string; year: number; mint: string }> | undefined)?.some((c) => c.denom === d && c.year === y && c.mint === mint);
  if (only && cm) notes.push(`Only commemorative coins (${cm.toLocaleString('en-US')} pieces) were struck in this denomination at this mint this year, with a few kept for assay: no regular coin of this date and mint exists.`);
  else if (cm && n != null) notes.push(`Excludes ${cm.toLocaleString('en-US')} commemorative coins struck the same year at this mint.`);
  // caveats
  if (y >= P.marks.noMarkFrom && y <= P.marks.noMarkTo) notes.push(`Coins dated ${P.marks.noMarkFrom} to ${P.marks.noMarkTo} carry no mint mark, whatever the mint.`);
  if (d === 'cent' && y === 1909) notes.push('The 1909 figure counts Indian Head and Lincoln cents together: the Lincoln cent was coined from June 1909.');
  if (d === 'dime' && y === 1916) notes.push('The 1916 figure counts Barber and Mercury dimes struck that year together.');
  if (d === 'quarter' && y === 1916) notes.push('The 1916 figure counts Barber and Standing Liberty quarters struck that year together.');
  if (d === 'half' && y === 1916) notes.push('The 1916 figure counts Barber and Walking Liberty halves struck that year together.');
  if (d === 'nickel' && y === 1938) notes.push('The 1938 figure counts Buffalo and Jefferson nickels struck that year together.');
  if (d === 'nickel' && y === 1913) notes.push('The 1913 figure counts Liberty Head and Buffalo nickels struck that year together.');
  if (d === 'dollar' && y === 1921 && mint === 'P') notes.push('The 1921 Philadelphia figure includes the first Peace dollars, coined from 21 December 1921, with the Morgan dollars of that year.');
  if (y === 1975 && ['cent', 'nickel', 'dime'].includes(d)) notes.push('Calendar 1975 production includes coins still dated 1974, struck until September 1975.');
  if (y === 1975 && ['quarter', 'half', 'dollar'].includes(d)) notes.push('No quarter, half dollar or dollar is dated 1975: the 1776-1976 Bicentennial coins replaced them.');
  if (mint === 'S' && y >= 1965 && y <= 1980) notes.push('San Francisco figures from 1965 include proof coins made for collector sets.');
  if (d === 'dime' && y === 1975 && mint === 'S') notes.push('Includes 71,991,900 dimes struck in San Francisco without a mint mark for circulation.');
  if (d !== 'cent' && d !== 'nickel' && y <= 1964 && y >= 1960 && mint === 'P') notes.push('Philadelphia coins of this period carry no mint mark.');
  if (source === 'book' && y < 1964) notes.push('Pieces made in the calendar year; for most years this is also the date on the coin.');
  if (source === 'modern') notes.push('Circulating production published by the Mint in millions of coins; proof and uncirculated set coins are not counted.');
  return { n, source, approx, notes };
}
/** Mints with a figure for this denomination and year. */
export function mintsWithData(d: Denom, y: number): Mint[] {
  if (y <= 1980) return MINTS.filter((m) => CAL[d][String(y)]?.[m] != null);
  const k = MOD_KEY[d];
  return MINTS.filter((m) => k && MOD[k]?.[String(y)]?.[m] != null);
}
/** Every year with a figure for this denomination. */
export const yearsWithData = (d: Denom) => [
  ...Object.keys(CAL[d]).map(Number),
  ...Object.keys(MOD[MOD_KEY[d] ?? ''] ?? {}).map(Number),
].sort((a, b) => a - b);
/** Sum over mints for a year (null if no figure). */
export function yearTotal(d: Denom, y: number): number | null {
  const ms = mintsWithData(d, y);
  return ms.length ? ms.reduce((s, m) => s + (mintage(d, y, m).n ?? 0), 0) : null;
}

/** The mint mark printed on the coin, or why there is none. */
export function markOnCoin(d: Denom, y: number, mint: Mint): string {
  if (mint !== 'P') return y >= P.marks.noMarkFrom && y <= P.marks.noMarkTo ? 'none (no marks 1965 to 1967)' : mint;
  if (y >= P.marks.noMarkFrom && y <= P.marks.noMarkTo) return 'none (no marks 1965 to 1967)';
  if (d === 'nickel' && y >= 1942 && y <= 1945) return y === 1942 ? 'none, or a large P on wartime coins' : 'large P above Monticello';
  if (d === 'cent') return y === P.marks.pCent ? 'P' : 'none';
  if (d === 'dollar' && y === 1979) return 'P';
  return y >= P.marks.pAllButCentFrom ? 'P' : 'none';
}

// ---------- rarity band -------------------------------------------------------------------
export interface Band { id: 'very-low' | 'low' | 'moderate' | 'high' | 'very-high'; label: string }
/** Bands by number struck, our own scale (method page): a low mintage is a hint, not a price. */
export function band(n: number): Band {
  if (n < 1_000_000) return { id: 'very-low', label: 'Very low mintage (under 1 million)' };
  if (n < 5_000_000) return { id: 'low', label: 'Low mintage (1 to 5 million)' };
  if (n < 20_000_000) return { id: 'moderate', label: 'Moderate mintage (5 to 20 million)' };
  if (n < 200_000_000) return { id: 'high', label: 'High mintage (20 to 200 million)' };
  return { id: 'very-high', label: 'Very high mintage (over 200 million)' };
}
export interface Ranked { year: number; mint: Mint; n: number }
/** Lowest figures for a denomination between two years (calendar tables and modern data). */
export function lowest(d: Denom, from: number, to: number, k = 10, mints: Mint[] = MINTS): Ranked[] {
  const all: Ranked[] = [];
  for (const y of yearsWithData(d)) {
    if (y < from || y > to) continue;
    for (const m of mintsWithData(d, y)) {
      if (!mints.includes(m)) continue;
      if (m === 'S' && y >= 1965 && y <= 1980) continue; // proof-heavy San Francisco figures
      const n = mintage(d, y, m).n;
      if (n) all.push({ year: y, mint: m, n });
    }
  }
  return all.sort((a, b) => a.n - b.n).slice(0, k);
}
/** Rank of a figure among all figures of the denomination (1 = lowest). */
export function rankOf(d: Denom, y: number, mint: Mint): { rank: number; of: number } | null {
  const n = mintage(d, y, mint).n;
  if (!n) return null;
  const all = lowest(d, 0, 9999, 100000);
  const idx = all.findIndex((r) => r.year === y && r.mint === mint);
  return { rank: idx >= 0 ? idx + 1 : all.filter((r) => r.n < n).length + 1, of: all.length };
}

// ---------- state quarters ----------------------------------------------------------------
export const STATES = (M.stateQuarters as Array<{ year: number; state: string; D: number; P: number }>);

// ---------- lookup -----------------------------------------------------------------------
export interface Lookup {
  denom: Denom; year: number; mint: Mint;
  series: Series[]; variants: Variant[]; alloy: AlloyKey; melt: Melt; face: number;
  mintage: Mintage; band: Band | null; mark: string;
}
export function lookup(d: Denom, y: number, mint: Mint, variantIdx = 0, prices: Prices = DEFAULT_PRICES): Lookup {
  const vs = variants(d, y, mint);
  const v = vs[Math.max(0, Math.min(vs.length - 1, variantIdx))];
  const m = mintage(d, y, mint);
  return { denom: d, year: y, mint, series: seriesFor(d, y), variants: vs, alloy: v.key, melt: melt(v.key, prices), face: FACE[d], mintage: m, band: m.n ? band(m.n) : null, mark: markOnCoin(d, y, mint) };
}
/** 1982 cent test: weight in grams → bronze or zinc (midpoint of 3.11 g and 2.50 g). */
export function centByWeight(g: number): AlloyKey { return g >= (alloy('bronzeCent').grams + alloy('zincCent').grams) / 2 ? 'bronzeCent' : 'zincCent'; }
