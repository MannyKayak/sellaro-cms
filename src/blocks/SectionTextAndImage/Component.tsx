// components/blocks/SectionWithMediaAndText.tsx
'use client'

import Image from 'next/image'
import React from 'react'

type ImageField = {
  /** URL assoluto o relativo generato da Payload */
  url: string
  alt?: string
  width?: number
  height?: number
}

type Props = {
  title: string
  /** Puoi passare una stringa HTML, JSX o il risultato del tuo converter Lexical → React */
  content: React.ReactNode
  image?: ImageField
  /** 'right' (default) = immagine a destra; 'left' = immagine a sinistra */
  layout?: 'right' | 'left'
}

export default function SectionWithMediaAndText({
  title,
  content,
  image,
  layout = 'right',
}: Props) {
  const imageFirst = layout === 'left'

  return (
    <section className="py-12 px-4">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-8">
        {/* Immagine */}
        {image && (
          <div className={`w-full md:w-1/2 ${imageFirst ? 'md:order-1' : 'md:order-2'}`}>
            <Image
              src={image.url}
              alt={image.alt || title}
              width={image.width || 800}
              height={image.height || 600}
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
              priority
            />
          </div>
        )}

        {/* Testo */}
        <div className={`w-full md:w-1/2 ${imageFirst ? 'md:order-2' : 'md:order-1'}`}>
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <div className="prose max-w-none">{content}</div>
        </div>
      </div>
    </section>
  )
}
