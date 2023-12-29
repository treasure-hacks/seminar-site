'use client';
import { useEffect, useState } from 'react';
import Collapsible from 'react-collapsible'

const FAQs = [
  {
    question: 'What is a soft skill seminar?',
    answer: <>
      A soft skill seminar is an event where participants like you will learn about and practice soft skills. Ours
      is made up of three main components:
      <ol className='list-decimal pl-6 my-4 flex flex-col gap-2'>
        <li>Workshops: Industry professionals will talk about an assortment of topics they have found to be useful in
          their career. They will focus on a small part of each topic (such as storytelling during a pitch) and share
          their deep understanding of how to do it effectively. Each workshop will have two breakouts so you can pick
          which sub-topic is best for you!</li>
        <li>Gamified Activities: We are working with experts in the education space to guide you in learning soft skills.
          These activities are designed to provide instant feedback and provide a comfortable environment to practice
          what you learn in the workshops.</li>
        <li>Pitch Competition: After the workshops and activities, you will come up with a solution to a problem, and
          you will then pitch it to judges for feedback. Just like the real world, you can only use each opportunity
          once, but the judge you present to will give you feedback on how to improve your pitch!</li>
      </ol>
    </>
  },
  {
    question: 'How do I register?',
    answer: <>All you need to do is sign up on our <a>registration form</a>!</>
  },
  {
    question: 'Do I need experience with presenting, networking, etc?',
    answer: <>Not at all! This is an opportunity for everyone to learn, and we will have many interactive activities where
      you can pick up the basics and develop these skills. Our goal is to make the ideal experience for first time
      participants! For more details on what we provide, take a look at our <a>event schedule</a></>
  },
  {
    question: 'Does it cost money to attend?',
    answer: 'Nope, it\u2019s completely free for all participants!'
  }
]

export function FAQSection() {
  const [forceOpen] = useState(true)
  useEffect(() => {
    const faqList = document.getElementById('faq-list') as HTMLElement
    faqList.querySelectorAll('details').forEach(el => el.addEventListener('click', (e: Event) => e.preventDefault()))
  }, [])

  return <>
    <h2 className='text-4xl text-center mt-8 mb-4'>Frequently Asked Questions</h2>
    <div id='faq-list' className='py-10 px-14 max-sm:px-8 flex flex-col w-fit mx-auto'>
      {FAQs.map((faq, i) => <div key={'faq-' + i} className='last:border-b-0 border-b-[1px] border-b-gray-700 max-w-[1000px]'>
        <Collapsible trigger={faq.question}
          contentContainerTagName='details'
          triggerTagName='summary'
          contentElementId={'faq-content-' + i}
          easing='ease-in-out'
          containerElementProps={{
            open: forceOpen,
            className: 'bg-[#0006] px-4 py-2 text-xl max-[480px]:text-lg max-[480px]:px-2'
          }}
          triggerElementProps={{
            id: 'faq-trigger-' + i,
            className: 'flex items-center relative list-none py-2 pl-4 pr-12 after:content-["+"] after:absolute ' +
              'after:right-4 after:text-3xl [&[aria-expanded="true"]]:after:content-["\u2212"] font-bold'
          }}
          transitionTime={250}
        >
          <div className='px-4 pt-2 pb-3'>{faq.answer}</div>
        </Collapsible>
      </div>)}
    </div>
  </>
}
