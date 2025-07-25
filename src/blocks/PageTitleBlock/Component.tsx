'use client'

import React from 'react'
import Image from 'next/image'
import { PageTitleBlock } from '@/payload-types'

export default function PageTitleBlockComponent(block: PageTitleBlock) {
  const { title, image, layoutSelector, titleColor } = block

  const titleColorSelector = 'text-' + titleColor
  const imageUrl =
    typeof image === 'object' && image !== null && 'url' in image ? image.url : undefined

  const renderFullWidthImage = () => {
    if (!imageUrl) return null
    return (
      <div className="w-screen h-[60vh] relative overflow-hidden">
        <Image src={imageUrl} alt={title || 'Immagine'} fill className="object-cover" priority />
      </div>
    )
  }

  if (layoutSelector === 'background' && imageUrl) {
    return (
      <div
        className={`w-full py-24 px-6 ${titleColorSelector} text-center bg-cover bg-center bg-no-repeat`}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">{title}</h1>
      </div>
    )
  }

  return (
    <div className={`w-full ${titleColorSelector} text-center bg-white overflow-hidden`}>
      {/* imageUp */}
      {layoutSelector === 'imageUp' && renderFullWidthImage()}

      <h1 className="text-4xl md:text-6xl font-bold mt-10 mb-6 px-4">{title}</h1>

      {/* imageDown */}
      {layoutSelector === 'imageDown' && renderFullWidthImage()}
    </div>
  )
}
