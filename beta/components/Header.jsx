'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContact } from './ContactProvider';
import BrandLogo from './BrandLogo';

const links = [
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/team', label: 'Team' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { openContact } = useContact();

  const close = () => setOpen(false);
  const toggle = () => setOpen((v) => !v);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    return () => document.body.classList.remove('nav-open');
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={open ? 'site-header is-menu-open' : 'site-header'}>
      <div className="site-header__inner">
        <Link href="/" className="brand" onClick={close} aria-label="MajesticSoftwares home">
          <BrandLogo />
        </Link>

        <button
          type="button"
          className={open ? 'nav-toggle is-open' : 'nav-toggle'}
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={toggle}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span aria-hidden="true" className={open ? 'nav-toggle__icon is-open' : 'nav-toggle__icon'} />
        </button>

        <nav
          id="primary-nav"
          className={open ? 'primary-nav is-open' : 'primary-nav'}
          aria-label="Primary"
        >
          <ul className="primary-nav__list">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={active ? 'nav-link is-active' : 'nav-link'}
                    aria-current={active ? 'page' : undefined}
                    onClick={close}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <button
                type="button"
                className="btn btn--primary nav-cta"
                onClick={() => {
                  close();
                  openContact();
                }}
              >
                Contact Us
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
