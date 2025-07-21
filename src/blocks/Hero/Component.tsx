'use client'
import React from 'react'
import Image from 'next/image'

import CtaButton from '@/components/CtaButton'
import { HeroBlock } from '@/types/PagesType'

export default function HeroBlockComponent({ title, ctaPrimary, ctaSecondary, image }: HeroBlock) {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 gap-10 bg-gradient-to-b from-white to-gray-100">
      {/* Text content */}
      <div className="flex-1 text-center md:text-left space-y-8">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight uppercase">
          {title}
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          {ctaPrimary && <CtaButton label={ctaPrimary.label} url={ctaPrimary.url} option="naked" />}
          {ctaSecondary && (
            <CtaButton label={ctaSecondary.label} url={ctaSecondary.url} option="fill" />
          )}
        </div>
      </div>

      {/* Image */}
      <div className="flex-1 flex justify-center items-center">
        <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] shadow-lg rounded-xl overflow-hidden bg-white">
          {image?.url && (
            <Image
              src={image.url}
              alt={image.alt || 'Hero Image'}
              fill
              className="object-contain p-4"
              priority
            />
          )}
        </div>
      </div>
    </section>
  )
}
