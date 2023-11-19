import Image from 'next/image';
import { Link } from 'nextjs13-progress';
import { ReadTimeResults } from 'reading-time';

const BlogCard = ({
  title,
  desc,
  date,
  image,
  slug,
  readingTime,
  tags,
}: {
  title: string;
  desc: string;
  date: string;
  image: string;
  slug: string;
  readingTime: ReadTimeResults;
  tags: string[];
}) => {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(
    dateObj
  );
  const day = dateObj.getDate();

  return (
    <div className="flex flex-col md:flex-row bg-gray-700 transition shadow-xl rounded-xl hover:animate-background hover:bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 p-0.5 hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
      <div>
        <Link href={`/blog/${slug}`}>
          <Image
            alt="Blog Image"
            className="rounded-xl object-cover h-full w-full"
            src={image}
            width={300}
            height={300}
          />
        </Link>
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="p-4 sm:p-6">
          <Link href={`/blog/${slug}`}>
            <h3 className="font-bold text-secondary line-clamp-1">{title}</h3>
          </Link>
          <div className="py-2 w-full flex flex-col md:flex-row items-center gap-4 text-xs font-bold text-white">
            <span className="w-20 md:w-24 uppercase md:text-left text-center">
              {month} {day}, {year}
            </span>
            <div className="flex gap-1 no-scrollbar overflow-x-auto w-full">
              {tags.slice(0, 4).map((tag, i) => (
                <span
                  key={i}
                  className="block text-xs md:text-sm text-gray-300 bg-gray-600 px-2 py-1 rounded-xl"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <Link href={`/blog/${slug}`}>
            <p className="line-clamp-3 text-sm/relaxed text-gray-300">{desc}</p>
          </Link>

          <div className="mt-3 text-gray-300 text-xs">
            {readingTime.text} | {readingTime.words} words
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
