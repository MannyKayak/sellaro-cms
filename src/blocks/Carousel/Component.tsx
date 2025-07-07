'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'

import { Event } from '@/types/Carousel'

type Props = {
  title?: string
  events: Event[]
}

export default function CarouselBlock({ title, events }: Props) {
  return (
    <section className="py-12 px-4 bg-white">
      {title && <h2 className="text-3xl font-bold mb-6 text-center">{title}</h2>}
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <div className="border shadow rounded-xl p-4 h-full bg-gray-50">
              {event.image?.url && (
                <Image
                  src={event.image.url}
                  alt={event.image.alt || event.title}
                  className="w-full h-48 object-cover rounded"
                />
              )}
              <h3 className="text-xl font-semibold mt-4">{event.title}</h3>
              {event.date && (
                <p className="text-sm text-gray-500">{new Date(event.date).toLocaleDateString()}</p>
              )}
              {event.description && <p className="text-sm mt-2">{event.description}</p>}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
