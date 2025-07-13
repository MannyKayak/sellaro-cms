import ArticleCardComponent from '@/blocks/ArticleCard/Component'
import CarouselBlock from '@/blocks/Carousel/Component'
import HeroBlockComponent from '@/blocks/Hero/Component'
import QuoteCard from '@/blocks/QuoteCard/Component'
import SectionWithMediaAndTextComponent from '@/blocks/SectionTextAndImage/Component'
import { Page } from '@/payload-types'
import React, { Fragment } from 'react'

const blockComponents = {
  sectionWithMediaAndText: SectionWithMediaAndTextComponent,
  carousel: CarouselBlock,
  quoteCard: QuoteCard,
  articleCard: ArticleCardComponent,
  hero: HeroBlockComponent,
}

export const RenderBlocks: React.FC<{ blocks: Page['layout'] }> = (props) => {
  const { blocks } = props
  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0
  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, i) => {
          const { blockType } = block
          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]
            if (Block) {
              return (
                <div key={i}>
                  {/*@ts-expect-error*/}
                  <Block {...block} />
                </div>
              )
            }
          }
        })}
      </Fragment>
    )
  }
}
