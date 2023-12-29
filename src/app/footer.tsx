import Image from "next/image"

export function PageFooter() {
  return <footer className='relative pt-4 pb-16 flex flex-col items-center text-center'>
    <Image src='/images/heart-bubble.png' width='312' height='458' alt='Heart in speech bubble'
      className='relative [top:clamp(12px,3vw,24px)] [left:clamp(72px,18vw,135px)] [width:clamp(72px,18vw,135px)] rotate-3'
    />
    <p className='[font-size:clamp(18px,4.5vw,36px)]'>Hosted with love</p>
    <p className='[font-size:clamp(24px,6vw,48px)]'>By <a href='https://treasurehacks.org' className='font-bold underline'>Treasure Hacks</a></p>
  </footer>
}
