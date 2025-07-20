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
      name: 'productQuoteToggle',
      title: 'Product Quote Visibility',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'productQuote',
      title: 'Product Quote',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'preOrderToggle',
      title: 'Pre-Order Visibility',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'preOrderTitle',
      title: 'Pre-Order Title',
      type: 'string',
    }),
    defineField({
      name: 'preOrderButtonText',
      title: 'Pre-Order Button Text',
      type: 'string',
    }),
    defineField({
      name: 'preOrderLink',
      title: 'Pre-Order Link',
      type: 'url',
    }),
    defineField({
      name: 'preOrderSubtitle',
      title: 'Pre-Order Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'preOrderSubtitleLink',
      title: 'Pre-Order Subtitle Link',
      type: 'url',
    }),
    defineField({
      name: 'productDescription',
      title: 'Product Description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'videoToggle',
      title: 'Video Visibility',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'youtubeVideo',
    }),
    defineField({
      name: 'featuresToggle',
      title: 'Features Visibility',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'comparisonChartToggle',
      title: 'Comparison Chart Visibility',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'comparisonChartTitle',
      title: 'Comparison Chart Title',
      type: 'string',
    }),
    defineField({
      name: 'comparisonChart',
      title: 'Comparison Chart',
      type: 'image',
    }),
    defineField({
      name: 'productCarousel',
      title: 'Product Carousel',
      type: 'array',
      of: [{ type: 'productPhoto' }],
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
