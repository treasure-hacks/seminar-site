import Image from "next/image"

export function SponsorsSection() {
  return <div className="flex flex-col min-h-[35vh] justify-center">
    <h2 className='text-4xl text-center mt-8 mb-4'>Thank You Sponsors!</h2>
    <div className="py-10 px-14 max-sm:px-10 flex max-w-[1000px] flex-wrap mx-auto justify-evenly items-center gap-8">
      <div className="flex flex-wrap gap-8 items-center justify-center">
        <div className="flex flex-col gap-8">
          <Image src='/images/sponsors/ucsd-extension.png' width='200' height='50' alt='UCSD Extended Studies Logo'/>
          <Image src='/images/sponsors/ucsd-ieee.png' width='200' height='50' alt='UCSD IEEE Logo'/>
        </div>
        <div>
          <Image src='/images/sponsors/ucsd-business-council.png' width='160' height='160' alt='UCSD Business Council Logo'/>
        </div>
      </div>
      <div className="flex flex-wrap gap-8 items-center justify-center">
        <div>
          <Image src='/images/sponsors/ucsd-nsbe.png' width='160' height='160' alt='NSBE Logo'/>
        </div>
        <div className="flex flex-col gap-6">
          <Image src='/images/sponsors/mypoint.png' width='200' height='50' alt='MyPoint Credit Union Logo'/>
          <Image src='/images/sponsors/hyperx.png' width='200' height='50' alt='HyperX Logo'/>
        </div>
      </div>
    </div>
  </div>
}
