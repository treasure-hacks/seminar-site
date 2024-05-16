import Image from "next/image";

const testimonials = [
  {
    name: 'Anna Heinke',
    photo: '/images/winter2024/anna-heinke.webp',
    quote: 'There are so many things I learned today, but the most impactful moment was pitching with the group and ' +
      'learning how to sell [and] communicate ideas. I\u2019ve never practiced it before in this way, which made today more helpful.'
  },
  {
    name: 'Jonathan Hsu',
    photo: '/images/winter2024/jonathan-hsu.webp',
    quote: 'I swear everyone looks like someone I known before. The volunteers, the people... they feel like friends.'
  }
]


export default function TestimonialsSection() {
  return <div className="max-w-[1500px] py-12 px-14 mx-auto min-h-[480px] z-[1] relative">
    <h2 className="text-center text-5xl mb-14 mt-4">Student Takeaways</h2>
    {testimonials.map(t => <div key={t.name} className="flex max-w-[875px] items-center mb-10 rounded-2xl overflow-hidden bg-[#2E629E] mx-auto
      max-[800px]:flex-col max-[800px]:max-w-[400px] max-[800px]:px-8 max-[800px]:py-8
    ">
      <Image src={t.photo} width="256" height="240" alt={t.name} className="max-[800px]:rounded-2xl" />
      <div className="pl-8 pr-10 max-[800px]:px-0 max-[800px]:mt-6">
        <h3 className="text-3xl mb-2">{t.name}</h3>
        <p className="text-xl leading-[1.5]">&ldquo;{t.quote}&rdquo;</p>
      </div>
    </div>)}
  </div>
}
