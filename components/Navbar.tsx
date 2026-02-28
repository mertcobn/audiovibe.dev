'use client'

import { useState, useEffect } from 'react'

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
          <li>
            <a href="#plugins" className="navbar__link">Plugins</a>
          </li>
          <li>
            <a href="#about" className="navbar__link">About</a>
          </li>
          <li>
            <a
              href="#"
              className="navbar__link navbar__link--support"
              target="_blank"
              rel="noopener noreferrer"
            >
              Support
            </a>
          </li>
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
            <li>
              <a href="#plugins" className="navbar__mobile-link" onClick={closeMenu}>
                Plugins
              </a>
            </li>
            <li>
              <a href="#about" className="navbar__mobile-link" onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="navbar__mobile-link"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                Support on Patreon
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
