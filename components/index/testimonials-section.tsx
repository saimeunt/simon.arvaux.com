import Image from 'next/image';

const Testimonial = ({
  logoUrl,
  companyName,
  websiteUrl,
  testimonial,
  pictureUrl,
  fullName,
  linkedInUrl,
  position,
}: {
  logoUrl: string;
  companyName: string;
  websiteUrl: string;
  testimonial: string;
  pictureUrl: string;
  fullName: string;
  linkedInUrl: string;
  position: string;
}) => (
  <>
    <div className="flex items-center">
      <div className="inline-flex flex-shrink-0 rounded-md border-2 border-white">
        <Image
          className="h-32 w-32 rounded"
          src={logoUrl}
          width={32}
          height={32}
          alt={`${companyName} logo`}
        />
      </div>
      <a
        href={websiteUrl}
        target="_blank"
        rel="noreferrer"
        className="ml-4 text-xl font-medium text-gray-200 hover:text-white"
      >
        {companyName}
      </a>
    </div>
    <blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
      <div className="relative text-lg font-medium text-white md:flex-grow">
        <svg
          className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-purple-600"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className="relative">{testimonial}</p>
      </div>
      <footer className="mt-8">
        <div className="flex items-center">
          <div className="inline-flex flex-shrink-0 rounded-full border-2 border-white">
            <Image
              className="h-64 w-64 rounded-full"
              width={64}
              height={64}
              src={pictureUrl}
              alt={`${fullName} picture`}
            />
          </div>
          <div className="ml-4">
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noreferrer"
              className="text-base font-medium text-gray-200 hover:text-white"
            >
              {fullName}
            </a>
            <div className="text-base font-medium text-purple-300">
              {position},{' '}
              <a
                href={websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-100"
              >
                {companyName}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </blockquote>
  </>
);

const TestimonialsSection = () => (
  <section id="work" className="scroll-mt-24 bg-purple-800">
    <div className="mx-auto max-w-7xl py-12 md:px-6 md:py-16 lg:px-8">
      <h2 className="pl-4 pb-12 text-3xl font-extrabold tracking-tight text-white sm:pl-6 sm:text-4xl md:pl-0">
        People I worked with
      </h2>
      <div className="md:grid md:grid-cols-2">
        <div className="border-b-2 border-purple-900 px-4 pb-12 sm:px-6 md:flex md:flex-col md:border-b md:border-r md:pb-16 md:pl-0 md:pr-10 lg:pr-16">
          <Testimonial
            logoUrl="/img/testimonials/foxintel.png"
            companyName="Foxintelligence"
            websiteUrl="https://www.foxintelligence.io/"
            testimonial="We built an early prototype of what would become Foxintelligence back in
                2016 together, it was very hacky and a lot of fun!"
            pictureUrl="/img/testimonials/edouard.jpg"
            fullName="Edouard Nattée"
            linkedInUrl="https://www.linkedin.com/in/edouardnattee/"
            position="Founder &amp; CEO"
          />
        </div>
        <div className="border-b-2 border-purple-900 px-4 py-12 sm:px-6 md:border-t-0 md:border-l md:border-b md:pb-16 md:pt-0 md:pr-0 md:pl-10 lg:pl-16">
          <Testimonial
            logoUrl="/img/testimonials/slite.png"
            companyName="Slite"
            websiteUrl="https://slite.com/"
            testimonial="Simon gave me a hand on tech when I was coding the first iterations of
                the Slite MVP."
            pictureUrl="/img/testimonials/christophe.jpg"
            fullName="Christophe Pasquier"
            linkedInUrl="https://www.linkedin.com/in/christophe-pasquier-93875956/"
            position="Founder &amp; CEO"
          />
        </div>
        <div className="border-b-2 border-purple-900 px-4 py-12 sm:px-6 md:flex md:flex-col md:border-t md:border-b-0 md:border-r md:pt-16 md:pb-0 md:pl-0 md:pr-10 lg:pr-16">
          <Testimonial
            logoUrl="/img/testimonials/hivy.png"
            companyName="Hivy"
            websiteUrl="https://www.efounders.com/companies/hivy"
            testimonial="Simon joined the Hivy team to help us with the YC W17 batch sprint. We
                shared great memories working (and co-living!) together in Silicon Valley."
            pictureUrl="/img/testimonials/pauline.jpg"
            fullName="Pauline Tordeur"
            linkedInUrl="https://www.linkedin.com/in/pauline-tordeur/"
            position="Former Co-founder &amp; CEO"
          />
        </div>
        <div className="border-purple-900 px-4 pt-12 sm:px-6 md:border-t md:border-l md:pt-16 md:pr-0 md:pl-10 lg:pl-16">
          <Testimonial
            logoUrl="/img/testimonials/efounders.jpg"
            companyName="eFounders"
            websiteUrl="https://www.efounders.com/"
            testimonial="I worked with Simon for 6 years on multiple versions of the eFounders
                website and it has always been a pleasure. Fun fact: we both left to fully embark on
                the Web3 adventure!"
            pictureUrl="/img/testimonials/didier.jpg"
            fullName="Didier Forest"
            linkedInUrl="https://www.linkedin.com/in/didier-forest-6194509/"
            position="Former Design Partner"
          />
        </div>
      </div>
    </div>
  </section>
);

/* const people = [
  {
    name: 'Edouard Nattée',
    imageUrl: '/img/edouard.jpg',
    logoUrl: '/img/foxintel.png',
    company: 'Foxintelligence',
    role: 'Founder & CEO',
    website: 'https://www.foxintelligence.io/',
    bio: `We built an early prototype of what would become Foxintelligence back in 2016 together, it
      was very hacky and a lot of fun!`,
  },
  {
    name: 'Edouard Nattée',
    imageUrl: '/img/edouard.jpg',
    logoUrl: '/img/foxintel.png',
    company: 'Foxintelligence',
    role: 'Founder & CEO',
    website: 'https://www.foxintelligence.io/',
    bio: `We built an early prototype of what would become Foxintelligence back in 2016 together, it
      was very hacky and a lot of fun!`,
  },
  {
    name: 'Edouard Nattée',
    imageUrl: '/img/edouard.jpg',
    logoUrl: '/img/foxintel.png',
    company: 'Foxintelligence',
    role: 'Founder & CEO',
    website: 'https://www.foxintelligence.io/',
    bio: `We built an early prototype of what would become Foxintelligence back in 2016 together, it
      was very hacky and a lot of fun!`,
  },
  {
    name: 'Edouard Nattée',
    imageUrl: '/img/edouard.jpg',
    logoUrl: '/img/foxintel.png',
    company: 'Foxintelligence',
    role: 'Founder & CEO',
    website: 'https://www.foxintelligence.io/',
    bio: `We built an early prototype of what would become Foxintelligence back in 2016 together, it
      was very hacky and a lot of fun!`,
  },
];

const Testimonials = () => (
  <div className="bg-purple-700">
    <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
      <div className="space-y-12">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          People I worked with
        </h2>
        <ul
          role="list"
          className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
        >
          {people.map((person, index) => (
            <li key={person.name}>
              <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                <div className="aspect-w-3 aspect-h-2 h-0 sm:aspect-w-3 sm:aspect-h-4">
                  <Image
                    className="rounded-lg object-cover shadow-lg"
                    layout="fill"
                    src={person.imageUrl}
                    alt=""
                  />
                </div>
                <div className="sm:col-span-2">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Image
                        className="h-48 w-48 rounded-md"
                        src={person.logoUrl}
                        width={48}
                        height={48}
                        alt={`${person.company} logo`}
                      />
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3 className="text-white">{person.name}</h3>
                        <p className="text-purple-100">
                          {person.role}{' '}
                          <a
                            href={person.website}
                            target="_blank"
                            rel="noreferrer"
                            className="text-purple-200 hover:text-purple-100"
                          >
                            @{person.company}
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="text-lg">
                      <p className="text-purple-200">{person.bio}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
); */

export default TestimonialsSection;