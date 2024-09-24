import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'supportingCourse',
  title: 'Supporting Course',
  type: 'document',
  fields: [
    defineField({
      name: 'courseTitle',
      title: 'Course Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        maxLength: 96,
      },
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Order of the course in the list',
    }),
    defineField({
      name: 'courseSeriesImage',
      title: 'Course Image',
      type: 'image',
    }),
    defineField({
      name: 'courseDescription',
      title: 'Course Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'courseRequirements',
      title: 'Course Requirements',
      type: 'array',
      of: [{ type: 'string' }],
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
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'courseFooterText',
      title: 'Course Footer Text',
      type: 'string',
    }),
    defineField({
      name: 'courseFooterAuthor',
      title: 'Course Footer Author',
      type: 'string',
    }),
  ],
});
