import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'videoHero',
  title: 'Video Hero',
  type: 'object',
  fields: [
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      description: 'Poster image shown before video plays',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'video',
      title: 'Video (Mux)',
      type: 'mux.video',
      description: 'Upload or paste a video URL — managed by Mux',
    }),
    defineField({
      name: 'title',
      title: 'Title (Optional)',
      type: 'string',
      description: 'Optional title overlay on the thumbnail',
    }),
    defineField({
      name: 'autoPlay',
      title: 'Auto Play',
      type: 'boolean',
      description: 'Start playing automatically (muted)',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'thumbnail',
    },
    prepare({ title, media }) {
      return {
        title: title || 'Video Hero',
        subtitle: 'Video with thumbnail',
        media,
      };
    },
  },
});
