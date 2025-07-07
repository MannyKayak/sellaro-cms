import { Block } from 'payload'

export const QuoteCardBlock: Block = {
  slug: 'quoteCard',
  labels: {
    singular: 'Card citazione',
    plural: 'Cards citazione',
  },
  fields: [
    {
      name: 'quote',
      label: 'Citazione',
      required: true,
      type: 'relationship',
      relationTo: 'quotes',
      hasMany: true,
    },
  ],
}
