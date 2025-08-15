'use client'

import React from 'react'
import Link from 'next/link'
import { Mail, Linkedin, Instagram, Github, Facebook, Globe } from 'lucide-react'
import { Footer as FooterProps } from '@/payload-types'

export default function Footer(props: FooterProps) {
  return (
    <footer id="footer" className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mb-6 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Sezione 1: Info personali */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">{props.title}</h3>
          <p className="text-sm leading-relaxed">{props.description ? props.description : ''}</p>
        </div>

        {/* Sezione 2: Link utili */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Link rapidi</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#aboutMe" className="hover:text-white transition">
                Chi sono
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white transition">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/bimknow" className="hover:text-white transition">
                BIM (K)now!
              </Link>
            </li>
            <li>
              <Link href="#footer" className="hover:text-white transition">
                Contatti
              </Link>
            </li>
          </ul>
        </div>

        {/* Sezione 3: Contatti + Social */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contatti</h4>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:manfredi@email.com" className="hover:text-white transition">
                {props.mail}
              </a>
            </li>
            {props.socialLinks &&
              props.socialLinks.map((social) => {
                switch (social.socialName) {
                  case 'Linkedin':
                    return (
                      <li key={social.id} className="flex items-center gap-2">
                        <Linkedin className="w-4 h-4" />
                        <a
                          href={social?.socialLink || ''}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-white transition"
                        >
                          {social.socialName}
                        </a>
                      </li>
                    )
                  case 'Facebook':
                    return (
                      <li key={social.id} className="flex items-center gap-2">
                        <Facebook className="w-4 h-4" />
                        <a
                          href={social?.socialLink || ''}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-white transition"
                        >
                          {social.socialName}
                        </a>
                      </li>
                    )
                  case 'Instagram':
                    return (
                      <li key={social.id} className="flex items-center gap-2">
                        <Instagram className="w-4 h-4" />
                        <a
                          href={social?.socialLink || ''}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-white transition"
                        >
                          {social.socialName}
                        </a>
                      </li>
                    )
                  case 'Altro':
                    return (
                      <li key={social.id} className="flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        <a
                          href={social?.socialLink || ''}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-white transition"
                        >
                          {social.socialName}
                        </a>
                      </li>
                    )
                }
              })}
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="flex flex-row mt-2 border-t border-gray-700 pt-4 text-center justify-center text-sm items-center text-gray-500">
        Sito realizzato da Manfredi Rizza{' '}
        <Link href={'https://github.com/MannyKayak'} target="_blank">
          <Github className="ml-2 border-2 rounded-full p-1 size-8 border-gray-500 hover:border-gray-300 hover:stroke-gray-300 " />
        </Link>
      </div>
    </footer>
  )
}
