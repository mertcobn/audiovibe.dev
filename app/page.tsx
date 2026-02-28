import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SectionDivider from '@/components/SectionDivider'
import PluginsSection from '@/components/PluginsSection'
import AboutSection from '@/components/AboutSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <PluginsSection />
        <SectionDivider />
        <AboutSection />
      </main>
      <Footer />
    </>
  )
}
