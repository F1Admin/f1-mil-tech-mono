import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'militaryCadrePage',
  title: 'Military Cadre Page',
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
      name: 'footerImage',
      title: 'Course Footer Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'footerQuote',
      title: 'Footer Quote',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'footerAuthor',
      title: 'Footer Quote Author',
      type: 'string',
    }),
  ],
});
