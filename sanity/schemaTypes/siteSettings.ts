// schemas/siteSettings.js
export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'favicon',
      title: 'Site Favicon',
      type: 'image'
    },
    {
      name: 'militaryLogo',
      title: 'Military Logo',
      type: 'image'
    },
    {
      name: 'techLogo',
      title: 'Tech Logo',
      type: 'image'
    },
    {
      name: 'footerLogo',
      title: 'Footer Logo',
      type: 'image'
    }
  ]
}
  