'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { CarouselBlock as CarouselType } from '@/payload-types'
import { EventCard } from '@/components/EventCard'
import { CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function CarouselBlock(block: CarouselType) {
  const { title, events } = block

  return (
    <section className="py-12 px-6 bg-white relative">
      {title && <h2 className="text-3xl font-bold mb-6 text-center text-teal-600">{title}</h2>}

      {/* Frecce custom */}
      <button className="custom-prev absolute top-1/2 left-0 z-10 -translate-y-1/2 ml-2 bg-teal-600 text-gray-600 hover:text-white shadow rounded-full p-2">
        <ChevronLeft size={20} strokeWidth={3} />
      </button>
      <button className="custom-next absolute top-1/2 right-0 z-10 -translate-y-1/2 mr-2 bg-teal-600  text-gray-600 hover:text-white shadow rounded-full p-2">
        <ChevronRight size={20} strokeWidth={3} />
      </button>

      <Swiper
        spaceBetween={2}
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
          1024: { slidesPerView: 4 },
        }}
        className="" // ✅ nessun padding laterale
        style={
          {
            '--swiper-pagination-color': '#0D9488',
            '--swiper-pagination-inactive-color': '#99F6E4',
            '--swiper-pagination-bullet-inactive-opacity': '0.6',
            '--swiper-pagination-bullet-size': '12px',
            '--swiper-pagination-bullet-horizontal-gap': '6px',
          } as React.CSSProperties
        }
      >
        {events.map((event) =>
          event && typeof event !== 'number' && typeof event !== 'string' ? (
            <SwiperSlide
              key={event.id}
              className="flex justify-center items-center pb-8 pt-2 overflow-visible"
            >
              <EventCard event={event} />
            </SwiperSlide>
          ) : null,
        )}
      </Swiper>
      <div className="flex items-center justify-center md:justify-end mt-4 mr-4">
        <Link
          href={'/events'}
          className="flex gap-2 text-teal-600 items-center hover:text-teal-800 text-xl"
        >
          <CalendarDays size={20} className="text-teal-600 hover:text-teal-800" />
          Tutti gli eventi
        </Link>
      </div>
    </section>
  )
}
