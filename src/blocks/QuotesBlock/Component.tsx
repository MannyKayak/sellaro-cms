import { QuoteBlock } from '@/payload-types'
import React from 'react'
import { QuoteCard } from '@/components/QuoteCard'
import GridContainerComponent from '@/components/GridComponent'

export default function QuoteBlockComponent(block: QuoteBlock) {
  return (
    <div className="bg-white">
      <GridContainerComponent title={block.blockTitle || ''}>
        {Array.isArray(block.quotes) &&
          block.quotes.length > 0 &&
          block.quotes.map((quote, i) => {
            if (quote.quote && typeof quote.quote != 'number') {
              return <QuoteCard key={i} quote={quote.quote} />
            }
            return null
          })}
      </GridContainerComponent>
    </div>
  )
}
