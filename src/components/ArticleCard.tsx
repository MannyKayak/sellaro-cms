import { Article } from '@/payload-types'
import React from 'react'
import Image from 'next/image'
import { format } from 'date-fns'
import { it } from 'date-fns/locale'
import { PenLineIcon } from 'lucide-react'
import Link from 'next/link'

type Props = {
  article: Article
}

export const ArticleCard: React.FC<Props> = ({ article }) => {
  const imageUrl =
    typeof article.image === 'object' && article.image !== null && 'url' in article.image
      ? article.image.url
      : undefined

  const articleDate = article['Data Articolo']
    ? format(new Date(article['Data Articolo']), 'dd MMMM yyyy', { locale: it })
    : ''

  const link = article.Link

  return (
    <Link href={link} target="_blank" rel="noopener noreferrer" className="block w-full">
      <div className="bg-neutral-100 border border-teal-600 shadow-gray-600 rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:shadow-teal-600 transition duration-200 flex flex-col w-full">
        {imageUrl && (
          <div className="relative w-full h-48 sm:h-52">
            <Image
              src={imageUrl}
              alt={article.title || 'Articolo'}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 480px"
            />
          </div>
        )}

        <div className="p-4 sm:p-5 flex flex-col gap-1.5">
          <div className="flex justify-between text-xs text-gray-600 italic">
            <span>{articleDate}</span>
            <span className="text-right">{article.source}</span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold leading-snug text-teal-600 border-b-2 border-teal-600">
            {article.title}
          </h3>

          <p className="text-sm sm:text-base text-gray-800 leading-relaxed line-clamp-3 min-h-[4.5em] mb-0.5">
            {article.Descrizione || ''}
          </p>

          {article.author && (
            <p className="flex items-center gap-2 text-xs text-gray-500 mt-0">
              <PenLineIcon size={14} /> {article.author}
            </p>
          )}

          {Array.isArray(article.tag) && article.tag.length > 0 && (
            <div className="flex flex-wrap gap-1 pt-1">
              {article.tag.map((tag, idx) => {
                if (typeof tag !== 'number' && tag) {
                  return (
                    <span
                      key={idx}
                      className="bg-teal-600 text-xs px-2 py-0.5 rounded-full text-gray-100"
                    >
                      #{tag.name}
                    </span>
                  )
                }
                return null
              })}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
