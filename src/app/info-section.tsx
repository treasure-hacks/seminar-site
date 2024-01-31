'use client'
import Image from "next/image"
import { useEffect } from "react"

interface InfoItemProps {
  key?: string,
  icon: string,
  text: string | JSX.Element
}

const directionsText = <div>
  <a className="maps-link underline"
    href="https://www.google.com/maps/place/9600+N+Torrey+Pines+Rd,+La+Jolla,+CA+92037"
    target="_blank">Link to directions</a><br/>
  <a className="underline" href="/event-parking.pdf" target="_blank">Parking Instructions</a>
</div>

const eventInfo: InfoItemProps[] = [
  { key: 'location', icon: 'location-marker', text: '9600 North Torrey Pines Road, La Jolla, CA 92037' },
  { key: 'datetime', icon: 'calendar', text: 'February 17th\n10:00 AM - 6:00 PM' },
  { key: 'directions', icon: 'map', text: directionsText }
]

function InfoItem({ icon, text }: InfoItemProps) {
  useEffect(() => {
    if (!/Mac/.test(navigator.userAgent)) return
    // if on an Apple OS, change to an Apple Maps link
    const link = document.querySelector('.maps-link') as HTMLAnchorElement
    link.href = link.href.replace('https://www.google.com/maps/place/', 'https://maps.apple.com/?address=')
  }, [])
  return <div className='flex flex-col gap-4 items-center text-2xl text-center
    max-[1080px]:text-xl
    max-[830px]:flex-row max-[830px]:text-left max-[830px]:text-2xl max-[440px]:text-xl
  '>
    <Image src={`/glyphs/${icon}.svg`} width="72" height="72" alt={icon + ' icon'} />
    <span className='whitespace-pre-line w-[300px] max-[1080px]:w-[220px] max-[830px]:w-auto max-[830px]:max-w-[260px]'>{text}</span>
  </div>
}

export function InfoSection() {
  return <div className='flex gap-6 mx-auto w-fit px-14 py-10 min-h-[35vh] items-center
    max-[830px]:flex-col max-[830px]:items-start max-[830px]:gap-8 max-sm:px-8'>
    {eventInfo.map(item => <InfoItem key={item.key} text={item.text} icon={item.icon} />)}
  </div>
}
