import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemas';
import { structure } from './sanity/sanity-structure';

export default defineConfig({
  name: 'cms-military',
  title: 'Military-Tech CMS',
  projectId: 'gdj0rx5v',
  dataset: 'production',
  basePath: '/cms-military',
  schema: {
    types: schemaTypes,
  },
  plugins: [structureTool({ structure }), visionTool()],
});
