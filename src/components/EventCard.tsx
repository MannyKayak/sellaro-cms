import { Eventi } from '@/payload-types'
import Image from 'next/image'
import React from 'react'
import { format } from 'date-fns'
import { it } from 'date-fns/locale'

export const EventCard: React.FC<{ event: Eventi }> = ({ event }) => {
  const imageUrl =
    typeof event.image === 'object' && event.image !== null && 'url' in event.image
      ? event.image.url
      : undefined

  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-neutral-900 transition hover:shadow-2xl max-w-md mx-auto">
      {imageUrl && (
        <div className="relative h-60 w-full">
          <Image src={imageUrl} alt={event.title || 'Evento'} fill className="object-cover" />
        </div>
      )}

      <div className="p-6 text-center">
        <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">📍 {event.location}</p>

        <p className="text-sm text-gray-600 dark:text-gray-400">
          📅{' '}
          {event.date
            ? format(new Date(event.date), 'dd MMMM yyyy', { locale: it })
            : 'Data da definire'}
        </p>
      </div>
    </div>
  )
}
