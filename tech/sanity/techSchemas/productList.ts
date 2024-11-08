import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'productList',
  title: 'Product List',
  type: 'document',
  fields: [
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'text',
          name: 'item',
          title: 'Item',
          rows: 2,
        },
      ],
    }),
  ],
  preview: {
    select: {
      order: 'order',
      title: 'title',
      items: 'items',
    },
    prepare({ order, title, items }) {
      return {
        title: `${order}. ${title}`,
        subtitle: items.join(', '),
      };
    },
  },
});
