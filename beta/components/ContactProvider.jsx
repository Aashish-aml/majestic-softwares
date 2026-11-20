'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import ContactModal from './ContactModal';

const ContactContext = createContext({ openContact: () => {} });

export function useContact() {
  return useContext(ContactContext);
}

export default function ContactProvider({ children }) {
  const [contactOpen, setContactOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const openContact = useCallback(() => setContactOpen(true), []);
  const closeContact = useCallback(() => setContactOpen(false), []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (searchParams.get('contact') === '1') setContactOpen(true);
  }, [searchParams]);

  const value = useMemo(() => ({ openContact }), [openContact]);

  return (
    <ContactContext.Provider value={value}>
      {children}
      <ContactModal open={contactOpen} onClose={closeContact} />
    </ContactContext.Provider>
  );
}
