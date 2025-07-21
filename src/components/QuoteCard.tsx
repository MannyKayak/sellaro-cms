import React from 'react'
import Link from 'next/link'
import { FaQuoteLeft } from 'react-icons/fa'
import { Quote } from '@/payload-types'

export const QuoteCard: React.FC<{ quote: Quote }> = ({ quote }) => {
  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-xl p-6 relative hover:shadow-lg transition-shadow duration-200">
      <FaQuoteLeft className="text-teal-500 text-3xl absolute top-4 left-4 opacity-30" />

      <p className="text-xl font-medium text-gray-800 mb-4 leading-relaxed line-clamp-6">
        &quot;{quote.content}&quot;
      </p>

      <p className="text-sm italic text-gray-600"> - {quote.source}</p>

      {quote.article && (
        <Link
          href={quote.article}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-teal-600 font-semibold hover:underline"
        >
          Leggi
        </Link>
      )}
    </div>
  )
}
