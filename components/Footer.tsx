export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__left">
            <span className="footer__brand">audiovibe</span>
            <span className="footer__copy">
              © {year} — All rights reserved
            </span>
          </div>

          <nav className="footer__links" aria-label="Footer navigation">
            {/* href değerlerini gerçek linklerle güncelle */}
            <a href="#plugins" className="footer__link">
              Plugins
            </a>
            <a href="#about" className="footer__link">
              About
            </a>
            <a
              href="#"
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Patreon
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
