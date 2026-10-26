#!/usr/bin/env python3
"""
Builds src/data/mintages.json from the transcriptions in data/mint-tables/ (rejouable).

Sources (all US government works, public domain):
- Bureau of the Mint, "Domestic and Foreign Coins Manufactured by Mints of the United States
  1793-1980" (Department of the Treasury, 1981), scanned copy on the Internet Archive
  (item domesticforeignc00unit80). Tables XVII, XXI, XXIII, XXV, XXIX, XXXI, XXXIII, XXXVII,
  XXXIX, XLIII, XLVII: pieces made per CALENDAR year at each mint; tables LIV to LVIII: coins
  BEARING the dates 1964, 1965, 1966, 1974 and 1776-1976. Every column was transcribed by hand
  from the page images and checked against the printed column totals or the face-value tables.
- US Mint, "Circulating Coin Production" pages (archived copies on the Internet Archive):
  50 State Quarters 1999-2008 per state and mint, and yearly totals per mint for 2010-2012 and
  2016-2023, published in millions of coins.

Rules applied here:
- 1964, 1965, 1966 and 1974: the dated tables replace the calendar tables (coins dated 1964 were
  struck until April 1966, coins dated 1974 until September 1975).
- 1975: no dollar, half dollar or quarter dated 1975; 1976: the 1776-1976 dated table.
- Commemorative coins (table LIII, silver issues of 1892 to 1954) are counted in the silver tables
  of their mint; they are subtracted here so that a figure means the regular coins. Table LIII
  excludes the coins reserved for assay, so a few dozen pieces remain in years when only
  commemoratives were struck: a remainder under 1,000 is read as assay coins and the year/mint is
  recorded as "commemoratives only" instead of a mintage.
- 1909 cents, 1916 dimes, 1921 Philadelphia dollars, 1938 nickels: the calendar figure mixes the
  outgoing and the incoming design; the engine says so.
Usage: python3 scripts/build-mintages.py   (writes src/data/mintages.json, prints counts)
"""
import json
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
T = os.path.join(ROOT, 'data', 'mint-tables')
OUT = os.path.join(ROOT, 'src', 'data', 'mintages.json')
DENOMS = ['cent', 'nickel', 'dime', 'quarter', 'half', 'dollar']


def rows(name):
    with open(os.path.join(T, name + '.txt'), encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith('#'):
                yield line.split(';')


def num(v):
    return None if v in ('-', '') else int(v)


data = {d: {} for d in DENOMS}


def put(denom, year, mint, n):
    if n is None or n == 0:
        return
    data[denom].setdefault(str(year), {})[mint] = n


SILVER_COLS = ['dollar', 'half', 'quarter', 'dime']
for mint, f in [('P', 'silver-P'), ('D', 'silver-D'), ('S', 'silver-S')]:
    for r in rows(f):
        y = int(r[0])
        for i, d in enumerate(SILVER_COLS):
            put(d, y, mint, num(r[i + 1]))
for r in rows('silver-O'):
    put('dollar', int(r[0]), 'O', num(r[1]))
for r in rows('silver-CC'):
    put('dollar', int(r[0]), 'CC', num(r[1]))
for mint, f in [('P', 'clad-P'), ('D', 'clad-D'), ('S', 'clad-S')]:
    for r in rows(f):
        y = int(r[0])
        for i, d in enumerate(SILVER_COLS):
            v = num(r[i + 1])
            if v:
                # clad tables follow the silver ones: from 1965 a year holds clad pieces (and the
                # silver pieces still dated 1964 struck in 1965 and 1966, replaced below)
                data[d].setdefault(str(y), {})
                data[d][str(y)][mint] = data[d][str(y)].get(mint, 0) + v if y in (1965, 1966) else v
for mint, f in [('P', 'minor-P'), ('D', 'minor-D'), ('S', 'minor-S')]:
    for r in rows(f):
        y = int(r[0])
        put('nickel', y, mint, num(r[1]))
        put('cent', y, mint, num(r[2]))

# Dated tables: replace the year entirely.
dated = {}
for r in rows('dated'):
    d, y = r[0], int(r[1])
    dated.setdefault((d, y), {})
    for mint, v in zip(['P', 'D', 'S'], r[2:5]):
        if num(v):
            dated[(d, y)][mint] = num(v)
for (d, y), v in dated.items():
    data[d][str(y)] = v
for d in ['dollar', 'half', 'quarter']:
    data[d].pop('1975', None)

# Commemoratives (table LIII): subtract from the regular figures.
comm, comm_only = {}, []
for r in rows('commemoratives'):
    y, mint, d, n = r[0], r[1], r[2], int(r[3])
    comm.setdefault(d, {}).setdefault(y, {}).setdefault(mint, 0)
    comm[d][y][mint] += n
for d, ys in comm.items():
    for y, ms in ys.items():
        for mint, n in ms.items():
            v = data[d].get(y, {}).get(mint)
            if v is None or v < n:
                raise SystemExit(f'commemoratives larger than the table: {d} {y} {mint}')
            rest = v - n
            if rest < 1000:
                del data[d][y][mint]
                comm_only.append({'denom': d, 'year': int(y), 'mint': mint, 'commemorative': n, 'assay': rest})
            else:
                data[d][y][mint] = rest

# Modern totals (millions, rounded by the Mint).
modern = {}
COLS = ['cent', 'nickel', 'dime', 'quarter', 'half', 'nativeDollar', 'presDollar']
for r in rows('modern-production'):
    y, cap, mint = int(r[0]), r[1], r[2]
    for c, v in zip(COLS, r[3:]):
        n = round(float(v) * 1_000_000)
        if n:
            modern.setdefault(c, {}).setdefault(str(y), {})[mint] = n
    modern.setdefault('_captures', {})[str(y)] = cap

states = []
for r in rows('state-quarters'):
    states.append({'year': int(r[0]), 'state': r[1], 'D': int(r[2]), 'P': int(r[3])})

out = {'_note': 'Generated by scripts/build-mintages.py from data/mint-tables/. Do not edit by hand.',
       'calendar': data, 'modern': modern, 'stateQuarters': states,
       'commemoratives': comm, 'commemorativesOnly': comm_only}
with open(OUT, 'w', encoding='utf-8') as f:
    json.dump(out, f, separators=(',', ':'), sort_keys=True)
    f.write('\n')
for d in DENOMS:
    ys = sorted(int(y) for y in data[d])
    print(f'{d}: {len(ys)} years {ys[0]}-{ys[-1]}')
print('commemoratives only:', [(c['denom'], c['year'], c['mint']) for c in comm_only])
print('modern years', sorted(modern['_captures']), 'state quarters', len(states))
