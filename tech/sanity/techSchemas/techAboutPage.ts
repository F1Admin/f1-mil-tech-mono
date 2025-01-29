import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'techAboutPage',
  title: 'Tech About Page',
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
      title: 'About Title',
      type: 'string',
    }),
    defineField({
      name: 'about_text',
      title: 'About Text',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
});
