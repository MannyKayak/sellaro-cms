import React from 'react'

type Props = {
  title?: string
  children?: React.ReactNode
}

export default function GridContainerComponent({ title, children }: Props) {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      {title && (
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">{children}</div>
    </section>
  )
}
