import Image from 'next/image';

const MetaImage = () => (
  <div className="relative h-[628px] w-[1200px]">
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <Image
        className="h-full w-full object-cover object-center"
        src="/img/meta-image-background.jpg"
        layout="fill"
        alt="Meta image"
      />
    </div>
    <div aria-hidden="true" className="absolute inset-0 bg-neutral-900 opacity-50" />
    <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 pt-80 text-center">
      <h1 className="text-8xl font-extrabold tracking-tight text-white">Simon Arvaux</h1>
      <h2 className="mt-4 text-6xl font-extrabold text-purple-300">Full Stack Web3 Developer</h2>
    </div>
  </div>
);

export default MetaImage;
