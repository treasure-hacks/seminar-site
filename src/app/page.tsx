import Image from 'next/image'
import Script from 'next/script'
import { PageHeader } from './page-header'
import { RaffleSection } from './raffle-section'
import { InfoSection } from './info-section'
import { EventDescription } from './event-description-section'
import { ActivitiesSection } from './activities-section'
import { WorkshopsSection } from './workshops-section'
import { ScheduleSection } from './schedule-section'
import { JudgesSection } from './judges-section'
import { SponsorsSection } from './sponsors-section'
import { PrizesSection } from './prizes-section'
import { FAQSection } from './faq-section'
import { QuoteSection } from './quote-section'
import { PageFooter } from './footer'
import './index'

export default function Home() {
  return (
    <>
      <PageHeader/>
      <main className='bg-gradient-to-b from-[#3D66AB] to-[#1E2630]'>
        <RaffleSection/>
        <InfoSection/>
        <EventDescription/>
        <ActivitiesSection/>
        <WorkshopsSection/>
        <ScheduleSection/>
        <JudgesSection/>
        <SponsorsSection/>
        <PrizesSection/>
        <FAQSection/>
        <QuoteSection/>

        <PageFooter/>
      </main>
    </>
  )
}
