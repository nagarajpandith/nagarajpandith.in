import { projects } from '@/data/index';
import { BsLink45Deg } from 'react-icons/bs';
import { Link } from 'nextjs13-progress';
import { HiChevronDoubleRight } from 'react-icons/hi';
import Image from 'next/image';

const Projects = () => {
  return (
    <div className="bg-gray-800 rounded-xl p-5 mb-5">
      <h1 className="text-white text-xl md:text-2xl font-bold mb-5 text-center">
        Stuff I&apos;ve enjoyed working on
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3">
          {projects.map((project, i) => (
            <div
              key={i}
              className="hover:animate-background hover:bg-gradient-to-r from-white via-gray-700 to-gray-700 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] rounded-xl bg-gray-700 w-fit"
            >
              <div className="bg-gray-700 flex justify-center items-center flex-col gap-4 pb-5 rounded-xl">
                <div className="px-5 mt-5">
                  <Image
                    src={project.img}
                    alt="Project Image"
                    width={300}
                    height={300}
                    className='-mb-3'
                  />
                  <h1 className="mb-1 text-secondary text-md md:text-lg font-semibold">
                    {project.name}
                  </h1>
                  <p className="text-white text-xs md:text-sm">
                    {project.description}
                  </p>
                </div>

                <a
                  href={project.href}
                  target="_blank"
                  className="flex bg-white py-2 px-3 items-center text-xs md:text-sm rounded-3xl gap-1 hover:opacity-80 transition duration-300 ease-in-out"
                >
                  <BsLink45Deg /> Check it out
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Link
          href="/work"
          className="bg-primary w-fit text-sm text-white px-5 py-2 rounded-full mt-5 hover:opacity-80 transition duration-300 ease-in-out group"
        >
          Checkout more projects
          <HiChevronDoubleRight className="inline transform translate-x-0 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
