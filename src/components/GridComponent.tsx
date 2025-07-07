import React from 'react'

type Props = {
  title: string
  description?: string
  children: React.ReactNode
}

export default function CardGridSection({ title, description, children }: Props) {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        {description && <p className="mt-2 text-gray-600">{description}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Mostra massimo 6 elementi */}
        {React.Children.toArray(children).slice(0, 6)}
      </div>
    </section>
  )
}
