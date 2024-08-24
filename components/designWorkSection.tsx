import { HiChevronDoubleRight } from 'react-icons/hi';

const DesignWorkSection = () => {
  return (
    <>
      <div className="flex flex-wrap gap-5 justify-center lg:justify-between items-center w-full">
        <iframe
          src="https://www.behance.net/embed/project/204036235?ilo0=1"
          allowFullScreen
          className="w-[300px] h-[300px] animate-fade-up"
          frameBorder="0"
          allow="clipboard-write"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
        <iframe
          src="https://www.behance.net/embed/project/204035799?ilo0=1"
          allowFullScreen
          className="w-[300px] h-[300px] animate-fade-up"
          frameBorder="0"
          allow="clipboard-write"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
        <iframe
          src="https://www.behance.net/embed/project/204035405?ilo0=1"
          allowFullScreen
          className="w-[300px] h-[300px] animate-fade-up"
          frameBorder="0"
          allow="clipboard-write"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
        <iframe
          src="https://www.behance.net/embed/project/204035277?ilo0=1"
          allowFullScreen
          className="w-[300px] h-[300px] animate-fade-up"
          frameBorder="0"
          allow="clipboard-write"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
        <iframe
          src="https://www.behance.net/embed/project/204035119?ilo0=1"
          allowFullScreen
          className="w-[300px] h-[300px] animate-fade-up"
          frameBorder="0"
          allow="clipboard-write"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
        <iframe
          src="https://www.behance.net/embed/project/204035511?ilo0=1"
          allowFullScreen
          className="w-[300px] h-[300px] animate-fade-up"
          frameBorder="0"
          allow="clipboard-write"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
      <div className="flex items-center justify-center mt-5">
        <a
          target="_blank"
          href="https://www.behance.net/nagarajpandith"
          className="bg-primary w-fit text-sm text-white px-5 py-2 rounded-full hover:opacity-80 transition duration-300 ease-in-out group"
        >
          Checkout more on Behance
          <HiChevronDoubleRight className="inline transform translate-x-0 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </>
  );
};

export default DesignWorkSection;
