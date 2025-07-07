import { getPayload } from 'payload'
import config from '@payload-config'
import PageRenderer from '@/components/PageRenderer'
import { PageBlock } from '@/types/PagesType'

export default async function HomePage() {
  const payload = await getPayload({ config })

  /* ⬇️ Il generico <Page> fa sì che TypeScript sappia
        che ogni doc ha il campo 'layout'.                */
  const { docs } = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'home' } },
    limit: 1,
  })

  const page = docs[0].layout as PageBlock[]

  if (!page) return <div>Pagina non trovata</div>

  return <PageRenderer layout={page} />
}
