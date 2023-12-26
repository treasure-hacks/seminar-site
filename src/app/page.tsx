import Image from 'next/image'
import Script from 'next/script'
import { Lato } from 'next/font/google'

const lato = Lato({ subsets: ["latin"], weight: "400" })

export const metadata = {
  generator: 'Treasure Hacks Soft Skill Seminar',
  title: 'Treasure Hacks: Soft Skill Seminar',
  description: 'Our seminars teach skills like pitching and networking to high school and undergraduate students in a fun and relevant way. Through ' +
    'hands-on activities and a feedback-driven pitch competition, we seek to help them find their voice and pursue their passions with confidence.',
  applicationName: 'Treasure Hacks Soft Skill Seminar',
  referrer: 'origin-when-cross-origin',
  keywords: ['Treasure Hacks', 'Soft Skills', 'Seminar', 'Workshop', 'Presenting', 'Networking'],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: 'https://treasurehacks.org/icons/android-chrome-512x512.png',
    shortcut: 'https://treasurehacks.org/icons/favicon.ico',
    apple: 'https://treasurehacks.org/icons/apple-touch-icon.png'
  }
}

export default function Home() {
  return (
    <>
      <style>{`
        .bg { background-image: linear-gradient(rgba(0,0,0,0.6) 0%, rgba(0,108,255,0.6) 100%); inset: 0; display: inline-block; object-fit: cover; width: 100%; }
        h1 { font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif; }
        h1.title { position: absolute; bottom: 80%; text-align: center; width: 100%; font-weight: bold; font-size: 5em; padding: 0 32px; color: #FFF; font-family: ${lato.style.fontFamily}; }
        h1.subtitle { position: absolute; bottom: 70%; text-align: center; width: 100%; font-weight: bold; font-size: 5em; padding: 0 32px; color: #FFF; font-family: ${lato.style.fontFamily}; }
        h1 span { opacity: 0; top: 2em; transition: 0.5s; position: relative; }
        h1 span.vis { opacity: 1; top: 0; }
        img.bg { position: relative; display: block; inset: 0; object-fit: cover; pointer-events: none; height: 100%; width: 100%; z-index: -1; }
      `}</style>

      {/* <Script defer src="index.js"></Script> */}


      <div className="bg">
        <Image src="UCSD.png" alt="background" className="bg" width="1920" height="1100"/>
        <h1 className="title">Treasure Hacks</h1>
        <h1 className="subtitle">Soft Skill Seminar</h1>
      </div>
      


      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24 hidden">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Get started by editing&nbsp;
            <code className="font-mono font-bold">src/app/page.tsx</code>
          </p>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Docs{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Learn{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Templates{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Explore starter templates for Next.js.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Deploy{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div>
      </main> */}
    </>
  )
}
