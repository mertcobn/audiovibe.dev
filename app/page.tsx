import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SectionDivider from '@/components/SectionDivider'
import ProjectsSection from '@/components/ProjectsSection'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <ProjectsSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
