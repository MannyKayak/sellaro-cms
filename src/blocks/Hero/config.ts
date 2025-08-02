import { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero Section',
    plural: 'Hero Sections',
  },
  interfaceName: 'HeroBlockProps',
  fields: [
    {
      name: 'title',
      label: 'Titolo principale',
      type: 'text',
      required: true,
    },
    {
      name: 'ctaPrimary',
      label: 'Call to Action Primaria',
      type: 'group',
      fields: [
        {
          name: 'label',
          label: 'Testo bottone',
          type: 'text',
        },
        {
          name: 'url',
          label: 'Link',
          type: 'text',
        },
      ],
    },
    {
      name: 'ctaSecondary',
      label: 'Call to Action Secondaria',
      type: 'group',
      fields: [
        {
          name: 'label',
          label: 'Testo bottone',
          type: 'text',
        },
        {
          name: 'url',
          label: 'Link',
          type: 'text',
        },
      ],
    },
    {
      name: 'image',
      label: 'Immagine di destra',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
