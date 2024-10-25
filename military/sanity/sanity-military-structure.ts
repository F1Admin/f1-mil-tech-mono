import type { StructureResolver } from 'sanity/structure';

const apiVersion = '2024-08-24';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(
          S.document()
            .schemaType('militarySiteSettings')
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
      S.divider(),
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
            .apiVersion(apiVersion)
            .filter('_type == "course"')
            .defaultOrdering([{ field: 'order', direction: 'asc' }])
        ),
      S.listItem()
        .title('Supporting Courses')
        .child(
          S.documentList()
            .title('Supporting Courses')
            .apiVersion(apiVersion)
            .filter('_type == "supportingCourse"')
            .defaultOrdering([{ field: 'order', direction: 'asc' }])
        ),
      S.divider(),
      S.listItem()
        .title('Cadre Page')
        .child(
          S.document()
            .schemaType('militaryCadrePage')
            .documentId('militaryCadrePage')
            .title('Cadre Page')
        ),
      S.listItem()
        .title('Instructors')
        .child(
          S.documentList()
            .title('Instructors')
            .apiVersion('2024-08-24')
            .filter('_type == "instructor"')
            .defaultOrdering([{ field: 'order', direction: 'asc' }])
        ),
      S.divider(),
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
            .apiVersion(apiVersion)
            .filter('_type == "partner"')
            .defaultOrdering([{ field: 'order', direction: 'asc' }])
        ),
      S.divider(),
      S.listItem()
        .title('Contact Page')
        .child(
          S.document()
            .schemaType('militaryContactPage')
            .documentId('militaryContactPage')
            .title('Contact Page')
        ),
      S.listItem()
        .title('Store Page')
        .child(
          S.document()
            .schemaType('militaryStorePage')
            .documentId('militaryStorePage')
            .title('Store Page')
        ),
    ]);
