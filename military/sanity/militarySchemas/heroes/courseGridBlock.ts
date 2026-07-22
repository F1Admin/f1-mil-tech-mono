import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'courseGridBlock',
  title: 'Course Grid',
  type: 'object',
  fields: [
    defineField({
      name: 'light',
      title: 'Light Style',
      type: 'boolean',
      description: 'Use the light color variant of the grid',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      light: 'light',
    },
    prepare({ light }) {
      return {
        title: 'Course Grid',
        subtitle: light
          ? 'Renders the hexagon course grid (light)'
          : 'Renders the hexagon course grid',
      };
    },
  },
});
