import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

/* ───────── Blocchi ───────── */

export type HeroBlock = {
  blockType: 'hero'
  title: string
  ctaPrimary?: { label: string; url: string }
  ctaSecondary?: { label: string; url: string }
  image?: { url: string; alt?: string; width?: number; height?: number }
}

export type CarouselBlock = {
  blockType: 'carousel'
  title?: string
  events: {
    id: string
    title: string
    description?: string
    date?: string
    image?: { url: string; alt?: string }
  }[]
}

export type SectionBlock = {
  blockType: 'sectionWithMediaAndText'
  title: string
  content: SerializedEditorState
  image?: { url: string; alt?: string; width?: number; height?: number }
  layout?: 'left' | 'right'
}

export type Quote = {
  id: string
  content: string
  source: string
  article?: string
}

export type QuoteContainer = {
  blockType: 'quoteContainer'
  quotes: Quote[]
}

/* Unione discriminata */
export type PageBlock = HeroBlock | CarouselBlock | SectionBlock | QuoteContainer
