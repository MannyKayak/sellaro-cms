'use client'

import React from 'react'
import Image from 'next/image'
import { Person } from '@/payload-types'

export default function PersonCard(person: Person) {
  return (
    <div className="flex flex-col items-center text-center gap-2">
      {person.image && typeof person.image != 'string' && (
        <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200 shadow-sm">
          <Image
            src={typeof person.image != 'number' && person.image.url ? person.image.url : ''}
            alt={person.name}
            width={128}
            height={128}
            className="object-cover w-full h-full"
          />
        </div>
      )}
      <div className="text-lg font-semibold">{person.name}</div>
      {person.role && <div className="text-sm text-gray-600">{person.role}</div>}
    </div>
  )
}
