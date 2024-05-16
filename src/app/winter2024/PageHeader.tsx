import Image from "next/image";
import { Oooh_Baby } from 'next/font/google';

const ooohBaby = Oooh_Baby({ subsets: ['latin'], weight: '400' })

function LeftSide() {
  return <div className="my-auto flex flex-col gap-4 pl-16 pt-4 justify-center z-[1] max-[1200px]:pl-12
    max-[960px]:px-8
  ">
    <p className="text-5xl mb-2 font-medium max-[640px]:text-4xl max-[640px]:my-0">Treasure Hacks</p>
    <div>
      <h1 className="text-7xl font-semibold max-[640px]:text-5xl">Soft Skill Seminar</h1>
    </div>
    <h2 className={"text-6xl mt-3 mb-3 max-[640px]:text-5xl max-[640px]:my-0 " + ooohBaby.className}>Event Recap</h2>
    <div className="pr-10 max-[960px]:px-0">
      <p className="text-2xl">Through our in-person full day seminar, we hosted networking workshops, connected students with industry
        professionals, and gamified the soft-skill learning process to help empower students.</p>
      <br />
      <p className="text-2xl">Check out the event details and highlights below!</p>
    </div>
  </div>
}

function PhotoGrid() {
  return <div className="grid grid-cols-2 gap-8 rotate-12 relative top-[max(calc(120px-11vw),-80px)] right-[-9vw] w-[45vw] shrink-0 min-w-[600px] max-w-[800px] content-center -ml-16
    max-[960px]:absolute max-[960px]:opacity-20 max-[960px]:w-[750px]
  ">
    <Image src="/images/winter2024/header1.webp" width="512" height="315" alt="THIS IS NOT UPDATED YET" />
    <Image src="/images/winter2024/header2.webp" width="512" height="315" alt="THIS IS NOT UPDATED YET" />
    <Image src="/images/winter2024/header3.webp" width="512" height="315" alt="THIS IS NOT UPDATED YET" />
    <Image src="/images/winter2024/header4.webp" width="512" height="315" alt="THIS IS NOT UPDATED YET" />
    <Image src="/images/winter2024/header5.webp" width="512" height="315" alt="THIS IS NOT UPDATED YET" />
    <Image src="/images/winter2024/header6.webp" width="512" height="315" alt="THIS IS NOT UPDATED YET" />
    <Image src="/images/winter2024/header7.webp" width="512" height="315" alt="THIS IS NOT UPDATED YET" />
    <Image src="/images/winter2024/header8.webp" width="512" height="315" alt="THIS IS NOT UPDATED YET" />
  </div>
}

export default function PageHeader() {
  return <header className="flex h-[75vh] max-w-[1600px] mx-auto relative">
    <LeftSide/>
    <PhotoGrid/>
  </header>
}
