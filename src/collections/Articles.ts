import type { CollectionConfig } from 'payload'

export const Articles: CollectionConfig = {
  slug: 'articles',
  labels: {
    singular: 'Articolo',
    plural: 'Articoli',
  },
  fields: [
    {
      name: 'title',
      label: 'Titolo',
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
    },
    {
      name: 'Altre info',
      type: 'textarea',
    },
  ],
}
