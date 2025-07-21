import { Article } from '@/payload-types'
import React from 'react'
import Image from 'next/image'
import { format } from 'date-fns'
import { it } from 'date-fns/locale'

type Props = {
  article: Article
}

export const ArticleCard: React.FC<Props> = ({ article }) => {
  const imageUrl =
    typeof article.image === 'object' && article.image !== null && 'url' in article.image
      ? article.image.url
      : undefined

  return (
    <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-neutral-900 transition hover:shadow-xl hover:-translate-y-1 duration-200">
      {imageUrl && (
        <div className="relative w-full h-52">
          <Image src={imageUrl} alt={article.title || 'Articolo'} fill className="object-cover" />
        </div>
      )}

      <div className="p-5 flex flex-col gap-2">
        <h3 className="text-xl font-semibold">{article.title}</h3>

        {article.Descrizione && (
          <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
            {article.Descrizione}
          </p>
        )}

        {article['Data Articolo'] && (
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-auto">
            {format(new Date(article['Data Articolo']), 'dd MMMM yyyy', { locale: it })}
          </p>
        )}
      </div>
    </div>
  )
}
