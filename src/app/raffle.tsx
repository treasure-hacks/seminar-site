import Image from 'next/image'

export function Raffle() {
  return <div className='min-h-[35vh] max-h-[600px] px-14 pt-12 pb-4 flex max-[400px]:flex-col relative justify-center items-center gap-5 max-sm:px-10'>
    <p className='relative leading-[1.35] flex-col text-3xl gap-6 w-full max-w-[440px] text-right py-[2%] z-[1]'>
      First 50 birds to sign up will be <span
        className='relative inline-block min-[730px]:before:bg-[url("/red-spark.png")] min-[730px]:before:inline-block min-[730px]:before:absolute
        min-[730px]:before:size-8 min-[730px]:before:bg-no-repeat min-[730px]:before:bg-cover min-[730px]:before:bottom-[-20px] min-[730px]:before:left-[-32px]'
      >entered</span> in a raffle for a chance to win a new pair of HyperX headphones!
    </p>
    <Image width="200" height="200" src='/headphones.png' alt="Headphones"
      className='max-[690px]:absolute max-[690px]:left-[calc(25%-13vw)] max-[690px]:bottom-[26px] max-[690px]:opacity-20'/>
</div>
}
