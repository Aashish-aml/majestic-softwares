'use client'

import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { BrandMark } from '@/components/brand-mark'

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Technology', href: '#technology' },
  { label: 'Team', href: '#team' },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="brand" href="#top" aria-label="Majestic Softwares home" onClick={closeMenu}>
          <BrandMark />
          <span className="brand__name">Majestic<span>Softwares</span></span>
        </a>

        <nav className="site-nav site-nav--desktop" aria-label="Main navigation">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>{item.label}</a>
          ))}
        </nav>

        <a className="button button--nav" href="#contact">
          Let&apos;s talk <ArrowUpRight size={15} aria-hidden="true" />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </button>

        <nav
          className={`site-nav site-nav--mobile${menuOpen ? ' is-open' : ''}`}
          id="mobile-navigation"
          aria-label="Mobile navigation"
          aria-hidden={!menuOpen}
        >
          {navigation.map((item) => (
            <a href={item.href} key={item.href} tabIndex={menuOpen ? 0 : -1} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a href="#contact" tabIndex={menuOpen ? 0 : -1} onClick={closeMenu}>
            Start a conversation <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  )
}
