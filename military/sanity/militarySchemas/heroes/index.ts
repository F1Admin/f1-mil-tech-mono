import heroTitle from './heroTitle';
import heroTitleSubtitle from './heroTitleSubtitle';
import videoHero from './videoHero';
import aboutSection from './aboutSection';
import heroQuote from './heroQuote';
import footerHero from './footerHero';
import courseGridBlock from './courseGridBlock';
import courseListBlock from './courseListBlock';

export const heroSchemas = [
  heroTitle,
  heroTitleSubtitle,
  videoHero,
  aboutSection,
  heroQuote,
  footerHero,
  courseGridBlock,
  courseListBlock,
];

// Shared `of` list for any page's block-based `sections`/`heroes` array.
// Add a new block type to heroSchemas above, then here, to make it
// available on every page that uses pageSectionBlocks.
export const pageSectionBlocks = [
  { type: 'heroTitle' },
  { type: 'heroTitleSubtitle' },
  { type: 'heroQuote' },
  { type: 'videoHero' },
  { type: 'aboutSection' },
  { type: 'footerHero' },
  { type: 'courseGridBlock' },
  { type: 'courseListBlock' },
];

export {
  heroTitle,
  heroTitleSubtitle,
  videoHero,
  aboutSection,
  heroQuote,
  footerHero,
  courseGridBlock,
  courseListBlock,
};
