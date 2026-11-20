'use client';

import { Suspense } from 'react';
import ContactProvider from './ContactProvider';
import Header from './Header';
import Footer from './Footer';

export default function SiteShell({ children }) {
  return (
    <Suspense fallback={null}>
      <ContactProvider>
        <div className="app-shell">
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </div>
      </ContactProvider>
    </Suspense>
  );
}
