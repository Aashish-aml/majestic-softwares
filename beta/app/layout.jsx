import SiteShell from '../components/SiteShell';
import './globals.css';

export const metadata = {
  metadataBase: new URL('https://majesticsoftwares.com'),
  title: {
    default: 'MajesticSoftwares — Product-minded engineering studio',
    template: '%s — MajesticSoftwares',
  },
  description:
    'MajesticSoftwares designs and builds websites, web apps, and mobile products with craft, clarity, and measurable outcomes.',
  openGraph: {
    type: 'website',
    siteName: 'MajesticSoftwares',
    title: 'MajesticSoftwares — Product-minded engineering studio',
    description:
      'We design and build websites, web apps, and mobile products with craft, clarity, and outcomes you can measure.',
    images: [{ url: '/beta/images/og-image.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MajesticSoftwares — Product-minded engineering studio',
    description:
      'We design and build websites, web apps, and mobile products with craft, clarity, and outcomes you can measure.',
  },
};

export const viewport = {
  themeColor: '#f9f9f8',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
