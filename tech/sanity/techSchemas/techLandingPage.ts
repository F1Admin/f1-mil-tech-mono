import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'techLandingPage',
  title: 'Tech Landing Page',
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
      name: 'title',
      title: 'Landing Page Title',
      type: 'string',
    }),
    defineField({
      name: 'subTitle',
      title: 'Landing Page Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'image2',
      title: 'Image 2',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
});
