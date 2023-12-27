import Image from "next/image"

interface InfoItemProps {
  key?: string,
  icon: string,
  text: string
}

const eventInfo: InfoItemProps[] = [
  { key: 'location', icon: 'location-marker', text: '9600 North Torrey Pines Road, La Jolla, CA 92037' },
  { key: 'datetime', icon: 'calendar', text: 'February 17th\n10:00 AM - 6:00 PM' },
  { key: 'directions', icon: 'map', text: 'Link to directions\nParking layout' }
]

function InfoItem({ icon, text }: InfoItemProps) {
  return <div className='flex flex-col gap-4 items-center text-2xl text-center
    max-[1080px]:text-xl
    max-[830px]:flex-row max-[830px]:text-left max-[830px]:text-2xl max-[440px]:text-xl
  '>
    <Image src={`/glyphs/${icon}.svg`} width="72" height="72" alt={icon + ' icon'} />
    <span className='whitespace-pre-line w-[300px] max-[1080px]:w-[220px] max-[830px]:w-auto max-[830px]:max-w-[260px]'>{text}</span>
  </div>
}

export function InfoSection() {
  return <div className='flex gap-6 mx-auto w-fit px-14 py-10
    max-[830px]:flex-col max-[830px]:gap-8 max-sm:px-8'>
    {eventInfo.map(item => <InfoItem key={item.key} text={item.text} icon={item.icon} />)}
  </div>
}
