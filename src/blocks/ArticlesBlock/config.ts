import { Block } from 'payload'

export const ArticlesBlock: Block = {
  slug: 'articlesBlock',
  labels: { singular: 'Griglia Articolo', plural: 'Griglia Articoli' },
  interfaceName: 'ArticlesBlock',
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Titolo',
    },
    {
      name: 'reference',
      label: 'Reference',
      type: 'text',
    },
    {
      name: 'articlesToShow',
      label: 'Numero articoli da mostrare',
      type: 'number',
      max: 12,
      min: 0,
    },
    {
      name: 'articles',
      label: 'Articoli',
      type: 'array',
      fields: [
        {
          name: 'article',
          type: 'relationship',
          relationTo: 'articles',
        },
      ],
    },
  ],
}
