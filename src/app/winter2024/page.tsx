import Image from 'next/image'
import PageHeader from './PageHeader';
import StatsSection from './StatsSection';
import EventHighlightsSection from './EventHighlightsSection';
import TestimonialsSection from './TestimonialsSection';

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
