export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <h1 className="hero__title">
            Music
            <br />
            tech
            <br />
            vibe coded
          </h1>

          <p className="hero__description">
            Audio plugins and tools for people who make and mix sound.
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
