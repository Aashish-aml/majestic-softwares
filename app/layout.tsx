import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Majestic Softwares | Scalable Software Engineering',
  description:
    'A remote-first software development and IT consulting team in India. Custom software, web development, cloud engineering, and quality assurance built to scale.',
  applicationName: 'Majestic Softwares',
  openGraph: {
    type: 'website',
    title: 'Majestic Softwares | Scalable Software Engineering',
    description:
      'Experienced developers, designers, and QA engineers building thoughtful digital products for what comes next.',
    siteName: 'Majestic Softwares',
  },
  icons: {
    icon: '/majestic-icon.svg',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f9fc',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
