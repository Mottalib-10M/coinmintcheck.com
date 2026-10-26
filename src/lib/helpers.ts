/** Writing helpers handed to every page: links, figures read from params-2026.json and mintages.json, tables. */
import { route, ROUTES, type Locale } from '../i18n/routes';
import { formatNumberL, money, usd, price, pct, dateL, monthL } from './format-l';
import {
  mintage, yearTotal, lowest, melt, silverOz, alloy, ozPerFaceDollar90, band, STATES, FACE, DENOM_LABEL, mintsWithData,
  type Denom, type Mint, type AlloyKey,
} from './engine/coins';
import { BUILD_PRICES, BUILD_AT } from './prices';
import P from '../data/params-2026.json';
import MT from '../data/mintages.json';

export type SourceKey = keyof typeof P.sources;
const esc = (s: string | number) => String(s).replace(/&(?!(?:[a-z]+|#\d+);)/g, '&amp;').replace(/</g, '&lt;');
export function table(headers: string[], rows: Array<Array<string | number>>, caption: string | undefined, align: Array<'l' | 'r'>) {
  const al = (i: number) => (align[i] === 'r' ? 'text-right' : 'text-left');
  return `<div class="not-prose my-6 overflow-x-auto"><table class="journal w-full text-sm">${caption ? `<caption class="mb-2 text-left text-sm text-navy-600">${caption}</caption>` : ''}<thead><tr>${headers.map((h, i) => `<th scope="col" class="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-navy-700 ${al(i)}">${h}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c, i) => `<td class="tabular-nums border-b border-navy-100 px-3 py-2 text-navy-800 ${al(i)}">${typeof c === 'number' ? esc(formatNumberL(c)) : c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}

/** Every page id of the plan: a link to a planned page not written yet renders as text. */
export const PLANNED = [
  'melt-value-calculator', 'coin-value-lookup', 'junk-silver-value', 'silver-coin-years', 'mint-marks', 'coin-grading', 'error-coins',
  'penny-value', 'wheat-penny-value', 'lincoln-penny-value', '1943-steel-penny-value', '1982-penny-value', 'rare-pennies-worth-money', '1972-double-die-penny', 'penny-discontinued', 'should-i-save-pennies',
  'nickel-value', 'jefferson-nickel-value', 'buffalo-nickel-value', 'silver-dime-value', 'mercury-dime-value', 'roosevelt-dime-value',
  'bicentennial-quarter-value', 'state-quarters-value', 'rare-quarters-worth-money', 'silver-quarter-value', 'kennedy-half-dollar-value', 'walking-liberty-half-dollar-value',
  'morgan-silver-dollar-value', 'peace-dollar-value', 'sacagawea-dollar-value',
];
const label = (y: number, m: Mint) => `${y}${m === 'P' ? '' : `-${m}`}`;

export function helpers(lang: Locale = 'en', strict = false) {
  const a = (id: string, text: string) => {
    if (!ROUTES.some((r) => r.id === id)) { if (strict && !PLANNED.includes(id) && id !== 'home') throw new Error(`Unknown page id in a link: ${id}`); return text; }
    return `<a href="${route(id, lang)}">${text}</a>`;
  };
  const ext = (url: string, text: string) => `<a href="${url}" target="_blank" rel="nofollow noopener noreferrer">${text}</a>`;
  const src = (k: SourceKey, text: string) => ext(P.sources[k].url, text);
  const num = (n: number, d = 0) => formatNumberL(n, 'en', d);
  /** Number struck (formatted) for a denomination, year and mint; "no figure" if none. */
  const mint = (d: Denom, y: number, m: Mint = 'P') => { const r = mintage(d, y, m); return r.n != null ? formatNumberL(r.n) : 'no figure'; };
  /** Raw number struck (0 if none). */
  const mintN = (d: Denom, y: number, m: Mint = 'P') => mintage(d, y, m).n ?? 0;
  const total = (d: Denom, y: number) => yearTotal(d, y) ?? 0;
  /** Metal value of one coin at the price read at build time, formatted ($3.92 or 1.8¢). */
  const meltOf = (k: AlloyKey) => usd(melt(k, BUILD_PRICES).total);
  const meltN = (k: AlloyKey) => melt(k, BUILD_PRICES).total;
  const oz = (k: AlloyKey, d = 4) => formatNumberL(silverOz(k), 'en', d);
  const grams = (k: AlloyKey) => formatNumberL(alloy(k).grams, 'en', 2);
  /** Year × mint table of numbers struck. */
  const seriesTable = (d: Denom, from: number, to: number, mints: Mint[], caption?: string) => {
    const rows: Array<Array<string | number>> = [];
    for (let y = from; y <= to; y++) {
      const ms = mintsWithData(d, y);
      if (!ms.length) continue;
      rows.push([String(y), ...mints.map((m) => { const r = mintage(d, y, m); return r.n != null ? formatNumberL(r.n) : '–'; })]);
    }
    return table(['Year', ...mints.map((m) => (m === 'P' ? 'Philadelphia' : m === 'D' ? 'Denver' : m === 'S' ? 'San Francisco' : m === 'O' ? 'New Orleans' : m === 'CC' ? 'Carson City' : 'West Point'))], rows, caption, ['l', ...mints.map(() => 'r' as const)]);
  };
  /** The k lowest numbers struck for a denomination between two years. */
  const lowestTable = (d: Denom, from: number, to: number, k = 10, caption?: string, mints?: Mint[]) =>
    table(['Coin', 'Struck', 'Band'], lowest(d, from, to, k, mints).map((r) => [label(r.year, r.mint), formatNumberL(r.n), band(r.n).label.replace(/ \(.*\)$/, '')]), caption, ['l', 'r', 'l']);
  const lowestList = (d: Denom, from: number, to: number, k = 5, mints?: Mint[]) => lowest(d, from, to, k, mints).map((r) => `${label(r.year, r.mint)} (${formatNumberL(r.n)})`).join(', ');
  /** Commemorative coins subtracted for a denomination, year and mint (table LIII), 0 if none. */
  const commem = (d: Denom, y: number, m: Mint) => ((MT as any).commemoratives?.[d]?.[String(y)]?.[m] as number | undefined) ?? 0;
  return {
    commem,
    lang, a, ext, src, num, money, usd, price, pct: (x: number, d = 0) => pct(x, 'en', d), P,
    PENNY: P.penny, MARKS: P.marks, CFR: P.cfr82, METALS: P.metals,
    mint, mintN, total, meltOf, meltN, oz, grams, alloy, seriesTable, lowestTable, lowestList, band: (n: number) => band(n).label,
    /** Silver and copper prices read at build (gold-api.com), with their date in words. */
    silver: price(BUILD_PRICES.silverOz), copper: price(BUILD_PRICES.copperLb), priceDate: dateL(BUILD_AT),
    silverN: BUILD_PRICES.silverOz,
    wbMonth: monthL(P.metals.month),
    ozPerDollar: formatNumberL(ozPerFaceDollar90(), 'en', 4),
    states: STATES, face: FACE, denomLabel: DENOM_LABEL,
    date: (iso: string) => dateL(iso),
    table: (h: string[], r: Array<Array<string | number>>, c?: string, al: Array<'l' | 'r'> = []) => table(h, r, c, al),
  };
}
export type Helpers = ReturnType<typeof helpers>;
