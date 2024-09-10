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
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Site Settings')
        ),
      S.divider(),
      S.listItem()
        .title('Landing Page')
        .child(
          S.document()
            .schemaType('techLandingPage')
            .documentId('techLandingPage')
            .title('Landing Page')
        ),
    ]);
