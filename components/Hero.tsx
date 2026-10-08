import { contact } from '@/data/contact'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <p className="hero__eyebrow">{contact.name} · music technology</p>

          <h1 className="hero__title">
            Music
            <br />
            <em>tech</em>
            <br />
            vibe coded
          </h1>

          <p className="hero__description">
            Audio plugins, tools and simulators for people who make and mix sound.
            Designed by {contact.name}, built together with AI.
          </p>

          {/* Ziyaretçi buradan ya plugin'lere ya CL5 simülatörüne gider */}
          <div className="hero__actions">
            <a href="/plugins" className="btn">
              Plugins
            </a>
            <a href="/cl5" className="btn">
              Yamaha CL5
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
