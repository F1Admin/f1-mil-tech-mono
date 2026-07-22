import { defineType, defineField } from 'sanity';
import { pageSectionBlocks } from './heroes';

export default defineType({
  name: 'militaryCoursesPage',
  title: 'Courses Page',
  type: 'document',
  fields: [
    defineField({
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      description: 'Blocks making up the page',
      of: pageSectionBlocks,
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Courses Page',
      };
    },
  },
});
