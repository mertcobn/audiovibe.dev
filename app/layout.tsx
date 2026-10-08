import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400'],
  display: 'swap',
  variable: '--font-inter',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',        // iPhone notch / Dynamic Island için
  themeColor: '#141414',
}

export const metadata: Metadata = {
  title: 'audiovibe | Mert Çoban',
  description: 'Music technology by Mert Çoban: audio plugins and a Yamaha CL5 console simulator, built with AI.',
  openGraph: {
    title: 'audiovibe',
    description: 'Music technology by Mert Çoban: audio plugins and a Yamaha CL5 console simulator.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
