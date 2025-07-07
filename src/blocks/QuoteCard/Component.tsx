'use client'

import React from 'react'
import { Quote } from '@/types/PagesType'

type Props = {
  quotes: Quote[]
}

export default function QuoteCard({ quotes }: Props) {
  if (!quotes || quotes.length === 0) return null

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-12 px-4">
      {quotes.map((quote) => (
        <a
          key={quote.id}
          href={quote.article || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white hover:bg-gray-50 border border-gray-200 rounded-xl shadow-md p-6 transition-all duration-200 group"
        >
          <div className="text-sm text-teal-600 font-semibold mb-2 group-hover:underline">
            {quote.source}
          </div>
          <blockquote className="text-gray-800 italic text-lg leading-relaxed">
            “{quote.content}”
          </blockquote>
        </a>
      ))}
    </section>
  )
}
