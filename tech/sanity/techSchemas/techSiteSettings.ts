import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Tech Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'techLogo',
      title: 'Tech Logo',
      type: 'image',
    }),
    defineField({
      name: 'footerLogo',
      title: 'Footer Logo',
      type: 'image',
    }),
  ],
});
