import { contact, instagramUrl } from '@/data/contact'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__left">
            <span className="footer__brand">audiovibe</span>
            <span className="footer__copy">
              © {year} {contact.name}
            </span>
          </div>

          <nav className="footer__links" aria-label="Footer navigation">
            <a href="/plugins" className="footer__link">
              Plugins
            </a>
            <a href="/cl5" className="footer__link">
              Yamaha CL5
            </a>
            <a href={`mailto:${contact.email}`} className="footer__link">
              Email
            </a>
            <a
              href={instagramUrl}
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
