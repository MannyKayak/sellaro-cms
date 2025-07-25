'use client'

import Image from 'next/image'
import React from 'react'
import { Media, SectionWithMediaAndText } from '@/payload-types'
import { RichText } from '@/components/RichText'

export default function SectionWithMediaAndTextComponent({
  image,
  layout,
  title,
  content,
  reference,
}: SectionWithMediaAndText) {
  const imageFirst = layout === 'left'
  const typedImage = image && typeof image !== 'string' ? (image as Media) : null

  return (
    <section id={reference ? reference : ''} className="py-8 px-6 bg-teal-600">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-2">
        {/* Immagine */}
        {typedImage && typedImage.url && (
          <div
            className={`w-full md:w-7/12 ${
              imageFirst ? 'md:order-1' : 'md:order-2'
            } flex justify-center`}
          >
            <div className="relative w-[300px] sm:w-[350px] md:w-[500px] aspect-square overflow-hidden rounded-2xl shadow-xl ">
              <Image
                src={typedImage.url}
                alt={typedImage.alt || 'Image'}
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}

        {/* Testo */}
        <div
          className={`w-full md:w-1/2 ${
            imageFirst ? 'md:order-2' : 'md:order-1'
          } text-center md:text-left md:ml-6`}
        >
          <h2 className="mt-0 text-4xl md:text-5xl font-thin tracking-tight mb-3 text-gray-100">
            {title}
          </h2>
          <div className="prose prose-lg prose-neutral max-w-none text-gray-900">
            <RichText data={content} />
          </div>
        </div>
      </div>
    </section>
  )
}
