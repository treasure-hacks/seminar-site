import Image from "next/image";

export default function StatsSection() {
  return <div className="max-w-[1200px] pt-[calc(40px+4vw)] pb-10 px-14 mx-auto min-h-[400px] z-[1] relative">
    <h2 className="text-center text-5xl mb-14">Quick Figures</h2>
    
    <div className="flex gap-10 justify-evenly h-full max-w-[1200px] mx-auto max-[640px]:flex-col items-center">
      <div>
        <div className="relative before:absolute before:inline-block before:top-[-28px] before:left-[-25px] before:w-[70px] before:h-[80px]
          before:bg-cover before:bg-[url(/images/winter2024/gold-spark.webp)]">
          <Image width="275" height="275" src="/images/winter2024/volunteers.png" alt="Volunteers and Lumi" priority />
        </div>
        <p className="text-center text-3xl max-w-[180px] mx-auto leading-[1.25] mt-2">62 Total Attendees</p>
      </div>
      <div>
        <Image width="275" height="275" src="/images/winter2024/hours.png" alt="Bird of Paradise" priority />
        <p className="text-center text-3xl max-w-[180px] mx-auto leading-[1.25] mt-2">90% stayed all 8 hours</p>
      </div>
      <div>
        <Image width="275" height="275" src="/images/winter2024/prizes.png" alt="HyperX Headset" priority />
        <p className="text-center text-3xl max-w-[180px] mx-auto leading-[1.25] mt-2">$2,000 in{' '}
          <span className="relative inline-block before:inline-block before:absolute before:bottom-[-30px] before:right-[-40px] before:w-[40px] before:h-[40px]
            before:bg-cover before:bg-[url(/images/winter2024/red-spark.webp)]">Prizes</span></p>
      </div>
    </div>
  </div>
}
