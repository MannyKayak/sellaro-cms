import React from 'react'
import './styles.css'

import klavika from '@/font/klavika'
import Footer from '@/globals/Footer/Component'
import { getPayload } from 'payload'
import config from '@payload-config'
import Navbar from '@/components/Navbar'

export const metadata = {
  description: 'Andrea Vittorio Sellaro Bim Manager portfolio',
  title: 'Vittorio Andrea Sellaro Portfolio',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  const payload = await getPayload({ config })
  const footerReq = await payload.findGlobal({
    slug: 'footer',
  })

  const pages = await payload.find({
    collection: 'pages',
  })

  return (
    <html lang="en" className={`${klavika.variable} antialiased`}>
      <body className="bg-white">
        <Navbar pages={pages.docs} />
        <main>{children}</main>
        {footerReq && <Footer {...footerReq} />}
      </body>
    </html>
  )
}
