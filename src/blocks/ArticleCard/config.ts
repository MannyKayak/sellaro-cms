import { Block } from 'payload'

export const ArticleCardBlock: Block = {
  slug: 'articleCard',
  labels: {
    singular: 'Card Articolo',
    plural: 'Cards Articoli',
  },
  fields: [
    {
      name: 'title',
      label: 'Titolo',
      type: 'text',
    },
    {
      name: 'description',
      label: 'Descrizione',
      type: 'richText',
    },
    {
      name: 'article',
      label: 'Articolo',
      type: 'relationship',
      relationTo: 'Articoli',
    },
  ],
}
