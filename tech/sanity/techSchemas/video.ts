import { defineType, defineField } from 'sanity';

export default {
  name: 'youtubeVideo',
  title: 'YouTube Video',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the video',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief description of the video',
    },
    {
      name: 'youtubeVideoId',
      title: 'YouTube Video ID',
      type: 'string',
      description:
        'The ID of the YouTube video (e.g., "dQw4w9WgXcQ" from https://www.youtube.com/watch?v=dQw4w9WgXcQ)',
    },
    {
      name: 'muxVideo',
      title: 'Mux Video',
      type: 'mux.video',
      description: 'Mux stored video',
    },
  ],
};
