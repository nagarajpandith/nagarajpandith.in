import Image from 'next/image';
import { HiChevronDoubleRight } from 'react-icons/hi';

const WideProjectCard = ({
  title,
  desc,
  tags,
  image,
  link,
  source,
  i,
}: {
  title: string;
  desc: string;
  tags: string[];
  image: string;
  link: string;
  source: string;
  i: number;
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center ${
        i % 2 === 0 ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div className="w-full md:w-1/2 animate-fade-up">
        <Image
          alt="Blog Image"
          src={image}
          className="-mb-10 md:mb-0 w-full h-full object-cover rounded-xl object-center"
          width={400}
          height={400}
        />
      </div>
      <div className="w-full md:w-1/2 h-fit bg-gray-700 transition shadow-xl rounded-xl hover:animate-background hover:bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 p-0.5 hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
        <div className="flex flex-1 flex-col justify-between">
          <div className="p-4 sm:p-6">
            <h1 className="font-bold text-md lg:text-lg text-secondary line-clamp-1">
              {title}
            </h1>

            <div className="py-2 w-fit flex flex-wrap items-center justify-start gap-1 text-xs font-bold text-white">
              {tags.map((tag, i) => (
                <div className="bg-gray-600 px-2 py-1 rounded-full" key={i}>
                  {tag}
                </div>
              ))}
            </div>

            <p className="line-clamp-3 text-sm/relaxed text-gray-300">{desc}</p>
          </div>

          <div className="flex flex-col md:flex-row gap-0 md:gap-5 items-center justify-start pb-5 pl-5">
            <a
              href={link}
              target="_blank"
              className="bg-primary w-fit text-sm text-white px-5 py-2 rounded-full mt-0 md:mt-5 hover:opacity-80 transition duration-300 ease-in-out group"
            >
              Live Demo
              <HiChevronDoubleRight className="inline transform translate-x-0 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={`https://github.com/${source}`}
              target="_blank"
              className="bg-white w-fit text-sm text-gray-900 px-5 py-2 rounded-full mt-2 md:mt-5 hover:opacity-80 transition duration-300 ease-in-out group"
            >
              Source Code
              <HiChevronDoubleRight className="inline transform translate-x-0 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WideProjectCard;
