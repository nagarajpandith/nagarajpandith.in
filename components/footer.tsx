import Link from 'next/link';
import { footerLinks } from '@/data/index';
import { IoLogoRss } from 'react-icons/io5';
import { FaSitemap } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="animate-fade-up bg-gray-900">
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 h-[2px]"></div>

      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="xl:grid xl:grid-cols-4 xl:gap-2">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h1 className="text-sm font-semibold tracking-wider uppercase text-white">
                  Main Links
                </h1>
                <div className="mt-4 space-y-4">
                  {footerLinks.primary.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-base no-underline cursor-pointer hover:text-gray-300 text-gray-400 hover:underline"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="mt-12 md:mt-0">
                <h1 className="text-sm font-semibold tracking-wider uppercase text-white">
                  Others
                </h1>
                <div className="mt-4 space-y-4">
                  {footerLinks.secondary.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-base no-underline cursor-pointer hover:text-gray-300 text-gray-400 hover:underline"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <a
                    target="_blank"
                    className="block text-base no-underline cursor-pointer hover:text-gray-300 text-gray-400 hover:underline"
                    href="https://www.imdb.com/user/ur173055535/watchlist"
                  >
                    Recommendations
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-2xl col-span-2 mt-8 xl:mt-0 text-center bg-gray-800 flex justify-center items-center p-5 flex-col rounded-xl">
            <h1 className="tracking-wider text-white text-lg">
              Hi! Thanks for visiting my site.
            </h1>
            <div className="mt-4 text-gray-400">
              Sign my{' '}
              <Link
                href={'/guestbook'}
                className="underline text-secondary underline-offset-4"
              >
                Guestbook
              </Link>{' '}
              and let me know what you think.
            </div>
            <div className="flex gap-5 mt-5">
              <a
                target="_blank"
                href="/feed.xml"
                className="border rounded-full py-1 px-2 flex gap-2 items-center text-gray-400 hover:text-white cursor-pointer"
              >
                <IoLogoRss />
                RSS
              </a>
              <a
                href="/sitemap.xml"
                className="border rounded-full py-1 px-2 flex gap-2 items-center text-gray-400 hover:text-white cursor-pointer"
              >
                <FaSitemap />
                Sitemap
              </a>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row gap-5 md:gap-0 flex-col-reverse items-center justify-between mt-12">
          <div className="flex items-center order-2 space-x-6">
            {footerLinks.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 important"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon />
              </a>
            ))}
          </div>
          <p className="order-1 text-base text-white">
            &copy; {new Date().getFullYear()} {'Nagaraj Pandith'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
