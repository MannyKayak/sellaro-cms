import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
import React from 'react'
import { RenderBlocks } from '@/components/RenderBlocks'

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params

  const fullSlug = slug ? slug.join('/') : 'home'

  // Ignora richieste speciali
  if (fullSlug === 'favicon.ico' || fullSlug === 'robots.txt' || fullSlug === 'sitemap.xml') {
    return null
  }
  // Chiama Payload CMS
  const payload = await getPayload({
    config,
  })

  const page = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: fullSlug,
      },
    },
  })
  if (!page) return notFound()

  return (
    <main>
      <RenderBlocks blocks={page.docs[0].layout} />
    </main>
  )
}
