'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-[url('/static/png/grid.png')] w-full h-screen bg-cover bg-center flex lg:flex-row flex-col items-center justify-center lg:-mt-20 mt-0">
      <div className="flex flex-col justify-center text-center">
        <h1 className="lg:text-5xl text-2xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-400 via-white to-gray-400">
            Hey there
          </span>
          <WavingHand />
          <div className="lg:mt-5 mt-0 text-transparent bg-clip-text bg-gradient-to-b from-gray-400 via-white to-gray-400">
            I&apos;m <span className="text-primary">Nagaraj Pandith</span>
          </div>
        </h1>
        <span className="text-gray-300 mt-5 lg:text-xl text-xs">
          A 20 year old <span className='text-secondary'>Software Developer</span> from India. <br />
          Proficient in building Responsive & Scalable web applications.
          <br />I get my dopamine by building products and interesting side
          projects.
        </span>
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

const WavingHand = () => {
  return (
    <motion.div
      style={{
        marginBottom: '-20px',
        marginRight: '-45px',
        paddingBottom: '20px',
        paddingRight: '45px',
        display: 'inline-block',
      }}
      animate={{ rotate: 20 }}
      transition={{
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 0.2,
        ease: 'easeInOut',
        type: 'tween',
      }}
    >
      👋
    </motion.div>
  );
};

export default Hero;
