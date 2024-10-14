import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'techProductsPage',
  title: 'Products Page',
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
      name: 'title',
      title: 'Page Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Page Subtitle',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'heroImageQuote',
      title: 'Hero Image Quote',
      type: 'string',
    }),
    defineField({
      name: 'footerImage',
      title: 'Page Footer Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
});
