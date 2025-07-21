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
}: SectionWithMediaAndText) {
  const imageFirst = layout === 'left'
  const typedImage = image && typeof image !== 'string' ? (image as Media) : null

  return (
    <section className="py-16 px-4 bg-teal-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Immagine */}
        {typedImage && typedImage.url && (
          <div
            className={`w-full md:w-1/2 ${
              imageFirst ? 'md:order-1' : 'md:order-2'
            } flex justify-center`}
          >
            <div className="relative w-[300px] sm:w-[350px] md:w-[400px] aspect-square overflow-hidden rounded-2xl shadow-xl border border-gray-200 bg-white">
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
          } text-center md:text-left`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-gray-800">
            {title}
          </h2>
          <div className="prose prose-lg prose-neutral max-w-none">
            <RichText data={content} />
          </div>
        </div>
      </div>
    </section>
  )
}
