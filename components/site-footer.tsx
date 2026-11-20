import { ArrowUpRight } from 'lucide-react'
import { BrandMark } from '@/components/brand-mark'

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Our experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Technology', href: '#technology' },
  { label: 'Our team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="brand brand--footer" href="#top" aria-label="Majestic Softwares home">
              <BrandMark />
              <span className="brand__name">Majestic<span>Softwares</span></span>
            </a>
            <p>Experienced engineering.<br />Made for what&apos;s next.</p>
            <span className="footer-location">
              Remote-first · India
              <br />
              <a href="mailto:contact@majesticsoftwares.in">contact@majesticsoftwares.in</a>
            </span>
          </div>
          <div className="footer-navigation">
            <h2>Explore</h2>
            <nav aria-label="Footer navigation">
              {footerLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
            </nav>
          </div>
          <div className="footer-expertise">
            <h2>Selected expertise</h2>
            <p>Custom software</p><p>Full-stack web</p><p>Cloud &amp; DevOps</p><p>Quality engineering</p>
          </div>
          <a className="footer-cta" href="#contact">Have a project in mind?<span>Let&apos;s talk <ArrowUpRight size={15} aria-hidden="true" /></span></a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Majestic Softwares</span>
          <span>Thoughtfully built. Ready to grow.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
