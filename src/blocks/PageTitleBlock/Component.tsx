import React from 'react'
import Image from 'next/image'
import { PageTitleBlock } from '@/payload-types'

export default function PageTitleBlockComponent(block: PageTitleBlock) {
  const { title, image, layoutSelector } = block

  // Ottieni l'URL in modo sicuro
  const imageUrl =
    typeof image === 'object' && image !== null && 'url' in image ? image.url : undefined

  const renderImage = () => {
    if (!imageUrl) return null
    return (
      <div className="w-full max-w-4xl mx-auto">
        <Image
          src={imageUrl}
          alt={title || 'Immagine'}
          width={1200}
          height={600}
          className="w-full h-auto object-cover rounded-xl shadow-md"
        />
      </div>
    )
  }

  if (layoutSelector === 'background' && imageUrl) {
    return (
      <div
        className="w-full py-24 px-6 text-white text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">{title}</h1>
      </div>
    )
  }

  return (
    <div className="w-full px-6 py-12 text-center">
      {layoutSelector === 'imageUp' && renderImage()}
      <h1 className="text-4xl md:text-6xl font-bold my-8">{title}</h1>
      {layoutSelector === 'imageDown' && renderImage()}
    </div>
  )
}
