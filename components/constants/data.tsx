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

export const projects = [
  {
    name: 'JabWeMeet',
    description:
      'Multilingual Live Video conferencing built at 36hr National Hackathon.',
    href: 'https://github.com/swasthikshetty10/hackoverflow',
  },
  {
    name: "Incridea'23",
    description:
      "Event Management & Paperless system for NMAMIT's College Fest",
    href: 'https://github.com/incridea-23/incridea-client',
  },
  {
    name: 'Live-stream Studio Booking',
    description:
      'Full-Stack Django app to book Live stream studio and manage bookings.',
    href: 'https://github.com/nagarajpandith/live-stream-studio-booking',
  },
];

export const blogList = [
  {
    title: 'Starting Web Development the right way in 2021',
    description:
      'In the past few years, Web Development has become a hot topic among developers and numerous coders are eventually getting into it. This resulted in enormous amount of online resources, roadmaps, video guides and a lot more which are hard to digest all at once. Moreover, the technology present yesterday is getting obselete today, which makes it hard to stick to a Tech stack while getting started. So, In this article you’ll get',
    date: '04-02-2022',
    img: '/static/png/portrait.png',
  },
  {
    title:
      '“Has Anyone Seen Web3?” — The Complete Roadmap and Resources to Become a Web3 Developer in 2022',
    description:
      'Twitter went crazy last month when Musk and Dorsey mocked the idea of Web3. Few called it the future of the internet and few called it to be bogus. But do you know what exactly is Web 3.0 and how does it work? In this article, you’ll be introduced to the new dimension of the internet and how to get started in this field from a developer’s point of view.',
    date: '04-02-2022',
    img: '/static/png/portrait.png',
  },
];

export const messages = [
  'Just heard about your freelance services. What do you offer?',
  'I have a small project that needs a professional touch. You available?',
  'Thinking about revamping my website. Any suggestions?',
  "I'm impressed by your portfolio. How can we collaborate?",
  'Looking for a skilled web developer. Are you the one I need?',
];

export const skills = [
  {
    name: 'Python',
    icon: 'python',
  },
  {
    name: 'Typescript',
    icon: 'typescript',
  },
  {
    name: 'React',
    icon: 'react',
  },
  {
    name: 'Next js',
    icon: 'next-js',
  },
  {
    name: 'Tailwind CSS',
    icon: 'tailwind',
  },
  {
    name: 'Django',
    icon: 'django',
  },
  {
    name: 'Git',
    icon: 'git',
  },
];

export const achievements = [
  {
    title:
      '“Has Anyone Seen Web3?” — The Complete Roadmap and Resources to Become a Web3 Developer in 2022',
    description:
      'Twitter went crazy last month when Musk and Dorsey mocked the idea of Web3. Few called it the future of the internet and few called it to be bogus. But do you know what exactly is Web 3.0 and how does it work? In this article, you’ll be introduced to the new dimension of the internet and how to get started in this field from a developer’s point of view.',
    date: '04-02-2022',
    img: '/static/png/portrait.png',
  },
  {
    title:
      '“Has Anyone Seen Web3?” — The Complete Roadmap and Resources to Become a Web3 Developer in 2022',
    description:
      'Twitter went crazy last month when Musk and Dorsey mocked the idea of Web3. Few called it the future of the internet and few called it to be bogus. But do you know what exactly is Web 3.0 and how does it work? In this article, you’ll be introduced to the new dimension of the internet and how to get started in this field from a developer’s point of view.',
    date: '04-02-2022',
    img: '/static/png/portrait.png',
  },
  {
    title:
      '“Has Anyone Seen Web3?” — The Complete Roadmap and Resources to Become a Web3 Developer in 2022',
    description:
      'Twitter went crazy last month when Musk and Dorsey mocked the idea of Web3. Few called it the future of the internet and few called it to be bogus. But do you know what exactly is Web 3.0 and how does it work? In this article, you’ll be introduced to the new dimension of the internet and how to get started in this field from a developer’s point of view.',
    date: '04-02-2022',
    img: '/static/png/portrait.png',
  },
  {
    title:
      '“Has Anyone Seen Web3?” — The Complete Roadmap and Resources to Become a Web3 Developer in 2022',
    description:
      'Twitter went crazy last month when Musk and Dorsey mocked the idea of Web3. Few called it the future of the internet and few called it to be bogus. But do you know what exactly is Web 3.0 and how does it work? In this article, you’ll be introduced to the new dimension of the internet and how to get started in this field from a developer’s point of view.',
    date: '04-02-2022',
    img: '/static/png/portrait.png',
  },
];
