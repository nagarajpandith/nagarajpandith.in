import { mainProjectList } from '@/components/constants/data';
import WideProjectCard from '@/components/WideProjectCard';

const Work = () => {
  return (
    <div className="my-10 flex gap-5 flex-col">
      <h1 className="text-primary lg:text-5xl text-3xl font-bold">My Work</h1>
      <div className="flex gap-5 flex-col">
        {mainProjectList.map((project, i) => (
          <div key={i}>
            <WideProjectCard
              title={project.title}
              desc={project.description}
              image={project.img}
              tags={project.tags}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
