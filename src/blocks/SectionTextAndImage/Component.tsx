// components/blocks/SectionWithMediaAndText.tsx
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

  image = image && typeof image != 'string' ? (image as Media) : image
  return (
    <section className="py-12 px-4">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-8">
        {/* Immagine */}
        {image && typeof image != 'string' && (
          <div className={`w-full md:w-1/2 ${imageFirst ? 'md:order-1' : 'md:order-2'}`}></div>
        )}

        {/* Testo */}
        <div className={`w-full md:w-1/2 ${imageFirst ? 'md:order-2' : 'md:order-1'}`}>
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <div className="prose max-w-none">
            <RichText data={content} />
          </div>
        </div>
      </div>
    </section>
  )
}
