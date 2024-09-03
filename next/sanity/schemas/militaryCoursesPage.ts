import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'militaryCoursesPage',
  title: 'Courses Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
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
      name: 'footerImage',
      title: 'Page Footer Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
});
