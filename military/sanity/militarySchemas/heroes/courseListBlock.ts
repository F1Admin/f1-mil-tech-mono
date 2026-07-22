import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'courseListBlock',
  title: 'Course List',
  type: 'object',
  fields: [
    defineField({
      name: 'showDivider',
      title: 'Show divider line below list',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      showDivider: 'showDivider',
    },
    prepare({ showDivider }) {
      return {
        title: 'Course List',
        subtitle:
          showDivider === false ? 'Renders the course list' : 'Renders the course list, divider on',
      };
    },
  },
});
