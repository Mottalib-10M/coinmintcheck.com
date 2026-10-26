/**
 * Melt value calculator: kind of coin + how many → metal value, silver content and face value.
 * The silver and copper prices follow the live price until the visitor types one of their own.
 * First render = build values (RECETTE §17.5); URL written only after an interaction.
 */
import { useEffect, useMemo, useState } from 'react';
import NumberField from '../ui/NumberField';
import SelectField from '../ui/SelectField';
import { melt, alloy, type AlloyKey } from '../../lib/engine/coins';
import { usePrices } from '../../lib/prices';
import { usd, money, formatNumberL, price, dateL } from '../../lib/format-l';
import { readParams, num, str, updateURL } from '../../lib/url-state';
import { PRIVACY } from './fields';

/** Coin types offered, with the face value of one coin. */
export const MELT_TYPES: Array<{ key: AlloyKey; label: string; face: number }> = [
  { key: 'silverDime', label: 'Dime, 90% silver (1964 and earlier)', face: 0.1 },
  { key: 'silverQuarter', label: 'Quarter, 90% silver (1964 and earlier)', face: 0.25 },
  { key: 'silverHalf', label: 'Half dollar, 90% silver (1964 and earlier)', face: 0.5 },
  { key: 'silverDollar', label: 'Morgan or Peace dollar, 90% silver', face: 1 },
  { key: 'silverCladHalf', label: 'Kennedy half, 40% silver (1965 to 1970)', face: 0.5 },
  { key: 'warNickel', label: 'Wartime nickel, 35% silver (1942 to 1945)', face: 0.05 },
  { key: 'bronzeCent', label: 'Penny, 95% copper (1982 and earlier)', face: 0.01 },
  { key: 'zincCent', label: 'Penny, zinc (1982 and later)', face: 0.01 },
  { key: 'nickel', label: 'Nickel, copper-nickel', face: 0.05 },
  { key: 'cladDime', label: 'Dime, copper-nickel clad (1965 and later)', face: 0.1 },
  { key: 'cladQuarter', label: 'Quarter, copper-nickel clad (1965 and later)', face: 0.25 },
  { key: 'cladHalf', label: 'Half dollar, copper-nickel clad (1971 and later)', face: 0.5 },
  { key: 'goldenDollar', label: 'Golden dollar (2000 and later)', face: 1 },
];

interface Props { idPrefix?: string; primary?: boolean; type?: AlloyKey; qty?: number }

export default function MeltCalc({ idPrefix = 'mc', primary = false, type = 'silverQuarter', qty = 10 }: Props) {
  const ps = usePrices();
  const [t, setT] = useState<number>(Math.max(0, MELT_TYPES.findIndex((x) => x.key === type)));
  const [q, setQ] = useState<number>(qty);
  const [ag, setAg] = useState<number | null>(null);
  const [cu, setCu] = useState<number | null>(null);
  useEffect(() => {
    const u = readParams(window.location.search);
    const k = str(u, 't', type);
    const i = MELT_TYPES.findIndex((x) => x.key === k);
    if (i >= 0) setT(i);
    setQ(num(u, 'q', qty));
    if (u.get('ag')) setAg(num(u, 'ag', 0) || null);
    if (u.get('cu')) setCu(num(u, 'cu', 0) || null);
  }, []);
  const ty = MELT_TYPES[t] ?? MELT_TYPES[0];
  const prices = useMemo(() => ({ ...ps.prices, silverOz: ag ?? ps.prices.silverOz, copperLb: cu ?? ps.prices.copperLb }), [ps, ag, cu]);
  const one = useMemo(() => melt(ty.key, prices), [ty, prices]);
  const n = Math.max(0, Math.round(q));
  useEffect(() => { updateURL({ t: ty.key, q: n, ag: ag ?? undefined, cu: cu ?? undefined }); }, [ty, n, ag, cu]);
  const id = (s: string) => `${idPrefix}-${s}`;
  const total = one.total * n;
  const face = ty.face * n;
  const a = alloy(ty.key);
  return (
    <div data-chrome className={`not-prose rounded-xl border border-accent-200 bg-white p-4 sm:p-5 ${primary ? 'my-2' : 'my-8'}`}>
      <div className="grid gap-5 lg:grid-cols-2">
        <form className="grid content-start gap-3 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()} {...(primary ? {} : { 'data-simulateur-secondaire': '' })}>
          <SelectField id={id('t')} label="Coin" value={String(t)} onChange={(x) => setT(Number(x))} options={MELT_TYPES.map((x, i) => ({ value: String(i), label: x.label }))} />
          <NumberField id={id('q')} label="How many coins" value={q} onChange={setQ} max={1_000_000} tag="en-US" />
          <NumberField id={id('ag')} label="Silver price" value={ag ?? Math.round(ps.prices.silverOz * 100) / 100} onChange={(x) => setAg(x || null)} unit="$/oz" decimals={2} max={1000} tag="en-US" help={ag ? 'Your price' : ps.live ? 'Live price' : 'Last price read'} />
          <NumberField id={id('cu')} label="Copper price" value={cu ?? Math.round(ps.prices.copperLb * 100) / 100} onChange={(x) => setCu(x || null)} unit="$/lb" decimals={2} max={100} tag="en-US" help={cu ? 'Your price' : ps.live ? 'Live price' : 'Last price read'} />
        </form>
        <div aria-live="polite" {...(primary ? { 'data-resultat': '' } : {})} className="rounded-lg bg-navy-50 p-4">
          <p className="text-sm font-medium text-navy-600">Melt value of {formatNumberL(n)} coin{n === 1 ? '' : 's'}</p>
          <p className="tabular-nums mt-1 text-3xl font-bold text-navy-900">{usd(total)}</p>
          <table className="mt-3 w-full text-sm"><tbody className="divide-y divide-navy-200">
            <tr><td className="py-1.5 pr-3 text-navy-600">One coin</td><td className="tabular-nums py-1.5 text-right text-navy-900">{usd(one.total)}</td></tr>
            <tr><td className="py-1.5 pr-3 text-navy-600">Face value</td><td className="tabular-nums py-1.5 text-right text-navy-900">{money(face)}</td></tr>
            <tr><td className="py-1.5 pr-3 text-navy-600">Metal value against face value</td><td className="tabular-nums py-1.5 text-right text-navy-900">{face > 0 ? `${formatNumberL(total / face, 'en', 1)} times` : 'none'}</td></tr>
            {one.silverOz > 0 && <tr><td className="py-1.5 pr-3 text-navy-600">Pure silver in all</td><td className="tabular-nums py-1.5 text-right text-navy-900">{formatNumberL(one.silverOz * n, 'en', 3)} troy oz</td></tr>}
            <tr><td className="py-1.5 pr-3 text-navy-600">Weight of one coin</td><td className="tabular-nums py-1.5 text-right text-navy-900">{formatNumberL(a.grams, 'en', 2)} g</td></tr>
          </tbody></table>
          <p className="mt-2 text-xs text-navy-600">Nickel and zinc at the World Bank monthly average; prices of {dateL(ps.at)}. Melting or exporting pennies and nickels is banned by 31 CFR Part 82, except the wartime silver nickels. This is the value of the metal at the price shown, not an offer to buy; a collector may pay more for a scarce coin.</p>
        </div>
      </div>
      <p className="mt-3 text-xs text-navy-500">{PRIVACY}</p>
    </div>
  );
}
