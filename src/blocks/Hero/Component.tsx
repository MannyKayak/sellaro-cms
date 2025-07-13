'use client'
import React from 'react'
import Image from 'next/image'

import CtaButton from '@/components/CtaButton'
import { HeroBlock } from '@/types/PagesType'

export default function HeroBlockComponent({ title, ctaPrimary, ctaSecondary, image }: HeroBlock) {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-8 bg-gradient-to-b from-white to-gray-100">
      {/* Text content */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold">{title}</h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          {ctaPrimary && <CtaButton label={ctaPrimary.label} url={ctaPrimary.url} option="naked" />}
          {ctaSecondary && (
            <CtaButton label={ctaSecondary.label} url={ctaSecondary.url} option="fill" />
          )}
        </div>
      </div>

      {/* Image */}
      <div className="flex-1 mt-10 md:mt-0 flex justify-center">
        {image?.url && (
          <Image
            src={image.url}
            alt={image.alt || 'Hero Image'}
            width={image.width || 500}
            height={image.height || 500}
            className="object-contain max-w-full h-auto"
            priority
          />
        )}
      </div>
    </section>
  )
}
