import {
  BsTwitter,
  BsLinkedin,
  BsGithub,
  BsMedium,
  BsDiscord,
} from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

export const navLinks = [
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
    name: 'Resume',
    href: '/static/pdf/resume.pdf',
  },
];

export const footerLinks = {
  primary: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Work', href: '/work' },
    { name: 'Blog', href: '/blog' },
  ],
  secondary: [
    { name: 'Resume', href: '/static/pdf/resume.pdf' },
    { name: 'Guestbook', href: '/guestbook' },
    { name: 'Tools', href: '/tools' },
    { name: 'Recommendations', href: '/binge' },
  ],
  social: [
    {
      name: 'Mail',
      href: 'mailto:nagaraj.pandith2002@gmail.com',
      icon: () => (
        <SiGmail className="w-5 h-5 hover:animate-wiggle hover:text-white" />
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/hashclan102',
      icon: () => (
        <BsTwitter className="w-5 h-5 hover:animate-wiggle hover:text-white" />
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/nagarajpandith',
      icon: () => (
        <BsGithub className="w-5 h-5 hover:animate-wiggle hover:text-white" />
      ),
    },
    {
      name: 'Discord',
      href: 'https://www.discord.com/users/hashclan#4890',
      icon: () => (
        <BsDiscord className="w-5 h-5 hover:animate-wiggle hover:text-white" />
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/nagaraj-pandith/',
      icon: () => (
        <BsLinkedin className="w-5 h-5 hover:animate-wiggle hover:text-white" />
      ),
    },
    {
      name: 'Medium',
      href: 'https://medium.com/@nagarajpandith',
      icon: () => (
        <BsMedium className="w-5 h-5 hover:animate-wiggle hover:text-white" />
      ),
    },
  ],
};
