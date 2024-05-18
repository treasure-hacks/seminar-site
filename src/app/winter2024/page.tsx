import Image from 'next/image'
import PageHeader from './PageHeader';
import StatsSection from './StatsSection';
import EventHighlightsSection from './EventHighlightsSection';
import TestimonialsSection from './TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  generator: 'Soft Skill Seminar 2024',
  title: 'Soft Skill Seminar 2024 | Treasure Hacks',
  description: 'We taught students soft skills through games and hands-on experimentation to help them pursue their passions with confidence. ' +
    'Check out our event highlights, featuring expert workshops, hands-on activities, and a feedback-driven pitch competition!',
  applicationName: 'Soft Skill Seminar 2024 | Treasure Hacks',
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

export default function Home() {
  return (
    <>
      <main className='bg-gradient-to-b from-[#3D66AB] to-[#1E2630]'>
        <div className='overflow-x-clip'>
          <PageHeader />
        </div>
        <StatsSection />
        <EventHighlightsSection />
        <TestimonialsSection />

        <div className="flex mx-auto pb-12 justify-center">
          <a href="https://www.youtube.com/@treasurehacks?sub_confirmation=1" target="_blank" className="rounded-full">
            <Image src="/images/winter2024/footer.png" width="430" height="400" alt="Lumi with new HyperX gear!"
              className="hover:scale-105 hover:-rotate-6 transition-[0.25s] hover:saturate-125 hover:brightness-110 active:scale-100 rounded-full" />
          </a>
        </div>
      </main>
    </>
  )
}
