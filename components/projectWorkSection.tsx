import { mainProjectList } from '@/data';
import WideProjectCard from './wideProjectCard';
import { HiChevronDoubleRight } from 'react-icons/hi';

export const ProjectWorkSection = () => {
  return (
    <>
      <div className="flex gap-5 flex-col">
        {mainProjectList.map((project, i) => (
          <div key={i}>
            <WideProjectCard
              i={i}
              title={project.title}
              desc={project.description}
              image={project.img}
              tags={project.tags}
              link={project.link}
              source={project.github}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <a
          target="_blank"
          href="https://github.com/nagarajpandith"
          className="bg-primary w-fit text-sm text-white px-5 py-2 rounded-full hover:opacity-80 transition duration-300 ease-in-out group"
        >
          Checkout more projects
          <HiChevronDoubleRight className="inline transform translate-x-0 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </>
  );
};
