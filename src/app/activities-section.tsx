import Image from "next/image"

const ACTIVITIES = [
  { name: 'Musical Tables', icon: 'tables', description: 'Breaking the ice when joining a conversation' },
  { name: 'Slide Deck Roulette', icon: 'presentation', description: 'Spontaneous thinking in the midst of chaos' },
  { name: 'Pitch Competition', icon: 'scales', description: 'Pitching to the pros for pointers and insight' }
]

export function ActivitiesSection() {
  return <div className='py-10 px-14 max-sm:px-4 min-h-[45vh] flex flex-col justify-center'>
    <h2 className='text-4xl mt-8 mb-8 text-center'>Gamified Learning</h2>
    <div className='flex flex-wrap justify-center gap-12 my-8'>
      {ACTIVITIES.map(a => <div key={a.icon} className='flex gap-4 items-center my-2'>
        <Image src={`/images/${a.icon}.png`} width='80' height='80' alt={a.icon + ' Icon'}/>
        <div className='text-xl max-[440px]:text-lg'>
          <p className='font-bold text-2xl mb-1 max-[440px]:text-xl'>{a.name}</p>
          <p className='w-[220px] max-[440px]:w-[200px]'>{a.description}</p>
        </div>
      </div>)}
    </div>
  </div>
}
