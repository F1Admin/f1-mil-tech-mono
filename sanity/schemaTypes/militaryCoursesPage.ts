import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'militaryCoursesPage',
  title: 'Military Courses Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
    }),
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Page Subtitle',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'courses',
      title: 'Courses',
      type: 'array',
      of: [{ type: 'militaryCourse' }],
    }),
    defineField({
      name: 'supportingCourses',
      title: 'Supporting Courses',
      type: 'array',
      of: [{ type: 'militaryCourse' }],
    }),
    defineField({
      name: 'footerImage',
      title: 'Page Footer Image',
      type: 'image',
    }),
  ],
});
