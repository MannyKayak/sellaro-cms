import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-neutral-900 to-neutral-800 text-white px-6">
      <h1 className="text-6xl font-bold mb-4 text-teal-400">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-lg text-gray-300 mb-6 text-center max-w-md">
        Scusa, ma la pagina che stai cercando non esiste o è stata spostata. Prova a tornare alla
        home o a cercare un&apos;altra pagina.
      </p>
      <Link
        href="/"
        className="px-5 py-3 bg-teal-500 hover:bg-teal-600 rounded-xl text-white font-semibold transition-all duration-300 shadow-md"
      >
        Home
      </Link>
    </div>
  )
}
