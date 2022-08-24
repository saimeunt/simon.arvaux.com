import Image from 'next/future/image';

const ServicesSection = () => (
  <section id="services" className="scroll-mt-24 bg-purple-800">
    <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
        <div>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">What can I do for you?</h2>
          <p className="mt-3 max-w-3xl text-lg text-purple-200">
            I&apos;m specialized in prototyping <abbr title="Software as a Service">SaaS</abbr>{' '}
            <abbr title="Minimum Viable Product">MVP</abbr>s, using modern full stack web
            development frameworks. I also like to craft responsive websites and landing pages that
            fill your requirements, whether you need to add a{' '}
            <abbr title="Content Management System">CMS</abbr> or eCommerce functionalities.
          </p>
          <div className="mt-8 sm:flex">
            <div className="rounded-md shadow">
              <a
                href="#contact"
                className="flex items-center justify-center rounded-md border border-transparent bg-purple-100 px-5 py-3 text-base font-medium text-purple-700 hover:bg-purple-200"
              >
                Contact me
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
          <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
            <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
              <Image
                // className="max-h-12"
                width={48}
                height={48}
                src="/img/services/typescript.svg"
                alt="TypeScript logo"
              />
            </a>
          </div>
          <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              <Image
                // className="max-h-12"
                width={54}
                height={48}
                src="/img/services/react.svg"
                alt="React logo"
              />
            </a>
          </div>
          <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
            <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
              <Image
                // className="max-h-12"
                width={80}
                height={48}
                src="/img/services/nextjs.svg"
                alt="Next.js logo"
              />
            </a>
          </div>
          <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
            <a href="https://graphql.org/" target="_blank" rel="noreferrer">
              <Image
                // className="max-h-12"
                width={48}
                height={48}
                src="/img/services/graphql.svg"
                alt="GraphQL logo"
              />
            </a>
          </div>
          <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
            <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer">
              <Image
                // className="max-h-12"
                width={47}
                height={48}
                src="/img/services/postgresql.svg"
                alt="PostgreSQL logo"
              />
            </a>
          </div>
          <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
            <a href="https://soliditylang.org/" target="_blank" rel="noreferrer">
              <Image
                // className="max-h-12"
                width={31}
                height={48}
                src="/img/services/solidity.svg"
                alt="Solidity logo"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default ServicesSection;
