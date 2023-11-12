import Image from 'next/image';
import Link from 'next/link';
import { HiChevronDoubleRight } from 'react-icons/hi';
import { WavingHand } from './waving';

const Hero = () => {
  return (
    <section className="bg-[url('/static/png/grid.png')] w-full h-screen bg-cover bg-center flex lg:flex-row flex-col items-center justify-center lg:-mt-20 mt-0">
      <div className="flex flex-col text-center justify-center">
        <h1 className="lg:text-5xl text-3xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-400 via-white to-gray-400">
            Hey there
          </span>
          <WavingHand />
          <div className="lg:mt-5 mt-0 text-transparent bg-clip-text bg-gradient-to-b from-gray-400 via-white to-gray-400">
            I&apos;m <span className="text-primary">Nagaraj Pandith</span>
          </div>
        </h1>
        <span className="text-gray-300 mt-5 lg:text-xl text-sm px-5">
          A 20 year old{' '}
          <span className="text-secondary">Full Stack Developer</span> from
          India. <br />I get my dopamine by crafting innovative solutions and
          interesting side projects.
          <br />
        </span>
        <div className="flex items-center justify-center">
          <Link
            href="/about"
            className="bg-primary w-fit lg:text-xl text-sm text-white px-5 py-2 rounded-full mt-5 hover:opacity-80 transition duration-300 ease-in-out group"
          >
            Know more about me{' '}
            <HiChevronDoubleRight className="inline transform translate-x-0 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <div className="relative mb-5">
        <div className="absolute h-[90%] w-[90%] rounded-full bg-white opacity-30 blur-3xl z-0"></div>
        <Image
          src="/static/png/portrait.png"
          alt="Nagaraj Pandith Portrait Photo"
          width={500}
          height={500}
          className="relative z-10"
        />
      </div>
    </section>
  );
};

export default Hero;
