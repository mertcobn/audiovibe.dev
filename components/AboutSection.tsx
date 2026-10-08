import { contact } from '@/data/contact'

export default function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">About</h2>
        </div>

        <div className="about__content">
          <p className="about__text">
            I&apos;m <strong>{contact.name}</strong>. I build music technology: audio
            plugins, tools and simulators for people who produce and mix sound.
          </p>
        </div>
      </div>
    </section>
  )
}
