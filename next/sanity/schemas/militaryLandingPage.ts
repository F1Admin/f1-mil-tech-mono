import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'militaryLandingPage',
  title: 'Military Landing Page',
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
      name: 'image2_subTitle',
      title: 'Image 2 Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'image3',
      title: 'Image 3',
      type: 'image',
    }),
  ],
});
