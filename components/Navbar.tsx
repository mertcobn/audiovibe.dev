'use client'

import { useState, useEffect } from 'react'

// Menü linkleri — masaüstü ve mobil menü aynı listeyi kullanır.
// /cl5 ayrı bir projeye rewrite ediliyor (next.config.ts), bu yüzden düz <a> ile açılır.
const links = [
  { href: '/plugins', label: 'Plugins' },
  { href: '/cl5', label: 'Yamaha CL5' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Menü açıkken body scroll'unu kilitle
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* Brand — her zaman solda */}
        <a href="/" className="navbar__brand" onClick={closeMenu}>
          audiovibe
        </a>

        {/* Desktop nav — 641px ve üstünde görünür */}
        <ul className="navbar__nav">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link">{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Hamburger butonu — sadece mobilde */}
        <button
          className={`nav-hamburger${isOpen ? ' nav-hamburger--open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <span className="nav-hamburger__line" />
          <span className="nav-hamburger__line" />
        </button>
      </div>

      {/* Mobile menü — sadece isOpen true olduğunda */}
      {isOpen && (
        <div className="navbar__mobile-nav">
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="navbar__mobile-link" onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
