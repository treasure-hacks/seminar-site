import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'

const lato = Lato({ subsets: ['latin'], weight: ['100', '300', '400', '700', '900'] })

export const metadata: Metadata = {
  generator: 'Treasure Hacks Soft Skill Seminar',
  title: 'Treasure Hacks: Soft Skill Seminar',
  description: 'Our seminars teach skills like pitching and networking to high school and undergraduate students in a fun and relevant way. Through ' +
    'hands-on activities and a feedback-driven pitch competition, we seek to help them find their voice and pursue their passions with confidence.',
  applicationName: 'Treasure Hacks Soft Skill Seminar',
  referrer: 'origin-when-cross-origin',
  keywords: ['Treasure Hacks', 'Soft Skills', 'Seminar', 'Workshop', 'Presenting', 'Networking'],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/icons/android-chrome-512x512.png',
    shortcut: '/icons/favicon.ico',
    apple: '/icons/apple-touch-icon.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-[#1e2630]">
      <head>
        <meta name="color-scheme" content="dark" />
      </head>
      <body className={lato.className + ' text-white'}>{children}</body>
    </html>
  )
}
