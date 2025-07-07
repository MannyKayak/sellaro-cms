import type { CollectionConfig } from 'payload'

export const Articles: CollectionConfig = {
  slug: 'Articoli',
  upload: true,
  fields: [
    {
      name: 'Titolo',
      type: 'text',
      required: true,
    },
    {
      name: 'Textata',
      type: 'text',
    },
    {
      name: 'Data Evento',
      type: 'date',
    },
    {
      name: 'Data Articolo',
      type: 'date',
    },
    {
      name: 'Link',
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
