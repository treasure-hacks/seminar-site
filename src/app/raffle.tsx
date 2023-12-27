import Image from 'next/image'

export function Raffle() {
    return <div className='flex max-[400px]:flex-wrap relative justify-center gap-5 max-[480px]:scale-[80%] max-[480px]:mt-4 max-[400px]:scale-[70%] max-[400px]:mt-0 px-[15%]'>
        <p className='relative flex-col text-6xl gap-6 w-full text-right py-[2%] max-sm:scale-60 max-[400px]:scale-[80%]
                      max-[480px]:before:hidden before:bg-[url("/red-spark.png")] before:inline-block before:size-20 before:bg-contain
                      before:bg-no-repeat before:bg-center before:absolute before:top-[115px] before:left-[-10px]'>
            First 50 birds to sign up will be entered in a raffle for a chance to win a new pair of HyperX headphones!
        </p>
        <Image width="400" height="400" src='/headphones.png' alt="Headphones"/>
  </div>
}