import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'techAboutPage',
  title: 'Tech About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'image1',
      title: 'Image 1',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'image1_title',
      title: 'Image 1 Title',
      type: 'string',
    }),
    defineField({
      name: 'image1_subTitle',
      title: 'Image 1 Subtitle',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image2',
      title: 'Image 2',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'image2_title',
      title: 'Image 2 Title',
      type: 'string',
    }),
    defineField({
      name: 'image2_subTitle',
      title: 'Image 2 Subtitle',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'image3',
      title: 'Image 3 Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'image3_title',
      title: 'Image 3 Title',
      type: 'string',
    }),
    defineField({
      name: 'image3_subTitle',
      title: 'Image 3 Subtitle',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'facilities_title',
      title: 'Facilities Title',
      type: 'string',
    }),
    defineField({
      name: 'facilities_text',
      title: 'facilities Text',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'philosophy_title',
      title: 'Philosophy Title',
      type: 'string',
    }),
    defineField({
      name: 'philosophy_text',
      title: 'Philosophy Text',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
});
