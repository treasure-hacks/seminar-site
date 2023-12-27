import Image from 'next/image'

export function Raffle() {
    return <div className='flex relative justify-center gap-5 max-[480px]:scale-[80%] max-[480px]:mt-4 max-[400px]:scale-[70%] max-[400px]:mt-0 px-60'>
        <p className='flex flex-col text-4xl gap-6 w-full text-right'>
            First 50 birds to sign up will be entered in a raffle for a chance to win a new pair of HyperX headphones!
        </p>
        <Image width="500" height="500" src='/headphones.png' alt="Headphones"/>
  </div>
}