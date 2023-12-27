import Image from "next/image"

const JUDGES = [
  { firstName: 'TBD', lastName: '', photoURL: '/register-bird.png' },
  { firstName: 'TBD', lastName: '', photoURL: '/register-bird.png' },
  { firstName: 'TBD', lastName: '', photoURL: '/register-bird.png' },
  { firstName: 'TBD', lastName: '', photoURL: '/register-bird.png' },
  { firstName: 'TBD', lastName: '', photoURL: '/register-bird.png' },
  { firstName: 'TBD', lastName: '', photoURL: '/register-bird.png' },
  { firstName: 'TBD', lastName: '', photoURL: '/register-bird.png' },
  { firstName: 'TBD', lastName: '', photoURL: '/register-bird.png' }
]

export function JudgesSection() {
  return <div className='px-14 py-10 max-sm:px-10'>
    <h2 className='text-4xl text-center mb-8'>Meet the Judges</h2>
    <div className='grid grid-flow-row grid-cols-[repeat(auto-fit,200px)] gap-6 max-w-[1000px] mx-auto justify-items-center justify-center'>
      {JUDGES.map((judge, i) => <div key={'judge-' + i}>
        <Image src={judge.photoURL} width="128" height="128" alt={`Photo for ${judge.firstName} ${judge.lastName}`}/>
        <p className="text-center text-xl">{judge.firstName} {judge.lastName}</p>
      </div>)}
    </div>
  </div>
}
