import Image from "next/image";
import { Oooh_Baby } from 'next/font/google';

const ooohBaby = Oooh_Baby({ subsets: ['latin'], weight: '400' })

function LeftSide() {
  return <div className="my-auto flex: flex-col gap-4 pl-16 pt-4 justify-center z-[1] max-[1200px]:pl-12
    max-[960px]:px-8 max-[960px]:py-10 contents
  ">
<div className="[grid-area:A] z-[1] pl-16 pt-10 max-[1300px]:text-center max-[1300px]:pl-0 max-[960px]:text-left max-[960px]:pl-12 max-[720px]:px-8">
    <p className="text-5xl mb-4 font-medium max-[640px]:text-4xl max-[640px]:mb-2">Treasure Hacks</p>
    <div>
      <h1 className="text-7xl font-semibold max-[640px]:text-5xl">Soft Skill{' '}
        <span className="relative inline-block before:bg-[url(/images/winter2024/sparkles.webp)] before:right-[-40px] before:top-[-20px] before:inline-block
        before:absolute before:w-[50px] before:h-[64px] before:bg-cover max-[960px]:text-7xl max-[640px]:text-5xl max-[440px]:text-6xl">Seminar</span></h1>
    </div>
    <h2 className={"text-6xl mt-3 mb-3 max-[640px]:text-5xl max-[640px]:mb-0 " + ooohBaby.className}>Event Recap</h2>
</div>
<div className="[grid-area:B] z-[1] pl-16 max-[1200px]:pl-12 pb-10 max-[1300px]:pb-0 max-[960px]:pr-12 max-[720px]:px-8">
    <div className="max-[960px]:px-0">
      <p className="text-2xl">Through our in-person full day seminar, we hosted networking workshops, connected students with industry
        professionals, and gamified the soft-skill learning process to help empower students.</p>
      <br />
      <p className="text-2xl">Check out the event details and highlights below!</p>
    </div>
</div>
  </div>
}

function PhotoGrid() {
  return <div className="grid grid-cols-2 gap-8 rotate-12 top-[max(calc(40px-12vw),-160px)] right-[-9vw] w-[45vw] shrink-0 min-w-[600px] max-w-[800px]
    content-center -ml-16
    max-[960px]:  absolute max-[960px]:  opacity-20 max-[960px]:w-[750px]
  ">
    <Image src="/images/winter2024/header1.webp" width="512" height="315" alt="Volunteers setting up before the event" priority />
    <Image src="/images/winter2024/header2.webp" width="512" height="315" alt="Team iClothes working on their pitch" priority />
    <Image src="/images/winter2024/header3.webp" width="512" height="315" alt="Kathy and April helping to judge the pitch competition" priority />
    <Image src="/images/winter2024/header4.webp" width="512" height="315" alt="Daniel and Carmen Presenting their financial literacy workshop" priority />
    <Image src="/images/winter2024/header5.webp" width="512" height="315" alt="Student and volunteer during the networking section" priority />
    <Image src="/images/winter2024/header6.webp" width="512" height="315" alt="Student and volunteer during the networking section" priority />
    <Image src="/images/winter2024/header7.webp" width="512" height="315" alt="Team iCode working on their pitch" priority />
    <Image src="/images/winter2024/header8.webp" width="512" height="315" alt="Ethan Xie, Ethan Kosaki, and Brandon Joe before the event" priority />
  </div>
}

function VideoEmbed() {
  return <iframe className="z-10 shrink-0 w-[45vw] h-[25.3125vw] mx-10 rounded-xl shadow-xl max-w-[800px] max-h-[450px]
    max-[960px]:w-[90vw] max-[960px]:h-[51vw] max-[960px]:mx-auto [grid-area:C]"
    width="560" height="315" src="https://www.youtube-nocookie.com/embed/yx2NvJCpxCE?si=P1M0YVynLgap4aT_" title="YouTube video player"
    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
}

export default function PageHeader() {
  return <header className="min-h-[67vh] max-w-[1600px] mx-auto relative pt-10 grid [grid-template-areas:'A_C''B_C'] content-center justify-center items-center
    max-[1300px]:[grid-template-areas:'A_A''B_C'] max-[1300px]:gap-y-8
    max-[960px]:[grid-template-areas:'A''B''C']
  ">
    <LeftSide/>
    <PhotoGrid/>
    <VideoEmbed/>
  </header>
}
