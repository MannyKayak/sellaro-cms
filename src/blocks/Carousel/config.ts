// src/blocks/Carousel.ts
import { Block } from 'payload'

export const CarouselBlock: Block = {
  slug: 'carousel',
  labels: {
    singular: 'Carosello Eventi',
    plural: 'Caroselli Eventi',
  },
  interfaceName: 'CarouselBlock',
  fields: [
    {
      name: 'title',
      label: 'Titolo del Carosello',
      type: 'text',
      required: false,
    },
    {
      name: 'reference',
      label: 'Reference',
      type: 'text',
    },
    {
      name: 'events',
      label: 'Eventi da mostrare',
      type: 'relationship',
      relationTo: 'events',
      hasMany: true,
      required: true,
    },
  ],
}
