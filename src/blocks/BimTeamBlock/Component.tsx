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
      <div className="container mx-auto flex flex-wrap justify-center gap-5">
        {people.map((person, index) => {
          const baseWidth =
            'w-[calc(50%-10px)] sm:w-[calc(33.333%-13.333px)] md:w-[calc(25%-15px)] lg:w-[calc(20%-16px)]'
          return (
            <div key={index} className={baseWidth}>
              {person && typeof person !== 'number' && typeof person !== 'string' && (
                <PersonCard {...person} />
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
