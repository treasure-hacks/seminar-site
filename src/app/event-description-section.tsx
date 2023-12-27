import Image from "next/image"

const EVENT_DESCRIPTION = 'Level up your career game and pick up essential skills to stand out in the job market! Explore effective networking strategies, learn the art of creating a compelling pitch, and compete against others in a feedback-driven pitch competition.'


export function EventDescription() {
  return <div className='flex flex-row-reverse gap-12 px-14 py-10 max-w-[1100px] mx-auto
    max-md:flex-col max-md:max-w-[560px] max-[1100px]:gap-8 max-sm:px-10'>
    <div>
      <h2 className='text-4xl mb-4'>The Seminar</h2>
      <p className='text-lg'>{EVENT_DESCRIPTION}</p>
        <a target="_blank" className='group relative w-fit mt-6 mx-auto block px-5 py-2.5 bg-gradient-to-r from-[#FFE259] to-[#FFA751] rounded-full
          justify-center items-center text-xl text-center text-zinc-800 transition-shadow duration-200 select-none
          hover:shadow-[0_0_8px_0px_#6666,4px_4px_4px_2px_#fff4_inset] active:shadow-[0_0_8px_0px_#6666,2px_2px_4px_1px_#2224_inset]'>
          Register Now
        </a>
    </div>
    <div className='w-[400px] max-w-[40%] max-md:max-w-full max-md:mx-auto relative flex-shrink-0
      before:block before:bg-[url("/images/seminar-bird.png")] before:size-24 before:bg-center before:bg-no-repeat
      before:bg-cover before:absolute before:bottom-[-28px] before:left-[-32px]
    '>
      <Image src="/geisel-library.png" width="400" height="200" alt="Placeholder image"
        className='object-cover max-w-[400px] w-full h-full rounded-lg'
      />
    </div>
  </div>
}