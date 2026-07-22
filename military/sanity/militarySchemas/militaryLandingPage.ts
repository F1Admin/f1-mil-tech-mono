import { defineField, defineType } from 'sanity';
import { pageSectionBlocks } from './heroes';

export default defineType({
  name: 'militaryLandingPage',
  title: 'Military Landing Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroes',
      title: 'Page Sections',
      description: 'Blocks making up the page',
      type: 'array',
      of: pageSectionBlocks,
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Home Page',
      };
    },
  },
});
