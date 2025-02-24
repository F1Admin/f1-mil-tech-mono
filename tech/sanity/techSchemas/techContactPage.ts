import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'techContactPage',
  title: 'Contact Page',
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
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'contactName',
      title: 'Contact Name',
      type: 'string',
    }),
    defineField({
      name: 'contactTitle',
      title: 'Contact Title',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'salesName',
      title: 'Sales Name',
      type: 'string',
    }),
    defineField({
      name: 'salesTitle',
      title: 'Sales Title',
      type: 'string',
    }),
    defineField({
      name: 'salesEmail',
      title: 'Sales Email',
      type: 'string',
    }),
    defineField({
      name: 'salesPhone',
      title: 'Sales Phone',
      type: 'string',
    }),
    defineField({
      name: 'mailingAddress',
      title: 'Mailing Address',
      type: 'string',
    }),
    defineField({
      name: 'physicalAddress',
      title: 'Physical Address',
      type: 'string',
    }),
    defineField({
      name: 'dunsNumber',
      title: 'DUNS Number',
      type: 'string',
    }),
    defineField({
      name: 'cageCode',
      title: 'CAGE Code',
      type: 'string',
    }),
    defineField({
      name: 'footerImage',
      title: 'Footer Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
});
