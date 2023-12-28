'use client';
import Image from "next/image"
import gallery from "./gallery"
import { useEffect } from "react";

interface Workshop {
  name: string;
  sections: {
    title: string;
    speaker: string;
    speakerTitle: string;
    image?: string;
  }[];
}

const WORKSHOPS: Workshop[] = [
  {
    name: 'Presenting',
    sections: [
      {
        title: 'Bringing Yourself', speaker: 'Brant Cooper',
        speakerTitle: 'Co-Founder of Startup San Diego', image: 'brant-cooper.webp'
      },
      {
        title: 'Storytelling with Data', speaker: 'J Bryan Bennett',
        speakerTitle: 'CEO of Elite Leadership Academy', image: 'bryan-bennett.webp'
      }
    ]
  },
  {
    name: 'Networking',
    sections: [
      {
        title: 'Overcome Networking Fear', speaker: 'DeLinda Forsythe',
        speakerTitle: 'former CEO of ICE', image: 'delinda-forsythe.webp'
      },
      {
        title: 'Networking with Empathy', speaker: 'Christiana Russell',
        speakerTitle: 'Mending Wing Foundation', image: 'christiana-russell.webp'
      }
    ]
  },
  {
    name: 'Financial Literacy',
    sections: [
      {
        title: 'TBD', speaker: 'Sam Liu',
        speakerTitle: '__________ ____________________________'
      },
      {
        title: 'TBD', speaker: 'TBD',
        speakerTitle: 'MyPoint Credit Union Representative'
      }
    ]
  }
]

// -3px_-3px_10px_0_rgba(17,17,17,0.20)_inset,3px_3px_12px_0_rgba(0,0,0,0.30);

function WorkshopCard({ data }: { data: Workshop }) {
  return <div className='splide__slide bg-[#00243F] rounded-xl py-6 px-8 flex-shrink-0 max-w-[100vw]
    max-[550px]:rounded-none max-[550px]:px-4 max-[550px]:w-full max-[550px]:shadow-none'>
    <h3 className='text-3xl text-center my-2 max-[550px]:mt-0'>{data.name}</h3>
    {data.sections.map((s, index) => {
      const imgSrc = s.image ? `/images/people/${s.image}` : '/images/speaker-placeholder.png'
      return <div key={data.name + ' ' + index} className='flex items-center gap-6 mt-6 mb-2 max-[550px]:gap-3 w-fit mx-auto'>
        <Image src={imgSrc} alt={s.speaker} width="96" height="96" className='bg-white rounded-full
          max-[550px]:w-[72px] max-[550px]:h-[72px]'
        />
        <div className='text-lg w-[260px] flex-shrink-0 max-[550px]:text-[17px] max-[550px]:w-[250px]'>
          <p className='mb-1 font-bold'>{s.title}</p>
          <p className='mb-[2px]'>Featuring {s.speaker}, {s.speakerTitle}</p>
        </div>
      </div>
    })}
  </div>
}

export function WorkshopsSection() {
  useEffect(() => {
    gallery('#workshops')
  }, [])

  return <>
    <h2 className='text-4xl text-center mb-6 pt-10'>Workshops</h2>
    <div id='workshops' className='splide pb-5 px-14 max-sm:px-10 flex justify-center max-[550px]:px-0 max-[550px]:pb-3 max-[550px]:bg-[#02243f]'>
      <div className='splide__track pb-6'><div className='splide__list'>
        {WORKSHOPS.map(w => <WorkshopCard key={w.name} data={w}/>)}
      </div></div>
    </div>
  </>
}
