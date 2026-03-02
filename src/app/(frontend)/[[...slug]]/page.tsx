import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
import React from 'react'
import { RenderBlocks } from '@/components/RenderBlocks'

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params

  const fullSlug = slug ? slug.join('/') : 'home'
  const lastSegment = slug?.[slug.length - 1]

  // Ignore special framework/static file requests.
  if (fullSlug === 'favicon.ico' || fullSlug === 'robots.txt' || fullSlug === 'sitemap.xml') {
    return null
  }
  if (lastSegment?.includes('.')) return notFound()

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
  const foundPage = page.docs[0]
  if (!foundPage) return notFound()

  return (
    <main>
      <RenderBlocks blocks={foundPage.layout} />
    </main>
  )
}
