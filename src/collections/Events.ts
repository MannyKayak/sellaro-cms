import type { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
  slug: 'Eventi',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      label: 'Immagine',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'location',
      type: 'text',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
    },
    {
      name: 'link',
      type: 'text',
    },
    {
      name: 'descrizione',
      type: 'textarea',
      required: true,
    },
    {
      name: 'otherInfo',
      type: 'textarea',
    },
  ],
}
