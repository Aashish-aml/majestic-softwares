'use client';

import Link from 'next/link';
import { useContact } from './ContactProvider';
import BrandLogo from './BrandLogo';

export default function Footer() {
  const { openContact } = useContact();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__name">
            <BrandLogo className="brand-logo--footer" />
          </p>
          <p className="site-footer__tag">
            Product-minded engineering for teams who care how software feels.
          </p>
        </div>

        <div className="site-footer__cols">
          <div>
            <h2 className="site-footer__heading">Explore</h2>
            <ul className="site-footer__links">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/work">Work</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/team">Team</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="site-footer__heading">Studio</h2>
            <ul className="site-footer__links">
              <li>
                <button type="button" className="linkish" onClick={openContact}>
                  Contact Us
                </button>
              </li>
              <li>
                <a href="mailto:contact@majesticsoftwares.in">contact@majesticsoftwares.in</a>
              </li>
              <li>
                <span>Austin · Remote-first</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="site-footer__base">
        <p>© {new Date().getFullYear()} MajesticSoftwares. All rights reserved.</p>
      </div>
    </footer>
  );
}
