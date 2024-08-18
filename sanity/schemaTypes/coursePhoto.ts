import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'coursePhoto',
  title: 'Course Photo',
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
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
});
