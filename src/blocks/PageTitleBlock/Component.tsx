'use client'

import React from 'react'
import Image from 'next/image'
import { PageTitleBlock } from '@/payload-types'
import { RichText } from '@/components/RichText'

export default function PageTitleBlockComponent(block: PageTitleBlock) {
  const { title, image, layoutSelector, titleColor, paragraphTitle, paragraph } = block

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

  const renderParagraphContent = () => {
    if (!paragraphTitle && !paragraph) return null

    return (
      <div className="max-w-full mx-auto md:px-10 px-4 mt-6 text-gray-800  text-center">
        {paragraphTitle && (
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">{paragraphTitle}</h2>
        )}
        {paragraph && (
          <div className="prose prose-lg prose-neutral max-w-none text-left mx-auto ">
            <RichText data={paragraph} />
          </div>
        )}
      </div>
    )
  }

  if (layoutSelector === 'background' && imageUrl) {
    return (
      <div
        className={`w-full py-10 px-6 ${titleColorSelector} text-center bg-cover bg-center bg-no-repeat`}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">{title}</h1>
        {renderParagraphContent()}
      </div>
    )
  }

  return (
    <div className={`w-full ${titleColorSelector} text-center bg-teal-600 overflow-hidden`}>
      {/* imageUp */}
      {layoutSelector === 'imageUp' && renderFullWidthImage()}

      <h1 className="text-4xl md:text-6xl font-bold mt-10 mb-6 px-4">{title}</h1>

      {renderParagraphContent()}

      {/* imageDown */}
      {layoutSelector === 'imageDown' && renderFullWidthImage()}
    </div>
  )
}
