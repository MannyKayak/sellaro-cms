'use client'

import React from 'react'
import { RichText } from '@/components/RichText'
import QuoteCardItem from '@/components/cards/QuoteCardItem'
import ArticleCardItem from '@/components/cards/ArticleCardItem'

// al momento ho un problema con la tipizzazione dei componenti, devo vedere un video e capire come devo gestire questa cosa, perchè credo ci sia la possibilità di creare dei tipi direttamente dai blocchi e dai config sostanzialmente quindi, dopo aver visto il video e provato a creare effettivamente quesi 'tipi custom' devo:
//  1. finire questo blocco.componente.
//  2. rivedere tutti gli altri blocchi per assicurarmi che la tipizzazione sia fatta correttamente.
//  3. in fine devo controllare meglio il flusso dei blocchi carosello perchè credo che non vada bene come ho gestito l'uso delle card.

type Props = {
  title?: string
  description?: SerializedEditorState // SerializedEditorState
  itemsToShow?: number
  cards: Array<{
    blockType: string
    [key: string]: any
  }>
}

export default function GridContainerBlock({ title, description, cards, itemsToShow = 6 }: Props) {
  const limitedCards = cards.slice(0, itemsToShow)

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      {(title || description) && (
        <div className="text-center mb-10">
          {title && <h2 className="text-3xl font-bold text-gray-900">{title}</h2>}
          {description && (
            <div className="mt-2 text-gray-600 prose max-w-none">
              <RichText data={description} />
            </div>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {limitedCards.map((card, index) => {
          switch (card.blockType) {
            case 'quoteCard':
              return card.quotes?.map((q: any) => (
                <QuoteCardItem
                  key={q.id || index}
                  id={q.id}
                  content={q.content}
                  source={q.source}
                  article={q.article}
                />
              ))

            case 'articleCard':
              return (
                <ArticleCardItem
                  key={card.id || index}
                  title={card.title}
                  summary={card.summary}
                  image={card.image}
                  url={card.url}
                />
              )

            default:
              return null
          }
        })}
      </div>
    </section>
  )
}
