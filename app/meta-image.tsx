import { ImageResponse } from 'next/server';

export const size = { width: 1200, height: 630 };
export const alt = 'Simon Arvaux - Full Stack Web3 Developer';
export const contentType = 'image/png';

const handler = async () => {
  const fontResponse = await fetch(
    'https://github.com/google/fonts/blob/main/ofl/notosans/NotoSans-ExtraBold.ttf?raw=true',
  );
  const fontData = await fontResponse.arrayBuffer();
  const scheme = `http${process.env.NODE_ENV !== 'production' ? '' : 's'}`;
  const backgroundUrl = `${scheme}://${process.env.VERCEL_URL}/img/meta-image-background.jpg`;
  return new ImageResponse(
    (
      <div tw={`relative flex w-[${size.width}px] h-[${size.height}px]`}>
        <div tw="absolute flex inset-0 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            tw="h-full w-full"
            // style={{ objectFit: 'cover', objectPosition: 'center' }}
            // tw="h-full w-full object-cover object-center"
            // src={backgroundUrl}
            // src="https://simon-arvaux-com-saimeunt.vercel.app/img/meta-image-background.jpg"
            src={new URL('../public/img/meta-image-background.jpg', import.meta.url).href}
            alt="Meta image background"
            width={size.width}
            height={size.height}
          />
        </div>
        <div tw="absolute flex inset-0 bg-neutral-900 opacity-50" />
        <div tw="relative mx-auto flex max-w-4xl flex-col items-center px-6 pt-80 text-center">
          <h1 tw="text-8xl font-extrabold tracking-tight text-white">Simon Arvaux</h1>
          <h2 tw="mt-4 text-6xl font-extrabold text-purple-300">Full Stack Web3 Developer</h2>
          <h6 tw="text-xs text-white">{backgroundUrl}</h6>
          <h6 tw="text-xs text-white">
            {new URL('../public/img/meta-image-background.jpg', import.meta.url).href}
          </h6>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'NotoSans-ExtraBold',
          data: fontData,
          weight: 800,
          style: 'normal',
        },
      ],
    },
  );
};

export default handler;
