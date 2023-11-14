import { getPostBySlug } from '@/lib/mdx';

const getPageContent = async (slug: string) => {
  const { meta, content } = await getPostBySlug(slug);
  return { meta, content };
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
  const { content } = await getPageContent(params.slug);

  return (
    <section className="py-24 w-full flex justify-center flex-col">
      <div className="mx-auto py-4 prose prose-invert">{content}</div>
    </section>
  );
};

export default Page;
