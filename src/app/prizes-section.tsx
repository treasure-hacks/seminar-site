import Image from "next/image";

export function PrizesSection() {
  return <div className='flex gap-10 mx-auto w-fit px-14 pt-10 pb-14 min-h-[35vh] items-center justify-evenly
    max-[830px]:flex-col max-[830px]:gap-8 max-sm:px-8'>
      <div className="text-2xl text-right max-w-[380px] leading-[1.5] max-[830px]:text-center">
        <h2 className="text-4xl mb-4">Prizes!</h2>
        <p className="max-[830px]:text-left">We have an assortment of amazing prizes for our participants to win, including HyperX gaming gear!</p>
      </div>
      <Image src="/images/prizes-bird.png" width="500" height="426" alt="Bird with HyperX keyboard, mouse, and microphone"
        className="max-w-[40%] h-auto max-[830px]:max-w-[90%] max-[830px]:w-[380px]"
      />
  </div>
}


