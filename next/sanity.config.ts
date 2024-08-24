import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemas';

export default defineConfig({
  name: 'cms-military',
  title: 'Military-Tech CMS',
  projectId: 'gdj0rx5v',
  dataset: 'production',
  basePath: '/cms-military',

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
            S.divider(),
            S.listItem()
              .title('Landing Page')
              .child(
                S.document()
                  .schemaType('militaryLandingPage')
                  .documentId('militaryLandingPage')
                  .title('Landing Page')
              ),
            S.listItem()
              .title('About Page')
              .child(
                S.document()
                  .schemaType('militaryAboutPage')
                  .documentId('militaryAboutPage')
                  .title('About Page')
              ),
            S.listItem()
              .title('Courses Page')
              .child(
                S.document()
                  .schemaType('militaryCoursesPage')
                  .documentId('militaryCoursesPage')
                  .title('Courses Page')
              ),
            S.listItem()
              .title('Courses')
              .child(
                S.documentList()
                  .id('courses')
                  .title('Courses')
                  .filter('_type == "course"')
                  .defaultOrdering([{ field: 'order', direction: 'asc' }])
              ),
            S.listItem()
              .title('Supporting Courses')
              .child(
                S.documentList()
                  .title('Supporting Courses')
                  .filter('_type == "supportingCourse"')
                  .defaultOrdering([{ field: 'order', direction: 'asc' }])
              ),
            S.listItem()
              .title('Instructors')
              .child(
                S.documentList()
                  .title('Instructors')
                  .filter('_type == "instructor"')
                  .defaultOrdering([{ field: 'name', direction: 'asc' }])
              ),
            S.listItem()
              .title('Partners Page')
              .child(
                S.document()
                  .schemaType('militaryPartnerPage')
                  .documentId('militaryPartnerPage')
                  .title('Partners Page')
              ),
            S.listItem()
              .title('Partners')
              .child(
                S.documentList()
                  .title('Partners')
                  .filter('_type == "partner"')
                  .defaultOrdering([{ field: 'partnerName', direction: 'asc' }])
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
