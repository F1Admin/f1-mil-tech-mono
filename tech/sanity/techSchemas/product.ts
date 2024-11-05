import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Order of the course in the list',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'productLogo',
      title: 'Product Logo',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
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
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'productTitle',
      title: 'Product Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'productImage',
      title: 'Product Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'productDescription',
      title: 'Product Description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'footerImage',
      title: 'Footer Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'footerText',
      title: 'Footer Text',
      type: 'string',
    }),
    defineField({
      name: 'footerAuthor',
      title: 'Footer Author',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'productTitle',
      order: 'order',
      media: 'productLogo',
    },
    prepare({ title, order, media }) {
      return {
        title: `${order} - ${title}`,
        subtitle: `Order: ${order}`,
        media,
      };
    },
  },
});
