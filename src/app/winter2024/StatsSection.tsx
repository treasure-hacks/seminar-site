import Image from "next/image";

export default function StatsSection() {
  return <div className="max-w-[1200px] pt-[calc(40px+4vw)] pb-10 px-14 mx-auto min-h-[400px] z-[1] relative">
    <h2 className="text-center text-5xl mb-14">Quick Figures</h2>
    
    <div className="flex gap-10 justify-evenly h-full max-w-[1200px] mx-auto">
      <div>
        <Image width="275" height="275" src="/images/winter2024/volunteers.png" alt="Volunteers and Lumi" />
        <p className="text-center text-3xl max-w-[180px] mx-auto leading-[1.25] mt-2">62 Total Attendees</p>
      </div>
      <div>
        <Image width="275" height="275" src="/images/winter2024/hours.png" alt="Bird of Paradise" />
        <p className="text-center text-3xl max-w-[180px] mx-auto leading-[1.25] mt-2">90% stayed all 8 hours</p>
      </div>
      <div>
        <Image width="275" height="275" src="/images/winter2024/prizes.png" alt="HyperX Headset" />
        <p className="text-center text-3xl max-w-[180px] mx-auto leading-[1.25] mt-2">$2,000 in Prizes</p>
      </div>
    </div>
  </div>
}
