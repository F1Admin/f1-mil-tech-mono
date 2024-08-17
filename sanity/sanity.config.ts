import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'


export default defineConfig({
  name: 'default',
  title: 'Military-Tech CMS',

  projectId: 'gdj0rx5v',
  dataset: 'production',

  plugins: [
  structureTool({
    structure: (S) =>
      S.list()
        .title('Base')
        .items([
          S.listItem()
            .title('Site Settings')
            .child(
              S.document()
                .schemaType('siteSettings')
                .documentId('siteSettings'))
                .title('Site Settings'),
        ]),
  }),
  visionTool()],

  schema: {
    types: schemaTypes,
  },
})
