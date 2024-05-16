"use client";
import Image from "next/image";
import './highlights';
import Splide from "@splidejs/splide";

interface Highlight {
  title: string;
  description: string;
  images: [string, string][];
}

const highlights: Highlight[] = [
  {
    title: 'Setting the Stage',
    description: 'Before starting, students were able to get some free swag from our sponsors like HyperX and the ' +
      'Extended Studies program at UC San Diego. Students got time to meet one another before the full day of workshops and gamified events!',
    images: [
      ['opening1.webp', 'The Treasure Hacks team checking in participants'],
      ['opening2.webp', 'A volunteer meeting taking place before the event'],
      ['opening3.webp', 'Welcoming an industry professional to speak in their workshop'],
      ['opening4.webp', 'Volunteers getting ready to start check-in'],
      ['opening5.webp', 'Co-founders Ethan Wang, Ethan Kosaki, and Brandon Joe are ready to start the day'],
      ['opening6.webp', 'Brandon Joe and Ethan Kosaki welcome a volunteer for the networking portion'],
      ['opening7.webp', 'Ethan Xie, Ethan Kosaki, and Brandon Joe at the beginning of the event']
    ]
  },
  {
    title: 'Make it a Game!',
    description: 'For both networking and presented, we designed games and activities that allowed participants to practice and develop ' +
      'these skills in a fun way. They learned new skills and significantly improved at breaking the ice with industry professionals.',
    images: [
      ['game1.webp', 'Musical Tables Networking'],
      ['game2.webp', 'Musical Tables Networking'],
      ['game3.webp', 'Slide Deck Roulette'],
      ['game4.webp', 'Musical Tables Networking'],
      ['game5.webp', 'Musical Tables Networking'],
      ['game6.webp', 'Slide Deck Roulette'],
      ['game7.webp', 'Musical Tables Networking'],
      ['game8.webp', 'Musical Tables Networking'],
      ['game9.webp', 'Musical Tables Networking'],
      ['game10.webp', 'Slide Deck Roulette']
    ]
  },
  {
    title: 'May the Best Pitch Win!',
    description: 'Participants then each delievered a product pitch 3 times. Within each iteration, business experts provided feedback ' +
      'on how to tell the story in a concise and convincing manner, which allowed participants to further practice and strengthen their presenting skills.',
    images: [
      ['competition1.webp', 'Participants During Our Pitch Competition'],
      ['competition2.webp', 'Participants During Our Pitch Competition'],
      ['competition3.webp', 'Participants During Our Pitch Competition'],
      ['competition4.webp', 'Participants During Our Pitch Competition'],
      ['competition5.webp', 'Participants During Our Pitch Competition'],
      ['competition6.webp', 'Participants During Our Pitch Competition'],
      ['competition7.webp', 'Participants During Our Pitch Competition'],
      ['competition8.webp', 'Participants During Our Pitch Competition'],
      ['competition9.webp', 'Participants During Our Pitch Competition']
    ]
  },
  {
    title: 'From Inspiration to Passion',
    description: 'We also invited working professionals to share their own learnings from the field. Whether it was about forming stronger connections ' +
      'or how to start one\'s financial literacy journey, they shared their passions and inspirations to the next generation of young leaders.',
    images: [
      ['workshop1.webp', 'Participants During Our Pitch workshop'],
      ['workshop2.webp', 'Participants During Our Pitch workshop'],
      ['workshop3.webp', 'Participants During Our Pitch workshop'],
      ['workshop4.webp', 'Participants During Our Pitch workshop'],
      ['workshop5.webp', 'Participants During Our Pitch workshop'],
      ['workshop6.webp', 'Participants During Our Pitch workshop']
    ]
  },
  {
    title: 'Into the Horizon',
    description: 'By the end of the event, participants felt like they had known their teams for longer than just the 8 hours they were there. ' +
      'Additionally, the organizers were amazed by the 90% whole-day-retention and celebrated the work that everyone put in to make the event a possibility.',
    images: [
      ['conclusion1.webp', 'Prize Winners'],
      ['conclusion2.webp', 'Group Photo']
    ]
  }
];

const options = {
  width: 500,
  type: 'loop',
  flickPower: 200,
  breakpoints: {
    1100: { width: 400 },
    960: { width: 600 }
  }
}

function Section({ index, data }: { index: number, data: Highlight }) {
  const { title, description, images } = data;
  const align = index % 2 ? 'text-right' : 'text-left';
  const text = <div className={"max-[960px]:mt-4 max-[960px]:text-left flex flex-col justify-center " + align}>
    <h2 className="text-4xl mb-5">{title}</h2>
    <p className="max-w-[560px] leading-[1.67] text-2xl max-[960px]:max-w-[600px]">{description}</p>
  </div>

  let splide: Splide | null = null

  const img = <>
    <div className="splide h-[330px] max-[1100px]:h-[300px] max-[960px]:h-[396px] max-[590px]:h-[320px] max-[480px]:h-[240px] max-w-[500px]" ref={el => {
      if (!el || splide) return splide?.destroy()
      splide = new Splide(el, options)
      splide.mount()
    }}><div className="splide__track rounded-lg overflow-hidden h-full">
      <ul className="splide__list h-full">
        {images.map(([src, alt]) => <li className="splide__slide h-full" key={src}>
          <Image src={"/images/winter2024/" + src} alt={alt} width="500" height="330" className="rounded-lg object-cover h-full max-[960px]:w-full" />
        </li>)}
      </ul>
    </div></div>
  </>
  return <div className={"flex mx-auto justify-center gap-9 items-center max-[960px]:flex-col-reverse" + (index % 2 ? '' : '_ max-[960px]:flex-col')}>
    {index % 2 ? <>{img}{text}</> : <>{text}{img}</> }
  </div>
}


export default function EventHighlightsSection() {
  return <div className="max-w-[1500px] py-12 px-14 mx-auto min-h-[480px] z-[1] relative max-[640px]:px-8">
    <h2 className="text-center text-5xl mb-14 mt-4">Event Breakdown</h2>
    <div className="flex flex-col gap-16">
      {highlights.map((h, i) => <Section key={i} index={i} data={h} />)}
    </div>
  </div>
}