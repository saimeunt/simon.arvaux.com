import { ImageResponse } from '@vercel/og';

// export const config = { runtime: 'edge' };

export const runtime = 'experimental-edge';

export const GET = async () => {
  const fontResponse = await fetch(
    'https://github.com/google/fonts/blob/main/ofl/notosans/NotoSans-ExtraBold.ttf?raw=true',
  );
  const fontData = await fontResponse.arrayBuffer();
  return new ImageResponse(
    (
      <div tw="relative flex h-[630px] w-[1200px]">
        <div tw="absolute flex inset-0 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            tw="h-full w-full"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            src={new URL('../../../public/img/meta-image-background.jpg', import.meta.url).href}
            alt="Meta image"
          />
        </div>
        <div tw="absolute flex inset-0 bg-neutral-900 opacity-50" />
        <div tw="relative mx-auto flex max-w-4xl flex-col items-center px-6 pt-80 text-center">
          <h1 tw="text-8xl font-extrabold tracking-tight text-white">Simon Arvaux</h1>
          <h2 tw="mt-4 text-6xl font-extrabold text-purple-300">Full Stack Web3 Developer</h2>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
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