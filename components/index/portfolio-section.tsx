'use client';
import Image from 'next/image';
import { Gallery, Item } from 'react-photoswipe-gallery';

const screenshots = [
  {
    title: 'eFounders website screenshot',
    source: '/img/portfolio/efounders1.jpg',
  },
  {
    title: 'eFounders website CMS screenshot',
    source: '/img/portfolio/efounders2.jpg',
  },
  {
    title: 'Zenvest investor frontend',
    source: '/img/portfolio/zenvest1.jpg',
  },
  {
    title: 'Zenvest club deal back office',
    source: '/img/portfolio/zenvest2.jpg',
  },
];

const nextImageSrc = (url: string, width: number) =>
  `/_next/image?url=${encodeURIComponent(url)}&w=${width}&q=75`;

const GalleryItem = ({ image }: { image: { title: string; source: string } }) => (
  <Item
    original={nextImageSrc(image.source, 1920)}
    thumbnail={nextImageSrc(image.source, 640)}
    caption={image.title}
    width="1920"
    height="1080"
  >
    {({ ref, open }) => (
      <div
        ref={ref as React.MutableRefObject<HTMLDivElement>}
        className="aspect-h-9 aspect-w-16 relative w-full cursor-zoom-in overflow-hidden rounded-lg"
        onClick={open}
      >
        <Image src={image.source} alt={image.title} sizes="(min-width: 1024px) 50vw, 100vw" fill />
      </div>
    )}
  </Item>
);

const PortfolioSection = () => (
  <section id="portfolio" className="scroll-mt-24 bg-gray-200 dark:bg-neutral-900">
    <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
      <h2 className="pb-12 pl-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:pl-6 sm:text-4xl md:pl-0">
        Check out my portfolio
      </h2>
      <Gallery withCaption>
        <div className="max-w-3xl">
          <h2 className="font-semibold text-gray-500">
            Statically generated website using{' '}
            <a
              href="https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration"
              target="_blank"
              rel="noreferrer"
              className="text-purple-700 hover:text-purple-500"
            >
              <abbr title="Incremental Static Regeneration">ISR</abbr>
            </a>{' '}
            to update dynamic content
          </h2>
          <a
            href="https://www.efounders.com"
            target="_blank"
            rel="noreferrer"
            className="mt-2 block text-2xl font-extrabold tracking-tight text-purple-700 hover:text-purple-500 sm:text-3xl"
          >
            eFounders website
          </a>
          <p className="mt-4 text-gray-500">
            I&apos;ve built the infrastructure of eFounders website which is mostly a statically
            generated site with infrequent changes except for some dynamic content such as the jobs
            page. I leveraged incremental static regeneration to retrieve new job offers and
            regenerate the page with the latest data.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
          <div>
            <GalleryItem image={screenshots[0]} />
            <p className="mt-8 text-base text-gray-500">
              The website is powered by{' '}
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noreferrer"
                className="text-purple-700 hover:text-purple-500"
              >
                Next.js
              </a>{' '}
              and a private GraphQL API built on top of{' '}
              <a
                href="https://www.prisma.io/"
                target="_blank"
                rel="noreferrer"
                className="text-purple-700 hover:text-purple-500"
              >
                Prisma
              </a>
              , queried at build time to generate every pages. Dynamic pages are then re-rendered
              periodically making the experience both super fast and always up to date.
            </p>
          </div>
          <div>
            <GalleryItem image={screenshots[1]} />
            <p className="mt-8 text-base text-gray-500">
              The custom{' '}
              <a
                href="https://jamstack.org/headless-cms/"
                target="_blank"
                rel="noreferrer"
                className="text-purple-700 hover:text-purple-500"
              >
                <abbr title="Content Management System">CMS</abbr>
              </a>{' '}
              is built on top of{' '}
              <a
                href="https://tina.io/"
                target="_blank"
                rel="noreferrer"
                className="text-purple-700 hover:text-purple-500"
              >
                TinaCMS
              </a>{' '}
              to enable real-time visual feedback edition. This allowed the content team to
              continuously add new startups and bring changes to previous batches.
            </p>
          </div>
          <div className="flex items-center">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Talk on Next.js and{' '}
                <a
                  href="https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration"
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-700 hover:text-purple-500"
                >
                  <abbr title="Incremental Static Regeneration">ISR</abbr>
                </a>{' '}
                at{' '}
                <a
                  href="https://jamstack.paris/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-700 hover:text-purple-500"
                >
                  <abbr title="JavaScript, API and Markup">Jamstack</abbr> Paris
                </a>
              </h3>
              <p className="mt-2 text-gray-500">
                I gave a talk (in French) about my experience with Next.js incremental static
                regeneration to improve eFounders website architecture.
              </p>
            </div>
          </div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/6LUYbWf8YbM"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="aspect-video w-full rounded-lg"
            ></iframe>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-400">
          <div className="mt-16 max-w-3xl">
            <h2 className="font-semibold text-gray-500">
              Private equity portfolio tracker webapp &amp; club deal management back office{' '}
              <abbr title="Software as a Service">SaaS</abbr>
            </h2>
            <a
              href="https://www.zenvest.com/"
              target="_blank"
              rel="noreferrer"
              className="mt-2 block text-2xl font-extrabold tracking-tight text-purple-700 hover:text-purple-500 sm:text-3xl"
            >
              Zenvest
            </a>
            <p className="mt-4 text-gray-500">
              I first bootstrapped Zenvest with eFounders core team to help administrating the
              eClub, eFounders very own club of investors &amp; friends. I was later joined by a
              dedicated team to build a fully featured investment management software and onboard
              new clubs and investors.
            </p>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
          <div>
            <GalleryItem image={screenshots[2]} />
            <p className="mt-8 text-base text-gray-500">
              The investor facing application displays the user portfolio along with the current
              investment opportunities he might be interested in. Built as a server-side rendered
              responsive React application to allow fast loading on mobile and let users register
              their interest quickly.
            </p>
          </div>
          <div>
            <GalleryItem image={screenshots[3]} />
            <p className="mt-8 text-base text-gray-500">
              The club deal administrator back office is a white-label product customizable to suit
              different investment sectors. It consumes the same GraphQL API as the front office
              built using Prisma and TypeScript, backed by a PostgreSQL database.
            </p>
          </div>
        </div>
      </Gallery>
    </div>
  </section>
);

export default PortfolioSection;
