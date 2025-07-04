import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'partner',
  title: 'Partner',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'partnerName',
      title: 'Partner Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'partnerLogo',
      title: 'Partner Logo',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'partnerUrl',
      title: 'Partner URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      order: 'order',
      title: 'partnerName',
      subtitle: 'partnerUrl',
      media: 'partnerLogo',
    },
    prepare: ({ order, title, media }) => ({
      title: title,
      subtitle: `Order: ${order}`,
      media: media,
    }),
  },
});
