import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'productPhoto',
  title: 'Product Photo',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Enables image cropping and hotspot selection
      },
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
  ],
});
