import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'militaryPartnerPage',
  title: 'Military Partner Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
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
    }),
    defineField({
      name: 'footerText',
      title: 'Course Footer Text',
      type: 'string',
    }),
  ],
});
