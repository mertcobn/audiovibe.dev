export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <p className="hero__eyebrow">audiovibe — audio plugins</p>

          <h1 className="hero__title">
            Tools for
            <br />
            <em>modern</em>
            <br />
            production
          </h1>

          <p className="hero__description">
            A curated collection of precision audio plugins — built for producers
            who care about quality. Free, open, and always improving.
          </p>

          <div className="hero__actions">
            <a href="#plugins" className="btn">
              Explore Plugins
            </a>
            {/* Patreon linki hazır olduğunda aşağıdaki href'i güncelle */}
            <a href="#" className="btn btn--ghost">
              Support on Patreon →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
