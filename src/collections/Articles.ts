import type { CollectionConfig } from 'payload'

export const Articles: CollectionConfig = {
  slug: 'articles',
  admin: {
    useAsTitle: 'title',
  },
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
      name: 'tag',
      label: 'Tag',
      type: 'relationship',
      required: true,
      relationTo: 'tags',
      hasMany: true,
    },
    {
      name: 'Data Articolo',
      type: 'date',
      required: true,
    },
    {
      name: 'Link',
      type: 'text',
      required: true,
    },
    {
      name: 'Descrizione',
      type: 'textarea',
    },
    {
      name: 'source',
      label: 'Testata',
      type: 'text',
      required: true,
    },
    {
      name: 'author',
      label: 'Autore',
      type: 'text',
    },
  ],
}
