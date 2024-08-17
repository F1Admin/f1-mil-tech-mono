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
    }),
    defineField({
      name: 'image2',
      title: 'Image 2',
      type: 'image',
    }),
    defineField({
      name: 'image2_title',
      title: 'Image 2 Title',
      type: 'string',
    }),
    defineField({
      name: 'image2_subTitle1',
      title: 'Image 2 Subtitle 1',
      type: 'text',
    }),
    defineField({
      name: 'image2_subTitle2',
      title: 'Image 2 Subtitle 2',
      type: 'text',
    }),
    defineField({
      name: 'image3',
      title: 'Image 3',
      type: 'image',
    }),
    defineField({
      name: 'image3_title',
      title: 'Image 3 Title',
      type: 'string',
    }),
    defineField({
      name: 'image3_subTitle',
      title: 'Image 3 Subtitle',
      type: 'text',
    }),
  ],
});
