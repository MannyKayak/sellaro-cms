import { CollectionConfig } from 'payload'

export const Quotes: CollectionConfig = {
  slug: 'quotes',
  labels: {
    singular: 'Citazione',
    plural: 'Citazioni',
  },
  fields: [
    {
      name: 'content',
      label: 'Contenuto',
      type: 'textarea',
      required: true,
    },
    {
      name: 'source',
      label: 'Fonte',
      type: 'text',
      required: true,
    },
    {
      name: 'article',
      label: "Link all'articolo",
      type: 'text',
    },
  ],
}
