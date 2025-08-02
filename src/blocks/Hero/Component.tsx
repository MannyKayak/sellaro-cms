'use client'
import React from 'react'
import Image from 'next/image'
import CtaButton from '@/components/CtaButton'
import { HeroBlockProps } from '@/payload-types'

export default function HeroBlockComponent({
  title,
  ctaPrimary,
  ctaSecondary,
  image,
}: HeroBlockProps) {
  // Determina l'URL corretto
  let imageUrl: string | null = null
  if (typeof image === 'string') {
    imageUrl = image
  } else if (typeof image === 'object' && image !== null) {
    imageUrl = image.url || image.thumbnailURL || null
  }

  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 py-16 gap-5 bg-gradient-to-b from-white to-gray-100">
      {/* Text content */}
      <div className="flex-1 text-center justify-items-center md:justify-items-end md:text-right space-y-4">
        <h1 className="flex text-5xl sm:text-6xl md:text-8xl font-extrabold leading-tight tracking-tight uppercase">
          {title}
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end items-center md:items-start">
          {ctaPrimary && (
            <CtaButton label={ctaPrimary.label || ''} url={ctaPrimary.url || ''} option="naked" />
          )}
          {ctaSecondary && (
            <CtaButton
              label={ctaSecondary.label || ''}
              url={ctaSecondary.url || ''}
              option="fill"
            />
          )}
        </div>
      </div>

      {/* Image */}
      <div className="flex-1 flex justify-center items-center">
        <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] shadow-lg rounded-xl overflow-hidden bg-white">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={typeof image === 'object' && image?.alt ? image.alt : 'Hero image'}
              fill
              className="object-cover"
              priority
            />
          )}
        </div>
      </div>
    </section>
  )
}
