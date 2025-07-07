import React from 'react'
import './styles.css'

import klavika from '@/font/klavika'

export const metadata = {
  description: 'Andrea Vittorio Sellaro Bim Manager portfolio',
  title: 'Vittorio Andrea Sellaro Portfolio',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={`${klavika.variable} antialiased`}>
      <body className="bg-gradient-to-t from-slate-200 from-20% to-white to-90%">
        <main>{children}</main>
      </body>
    </html>
  )
}
