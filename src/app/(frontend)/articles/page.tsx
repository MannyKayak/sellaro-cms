import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { ArticleCard } from '@/components/ArticleCard'
import ArticleFilters from '@/components/ArticleFilters'
import { Article } from '@/payload-types'

export type FilterParams = {
  year?: string
  month?: string
  topic?: string
}

type ArticleQuery = {
  collection: 'articles'
  where: {
    [key: string]: {
      equals?: unknown
      like?: string
    }
  }
  limit?: number
}

async function getFilteredArticles(filters: FilterParams) {
  const payload = await getPayload({ config })

  // Build query based on filters
  const query: ArticleQuery = {
    collection: 'articles',
    where: {},
  }

  if (filters.year) {
    query.where['Data Articolo'] = {
      like: `${filters.year}-%`,
    }
  }

  if (filters.month && filters.year) {
    query.where['Data Articolo'] = {
      like: `${filters.year}-${filters.month}-%`,
    }
  }

  if (filters.topic) {
    query.where['tag.name'] = {
      equals: filters.topic,
    }
  }

  const articles = await payload.find(query)
  return articles.docs as Article[]
}

async function getFilterOptions() {
  const payload = await getPayload({ config })
  const articles = await payload.find({
    collection: 'articles',
    limit: 1000,
  })

  // Extract unique years and months from articles
  const dates = articles.docs.map((article) => {
    const date = new Date(article['Data Articolo'])
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
    }
  })

  const years = [...new Set(dates.map((d) => d.year))].sort((a, b) => b - a)
  const months = [...new Set(dates.map((d) => d.month))].sort((a, b) => a - b)

  // Get all unique topics
  const topics = await payload.find({
    collection: 'tags',
  })

  return {
    years,
    months,
    topics: topics.docs,
  }
}

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) {
  const resolvedSearchParams = await searchParams

  const filters: FilterParams = {
    year: resolvedSearchParams.year,
    month: resolvedSearchParams.month,
    topic: resolvedSearchParams.topic,
  }

  const [articles, filterOptions] = await Promise.all([
    getFilteredArticles(filters),
    getFilterOptions(),
  ])

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-teal-600 mb-4">Tutti gli articoli</h1>
          <p className="text-lg text-gray-800">
            Qui troverai tutti gli articoli che sono usciti online.
          </p>
        </div>

        <ArticleFilters
          options={filterOptions ? filterOptions : { years: [], months: [], topics: [] }}
          currentFilters={filters}
          className="justify-center max-w-4xl mx-auto mb-12"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {articles.map((article) => (
            <div key={article.id} className="flex">
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
