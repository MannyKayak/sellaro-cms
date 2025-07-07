import type { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
  slug: 'Eventi',
  upload: true,
  fields: [
    {
      name: 'Titolo',
      type: 'text',
      required: true,
    },
    {
      name: 'Luogo',
      type: 'text',
      required: true,
    },
    {
      name: 'Data',
      type: 'date',
      required: true,
    },
    {
      name: 'Link iscrizione',
      type: 'text',
    },
    {
      name: 'Descrizione',
      type: 'textarea',
      required: true,
    },
    {
      name: 'Altre info',
      type: 'textarea',
    },
  ],
}
