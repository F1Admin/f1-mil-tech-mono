import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'courseNumber',
      title: 'Course Number',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'courseTitle',
      title: 'Course Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Order of the course in the list',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'courseSeriesImage',
      title: 'Course Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'courseDescription',
      title: 'Course Description',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'courseRequirements',
      title: 'Course Requirements',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'courseCarousel',
      title: 'Course Carousel',
      type: 'array',
      of: [{ type: 'coursePhoto' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'courseFooterImage',
      title: 'Course Footer Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'courseFooterText',
      title: 'Course Footer Text',
      type: 'string',
    }),
  ],
});
