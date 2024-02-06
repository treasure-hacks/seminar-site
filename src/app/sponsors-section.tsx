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
      <div className="flex flex-wrap gap-12 items-center justify-evenly w-full max-[927px]:max-w-[410px] max-[927px]:gap-[2.5rem_2rem] mt-3">
        <div className="flex flex-col gap-6">
          <Image src='/images/sponsors/ucsd-basement.png' width='260' height='72' alt='UCSD Basement Logo' className="max-[927px]:w-[220px]"/>
          <div className="flex justify-between">
            <Image src='/images/sponsors/ucsd-ostem.png' width='170' height='72' alt='UCSD oSTEM Logo' className="max-[927px]:w-[150px]"/>
            <Image src='/images/sponsors/ucsd-pib.png' width='72' height='72' alt='Project in a Box Logo' className="max-[927px]:w-[60px]"/>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <Image src='/images/sponsors/ucsd-cse-society.png' width='172' height='80' alt='UCSD CSE Society Logo'
            className="max-[927px]:w-[144px]"/>
          <Image src='/images/sponsors/ucsd-ewh.png' width='172' height='80' alt='UCSD Engineering World Health Logo'
            className="max-[927px]:w-[144px]"/>
        </div>
        <div className="flex flex-col gap-6">
          <Image src='/images/sponsors/ucsd-blackstone.png' width='240' height='40' alt='Blackstone Launchpad Logo'
            className="max-[927px]:w-[350px] max-[475px]:w-[260px]"/>
          <Image src='/images/sponsors/marchitecture.png' width='240' height='60' alt='Marchitecture Logo'
            className="max-[927px]:w-[350px] max-[475px]:w-[260px]"/>
          <Image src='/images/sponsors/mohuman.png' width='240' height='60' alt='Mohuman Logo'
            className="max-[927px]:w-[350px] max-[475px]:w-[260px]"/>
        </div>
      </div>
    </div>
  </div>
}
