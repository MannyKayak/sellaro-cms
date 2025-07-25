import { ArticleCard } from '@/components/ArticleCard'
import GridContainerComponent from '@/components/GridComponent'
import { ArticlesBlock, Article } from '@/payload-types'
import { Newspaper } from 'lucide-react'
import Link from 'next/link'
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
    <div className="bg-white mx-6 mb-6">
      <GridContainerComponent title={sectionTitle || ''}>
        {validArticles.map((a, i) => (
          <ArticleCard key={i} article={a.article} />
        ))}
      </GridContainerComponent>
      <div className="flex items-center justify-center md:justify-end mt-4 mr-4">
        <Link
          href={'/articles'}
          className="flex gap-2 text-teal-600 items-center hover:text-teal-800 text-xl"
        >
          <Newspaper size={20} className="text-teal-600 hover:text-teal-800" />
          Tutti gli articoli
        </Link>
      </div>
    </div>
  )
}
