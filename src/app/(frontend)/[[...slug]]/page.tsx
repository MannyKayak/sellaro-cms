import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import { Page } from '@/payload-types'
import { RenderBlocks } from '@/components/RenderBlocks'

type Params = {
  slug?: string[]
}

export default async function DynamicPages({ params }: { params: Params }) {
  if (!params || typeof params !== 'object') {
    throw new Error('Invalid params')
  }

  const slug = Array.isArray(params.slug) ? params.slug.join('/') : 'home'

  try {
    const payload = await getPayload({ config })

    const page = await payload.find({
      collection: 'pages',
      where: { slug: { equals: slug } },
    })

    if (!page || !page.docs || page.docs.length === 0) return notFound()

    const data = page.docs[0] as Page
    return <RenderBlocks blocks={data.layout} />
  } catch (err) {
    console.error('❌ Errore nella pagina dinamica:', err)
    return <div>Errore interno</div>
  }
}
