import Image from 'next/image'
import Script from 'next/script'
import PageHeader from './PageHeader';
import StatsSection from './StatsSection';
import EventHighlightsSection from './EventHighlightsSection';
import TestimonialsSection from './TestimonialsSection';
// import './index'

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
      
        {/*

        <PageFooter/> */}
      </main>
    </>
  )
}
