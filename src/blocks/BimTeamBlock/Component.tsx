'use client'

import { BimTeamProps } from '@/payload-types'
import React from 'react'
import PersonCard from '@/components/PersonCard'

export default function BimTeamBlockComponent(block: BimTeamProps) {
  const { sectionTitle, people } = block

  if (!people || !Array.isArray(people) || people.length === 0) return null

  return (
    <section className="py-16 px-4">
      {/* Titolo */}
      {sectionTitle && (
        <h2 className="text-3xl md:text-4xl font-bold text-teal-600 text-center mb-12">
          {sectionTitle}
        </h2>
      )}

      {/* Griglia delle persone */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 justify-center">
        {people.map((person, index) => {
          if (person && typeof person !== 'number') {
            return <PersonCard key={index} {...person} />
          }
          return null
        })}
      </div>
    </section>
  )
}
