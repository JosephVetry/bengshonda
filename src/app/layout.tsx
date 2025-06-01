// app/layout.tsx
import './globals.css'
import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'BengsHonda | Dealer Motor Honda Terpercaya',
  description: 'Temukan motor Honda terbaik di BengsHonda. Harga terbaik, layanan profesional, dan promo menarik setiap hari!',
  keywords: 'motor honda, dealer honda, bengshonda, beli motor honda, kredit motor honda',
  openGraph: {
    title: 'BengsHonda',
    description: 'Dealer Motor Honda Terpercaya dan Termurah',
    url: 'https://bengshonda.com',
    siteName: 'BengsHonda',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Motor Honda Terbaru'
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
