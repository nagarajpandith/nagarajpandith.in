import Image from 'next/image';
import Link from 'next/link';
import { HiChevronDoubleRight } from 'react-icons/hi';
import { WavingHand } from './waving';

const Hero = () => {
  return (
    <section className="bg-[url('/static/png/grid.png')] w-full h-screen bg-cover bg-center flex lg:flex-row flex-col items-center justify-center lg:-mt-20 mt-0">
      <div className="flex flex-col text-center justify-center">
        <h1 className="lg:text-5xl text-3xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-50 to-gray-400">
            Hey there
          </span>
          <WavingHand />
          <div className="lg:mt-5 mt-0 text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-50 to-gray-400">
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
            className="hover:animate-wiggle bg-primary w-fit lg:text-xl text-sm text-white px-5 py-2 rounded-full mt-5 hover:opacity-80 transition duration-300 ease-in-out group"
          >
            Know more about me{' '}
            <HiChevronDoubleRight className="inline transform trangray-x-0 transition-transform group-hover:trangray-x-1" />
          </Link>
        </div>
      </div>

      <div className="w-100 mt-5 md:mt-10 lg:mt-0">
        <Image
          src="/static/png/portrait.png"
          alt="Nagaraj Pandith Portrait Photo"
          width={300}
          height={300}
          sizes="(100vw, 100vh)"
          className="rounded-xl brightness-125 hover:grayscale transition duration-300 ease-in-out"
        />
      </div>
    </section>
  );
};

export default Hero;
