/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
// @ts-nocheck
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const hasTitle = searchParams.has('title');
    const rawTitle = hasTitle
      ? searchParams.get('title')
      : 'Nagaraj Pandith - Portfolio';

    const title =
      rawTitle?.length! > 50 ? rawTitle?.slice(0, 50) + '...' : rawTitle;

    // const fontData = await fetch(
    //   new URL('../../../public/fonts/Inter-Bold.ttf', import.meta.url)
    // ).then((res) => res.arrayBuffer());

    const imageData = await fetch(
      new URL('../../../public/static/png/logo.png', import.meta.url)
    ).then((res) => res.arrayBuffer());

    const coverPath = searchParams.has('cover')
      ? searchParams.get('cover')
      : '/static/png/portfolio.png';

    const coverImage = `${
      process.env.NEXT_PUBLIC_BASE_URL
    }/_next/image?url=${encodeURIComponent(coverPath)}&w=1200&q=75`;

    const date = searchParams.get('date');
    const readingTime = searchParams.get('readingTime');

    return new ImageResponse(
      (
        <div
          // style={{ fontFamily: 'Inter' }}
          tw="relative bg-black border border-[#20DBFE] flex flex-col w-full h-full items-center justify-between"
        >
          <img
            src={coverImage}
            width={500}
            height={300}
            alt="Logo"
            tw="opacity-20 absolute bg-center object-cover h-full w-full bg-cover"
          />
          <div tw="p-5 flex flex-col justify-center w-full items-center gap-5">
            <img src={imageData} width={64} height={64} alt="Logo" />
            <a tw="block mt-3 text-gray-300">nagarajpandith.in</a>
            <img
              src={coverImage}
              width={500}
              height={300}
              alt="Logo"
              tw="rounded-xl mt-10"
            />
          </div>
          <h2 tw="mb-20 flex flex-col font-bold tracking-tight text-gray-900 text-left">
            <span 
            // style={{ fontFamily: 'Inter' }} 
            tw="text-white text-4xl">
              {title}
            </span>
            {date && readingTime && (
              <span tw="block mt-3 text-[#E508C1] text-4xl">
                {date} • {readingTime}
              </span>
            )}
          </h2>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        // fonts: [
        //   {
        //     name: 'Inter',
        //     data: fontData,
        //     style: 'normal',
        //   },
        // ],
      }
    );
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
}
