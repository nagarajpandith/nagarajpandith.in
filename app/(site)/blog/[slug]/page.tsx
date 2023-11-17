import { getPostBySlug } from '@/lib/mdx';

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
  const { meta } = await getPageContent(params.slug);
  // @ts-ignore
  return { title: meta.title };
}

const Page = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const { content, readingTime } = await getPageContent(params.slug);

  return (
    <section className="py-24 w-full flex justify-center flex-col">
      <div className="mx-auto py-4 prose prose-invert">
        <div className='flex justify-between'>
          <a className="text-sm text-gray-300 mb-5 block no-underline">
            {readingTime.text} | {readingTime.words} words
          </a>
          <div className='flex gap-2'>

          </div>
        </div>
        {content}
      </div>
    </section>
  );
};

export default Page;
