import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'militaryContactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
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
      name: 'contactImage',
      title: 'Contact Image',
      type: 'image',
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
    }),
    defineField({
      name: 'footerText',
      title: 'Footer Text',
      type: 'string',
    }),
  ],
});
