import React from 'react'

type Props = {
  title?: string
  children?: React.ReactNode
  columns?: number // nuovo prop opzionale
}

export default function GridContainerComponent({ title, children, columns = 3 }: Props) {
  // Mappa per gestire breakpoints dinamici
  const columnClasses: Record<number, string> = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
    5: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
  }

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      {title && (
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-teal-600">{title}</h2>
        </div>
      )}

      <div className={`grid gap-6 ${columnClasses[columns] ?? columnClasses[3]}`}>{children}</div>
    </section>
  )
}
