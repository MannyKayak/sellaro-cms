import type { PageBlock, Quote } from '@/types/PagesType'
import { RichText } from '@/components/RichText'
import QuoteCard from '@/blocks/QuoteCard/Component'
import HeroBlock from '@/blocks/Hero/Component'
import CarouselBlock from '@/blocks/Carousel/Component'
import SectionBlock from '@/blocks/SectionTextAndImage/Component'
import CardGridSection from './GridComponent'

export default function PageRenderer({ layout }: { layout: PageBlock[] }) {
  return (
    <>
      {layout.map((block, i) => {
        switch (block.blockType) {
          case 'hero':
            return (
              <HeroBlock
                key={i}
                title={block.title}
                ctaPrimary={block.ctaPrimary}
                ctaSecondary={block.ctaSecondary}
                image={block.image}
              />
            )

          case 'carousel':
            return <CarouselBlock key={i} title={block.title} events={block.events} />

          case 'sectionWithMediaAndText':
            return (
              <SectionBlock
                key={i}
                title={block.title}
                content={<RichText data={block.content} />}
                image={block.image}
                layout={block.layout}
              />
            )

          case 'quoteContainer':
            return (
              <CardGridSection title={block.}>

              </CardGridSection>
            )
          default:
            return null
        }
      })}
    </>
  )
}
