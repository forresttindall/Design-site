import React from 'react'
import { InstagramLogo } from '@phosphor-icons/react'
import './Nav.css'

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-left">
          <a href="/" aria-label="Home">
            <img src="/images/logo.png" alt="Logo" className="logo" />
          </a>
        </div>
        <div className="nav-right">
          <a href="/biography" className="nav-link"><span className="nav-link-text">Biography</span></a>
          <a href="/graphicdesign" className="nav-link"><span className="nav-link-text">Graphic Design</span></a>
          <a href="/websites" className="nav-link"><span className="nav-link-text">Websites</span></a>
          <a href="/photography" className="nav-link"><span className="nav-link-text">Photography</span></a>
          <a href="/contact" className="nav-link"><span className="nav-link-text">Contact</span></a>
          <a href="https://www.instagram.com/forrest.tindall" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="nav-link"><InstagramLogo size={18} /></a>
        </div>
      </div>
    </nav>
  )
}