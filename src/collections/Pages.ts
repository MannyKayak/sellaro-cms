import type { CollectionConfig } from 'payload'

import { CarouselBlock } from '@/blocks/Carousel/config'
import { SectionWithMediaAndText } from '@/blocks/SectionTextAndImage/config'
import { HeroBlock } from '@/blocks/Hero/config'
import { QuoteCard } from '@/blocks/QuoteCard/config'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'Pagina',
    plural: 'Pagine',
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: 'Titolo',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Es: home, chi-siamo, contatti...',
      },
    },
    {
      name: 'layout',
      label: 'Contenuto della pagina',
      type: 'blocks',
      required: true,
      blocks: [HeroBlock, SectionWithMediaAndText, CarouselBlock, QuoteCard],
    },
    {
      name: 'meta',
      label: 'SEO & Metadata',
      type: 'group',
      fields: [
        {
          name: 'metaTitle',
          label: 'Meta Title',
          type: 'text',
        },
        {
          name: 'metaDescription',
          label: 'Meta Description',
          type: 'textarea',
        },
      ],
    },
  ],
}
