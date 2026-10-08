import { contact } from '@/data/contact'

export default function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section__header">
          <p className="section__label">the maker</p>
          <h2 className="section__title">About</h2>
        </div>

        <div className="about__content">
          <p className="about__text">
            I&apos;m <strong>{contact.name}</strong>. I build music technology: audio
            plugins, tools and simulators for people who produce and mix sound.
          </p>

          <p className="about__text">
            Most of it is made together with AI, a way of working often called vibe
            coding. That is where the name comes from: <strong>audio</strong> +{' '}
            <strong>vibe</strong> coding.
          </p>
        </div>
      </div>
    </section>
  )
}
