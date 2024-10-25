import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'militaryAboutPage',
  title: 'Military About Page',
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
      name: 'image3',
      title: 'Origins Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'image3_title',
      title: 'Origins Title',
      type: 'string',
    }),
    defineField({
      name: 'image3_subTitle',
      title: 'Origins Subtitle',
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
      name: 'selection_title',
      title: 'Selection Title',
      type: 'string',
    }),
    defineField({
      name: 'selection_text',
      title: 'Selection Text',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
});
