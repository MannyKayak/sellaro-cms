'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { CarouselBlock as CarouselType } from '@/payload-types'
import { EventCard } from '@/components/EventCard'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function CarouselBlock(block: CarouselType) {
  const { title, events } = block

  return (
    <section className="py-12 px-4 bg-white relative">
      {title && <h2 className="text-3xl font-bold mb-6 text-center text-teal-600">{title}</h2>}

      {/* Frecce custom */}
      <button className="custom-prev absolute top-1/2 left-0 z-10 -translate-y-1/2 ml-2 bg-teal-600 text-gray-600 hover:text-white shadow rounded-full p-2">
        <ChevronLeft size={20} strokeWidth={3} />
      </button>
      <button className="custom-next absolute top-1/2 right-0 z-10 -translate-y-1/2 mr-2 bg-teal-600  text-gray-600 hover:text-white shadow rounded-full p-2">
        <ChevronRight size={20} strokeWidth={3} />
      </button>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="px-8" // spazio laterale per evitare che le frecce coprano il contenuto
      >
        {events.map((event) => {
          if (event && typeof event !== 'number') {
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
