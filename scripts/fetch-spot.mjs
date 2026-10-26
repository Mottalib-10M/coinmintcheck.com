#!/usr/bin/env node
/**
 * Silver and copper price at build time (RECETTE §4, live data).
 * Source: https://api.gold-api.com/price/XAG and /price/HG (gold-api.com, terms section 9: commercial
 * use permitted, including on websites; CORS open). Read on 2026-10-26.
 * The file written (src/data/spot-snapshot.json) gives the first render of every page; the browser then
 * replaces it with the price of the moment. If the network fails, the existing file is kept as it is and
 * the pages show the date of that last reading.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
const F = new URL('../src/data/spot-snapshot.json', import.meta.url);
const old = existsSync(F) ? JSON.parse(readFileSync(F, 'utf8')) : null;
async function j(u) { const r = await fetch(u, { signal: AbortSignal.timeout(15000) }); if (!r.ok) throw new Error(`${u} ${r.status}`); return r.json(); }
try {
  const ag = await j('https://api.gold-api.com/price/XAG');
  const cu = await j('https://api.gold-api.com/price/HG');
  if (!(ag.price > 1 && ag.price < 1000)) throw new Error('silver price out of bounds');
  if (!(cu.price > 0.5 && cu.price < 50)) throw new Error('copper price out of bounds');
  const snap = { silverOz: Math.round(ag.price * 100) / 100, copperLb: Math.round(cu.price * 10000) / 10000, at: ag.updatedAt ?? new Date().toISOString(), source: 'gold-api.com' };
  writeFileSync(F, JSON.stringify(snap, null, 1) + '\n');
  console.log(`spot read: silver ${snap.silverOz} USD/oz, copper ${snap.copperLb} USD/lb at ${snap.at}`);
} catch (err) {
  if (!old) { console.error('no reading and no existing file:', err.message); process.exit(1); }
  console.warn(`reading failed (${err.message}): keeping the one of ${old.at}`);
}
