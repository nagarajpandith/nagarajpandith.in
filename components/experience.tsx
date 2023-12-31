import { experiences } from '@/data/index';
import BulletPoint from './bulletPoint';

const Experience = () => {
  return (
    <div className="my-10">
      <h1 className="lg:mt-5 mt-0 text-primary lg:text-3xl text-xl font-bold text-center md:text-left">
        Work Experience
      </h1>
      <ol className="flex flex-col justify-start my-5 gap-5">
        {experiences.map((experience, i) => (
          <BulletPoint
            key={i}
            role={experience.role}
            name={experience.name}
            dateRange={experience.dateRange}
            desc={experience.description}
            img={experience.img}
            href={experience.href}
            link={experience.link}
          />
        ))}
      </ol>
    </div>
  );
};

export default Experience;
