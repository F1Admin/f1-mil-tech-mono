import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes as militarySchemaTypes } from './sanity/militarySchemas';
import { structure as militaryStructure } from './sanity/sanity-military-structure';

export const militaryConfig = defineConfig({
  name: 'cms-military',
  title: 'Military CMS',
  projectId: process.env.NEXT_PUBLIC_MILITARY_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_MILITARY_SANITY_DATASET!,
  basePath: '/cms',
  schema: {
    types: militarySchemaTypes,
  },
  plugins: [structureTool({ structure: militaryStructure }), visionTool()],
});
