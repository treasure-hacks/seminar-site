import Image from "next/image"

const quoteText = '“Your greatest asset is you. Impact doesn\u2019t happen solely through words, but through distinguishing your presence.”'

export function QuoteSection() {
  return <div className='py-10 px-14 max-sm:px-8 flex w-full justify-center items-center min-h-[20vh] gap-8 max-[740px]:flex-col'>
    <Image src="https://treasurehacks.org/images/team/brandonj.webp" width="200" height="200" alt="Brandon Joe"
      className="rounded-full"/>
    <div className="max-w-[600px] text-3xl italic leading-[1.4] max-[740px]:max-w-[500px] max-[740px]:text-2xl">
      <p>{quoteText}</p>
      <p className="mt-2 text-2xl not-italic">
        &mdash; Brandon Joe, Co-Founder
      </p>
    </div>
  </div>
}
