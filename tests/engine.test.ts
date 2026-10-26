/** Coin engine checked against figures read by hand in the Mint tables and specifications. */
import { describe, expect, it } from 'vitest';
import { melt, silverOz, ozPerFaceDollar90, mintage, lowest, centByWeight, variants, markOnCoin, seriesFor, yearTotal, band, STATES, lookup } from '../src/lib/engine/coins';

const PR = { silverOz: 30, copperLb: 4, nickelLb: 8, zincLb: 1.5 };
describe('silver content (Bureau of the Mint weights, 90% silver)', () => {
  it('dime 2.50 g, quarter 6.25 g, half 12.50 g, dollar 26.73 g', () => {
    expect(silverOz('silverDime')).toBeCloseTo(0.07234, 4);
    expect(silverOz('silverQuarter')).toBeCloseTo(0.18084, 4);
    expect(silverOz('silverHalf')).toBeCloseTo(0.36169, 4);
    expect(silverOz('silverDollar')).toBeCloseTo(0.77344, 4);
  });
  it('$1 face of 90% dimes, quarters or halves holds 0.7234 oz', () => expect(ozPerFaceDollar90()).toBeCloseTo(0.7234, 4));
  it('40% half 1965-1970: 11.50 g at 40%', () => expect(silverOz('silverCladHalf')).toBeCloseTo(0.14789, 5));
  it('war nickel: 5 g at 35%', () => expect(silverOz('warNickel')).toBeCloseTo(0.05626, 5));
});
describe('melt value', () => {
  it('silver quarter at $30/oz', () => expect(melt('silverQuarter', PR).total).toBeCloseTo((6.25 * 0.9 / 31.1034768) * 30 + (6.25 * 0.1 / 453.59237) * 4, 9));
  it('bronze cent at $4/lb copper, $1.5/lb zinc', () => expect(melt('bronzeCent', PR).total).toBeCloseTo((3.11 * 0.95 / 453.59237) * 4 + (3.11 * 0.05 / 453.59237) * 1.5, 8));
  it('steel cent counts zero', () => expect(melt('steelCent', PR).total).toBe(0));
});
describe('mintages (Bureau of the Mint, 1981)', () => {
  it('1916-D dime 264,000', () => expect(mintage('dime', 1916, 'D').n).toBe(264000));
  it('1931-S cent 866,000', () => expect(mintage('cent', 1931, 'S').n).toBe(866000));
  it('1893-S dollar 100,000 and 1895 Philadelphia 12,880', () => { expect(mintage('dollar', 1893, 'S').n).toBe(100000); expect(mintage('dollar', 1895, 'P').n).toBe(12880); });
  it('1932-D and 1932-S quarters', () => { expect(mintage('quarter', 1932, 'D').n).toBe(436800); expect(mintage('quarter', 1932, 'S').n).toBe(408000); });
  it('dated 1964 quarters at Denver', () => expect(mintage('quarter', 1964, 'D').n).toBe(704135528));
  it('no quarter dated 1975', () => expect(mintage('quarter', 1975, 'P').n).toBeNull());
  it('1776-1976 quarters at Philadelphia', () => expect(mintage('quarter', 1976, 'P').n).toBe(809784000));
  it('1970-D half 2,150,000', () => expect(mintage('half', 1970, 'D').n).toBe(2150000));
  it('modern figures are flagged approximate', () => { const r = mintage('cent', 2019, 'D'); expect(r.n).toBe(3497600000); expect(r.approx).toBe(true); });
  it('lowest Lincoln wheat cent figure is 1931-S', () => { const l = lowest('cent', 1909, 1958, 3); expect(l[0]).toMatchObject({ year: 1931, mint: 'S' }); });
  it('1943 cents, all mints', () => expect(yearTotal('cent', 1943)).toBe(684628670 + 217660000 + 191550000));
});
describe('state quarters (US Mint)', () => {
  it('50 states, Wisconsin Denver 226,800,000', () => { expect(STATES.length).toBe(50); expect(STATES.find((s) => s.state === 'Wisconsin')).toMatchObject({ D: 226800000, P: 226400000 }); });
});
describe('rules', () => {
  it('1982 cent: both metals, weight decides', () => { expect(variants('cent', 1982).length).toBe(2); expect(centByWeight(3.1)).toBe('bronzeCent'); expect(centByWeight(2.5)).toBe('zincCent'); });
  it('1943 cent is steel first', () => expect(variants('cent', 1943)[0].key).toBe('steelCent'));
  it('1942 Denver nickel is never wartime alloy', () => expect(variants('nickel', 1942, 'D').length).toBe(1));
  it('mint marks: none 1965-1967, P on dimes from 1980, P cent 2017 only', () => {
    expect(markOnCoin('dime', 1966, 'D')).toMatch(/none/);
    expect(markOnCoin('dime', 1980, 'P')).toBe('P');
    expect(markOnCoin('dime', 1979, 'P')).toBe('none');
    expect(markOnCoin('cent', 2017, 'P')).toBe('P');
    expect(markOnCoin('cent', 2018, 'P')).toBe('none');
  });
  it('series changeovers', () => { expect(seriesFor('cent', 1909).length).toBe(2); expect(seriesFor('dollar', 1950).length).toBe(0); expect(seriesFor('dollar', 1921).length).toBe(2); });
  it('bands', () => { expect(band(866000).id).toBe('very-low'); expect(band(3_000_000).id).toBe('low'); expect(band(300_000_000).id).toBe('very-high'); });
  it('lookup returns a melt value and notes', () => { const r = lookup('cent', 1909, 'P', 0, PR); expect(r.mintage.notes.join(' ')).toMatch(/Indian Head/); expect(r.melt.total).toBeGreaterThan(0); });
  it('commemoratives subtracted (table LIII)', () => {
    expect(mintage('half', 1933, 'D').n).toBeNull();
    expect(mintage('half', 1933, 'D').notes.join(' ')).toMatch(/Only commemorative/);
    expect(mintage('half', 1921, 'P').n).toBe(466125 - 220000);
    expect(mintage('half', 1938, 'D').n).toBe(513620 - 22000);
    expect(mintage('dollar', 1900, 'P').n).toBe(8880938 - 50000);
    expect(lowest('half', 1916, 1947, 5).every((x) => x.n >= 1000)).toBe(true);
  });
});
