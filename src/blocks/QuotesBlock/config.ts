import { Block } from 'payload'

export const QuoteBlock: Block = {
  slug: 'quoteBlock',
  labels: {
    singular: 'Blocco Citazione',
    plural: 'Blocco Citazioni',
  },
  interfaceName: 'QuoteBlock',
  fields: [
    {
      name: 'blockTitle',
      label: 'Titolo del Blocco',
      type: 'text',
    },
    {
      name: 'quotes',
      label: 'Citazioni',
      type: 'array',
      fields: [
        {
          name: 'quote',
          label: 'Citazione',
          type: 'relationship',
          relationTo: 'quotes',
        },
      ],
      required: true,
    },
  ],
}
