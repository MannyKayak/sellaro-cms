import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import { Page } from '@/payload-types'
import { RenderBlocks } from '@/components/RenderBlocks'

export default async function DynamicPages({ params }: { params: { slug: string } }) {
  let slug = params.slug

  if (!slug || slug === '') {
    slug = 'home'
  }

  // const slug = (await params.slug?.join('/')) || 'home'

  const payload = await getPayload({ config })
  const page = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  if (!page || !page.docs || page.docs.length === 0) return notFound()

  const data = page.docs[0] as Page
  return <RenderBlocks blocks={data.layout} />
}
