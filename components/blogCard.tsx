import Image from 'next/image';
import Link from 'next/link';
import { HiChevronDoubleRight } from 'react-icons/hi';

const BlogCard = ({
  title,
  desc,
  date,
  image,
}: {
  title: string;
  desc: string;
  date: string;
  image: string;
}) => {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(
    dateObj
  );
  const day = dateObj.getDate();

  return (
    <div className="flex bg-gray-700 transition shadow-xl rounded-xl hover:animate-background hover:bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 p-0.5 hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
      <div className="hidden sm:block sm:basis-56">
        <Image
          alt="Blog Image"
          src={image}
          className="aspect-square h-full w-full object-cover rounded-xl"
          width={100}
          height={100}
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="p-4 sm:p-6">
          <a>
            <h3 className="font-bold text-secondary">{title}</h3>
          </a>

          <div className="py-2 w-fit flex items-center justify-between gap-4 text-xs font-bold uppercase text-white">
            <span>
              {month} {day}, {year}
            </span>
          </div>

          <p className="line-clamp-3 text-sm/relaxed text-gray-300">{desc}</p>
        </div>

        <div className="flex items-center justify-end pb-5 pr-5">
          <Link
            href="/blog"
            className="bg-primary w-fit text-sm text-white px-5 py-2 rounded-full mt-5 hover:opacity-80 transition duration-300 ease-in-out group"
          >
            Read
            <HiChevronDoubleRight className="inline transform translate-x-0 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
