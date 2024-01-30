import Image from "next/image"

const JUDGES = [
  { firstName: 'Paulina', lastName: 'Laba', photoURL: '/images/people/paulina-laba.webp' },
  { firstName: 'Kevin', lastName: 'Popović', photoURL: '/images/people/kevin-popovic.webp' },
  { firstName: 'Kathryn', lastName: 'Sebuck', photoURL: '/images/people/kathryn-sebuck.webp' },
  { firstName: 'Marissa', lastName: 'Steketee', photoURL: '/images/people/marissa-steketee.webp' },
  { firstName: 'April', lastName: 'Wensel', photoURL: '/images/people/april-wensel.webp' }
]

export function JudgesSection() {
  return <div className='px-14 py-10 max-sm:px-10'>
    <h2 className='text-4xl text-center mb-8'>Meet the Judges</h2>
    <div className='grid grid-flow-row grid-cols-[repeat(auto-fit,200px)] gap-14 max-w-[800px] mx-auto justify-items-center justify-center py-8'>
      {JUDGES.map((judge, i) => <div key={'judge-' + i} className='flex flex-col items-center gap-2'>
        <Image src={judge.photoURL} width="180" height="180" alt={`Photo for ${judge.firstName} ${judge.lastName}`} className='rounded-full' />
        <p className="text-center text-2xl">{judge.firstName} {judge.lastName}</p>
      </div>)}
    </div>
  </div>
}
