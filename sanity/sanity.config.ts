import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'Military-Tech CMS',

  projectId: 'gdj0rx5v',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Site Settings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
                  .title('Site Settings')
              ),
            S.listItem()
              .title('Military Landing Page')
              .child(
                S.document()
                  .schemaType('militaryLandingPage')
                  .documentId('militaryLandingPage')
                  .title('Military Landing Page')
              ),
            S.listItem()
              .title('Military About Page')
              .child(
                S.document()
                  .schemaType('militaryAboutPage')
                  .documentId('militaryAboutPage')
                  .title('Military About Page')
              ),
            S.listItem()
              .title('Military Courses Page')
              .child(
                S.document()
                  .schemaType('militaryCoursesPage')
                  .documentId('militaryCoursesPage')
                  .title('Military Courses Page')
              ),
            S.listItem()
              .title('Military Course')
              .child(
                S.documentList()
                  .title('Military Courses')
                  .filter('_type == "militaryCourse"')
                  .defaultOrdering([
                    { field: 'courseNumber', direction: 'asc' },
                  ])
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
