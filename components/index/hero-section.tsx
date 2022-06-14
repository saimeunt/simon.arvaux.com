import Image from 'next/image';

const HeroSection = () => (
  <section id="home" className="scroll-mt-24 lg:relative">
    <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-24 lg:text-left">
      <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
        <Image
          className="inline-block h-40 w-40 rounded-full"
          width={160}
          height={160}
          src="/img/hero/simon.jpg"
          alt="Simon profile picture"
          priority
        />
        <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
          <div className="text-xl text-gray-500">Hi! 👋 My name is</div>
          <div className="text-gray-900 dark:text-white">Simon Arvaux</div>
          <div className="text-3xl text-purple-600">Full Stack Web3 Developer</div>
        </h1>
        <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
          Husband &amp;{' '}
          <a
            href="https://leon.arvaux.com"
            target="_blank"
            rel="noreferrer"
            className="text-purple-700 hover:text-purple-500"
          >
            Dad of 1
          </a>
          <br />
          Ex{' '}
          <a
            href="https://www.efounders.com"
            target="_blank"
            rel="noreferrer"
            className="text-purple-700 hover:text-purple-500"
          >
            eFounders
          </a>{' '}
          &amp;{' '}
          <a
            href="https://www.zenvest.com"
            target="_blank"
            rel="noreferrer"
            className="text-purple-700 hover:text-purple-500"
          >
            Zenvest
          </a>
        </p>
        <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <a
              href="#contact"
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-purple-600 px-8 py-3 text-base font-medium text-white hover:bg-purple-700 md:py-4 md:px-10 md:text-lg"
            >
              Contact me
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
      <Image
        className="absolute inset-0 h-full w-full object-cover object-[center_25%]"
        layout="fill"
        src="/img/hero/hero.jpg"
        alt="Simon working at the office"
        priority
      />
    </div>
  </section>
);

export default HeroSection;
