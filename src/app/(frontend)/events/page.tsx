import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { Event } from '@/payload-types'
import { EventCard } from '@/components/EventCard'
import EventFilters from '@/components/EventFilters'

export type EventFilterParams = {
  year?: string
  month?: string
  topic?: string
}

type EventQuery = {
  collection: 'events'
  where: {
    [key: string]: {
      equals?: unknown
      like?: string
    }
  }
  limit?: number
}

async function getFilteredEvents(filters: EventFilterParams) {
  const payload = await getPayload({ config })

  const query: EventQuery = {
    collection: 'events',
    where: {},
  }

  if (filters.year) {
    query.where['date'] = {
      like: `${filters.year}-%`,
    }
  }

  if (filters.month && filters.year) {
    query.where['date'] = {
      like: `${filters.year}-${filters.month}-%`,
    }
  }

  if (filters.topic) {
    query.where['tag.name'] = {
      equals: filters.topic,
    }
  }

  const events = await payload.find(query)
  return events.docs as Event[]
}

async function getFilterOptions() {
  const payload = await getPayload({ config })
  const events = await payload.find({
    collection: 'events',
    limit: 10,
  })

  const dates = events.docs
    .filter((event) => !!event.date)
    .map((event) => {
      const date = new Date(event.date)
      return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
      }
    })

  const years = [...new Set(dates.map((d) => d.year))].sort((a, b) => b - a)
  const months = [...new Set(dates.map((d) => d.month))].sort((a, b) => a - b)

  const topics = (await payload.find({ collection: 'tags' })).docs.sort((a, b) =>
    a.name.localeCompare(b.name),
  )

  return {
    years,
    months,
    topics,
  }
}

export default async function EventsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) {
  const resolvedSearchParams = await searchParams

  const filters: EventFilterParams = {
    year: resolvedSearchParams.year,
    month: resolvedSearchParams.month,
    topic: resolvedSearchParams.topic,
  }

  const [events, filterOptions] = await Promise.all([
    getFilteredEvents(filters),
    getFilterOptions(),
  ])

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-teal-600 mb-4">Tutti gli eventi</h1>
          <p className="text-lg text-gray-800">
            Esplora gli eventi passati e futuri organizzati dalla community.
          </p>
        </div>

        <EventFilters
          options={filterOptions}
          currentFilters={filters}
          className="justify-center max-w-4xl mx-auto mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {events.map((event) => (
            <div key={event.id} className="flex justify-center">
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
