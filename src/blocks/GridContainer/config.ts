import { Block } from 'payload'
import { QuoteCardBlock } from '../QuoteCard/config'
import { ArticleCardBlock } from '../ArticleCard/config'

export const GridContainerBlock: Block = {
  slug: 'gridContainer',
  labels: {
    singular: 'Blocco a griglia',
    plural: 'Blocchi a griglia',
  },
  fields: [
    {
      name: 'title',
      label: 'Titolo della sezione',
      type: 'text',
      required: false,
    },
    {
      name: 'description',
      label: 'Descrizione o sottotitolo',
      type: 'richText',
      required: false,
    },
    {
      name: 'maxItems',
      label: 'Numero massimo di card da mostrare',
      type: 'number',
      min: 3,
      max: 12,
      defaultValue: 6,
      required: false,
    },
    {
      name: 'cards',
      label: 'Card da mostrare',
      required: true,
      type: 'blocks',
      blocks: [QuoteCardBlock, ArticleCardBlock],
    },
  ],
}
