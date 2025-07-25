import type { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
  slug: 'events',
  labels: {
    singular: 'Evento',
    plural: 'Eventi',
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      label: 'Locandina',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'tag',
      label: 'Tag',
      type: 'relationship',
      required: true,
      relationTo: 'tags',
      hasMany: true,
    },
    {
      name: 'location',
      label: 'Città',
      type: 'text',
      required: true,
    },
    {
      name: 'date',
      label: 'Data Evento',
      type: 'date',
      required: true,
    },
    {
      name: 'link',
      label: 'Link',
      type: 'text',
      required: true,
    },
    {
      name: 'guests',
      label: 'Ospiti (Scrivi i nomi degli ospiti separati da una virgola)',
      type: 'text',
    },
    {
      name: 'description',
      label: 'Descrizione',
      type: 'textarea',
      required: true,
    },
    {
      name: 'otherInfo',
      type: 'textarea',
    },
  ],
}
