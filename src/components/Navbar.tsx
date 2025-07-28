'use client'

import { Page } from '@/payload-types'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar({ pages }: { pages: Page[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (slug: string) => {
    return pathname === `/${slug}`
      ? 'text-teal-600 border-b-2 border-teal-600'
      : 'text-gray-700 hover:text-teal-600'
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Home link */}
          <Link
            href="/"
            className="text-2xl font-bold text-teal-600 hover:text-teal-700 transition-colors"
          >
            Vittorio Andrea Sellaro
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {pages.map((page) => {
              if (page.slug === 'home') return null
              return (
                <Link
                  key={page.slug}
                  href={`/${page.slug}`}
                  className={`${isActive(page.slug)} font-medium transition-colors duration-200`}
                >
                  {page.title}
                </Link>
              )
            })}
            <Link
              href="/articles"
              className={`${isActive('articles')} font-medium transition-colors duration-200`}
            >
              Articoli
            </Link>
            <Link
              href="/events"
              className={`${isActive('events')} font-medium transition-colors duration-200`}
            >
              Eventi
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-teal-600 focus:outline-none"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {pages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/${page.slug}`}
                  className={`${isActive(page.slug)} px-3 py-2 rounded-md text-base font-medium`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {page.title}
                </Link>
              ))}
              <Link
                href="/articles"
                className={`${isActive('articles')} px-3 py-2 rounded-md text-base font-medium`}
                onClick={() => setIsMenuOpen(false)}
              >
                Articoli
              </Link>
              <Link
                href="/events"
                className={`${isActive('events')} px-3 py-2 rounded-md text-base font-medium`}
                onClick={() => setIsMenuOpen(false)}
              >
                Eventi
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
