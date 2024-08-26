import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'instructor',
  title: 'Instructor',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
    }),
    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          options: {
            isHighlighted: true,
          },
        },
      ],
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'numberOfJumps',
      title: 'Number of Jumps',
      type: 'number',
    }),
    defineField({
      name: 'yearsInSport',
      title: 'Years in Sport',
      type: 'number',
    }),
    defineField({
      name: 'yearsWithFlight1',
      title: 'Years with Flight1',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'firstName',
      subtitle: 'lastName',
      media: 'profileImage',
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title: `${title} ${subtitle}`,
        media: media,
      };
    },
  },
});
