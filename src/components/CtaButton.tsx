import { CTAType } from '@/types/CTAType'
import Link from 'next/link'
import React from 'react'

export default function CtaButton({ label, url, option }: CTAType) {
  return (
    <Link
      href={url}
      className={`${option == 'fill' ? 'bg-teal-600 border-4 text-white hover:bg-white hover:text-teal-600' : 'bg-white text-teal-600 border-4  hover:bg-teal-600 hover:text-white'} font-bold rounded-xl px-4 py-2 text-2xl justify-center items-center border-teal-600`}
    >
      {label}
    </Link>
  )
}
