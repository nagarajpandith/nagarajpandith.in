import { BsLinkedin, BsGithub, BsMedium, BsDiscord } from 'react-icons/bs';
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
    href: '/static/pdf/Resume.pdf',
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
    { name: 'Resume', href: '/static/pdf/Resume.pdf' },
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-twitter-x w-5 h-5 hover:animate-wiggle hover:text-white"
          viewBox="0 0 16 16"
        >
          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
        </svg>
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
    img: '/static/png/jab-we-meet.png',
  },
  {
    name: "Incridea'23",
    description:
      "Event Management & Paperless system for NMAMIT's College Fest",
    href: 'https://github.com/incridea-23/incridea-client',
    img: '/static/png/incridea.png',
  },
  {
    name: 'Live-stream Studio Booking',
    description:
      'Full-Stack Django app to book Live stream studio and manage bookings.',
    href: 'https://github.com/nagarajpandith/live-stream-studio-booking',
    img: '/static/png/live-stream.png',
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
      'Winner at the 3-day long National-level hackathon ’Hackoverflow 1.0’ held at Pillai HOC, Mumbai.',
    date: '18-03-2023',
    img: '/static/png/hackoverflow.jpeg',
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7043941054076637184/',
  },
  {
    title:
      'Track prize winner in the AI track at the 24 hr long National-level hackathon ’Hackverse 4.0’ held at NITK.',
    date: '16-04-2023',
    img: '/static/png/hackverse.jpeg',
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7060835169556955136/',
  },
  {
    title:
      'Special Prize Winner for ’Most Innovative Approach’ at ’NivHack’ held at Niveus Solutions, Mangalore',
    date: '27-08-2023',
    img: '/static/png/niveus.jpeg',
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7102829803791163392/',
  },
  {
    title:
      'Winner of ’Web Ally’, 6 hr long website designing contest at the annual fest ’Tiara’ at SJEC, Mangalore.',
    date: '23-03-2023',
    img: '/static/png/tiara.jpeg',
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7049752134799536128/',
  },
  {
    title: `Winner of 'Webbed' and Runner-up in 'Web Piracy' during College fest Incridea-2022`,
    date: '04-02-2022',
    img: '/static/png/incridea.jpeg',
    href: 'https://incridea.in/',
  },
  {
    title: 'Loading...',
    date: 'Soon?',
    img: '/static/png/question.jpg',
    href: '#',
  },
];

export const volunteering = [
  {
    title: "Incridea'23 - Frontend Lead",
    img: '/static/png/incridea-tech-team.jpeg',
    description:
      'Worked with the Tech team for Incridea 2023, the annual fest of NMAMIT, to develop 7+ dashboards for monitoring and managing the events in real-time, an event registration system and visually appealing landing pages.',
  },
  {
    title: 'Git & GitHub workshop',
    img: '/static/png/git-github.jpg',
    description:
      'Attended by 65+ students at NMAMIT, empowering them with version control skills.',
  },
  {
    title: 'Hacktoberfest workshop',
    img: '/static/png/hacktoberfest.jpg',
    description:
      'Guide to Open Source contributions & Hacktoberfest Attended by 70+ students, fostering community collaboration.',
  },
  {
    title: 'Hackfest S01',
    img: '/static/png/hackfest-image.jpeg',
    description:
      'Led the core team in hosting month-long online hackathon with 20+ teams as Vice President of the coding club.',
  },
  {
    title: 'Skill Lab Training',
    img: '/static/png/skill-lab.jpeg',
    description:
      'Played key role as a member of Skill Lab training, imparting Web development and Git & GitHub to freshers.',
  },
  {
    title: 'A lot more..',
    img: '/static/png/other.jpeg',
    description:
      'College has provided me with a lot of opportunities to volunteer, right from working in core teams of clubs to conducting one on one sessions to organizing events.',
  },
];

export const experiences = [
  {
    role: 'Software Engineering Intern',
    name: 'Forent Co., Ltd.',
    dateRange: 'Nov 2022 - Jan 2023',
    description: `• Worked on migrating ExCamp project from HTML/Bootstrap to Next.js with Typescript & Sass.
    • Involved in designing, building & optimizing pages, with performance and user experience in mind.
    • Followed Agile software development using Jira for project management and Git for version control.`,
    href: 'https://forent.co.jp/',
    link: '/static/pdf/Forent_Letter.pdf',
    img: '/static/png/forent.webp',
  },
  {
    role: 'Software Development Intern',
    name: 'Inspirante Technologies Pvt. Ltd.',
    dateRange: 'Nov 2021 - May 2022',
    description: `• Revamped the Finite Loop Club website using Next.js, Prisma, tRPC, TypeScript, & MySQL. 
    • Developed a featurerich community platform with customizable user profiles, digital certificates, and admin panel.
    • Contributed to the development of Edu-tech web portal [LMS] as part of a collaborative team.`,
    href: 'https://inspirantech.in/',
    link: '/static/pdf/Inspirante_Letter.pdf',
    img: '/static/png/inspirante.jpeg',
  },
];

export const education = [
  {
    name: 'N.M.A.M.I.T.',
    role: 'B.E., Computer Science & Engineering',
    dateRange: '2020-2024',
    description: 'CGPA: 8.95/10.00',
    href: 'https://nmamit.nitte.edu.in/',
  },
  {
    name: 'Poorna Prajna PU College',
    role: 'Pre-University Education - PCMCs',
    dateRange: '2018-2020',
    description: 'Aggregate: 94.0%',
    href: 'https://poornaprajnapuc.com/',
  },
  {
    name: 'Indrali English Medium School',
    role: 'School Education',
    dateRange: '2006-2018',
    description: 'Aggregate: 98.56%',
    href: 'https://www.justdial.com/Udupi/Indrali-English-Medium-High-School-Near-Railway-Bridge-Kunjibettu/0820PX820-X820-120227170748-B7Q1_BZDET',
  },
];

