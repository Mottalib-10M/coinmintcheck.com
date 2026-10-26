/**
 * Coin checker (home): coin, year, mint, metal → design, mint mark, number struck at that mint, mintage
 * band, silver content and metal value at the price of the moment. First render = build defaults and
 * build prices (RECETTE §17.5); the URL is read after hydration and written only after an interaction.
 */
import { useEffect, useMemo, useState } from 'react';
import NumberField from '../ui/NumberField';
import SelectField from '../ui/SelectField';
import { DENOMS, DENOM_LABEL, MINTS, MINT_LABEL, FIRST_YEAR, LAST_YEAR, lookup, type Denom, type Mint } from '../../lib/engine/coins';
import { usePrices } from '../../lib/prices';
import { usd, formatNumberL, price, dateL } from '../../lib/format-l';
import { readParams, num, str, updateURL } from '../../lib/url-state';
import { PRIVACY } from './fields';

interface Props { idPrefix?: string; primary?: boolean; denom?: Denom; year?: number; mint?: Mint; links?: Record<string, string> }
const clampYear = (y: number) => Math.max(FIRST_YEAR, Math.min(LAST_YEAR, Math.round(y || FIRST_YEAR)));

export default function CoinCheck({ idPrefix = 'cc', primary = false, denom = 'quarter', year = 1964, mint = 'D', links = {} }: Props) {
  const [d, setD] = useState<Denom>(denom);
  const [y, setY] = useState<number>(year);
  const [m, setM] = useState<Mint>(mint);
  const [vi, setVi] = useState(0);
  const ps = usePrices();
  useEffect(() => {
    const u = readParams(window.location.search);
    const c = str(u, 'c', denom) as Denom;
    if (DENOMS.includes(c)) setD(c);
    setY(clampYear(num(u, 'y', year)));
    const mm = str(u, 'm', mint) as Mint;
    if (MINTS.includes(mm)) setM(mm);
    setVi(num(u, 'v', 0));
  }, []);
  const yy = clampYear(y);
  const r = useMemo(() => lookup(d, yy, m, vi, ps.prices), [d, yy, m, vi, ps]);
  useEffect(() => { updateURL({ c: d, y: yy, m, v: vi || undefined }); }, [d, yy, m, vi]);
  const id = (s: string) => `${idPrefix}-${s}`;
  const seriesName = r.series.length ? r.series.map((s) => s.name).join(' / ') : 'No coin of this kind was dated this year';
  const seriesLink = r.series.length === 1 ? links[r.series[0].id] : undefined;
  const mintageText = r.mintage.n != null ? `${formatNumberL(r.mintage.n)}${r.mintage.approx ? ' (rounded by the Mint)' : ''}` : 'no figure in the tables we hold';
  const metalShares = r.melt.parts.map((p) => `${p.metal} ${formatNumberL(p.grams, 'en', 2)} g`).join(', ');
  return (
    <div data-chrome className={`not-prose rounded-xl border border-accent-200 bg-white p-4 sm:p-5 ${primary ? 'my-2' : 'my-8'}`}>
      <div className="grid gap-5 lg:grid-cols-2">
        <form className="grid content-start gap-3 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()} {...(primary ? {} : { 'data-simulateur-secondaire': '' })}>
          <SelectField id={id('c')} label="Coin" value={d} onChange={(x) => { setD(x as Denom); setVi(0); }} options={DENOMS.map((k) => ({ value: k, label: DENOM_LABEL[k] }))} />
          <NumberField id={id('y')} label="Year on the coin" value={y} onChange={(x) => { setY(x); setVi(0); }} min={FIRST_YEAR} max={LAST_YEAR} grouping={false} tag="en-US" />
          <SelectField id={id('m')} label="Mint mark" value={m} onChange={(x) => { setM(x as Mint); setVi(0); }} options={MINTS.map((k) => ({ value: k, label: MINT_LABEL[k] }))} />
          <SelectField id={id('v')} label="Metal" value={String(Math.min(vi, r.variants.length - 1))} onChange={(x) => setVi(Number(x))} options={r.variants.map((v, i) => ({ value: String(i), label: v.label }))} />
        </form>
        <div aria-live="polite" {...(primary ? { 'data-resultat': '' } : {})} className="rounded-lg bg-navy-50 p-4">
          <p className="text-sm font-medium text-navy-600">Metal value of one coin</p>
          <p className="tabular-nums mt-1 text-3xl font-bold text-navy-900">{usd(r.melt.total)}</p>
          <table className="mt-3 w-full text-sm"><tbody className="divide-y divide-navy-200">
            <tr><td className="py-1.5 pr-3 text-navy-600">Design</td><td className="py-1.5 text-right text-navy-900">{seriesLink ? <a className="underline" href={seriesLink}>{seriesName}</a> : seriesName}</td></tr>
            <tr><td className="py-1.5 pr-3 text-navy-600">Mint mark on the coin</td><td className="py-1.5 text-right text-navy-900">{r.mark}</td></tr>
            <tr><td className="py-1.5 pr-3 text-navy-600">Struck at this mint</td><td className="tabular-nums py-1.5 text-right text-navy-900">{mintageText}</td></tr>
            {r.band && <tr><td className="py-1.5 pr-3 text-navy-600">Mintage band</td><td className="py-1.5 text-right text-navy-900">{r.band.label}</td></tr>}
            <tr><td className="py-1.5 pr-3 text-navy-600">Metal inside</td><td className="tabular-nums py-1.5 text-right text-navy-900">{metalShares}</td></tr>
            {r.melt.silverOz > 0 && <tr><td className="py-1.5 pr-3 text-navy-600">Pure silver</td><td className="tabular-nums py-1.5 text-right text-navy-900">{formatNumberL(r.melt.silverOz, 'en', 4)} troy oz</td></tr>}
            <tr><td className="py-1.5 pr-3 text-navy-600">Face value</td><td className="tabular-nums py-1.5 text-right text-navy-900">{usd(r.face)}</td></tr>
          </tbody></table>
          {r.mintage.notes.length > 0 && <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-navy-600">{r.mintage.notes.map((n) => <li key={n}>{n}</li>)}</ul>}
          <p className="mt-2 text-xs text-navy-600">Silver {price(ps.prices.silverOz)} per troy oz, copper {price(ps.prices.copperLb)} per lb ({ps.live ? 'live price' : 'last price read'}, {dateL(ps.at)}). A collector may pay more than metal value for a scarce date or a fine coin; this tool does not give a dealer price.</p>
        </div>
      </div>
      <p className="mt-3 text-xs text-navy-500">{PRIVACY}</p>
    </div>
  );
}
