import Image from 'next/image';
import Link from 'next/link';
import { FaBookOpen, FaPencilAlt } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';
import { ReadTimeResults } from 'reading-time';
import SlotCounter from 'react-slot-counter';

const BlogCard = ({
  title,
  desc,
  date,
  image,
  slug,
  readingTime,
  tags,
  views,
}: {
  title: string;
  desc: string;
  date: string;
  image: string;
  slug: string;
  readingTime: ReadTimeResults;
  tags: string[];
  views: number;
}) => {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(
    dateObj
  );
  const day = dateObj.getDate();

  return (
    <div className="flex flex-col md:flex-row bg-gray-700 transition shadow-xl rounded-xl hover:animate-background hover:bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 p-0.5 hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
      <div className="flex-shrink-0">
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

      <div className="flex flex-1 flex-col justify-between overflow-hidden">
        <div className="p-4 sm:p-6">
          <Link href={`/blog/${slug}`}>
            <h1 className="font-bold text-secondary line-clamp-1">{title}</h1>
          </Link>
          <div className="py-2 w-full flex flex-col md:flex-row items-center gap-4 text-xs font-bold text-white">
            <span className="w-20 md:w-24 uppercase md:text-left text-center">
              {month} {day}, {year}
            </span>
            <div className="flex gap-1 no-scrollbar overflow-x-auto w-full">
              {tags.slice(0, 4).map((tag, i) => (
                <span
                  key={i}
                  className="block text-xs md:text-sm text-gray-300 bg-gray-600 px-2 py-1 rounded-xl max-w-fit whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <Link href={`/blog/${slug}`}>
            <p className="line-clamp-3 text-sm/relaxed text-gray-300">{desc}</p>
          </Link>

          <div className="mt-3 text-gray-300 text-xs flex gap-2 items-center">
            <span className="inline-flex items-center gap-1">
              <IoEyeSharp />
              <SlotCounter
                value={views}
                duration={2}
                animateOnVisible={{
                  triggerOnce: true,
                  rootMargin: '0px 0px -100px 0px',
                }}
                startValue={0}
              />
              <span className="hidden md:inline">views</span>
            </span>
            |{' '}
            <span className="inline-flex items-center gap-1">
              <FaBookOpen />
              {readingTime.text}
            </span>{' '}
            |{' '}
            <span className="inline-flex items-center gap-1">
              <FaPencilAlt />
              {readingTime.words} words
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