export const mainProjectList = [
  {
    title: 'JabWeMeet',
    img: '/static/png/jab-we-meet.png',
    description:
      'Built a multilingual video conferencing web app with real-time audio translation with spoken out audio and caption display. Generates meeting minutes in preferred language and allows users to access meeting transcriptions anytime.',
    link: 'https://jabwemeet.vercel.app/',
    github: 'swasthikshetty10/hackoverflow',
    tags: [
      'Next.js',
      'Typescript',
      'TailwindCSS',
      'Pusher',
      'Livekit',
      'tRPC',
      'MySQL',
    ],
  },
  {
    title: "Incridea'23",
    img: '/static/png/incridea.png',
    description:
      "Developed full-stack typesafe website & paperless system for Incridea'23. Collaborated with the Tech team to create 7 intuitive dashboard panels & Event registration system. Implemented secure JWT user auth & verification system.",
    link: 'http://incridea.in/',
    github: 'incridea-23/incridea-client',
    tags: [
      'Next.js',
      'Typescript',
      'TailwindCSS',
      'GraphQL',
      'Framer Motion',
      'Prisma',
    ],
  },
  {
    title: 'Live-stream Studio Booking',
    img: '/static/png/live-stream.png',
    description:
      'Built a responsive full-stack booking system with automated notifications and admin hierarchies, deployed on Amazon EC2. Enables flexible filtering options, data export capabilities, and effectively prevents duplicate bookings.',
    link: 'https://livestream.konkanischolarship.com/',
    github: 'nagarajpandith/live-stream-studio-booking',
    tags: ['Django', 'Bootstrap', 'SQLite', 'AWS EC2'],
  },
  {
    title: 'Finite Loop Club - Website',
    img: '/static/png/flc.png',
    description:
      'Community website with Beautiful UI, Integrated Payment gateway, Custom public user profiles, Digital Certificates & ID Cards, Admin Panel and more',
    link: 'https://finiteloop.co.in/',
    github: 'Finite-Loop-Club-NMAMIT/flc-website',
    tags: [
      'Next.js',
      'tRPC',
      'Typescript',
      'React-Query',
      'zod',
      'Razorpay',
      'Planetscale',
    ],
  },
  {
    title: 'Portfolio Website',
    img: '/static/png/portfolio-img.png',
    description:
      'My Personal Website, Blog and Guestbook. Built with Next 14, Typescript, Vercel Postgres, MDX and more!',
    link: 'https://nagarajpandith.in',
    github: 'nagarajpandith/portfolio',
    tags: ['Next.js', 'Typescript', 'MDX', 'Prisma', 'TailwindCSS'],
  },
  {
    title: 'Aido',
    img: '/static/png/aido.png',
    description:
      '3D multilingual chatbot with interactive gestures, contextual conversations, persistent chat history, and personalized medical and mental health support.',
    link: 'https://aido-clone.vercel.app/',
    github: 'nagarajpandith/aido',
    tags: [
      'Next.js',
      'tRPC',
      'Typescript',
      'Google PaLM2',
      'Cloud Run',
      'Cloud SQL',
      'Deepgram STT',
      'ElevenLabs TTS',
    ],
  },
  {
    title: 'CAS',
    img: '/static/png/cas.png',
    description: 'Canteen Automation System (CAS) - DBMS Academic Mini Project',
    link: 'https://cas.up.railway.app/',
    github: 'nagarajpandith/cas',
    tags: ['Django', 'TailwindCSS', 'PostgreSQL'],
  },
  // {
  //   title: 'Campus-Compass',
  //   img: '/static/png/portrait.png',
  //   description:
  //     'An Android App for Indoor Navigation in College Blocks using 360-Degree Images',
  //   link: 'https://github.com/nagarajpandith/campus-compass/releases/download/v1.0.0/Campus.Compass.v1.0.0.apk',
  //   github: 'nagarajpandith/campus-compass',
  //   tags: ['Java', 'Android Studio', 'Google VR SDK'],
  // },
];

export const tools = [
  {
    name: 'Notion',
    desc: 'The most important thing that has kept my life together since 3 years',
    url: 'https://www.notion.so/',
  },
  {
    name: 'Excalidraw',
    desc: 'Super handy tool I use to jot down my ideas all the time',
    url: 'https://excalidraw.com/',
  },
  {
    name: 'VS Code',
    desc: 'The best one out there! I use it all the time.',
    url: 'https://code.visualstudio.com/',
  },
  {
    name: "SynthWave'84",
    desc: 'A Synthwave-inspired colour theme by Robb Owen',
    url: 'https://marketplace.visualstudio.com/items?itemName=RobbOwen.synthwave-vscode',
  },
  {
    name: 'Figma',
    desc: "The tool for all things I'd like to design",
    url: 'https://www.figma.com/',
  },
  {
    name: 'Prettier',
    desc: 'An opinionated code formatter.',
    url: 'https://prettier.io/',
  },
  {
    name: 'Blackhole',
    desc: 'Open source music app with Spotify charts & YouTube music',
    url: 'https://sangwan5688.github.io/',
  },
  {
    name: 'YouTube',
    desc: 'The source of 90% of my Knowledge',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
];
