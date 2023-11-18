
import Clipboard from '@/components/clipboard';
import { getPostBySlug } from '@/lib/mdx';
import { FaFacebook } from 'react-icons/fa6';

const getPageContent = async (slug: string) => {
  const { meta, content, readingTime } = await getPostBySlug(slug);
  return { meta, content, readingTime };
};

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const { meta, readingTime } = await getPageContent(params.slug);
  const ogUrl = `${
    process.env.NEXT_PUBLIC_BASE_URL
  }/api/og?title=${encodeURIComponent(
    meta.title
  )}&readingTime=${encodeURIComponent(readingTime.text)}&cover=${
    meta.coverImage
  }&date=${encodeURIComponent(meta.publishedDate)}`;

  return {
    title: meta.title,
    description: meta.desc,
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.desc,
      url: `/blog/${params.slug}`,
      images: [
        {
          url: ogUrl,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      creator: '@hashclan102',
      description: meta.desc,
      images: [ogUrl.toString()],
    },
  };
}

const Page = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const { content, readingTime, meta } = await getPageContent(params.slug);

  return (
    <section className="py-5 md:py-10 w-full flex justify-center flex-col">
      <div className="mx-auto py-4 prose prose-invert">
        <div className="w-fit text-right text-sm md:text-md">
          Nagaraj Pandith • {meta.publishedDate}
        </div>

        <div className="mt-3 flex justify-between">
          <a className="text-sm text-gray-300 mb-5 block no-underline">
            {readingTime.text} | {readingTime.words} words
          </a>
          <div className="flex gap-3 lg:gap-5">
            <a
              target="_blank"
              href={`https://twitter.com/intent/tweet?url=${process.env.NEXT_PUBLIC_BASE_URL}/blog/${params.slug}`}
            >
              <TwitterSvg />
            </a>
            <a
              target="_blank"
              href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_BASE_URL}/blog/${params.slug}`}
            >
              <FaFacebook className="w-5 h-5 hover:animate-wiggle hover:text-white" />
            </a>
            <Clipboard
              text={`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${params.slug}`}
            />
          </div>
        </div>
        {content}
      </div>
    </section>
  );
};

const TwitterSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-twitter-x w-5 h-5 hover:animate-wiggle hover:text-white"
      viewBox="0 0 16 16"
    >
      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
    </svg>
  );
};

export default Page;
