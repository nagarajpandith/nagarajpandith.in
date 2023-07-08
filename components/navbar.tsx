'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActiveLink = (href: string) => {
    return pathname === href;
  };

  const navlinks = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'About',
      href: '/about',
    },
    {
      name: 'Work',
      href: '/work',
    },
    {
      name: 'Blog',
      href: '/blog',
    },
    {
      name: 'Guestbook',
      href: '/guestbook',
    },
    {
      name: 'Contact',
      href: '/contact',
    },
  ];

  return (
    <nav className="sticky top-0 z-10 bg-slate-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="flex gap-3 items-center lg:text-xl text-md text-white font-semibold">
            <div className="relative w-30 h-30">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg filter blur-lg opacity-70 animate-slow-glow"></div>
              <Image
                src="/static/png/logo.png"
                alt="Logo - NP"
                width={30}
                height={30}
                className="relative z-10"
              />
            </div>
            Nagaraj Pandith
          </span>

          <div className="flex items-center space-x-4 lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white"
            >
              <HiOutlineMenuAlt3 className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="space-x-4 text-gray-500 lg:flex hidden">
            {navlinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`${
                  isActiveLink(link.href)
                    ? 'underline underline-offset-4 text-white'
                    : 'text-gray-500 hover:underline underline-offset-4 hover:text-gray-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div
          className={`text-gray-500 pb-3 space-y-3 text-sm lg:hidden ${
            isOpen ? 'flex flex-col' : 'hidden'
          }`}
        >
          {navlinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`${
                isActiveLink(link.href)
                  ? 'underline underline-offset-4 text-white'
                  : 'text-gray-500 hover:underline underline-offset-4 hover:text-gray-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
