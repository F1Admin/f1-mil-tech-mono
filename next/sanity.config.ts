import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes as militarySchemaTypes } from './sanity/militarySchemas';
import { schemaTypes as techSchemaTypes } from './sanity/techSchemas';
import { structure as militaryStructure } from './sanity/sanity-military-structure';
import { structure as techStructure } from './sanity/sanity-tech-structure';

export const militaryConfig = defineConfig({
  name: 'cms-military',
  title: 'Military CMS',
  projectId: process.env.NEXT_PUBLIC_MILITARY_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_MILITARY_SANITY_DATASET!,
  basePath: '/military/cms',
  schema: {
    types: militarySchemaTypes,
  },
  plugins: [structureTool({ structure: militaryStructure }), visionTool()],
});

export const techConfig = defineConfig({
  name: 'cms-tech',
  title: 'Tech CMS',
  projectId: process.env.NEXT_PUBLIC_TECH_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_TECH_SANITY_DATASET!,
  basePath: '/tech/cms',
  schema: {
    types: techSchemaTypes,
  },
  plugins: [structureTool({ structure: techStructure }), visionTool()],
});
