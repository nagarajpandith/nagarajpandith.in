import Image from 'next/image';
import { projects } from './constants/data';
import { BsLink45Deg } from 'react-icons/bs';
import Link from 'next/link';
import { HiChevronDoubleRight } from 'react-icons/hi';

const Projects = () => {
  return (
    <div className="bg-gray-800 rounded-xl p-5 mb-5">
      <h1 className="text-white text-xl md:text-2xl font-bold mb-5 text-center">
        Things I&apos;ve worked on
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3">
          {projects.map((project, i) => (
            <div
              key={i}
              className="relative flex justify-center items-center flex-col gap-4 p-5 rounded-xl bg-gray-700 w-fit"
            >
              <Image
                src={project.img}
                alt={project.name}
                width={300}
                height={300}
                className="rounded-xl"
              />
              <div>
                <h1 className="mb-1 text-white text-sm md:text-md font-semibold">
                  {project.name}
                </h1>
                <p className="text-gray-400 text-xs md:text-sm">
                  {project.description}
                </p>
              </div>
              <a
                href={project.href}
                target="_blank"
                className="flex bg-white p-1 px-2 items-center text-xs md:text-sm rounded-3xl gap-1 hover:opacity-80 transition duration-300 ease-in-out"
              >
                <BsLink45Deg /> Check it out
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Link
          href="/about"
          className="bg-primary w-fit text-sm text-white px-5 py-2 rounded-full mt-5 hover:opacity-80 transition duration-300 ease-in-out group"
        >
          Checkout more projects
          <HiChevronDoubleRight className="inline transform trangray-x-0 transition-transform group-hover:trangray-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
