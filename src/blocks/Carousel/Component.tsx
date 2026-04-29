import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import type { Event } from '@/payload-types'
import CarouselClient from './CarouselClient'

type Props = {
  title?: string | null
  eventsToShow?: number | null
}

export default async function CarouselBlockComponent(props: Props) {
  const { title, eventsToShow } = props

  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'events',
    limit: eventsToShow ?? 5,
    sort: '-date',
  })

  const events = result.docs as Event[]

  return <CarouselClient title={title} events={events} />
}
