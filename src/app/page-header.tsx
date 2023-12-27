import Image from 'next/image'
import { CountdownTimer } from './countdown'

export function PageHeader() {
  return <header className="bg-white relative after:content-[' '] after:absolute overflow-hidden
    after:inset-0 after:bg-gradient-to-b after:from-[#0009] after:to-[#0059D199]">
    <Image src="/geisel-library.png" alt="Geisel Library" width="1920" height="1080"
      className='object-cover object-center w-full min-h-[540px] max-h-screen opacity-75'
    />
    <div className='absolute top-1/2 translate-y-[-50%] w-full z-[1]'>
      <h1 className='flex flex-col text-6xl gap-6 font-bold w-full items-center text-center whitespace-nowrap
        max-sm:scale-75 max-[400px]:scale-[65%] min-[1500px]:scale-125'>
        <span className='z-[1] text-5xl'>
          Treasure Hacks
        </span>
        <span className='relative z-[1] w-fit
          max-[480px]:before:hidden before:bg-[url("/header-star-left.png")] before:inline-block before:size-20 before:bg-contain
          before:bg-no-repeat before:bg-center before:absolute before:top-[-4px] before:left-[-88px]
          max-[480px]:after:hidden after:bg-[url("/header-star-right.png")] after:inline-block after:size-20 after:bg-contain
          after:bg-no-repeat after:bg-center after:absolute after:top-[8px] after:right-[-76px]'
        >
          Soft Skill Seminar
        </span>
      </h1>
      <div className='min-[1500px]:scale-125 min-[1500px]:mt-24'>
        <CountdownTimer/>
        <a target="_blank" className='group relative w-fit mt-16 mx-auto block px-5 py-2.5 bg-gradient-to-r from-[#FFE259] to-[#FFA751] rounded-full
          justify-center items-center font-bold text-xl text-center text-zinc-800 transition-shadow duration-200 select-none
          hover:shadow-[0_0_8px_0px_#6666,4px_4px_4px_2px_#fff4_inset]
          active:shadow-[0_0_8px_0px_#6666,2px_2px_4px_1px_#2224_inset]
          after:content-[" "] after:bg-[url(/spark-gold-br.png)] after:size-12 after:absolute after:right-[-42px]
          after:bottom-[-28px] after:bg-contain after:bg-no-repeat'>
          <div className='absolute left-[-35px] top-[-71px] hover:text-red-600 hover:*:last:block pointer-events-none'>
            <Image width="84" height="84" src='/register-bird.png' alt="Bird" className='transition opacity duration-200 group-hover:opacity-0'/>
            <Image width="84" height="84" src='/register-bird-hover.png' alt="Bird"
              className='transition opacity duration-200 opacity-0 group-hover:opacity-100 absolute inset-0'/>
          </div>
          Register Now
        </a>
      </div>
    </div>
  </header>
}
