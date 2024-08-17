import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'favicon',
      title: 'Site Favicon',
      type: 'image',
    }),
    defineField({
      name: 'militaryLogo',
      title: 'Military Logo',
      type: 'image',
    }),
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
