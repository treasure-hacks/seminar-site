"use client";
import Image from "next/image";
// import { Splide } from '@splidejs/splide';
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
      ['opening1.png', 'The Treasure Hacks team checking in participants'],
      ['opening2.jpg', 'A volunteer meeting taking place before the event'],
      ['opening3.jpg', 'Welcoming an industry professional to speak in their workshop'],
      ['opening4.jpg', 'Volunteers getting ready to start check-in'],
      ['opening5.jpg', 'Co-founders Ethan Wang, Ethan Kosaki, and Brandon Joe are ready to start the day'],
      ['opening6.jpg', 'Brandon Joe and Ethan Kosaki welcome a volunteer for the networking portion'],
      ['opening7.jpg', 'Ethan Xie, Ethan Kosaki, and Brandon Joe at the beginning of the event']
    ]
  },
  {
    title: 'Make it a Game!',
    description: 'For both networking and presented, we designed games and activities that allowed participants to practice and develop ' +
      'these skills in a fun way. They learned new skills and significantly improved at breaking the ice with industry professionals.',
    images: [
      ['game1.jpg', 'Musical Tables Networking'],
      ['game2.jpg', 'Musical Tables Networking'],
      ['game3.jpg', 'Slide Deck Roulette'],
      ['game4.jpg', 'Musical Tables Networking'],
      ['game5.png', 'Musical Tables Networking'],
      ['game6.jpg', 'Slide Deck Roulette'],
      ['game7.jpg', 'Musical Tables Networking'],
      ['game8.jpg', 'Musical Tables Networking'],
      ['game9.jpg', 'Musical Tables Networking'],
      ['game10.jpg', 'Slide Deck Roulette']
    ]
  },
  {
    title: 'May the Best Pitch Win!',
    description: 'Participants then each delievered a product pitch 3 times. Within each iteration, business experts provided feedback ' +
      'on how to tell the story in a concise and convincing manner, which allowed participants to further practice and strengthen their presenting skills.',
    images: [
      ['competition1.jpeg', 'Participants During Our Pitch Competition'],
      ['competition2.jpeg', 'Participants During Our Pitch Competition'],
      ['competition3.jpeg', 'Participants During Our Pitch Competition'],
      ['competition4.jpeg', 'Participants During Our Pitch Competition'],
      ['competition5.jpeg', 'Participants During Our Pitch Competition'],
      ['competition6.jpeg', 'Participants During Our Pitch Competition'],
      ['competition7.jpeg', 'Participants During Our Pitch Competition'],
      ['competition8.jpeg', 'Participants During Our Pitch Competition'],
      ['competition9.jpeg', 'Participants During Our Pitch Competition']
    ]
  },
  {
    title: 'From Inspiration to Passion',
    description: 'We also invited working professionals to share their own learnings from the field. Whether it was about forming stronger connections ' +
      'or how to start one\'s financial literacy journey, they shared their passions and inspirations to the next generation of young leaders.',
    images: [
      ['workshop1.jpg', 'Participants During Our Pitch workshop'],
      ['workshop2.jpg', 'Participants During Our Pitch workshop'],
      ['workshop3.jpg', 'Participants During Our Pitch workshop'],
      ['workshop4.jpg', 'Participants During Our Pitch workshop'],
      ['workshop5.jpg', 'Participants During Our Pitch workshop'],
      ['workshop6.jpg', 'Participants During Our Pitch workshop']
    ]
  },
  {
    title: 'Into the Horizon',
    description: 'By the end of the event, participants felt like they had known their teams for longer than just the 8 hours they were there. ' +
      'Additionally, the organizers were amazed by the 90% whole-day-retention and celebrated the work that everyone put in to make the event a possibility.',
    images: [
      ['conclusion1.png', 'Prize Winners'],
      ['conclusion2.jpg', 'Group Photo']
    ]
  }
];

const options =  {
    width: 500,
    type: 'loop',
    flickPower: 200
  }

function Section({ index, data }: { index: number, data: Highlight }) {
  const { title, description, images } = data;
  const align = index % 2 ? 'text-right' : 'text-left';
  const text = <div className={"flex flex-col justify-center " + align}>
    <h2 className="text-4xl mb-5">{title}</h2>
    <p className="max-w-[560px] leading-[1.67] text-2xl">{description}</p>
  </div>

  let splide: Splide | null = null

  const img = <>
    <div className="splide h-[330px]" ref={el => {
      if (!el || splide) return splide?.destroy()
      splide = new Splide(el, options)
      splide.mount()
    }}><div className="splide__track rounded-lg overflow-hidden">
      <ul className="splide__list">
        {images.map(([src, alt]) => <li className="splide__slide" key={src}>
          <Image src={"/images/winter2024/" + src} alt={alt} width="500" height="330" className="rounded-lg object-cover h-[330px]" />
        </li>)}
      </ul>
    </div></div>
  </>
  return <div className="flex mx-auto justify-center gap-9 items-center">
    {index % 2 ? <>{img}{text}</> : <>{text}{img}</> }
  </div>
}


export default function EventHighlightsSection() {
  return <div className="max-w-[1500px] py-12 px-14 mx-auto min-h-[480px] z-[1] relative">
    <h2 className="text-center text-5xl mb-14 mt-4">Event Breakdown</h2>
    <div className="flex flex-col gap-16">
      {highlights.map((h, i) => <Section key={i} index={i} data={h} />)}
    </div>
  </div>
}