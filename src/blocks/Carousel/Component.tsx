'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { CarouselBlock as CarouselType } from '@/payload-types'
import { EventCard } from '@/components/EventCard'

export default function CarouselBlock(block: CarouselType) {
  const { title, events } = block
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
        {events.map((event) => {
          if (event && typeof event != 'number') {
            return (
              <SwiperSlide key={event.id}>
                <EventCard event={event} />
              </SwiperSlide>
            )
          }
          return null
        })}
      </Swiper>
    </section>
  )
}
