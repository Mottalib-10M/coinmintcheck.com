#!/usr/bin/env python3
"""Monthly re-reading of the World Bank Pink Sheet (RECETTE §17.4).

Finds the link of CMO-Historical-Data-Monthly.xlsx on the World Bank commodity markets page, reads the last
month of copper, nickel and zinc ($/mt) and silver ($/troy oz), and compares it with src/data/params-2026.json.
- same month and same figures: exit 0;
- a new month or different figures: writes data/official-latest.json (dated trace) and exits 2, so the
  scheduled job fails and a person reads the change before updating the parameter file.
Data: World Bank, Commodity Price Data (The Pink Sheet), CC BY 4.0.
Usage: python3 scripts/update-data.py [--write]
"""
import io, json, re, sys, urllib.request
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PAGE = 'https://www.worldbank.org/en/research/commodity-markets'
COLS = {'copperUsdMt': 'Copper', 'nickelUsdMt': 'Nickel', 'zincUsdMt': 'Zinc', 'silverUsdOz': 'Silver'}

def get(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (data check; Radif Partners)'})
    with urllib.request.urlopen(req, timeout=60) as r:
        return r.read()

def main():
    try:
        import openpyxl
    except ImportError:
        print('openpyxl is required: pip install openpyxl'); return 1
    html = get(PAGE).decode('utf-8', 'replace')
    m = re.search(r'https://thedocs\.worldbank\.org/[^"\']+CMO-Historical-Data-Monthly\.xlsx', html)
    if not m:
        print('link to the monthly file not found on', PAGE); return 1
    wb = openpyxl.load_workbook(io.BytesIO(get(m.group(0))), read_only=True, data_only=True)
    rows = list(wb['Monthly Prices'].iter_rows(values_only=True))
    updated = next((str(r[0]) for r in rows[:6] if r[0] and str(r[0]).startswith('Updated on')), '')
    head = next(r for r in rows if r[1] and 'Crude oil' in str(r[1]))
    idx = {k: next(i for i, c in enumerate(head) if c and str(c).strip() == v) for k, v in COLS.items()}
    last = [r for r in rows if r[0] and re.match(r'^\d{4}M\d\d$', str(r[0])) and isinstance(r[idx['zincUsdMt']], (int, float))][-1]
    month = str(last[0]).replace('M', '-')
    latest = {'month': month, **{k: round(float(last[i]), 1 if k == 'silverUsdOz' else 0) for k, i in idx.items()}}
    params = json.loads((ROOT / 'src/data/params-2026.json').read_text())
    cur = params['metals']
    diffs = [k for k in ['month', *COLS] if (cur.get(k) != latest[k] if k == 'month' else abs(float(cur[k]) - latest[k]) > 0.05)]
    print(f'{updated}; last month {month}:', latest)
    if '--write' in sys.argv:
        out = ROOT / 'data/official-latest.json'
        out.parent.mkdir(exist_ok=True)
        out.write_text(json.dumps({'read_at': datetime.now(timezone.utc).isoformat(timespec='seconds'), 'source': m.group(0), 'updated': updated, 'latest': latest}, indent=1) + '\n')
    if diffs:
        print('CHANGE to read by hand before editing params-2026.json:', ', '.join(diffs)); return 2
    print('no change'); return 0

if __name__ == '__main__':
    sys.exit(main())
