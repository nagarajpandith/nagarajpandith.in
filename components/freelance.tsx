import React from 'react';
import { IoMdMail } from 'react-icons/io';
import { messages } from '@/data/index';

const Freelance = () => {
  return (
    <div className="relative my-20 bg-[url('/static/png/grid.png')] w-full bg-cover bg-center flex gap-5 justify-center text-center flex-col">
      <div className="relative flex flex-wrap gap-5 justify-center blur-[1px] opacity-40">
        {messages.map((message, i) => (
          <div
            key={i}
            className="hidden lg:block rounded-xl hover:animate-background hover:bg-gradient-to-r from-white via-gray-700 to-gray-700 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
          >
            <div className="bg-gray-800 p-5 rounded-xl w-fit text-gray-300 transition-transform duration-300 ease-in-out transform rotate-[${i * 10.5}deg] hover:rotate-0">
              {message}
            </div>
          </div>
        ))}

        {/* Mobiles and Tablets */}
        {messages.slice(0, 3).map((message, i) => (
          <div
            key={i}
            className="lg:hidden rounded-xl hover:animate-background hover:bg-gradient-to-r from-white via-gray-700 to-gray-700 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
          >
            <div className="bg-gray-800 p-5 rounded-xl w-fit text-gray-300 transition-transform duration-300 ease-in-out transform rotate-[${i * 10.5}deg] hover:rotate-0">
              {message}
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
        <h1 className="text-2xl md:text-3xl text-white font-bold mt-5">
          I occasionally take up{' '}
          <span className="text-secondary">freelance</span> work
        </h1>

        <div className="mt-5">
          <a
            href="mailto:nagaraj.pandith2002@gmail.com"
            className="bg-primary w-fit lg:text-xl text-sm text-white px-5 py-2 rounded-full hover:opacity-80 transition duration-300 ease-in-out group"
          >
            Hit me up!{' '}
            <IoMdMail className="inline group-hover:animate-wiggle" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Freelance;
