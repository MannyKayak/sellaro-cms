import { ArticleCard } from '@/components/ArticleCard'
import GridContainerComponent from '@/components/GridComponent'
import { ArticlesBlock, Article } from '@/payload-types'
import React from 'react'

export default function ArticlesBlockComponent(props: ArticlesBlock) {
  const { sectionTitle, articles, articlesToShow } = props

  const validArticles = Array.isArray(articles)
    ? articles
        .filter(
          (a): a is { article: Article } =>
            a.article !== null && typeof a.article === 'object' && 'title' in a.article,
        )
        .slice(0, Math.min(articlesToShow ?? 12, 12))
    : []

  return (
    <div className="bg-white">
      <GridContainerComponent title={sectionTitle || ''}>
        {validArticles.map((a, i) => (
          <ArticleCard key={i} article={a.article} />
        ))}
      </GridContainerComponent>
    </div>
  )
}
