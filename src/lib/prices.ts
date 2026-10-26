/**
 * Metal prices used by every tool.
 * - First render (server and browser alike, RECETTE §17.5): the silver and copper prices read at build
 *   time from gold-api.com (src/data/spot-snapshot.json), nickel and zinc from the World Bank monthly
 *   average in params-2026.json.
 * - Then, in the browser only, one request to api.gold-api.com for silver (XAG) and copper (HG): the
 *   price of the moment replaces the build price. Nothing about the visitor is sent with it.
 * - The visitor can type a price of their own (MeltCalc): it never leaves the page.
 */
import { useEffect, useState } from 'react';
import S from '../data/spot-snapshot.json';
import P from '../data/params-2026.json';
import { perLbFromMt, type Prices } from './engine/coins';

export const BUILD_PRICES: Prices = {
  silverOz: S.silverOz,
  copperLb: S.copperLb,
  nickelLb: perLbFromMt(P.metals.nickelUsdMt),
  zincLb: perLbFromMt(P.metals.zincUsdMt),
};
export const BUILD_AT = S.at;
export interface PriceState { prices: Prices; at: string; live: boolean }
let current: PriceState = { prices: BUILD_PRICES, at: BUILD_AT, live: false };
const subs = new Set<(s: PriceState) => void>();
let started = false;

async function getJson(u: string) {
  const r = await fetch(u, { signal: AbortSignal.timeout(10000) });
  if (!r.ok) throw new Error(String(r.status));
  return r.json();
}
function start() {
  if (started || typeof window === 'undefined') return;
  started = true;
  Promise.all([getJson('https://api.gold-api.com/price/XAG'), getJson('https://api.gold-api.com/price/HG')])
    .then(([ag, cu]) => {
      if (!(ag.price > 1 && ag.price < 1000 && cu.price > 0.5 && cu.price < 50)) return;
      current = { prices: { ...current.prices, silverOz: ag.price, copperLb: cu.price }, at: ag.updatedAt ?? new Date().toISOString(), live: true };
      subs.forEach((f) => f(current));
    })
    .catch(() => { /* the build price stays, with its date */ });
}
/** Prices for a tool: build values on the first render, live values once fetched. */
export function usePrices(): PriceState {
  const [s, setS] = useState<PriceState>({ prices: BUILD_PRICES, at: BUILD_AT, live: false });
  useEffect(() => {
    subs.add(setS);
    if (current.live) setS(current);
    start();
    return () => { subs.delete(setS); };
  }, []);
  return s;
}
