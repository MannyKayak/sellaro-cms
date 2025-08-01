import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
import React from 'react'
import { RenderBlocks } from '@/components/RenderBlocks'

export default async function Page({ params }: { params: { slug?: string[] } }) {
  const { slug } = await params
  const fullSlug = slug ? slug.join('/') : 'home'

  // Ignora favicon.ico se presente
  if (fullSlug === 'favicon.ico') return notFound()

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

// export default async function DynamicPage({ params }: { params: { slug?: string[] } }) {
//   try {
//     // Properly await the params resolution
//     const slug = await Promise.resolve(params.slug || ['home'])
//     const fullSlug = slug.join('/')

//     // Ignore favicon.ico requests
//     if (fullSlug === 'favicon.ico') {
//       return null
//     }

//     const payload = await getPayload({ config })

//     const pageResponse = await payload.find({
//       collection: 'pages',
//       where: {
//         slug: {
//           equals: fullSlug,
//         },
//       },
//     })

//     const page = pageResponse?.docs?.[0] as Page | undefined

//     if (!page) {
//       console.warn(`❌ Page not found: "${fullSlug}"`)
//       return notFound()
//     }

//     return (
//       <main className="min-h-screen bg-white">
//         <div className="container mx-auto px-4 py-8">
//           {page.layout ? (
//             <RenderBlocks blocks={page.layout} />
//           ) : (
//             <>
//               <h1 className="text-3xl font-bold text-teal-600 mb-4">{page.title}</h1>
//               <div className="prose max-w-none">{/* Add any default content rendering here */}</div>
//             </>
//           )}
//         </div>
//       </main>
//     )
//   } catch (error) {
//     console.error('❌ Error in dynamic page:', error)
//     throw error // Let Next.js error boundary handle it
//   }
// }
