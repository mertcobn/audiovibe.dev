import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import PluginsSection from '@/components/PluginsSection'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  description: 'Free audio plugins by Mert. Coming soon.',
}

export default function PluginsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PluginsSection />
      </main>
      <Footer />
    </>
  )
}
