'use client'

import React from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { FilterParams } from './page'
import { Tag } from '@/payload-types'

type Props = {
  options: {
    years: number[]
    months: number[]
    topics: Tag[]
  }
  currentFilters: FilterParams
  className?: string
}

const monthNames = [
  'Gennaio',
  'Febbraio',
  'Marzo',
  'Aprile',
  'Maggio',
  'Giugno',
  'Luglio',
  'Agosto',
  'Settembre',
  'Ottobre',
  'Novembre',
  'Dicembre',
]

export default function ArticleFilters({ options, currentFilters, className }: Props) {
  const router = useRouter()
  const pathname = usePathname()

  const updateFilters = (newFilters: Partial<FilterParams>) => {
    const params = new URLSearchParams()

    const filters = { ...currentFilters, ...newFilters }

    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.set(key, value)
    })

    router.push(`${pathname}?${params.toString()}`)
  }

  const selectClass =
    'px-4 py-2 border border-teal-600 focus:bg-teal-600 focus:text-white rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 w-[160px] sm:w-[180px]'

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      {/* Riga filtri */}
      <div className="flex flex-wrap justify-center gap-4 min-h-[60px]">
        <select
          value={currentFilters.year || ''}
          onChange={(e) => updateFilters({ year: e.target.value || undefined })}
          className={selectClass}
        >
          <option value="">Anno</option>
          {options.years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <select
          value={currentFilters.month || ''}
          onChange={(e) => updateFilters({ month: e.target.value || undefined })}
          className={selectClass}
          disabled={!currentFilters.year}
        >
          <option value="">Mese</option>
          {options.months.map((month) => (
            <option key={month} value={month.toString().padStart(2, '0')}>
              {monthNames[month - 1]}
            </option>
          ))}
        </select>

        <select
          value={currentFilters.topic || ''}
          onChange={(e) => updateFilters({ topic: e.target.value || undefined })}
          className={selectClass}
        >
          <option value="">Argomento</option>
          {options.topics.map((topic) => (
            <option key={topic.id} value={topic.name}>
              {topic.name}
            </option>
          ))}
        </select>
      </div>

      {/* Bottone sotto la riga */}
      {(currentFilters.year || currentFilters.month || currentFilters.topic) && (
        <button
          onClick={() => router.push(pathname)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          Rimuovi filtri
        </button>
      )}
    </div>
  )
}
