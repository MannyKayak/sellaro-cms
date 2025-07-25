'use client'

import { Event } from '@/payload-types'
import Image from 'next/image'
import React from 'react'
import { format } from 'date-fns'
import { it } from 'date-fns/locale'
import { MapPin, CalendarDays } from 'lucide-react'
import Link from 'next/link'

export const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  const imageUrl =
    typeof event.image === 'object' && event.image !== null && 'url' in event.image
      ? event.image.url
      : undefined

  return (
    <Link
      href="/"
      aria-label={`Vai alla pagina dell'evento: ${event.title}`}
      className="group block rounded-lg overflow-hidden shadow-lg transition-all duration-300 max-w-[260px] 
                 transform hover:scale-[1.025] hover:shadow-xl bg-white shadow-black-60"
    >
      {/* Immagine */}
      {imageUrl && (
        <div className="relative h-36 w-full">
          <Image
            src={imageUrl}
            alt={event.title || 'Evento'}
            fill
            className="object-cover transition-transform duration-300"
          />
        </div>
      )}

      {/* Contenuto su sfondo teal */}
      <div className="p-2 text-left bg-teal-600 border-gray-800 rounded-b-lg border-solid border-2">
        <h3 className="text-base font-semibold text-gray-800 mb-2  border-gray-800 border-b-2 leading-snug line-clamp-2">
          {event.title}
        </h3>

        <div className="flex items-center gap-1 text-gray-200 text-sm mb-1">
          <MapPin size={15} className="text-white/80 shrink-0" />
          <span className="truncate">{event.location}</span>
        </div>

        <div className="flex items-center gap-1 text-gray-200 text-sm">
          <CalendarDays size={15} className="text-white/80 shrink-0" />
          <span>
            {event.date
              ? format(new Date(event.date), 'dd MMM yyyy', { locale: it })
              : 'Data da definire'}
          </span>
        </div>
      </div>
    </Link>
  )
}
