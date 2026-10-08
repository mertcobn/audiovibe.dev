import { contact, instagramUrl } from '@/data/contact'

export default function ContactSection() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">Contact</h2>
        </div>

        <div className="contact__links">
          <a href={`mailto:${contact.email}`} className="contact__link">
            <span className="contact__kind">Email</span>
            <span className="contact__value">{contact.email}</span>
          </a>
          <a
            href={instagramUrl}
            className="contact__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact__kind">Instagram</span>
            <span className="contact__value">@{contact.instagram}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
