import type { Locale } from './routes';
const en = {
  updatedOn: 'Figures checked on', editorialPolicy: 'Editorial policy', contactLabel: 'Contact', reviewedBy: 'Mintages, metals and prices read by',
  skipToContent: 'Skip to content', mainNav: 'Main navigation', breadcrumbLabel: 'Breadcrumb', breadcrumbHome: 'Home', menuOpen: 'Open menu',
  faqTitle: 'Common questions', relatedCalculators: 'Next steps', sourcesTitle: 'Official sources behind this page', writtenBy: 'Written by',
  asOf: 'US coin data', lastUpdated: 'read in the US Mint tables and public price data, last checked on',
  footerValidated: 'Every mintage, weight and date links to the Mint table or page it was read on',
  footerBrowser: 'Tools run in your browser · nothing you type is sent or stored · free, no account, nothing for sale',
  footerDisclaimer: 'Coin Mint Check is an independent site published by Radif Partners. It is not the United States Mint, the Treasury, a coin dealer, an auction house, a grading service or an appraiser, and it buys and sells nothing. Metal values follow public prices: they are indicative, not offers, and do not replace the opinion of an expert who sees the coin.',
  footerPopular: 'Tools',
  notFound: 'There is no page at this address. The coin value checker is on the home page.',
  readMore: 'Read more', back: 'Home',
  independent: 'Independent site, not the US Mint or the Treasury. Official decisions are those published by the Mint.',
};
export function t(_lang: Locale = 'en') { return en; }
