import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'militaryLandingPage',
  title: 'Military Landing Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroes',
      title: 'Hero Sections',
      type: 'array',
      of: [
        { type: 'heroTitle' },
        { type: 'heroTitleSubtitle' },
        { type: 'videoHero' },
      ],
    }),
    // Legacy fields - kept for migration, can be removed after data is migrated
    defineField({
      name: 'image1',
      title: '[Legacy] Image 1',
      type: 'image',
      options: { hotspot: true },
      hidden: true,
    }),
    defineField({
      name: 'image1_title',
      title: '[Legacy] Image 1 Title',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'image2',
      title: '[Legacy] Image 2',
      type: 'image',
      options: { hotspot: true },
      hidden: true,
    }),
    defineField({
      name: 'image2_title',
      title: '[Legacy] Image 2 Title',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'image2_subTitle',
      title: '[Legacy] Image 2 Subtitle',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'image3',
      title: '[Legacy] Image 3',
      type: 'image',
      options: { hotspot: true },
      hidden: true,
    }),
  ],
});
