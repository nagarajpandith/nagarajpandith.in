import Image from 'next/image';
import { Link } from 'nextjs13-progress';
import { HiChevronDoubleRight } from 'react-icons/hi';
import { skills } from '@/data/index';

const Skills = () => {
  return (
    <div className="my-10">
      <h1 className="lg:mt-5 mt-0 text-primary lg:text-3xl text-xl font-bold text-center md:text-left">
        Some Skills I&apos;ve mastered over years
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-5 my-5 bg-gray-700 rounded-xl w-fit p-3 md:p-5">
        {skills.map((skill, i) => (
          <Image
            key={i}
            src={`/static/svg/${skill.icon}.svg`}
            alt={skill.name}
            width={50}
            height={50}
            className={`inline-block hover:animate-wiggle ${
              i === 3 ? 'mt-3' : ''
            }`}
          />
        ))}
      </div>

      <div className="mt-5 flex justify-center md:justify-start">
        <a
          rel="noreferrer"
          target="_blank"
          href="/static/pdf/Resume.pdf"
          className="bg-primary w-fit text-sm text-white px-5 py-2 rounded-full hover:opacity-80 transition duration-300 ease-in-out group"
        >
          See more
          <HiChevronDoubleRight className="inline transform translate-x-0 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default Skills;
