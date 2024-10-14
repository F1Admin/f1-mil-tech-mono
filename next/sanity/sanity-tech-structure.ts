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
      S.listItem()
        .title('About Page')
        .child(
          S.document()
            .schemaType('techAboutPage')
            .documentId('techAboutPage')
            .title('About Page')
        ),
      S.divider(),
      S.listItem()
        .title('Products Page')
        .child(
          S.document()
            .schemaType('techProductsPage')
            .documentId('techProductsPage')
            .title('Products Page')
        ),
      S.listItem()
        .title('Products')
        .child(
          S.documentList()
            .title('Products')
            .apiVersion(apiVersion)
            .filter('_type == "product"')
            .defaultOrdering([{ field: 'order', direction: 'asc' }])
        ),
      S.divider(),
      S.listItem()
        .title('Partners Page')
        .child(
          S.document()
            .schemaType('techPartnerPage')
            .documentId('techPartnerPage')
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
            .schemaType('techContactPage')
            .documentId('techContactPage')
            .title('Contact Page')
        ),
    ]);
