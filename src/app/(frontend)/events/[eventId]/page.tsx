import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import { Event } from '@/payload-types'
import { format } from 'date-fns'
import { it } from 'date-fns/locale'
import { Calendar, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ArticleCard } from '@/components/ArticleCard'
import GridContainerComponent from '@/components/GridComponent'

export default async function EventPage({ params }: { params: Promise<{ eventId?: string }> }) {
  const { eventId } = await params

  if (!eventId) return notFound()

  const payload = await getPayload({ config })

  const event = await payload
    .findByID({
      collection: 'events',
      id: eventId,
    })
    .catch(() => null)

  if (!event) return notFound()

  const { title, description, image, date, location, guests, link, tag, id } = event as Event

  const relatedArticles = await payload.find({
    collection: 'articles',
    where: { eventRelated: { equals: id } },
    limit: 10,
  })

  return (
    <div>
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Colonna sinistra - Testi */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-teal-600 mb-6">{title}</h1>

          {date && (
            <p className="flex items-center text-gray-700 mb-3">
              <Calendar className="w-5 h-5 mr-2 text-teal-500" />
              {format(new Date(date), 'dd MMMM yyyy', { locale: it })}
            </p>
          )}

          {location && (
            <p className="flex items-center text-gray-700 mb-6">
              <MapPin className="w-5 h-5 mr-2 text-teal-500" />
              {location}
            </p>
          )}

          {guests && guests.trim() !== '' && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Ospiti</h3>
              <ul className="list-disc list-inside text-gray-700">
                {guests
                  .split(',')
                  .map((ospite) => ospite.trim())
                  .filter((o) => o !== '')
                  .map((ospite, i) => (
                    <li key={i}>{ospite}</li>
                  ))}
              </ul>
            </div>
          )}

          {/* Tag */}
          {tag && tag.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Tag</h3>
              <div className="flex flex-wrap gap-2">
                {tag.map((t) => {
                  if (typeof t === 'number' || typeof t === 'string') return null
                  return (
                    <span
                      key={t.id}
                      className="bg-teal-100 text-teal-800 text-sm px-3 py-1 rounded-full"
                    >
                      {t.name}
                    </span>
                  )
                })}
              </div>
            </div>
          )}
          {description && (
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: description }} />
          )}
          {/* Iscrizione */}
          {link && (
            <div className="mb-8 mt-4">
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-md transition"
              >
                Iscriviti all&apos;evento
              </Link>
            </div>
          )}
        </div>

        {/* Colonna destra - Immagine */}
        {image && typeof image === 'object' && 'url' in image && (
          <div className="w-full">
            <Image
              src={image.url ? image.url : image.thumbnailURL || ''}
              alt={title}
              height={image.height || 400}
              width={image.width || 600}
              className="w-full h-auto object-cover rounded-xl shadow-md"
            />
          </div>
        )}
      </div>
      {relatedArticles && relatedArticles.docs.length > 0 && (
        <GridContainerComponent title="Articoli correlati" columns={4}>
          {relatedArticles.docs.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </GridContainerComponent>
      )}
    </div>
  )
}
