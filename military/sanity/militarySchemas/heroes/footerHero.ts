import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'footerHero',
  title: 'Footer Picture',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'string',
    }),
    defineField({
      name: 'quoteAuthor',
      title: 'Quote Author',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      subtitle: 'quote',
      media: 'image',
    },
    prepare({ subtitle, media }) {
      return {
        title: 'Footer Picture',
        subtitle: subtitle ? `"${subtitle}"` : undefined,
        media,
      };
    },
  },
});
