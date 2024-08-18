import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'militaryCourse',
  title: 'Military Course',
  type: 'document',
  fields: [
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
    }),
    defineField({
      name: 'courseNumber',
      title: 'Course Number',
      type: 'string',
    }),
    defineField({
      name: 'courseTitle',
      title: 'Course Title',
      type: 'string',
    }),
    defineField({
      name: 'courseSeriesImage',
      title: 'Course Image',
      type: 'image',
    }),
    defineField({
      name: 'courseDescription',
      title: 'Course Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'courseRequirements',
      title: 'Course Requirements',
      type: 'text',
    }),
    defineField({
      name: 'courseCarousel',
      title: 'Course Carousel',
      type: 'array',
      of: [{ type: 'coursePhoto' }],
    }),
    defineField({
      name: 'courseFooterImage',
      title: 'Course Footer Image',
      type: 'image',
    }),
    defineField({
      name: 'courseFooterText',
      title: 'Course Footer Text',
      type: 'string',
    }),
  ],
});
