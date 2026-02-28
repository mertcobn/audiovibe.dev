export default function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section__header">
          <p className="section__label">— the maker</p>
          <h2 className="section__title">About</h2>
        </div>

        <div className="about__content">
          <p className="about__text">
            <strong>audiovibe</strong> is a one-person project dedicated to building
            precision audio tools for modern producers. Every plugin is designed with
            a clear purpose — no bloat, no unnecessary complexity.
          </p>

          <p className="about__text">
            Background in music production and audio engineering. All plugins are{' '}
            <strong>free unless stated otherwise</strong>. If you find them useful,
            consider supporting the project through Patreon.
          </p>

          {/* Sosyal linkler buraya eklenebilir */}
          <div className="about__links">
            <a href="#" className="btn">
              Support on Patreon
            </a>
            {/* <a href="https://instagram.com/..." className="btn btn--ghost" target="_blank" rel="noopener noreferrer">Instagram →</a> */}
          </div>
        </div>
      </div>
    </section>
  )
}
