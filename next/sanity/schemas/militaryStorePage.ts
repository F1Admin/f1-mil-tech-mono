import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'militaryStorePage',
  title: 'Military Store Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'link',
      title: 'Store Link',
      type: 'url',
    }),
    defineField({
      name: 'footerImage',
      title: 'Course Footer Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'footerText',
      title: 'Course Footer Text',
      type: 'string',
    }),
    defineField({
      name: 'footerAuthor',
      title: 'Footer Author',
      type: 'string',
    }),
  ],
});
