import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'militaryCoursesPage',
  title: 'Courses Page',
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
      name: 'titleColor',
      title: 'Title Color',
      type: 'string',
      options: {
        list: ['white', 'black'],
      },
    }),
    defineField({
      name: 'heroImageQuote',
      title: 'Hero Image Quote',
      type: 'string',
    }),
    defineField({
      name: 'heroImageQuoteAuthor',
      title: 'Hero Image Quote Author',
      type: 'string',
    }),
    defineField({
      name: 'quoteColor',
      title: 'Quote Color',
      type: 'string',
      options: {
        list: ['white', 'black'],
      },
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
