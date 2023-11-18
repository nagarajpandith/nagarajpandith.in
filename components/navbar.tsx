'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Link } from 'nextjs13-progress';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { navLinks } from '@/data/index';

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActiveLink = (href: string) => {
    return pathname === href;
  };

  return (
    <nav className="sticky top-0 z-10 bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href={'/'}
            className="flex gap-3 items-center text-white font-semibold"
          >
            <div className="relative w-30 h-30">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-lg filter blur-lg opacity-70 animate-slow-glow"></div>
              <Image
                src="/static/png/logo.png"
                alt="Logo - NP"
                width={30}
                height={30}
                className="relative z-10 animate-jump"
                priority
              />
            </div>
          </Link>

          <div className="flex items-center space-x-4 lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-white hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 rounded-full"
            >
              {isOpen ? (
                <IoMdClose className="h-6 w-6" />
              ) : (
                <HiOutlineMenuAlt3 className="h-6 w-6" />
              )}
            </button>
          </div>

          <div className="space-x-4 text-gray-500 lg:flex hidden">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`${
                  isActiveLink(link.href)
                    ? 'underline decoration-primary underline-offset-4 text-white'
                    : 'text-gray-400 hover:underline underline-offset-4 hover:text-gray-300'
                } animate-fade-up`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div
          className={`text-gray-500 bg-gray-900 backdrop-filter backdrop-blur-lg bg-opacity-80 w-full pb-3 space-y-3 text-sm lg:hidden ${
            isOpen ? 'flex flex-col absolute' : 'hidden'
          }`}
        >
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`${
                isActiveLink(link.href)
                  ? 'underline decoration-primary underline-offset-4 text-white'
                  : 'text-gray-500 hover:underline underline-offset-4 hover:text-gray-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 h-[2px]"></div>
    </nav>
  );
};

export default Navbar;
