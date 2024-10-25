import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes as techSchemaTypes } from './sanity/techSchemas';
import { structure as techStructure } from './sanity/sanity-tech-structure';

export const techConfig = defineConfig({
  name: 'cms-tech',
  title: 'Tech CMS',
  projectId: process.env.NEXT_PUBLIC_TECH_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_TECH_SANITY_DATASET!,
  basePath: '/cms',
  schema: {
    types: techSchemaTypes,
  },
  plugins: [structureTool({ structure: techStructure }), visionTool()],
});
