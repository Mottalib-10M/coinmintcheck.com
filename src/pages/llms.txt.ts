/** llms.txt (RECETTE §21), generated at build from the page registry: always in sync with the site. */
import { PAGES } from '../lib/guides';
import { SITE_URL, LAST_UPDATED, SITE_NAMES } from '../data/site-config';
import { route } from '../i18n/routes';
import { GROUPS_ORDER, groupLabel } from '../i18n/nav';
import params from '../data/params-2026.json';

const words = (iso: string) => new Date(iso.slice(0, 10) + 'T12:00:00Z').toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
export function GET() {
  const lines = [
    `# ${SITE_NAMES.en}`,
    '',
    `> Free tools to find what a US coin is worth as metal and how many were struck: mintage by year and mint mark from the Bureau of the Mint tables (1878 to 1980) and Mint production reports, alloy and weight, silver content, melt value at the live silver and copper price, junk silver, 1982 penny weight test, grading quiz, and the end of circulating penny production on ${words(params.penny.finalStrike)}. No collector or dealer prices. Independent site, not the United States Mint. Tools run in the browser. Published by Radif Partners. Last updated ${words(LAST_UPDATED)}.`,
    '',
    '## Data',
    `- Mintages: Domestic and Foreign Coins Manufactured by Mints of the United States 1793-1980 (Bureau of the Mint, 1981, US government work) and usmint.gov production pages; specifications from usmint.gov; retrieved ${words(params.retrieved_at)}.`,
    '- Metal prices: World Bank Pink Sheet monthly prices (CC BY 4.0) and gold-api.com live prices.',
    '',
    `- [Coin value checker](${SITE_URL}${route('home', 'en')}): year and mint mark to mintage, metal and melt value`,
    '',
    ...GROUPS_ORDER.flatMap((g) => [`## ${groupLabel(g)}`, ...PAGES.filter((p) => p.group === g).map((p) => `- [${p.en.nav}](${SITE_URL}${route(p.id, 'en')}): ${p.en.card}`), '']),
    '## About',
    `- [Method and sources](${SITE_URL}${route('method', 'en')})`,
    `- [About](${SITE_URL}${route('about', 'en')})`,
  ];
  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
