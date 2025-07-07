import { CTAType } from '@/types/CTAType'
import Link from 'next/link'
import React from 'react'

export default function CtaButton({ label, url, option }: CTAType) {
  return (
    <Link
      href={url}
      className={`${option == 'fill' ? 'bg-teal-600 text-white' : 'bg-white text-teal-600'} font-bold rounded-xl`}
    >
      {label}
    </Link>
  )
}
