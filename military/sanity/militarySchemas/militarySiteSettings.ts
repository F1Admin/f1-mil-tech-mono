import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Military Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'militaryLogo',
      title: 'Military Logo',
      type: 'image',
    }),
    defineField({
      name: 'footerLogo',
      title: 'Footer Logo',
      type: 'image',
    }),
  ],
});
