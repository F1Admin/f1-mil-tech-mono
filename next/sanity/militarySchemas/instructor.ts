import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'instructor',
  title: 'Instructor',
  type: 'document',
  fields: [
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
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
      name: 'dateJoinedFlight1',
      title: 'Date Joined Flight-1',
      type: 'date',
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
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
      title: 'title',
      media: 'profileImage',
      order: 'order',
    },
    prepare(selection) {
      const { firstName, lastName, title, media, order } = selection;
      return {
        title: `${firstName} ${lastName}`,
        subtitle: `${order} - ${title}`,
        media: media,
      };
    },
  },
});
