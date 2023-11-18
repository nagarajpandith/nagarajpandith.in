import { education } from '@/data/index';
import BulletPoint from './bulletPoint';

const Education = () => {
  return (
    <div className="my-10">
      <h1 className="lg:mt-5 mt-0 text-primary lg:text-3xl text-xl font-bold text-center md:text-left">
        Education
      </h1>
      <ol className="flex flex-wrap justify-start gap-5">
        {education.map((education, i) => (
          <BulletPoint
            key={i}
            role={education.role}
            name={education.name}
            dateRange={education.dateRange}
            desc={education.description}
            href={education.href}
          />
        ))}
      </ol>
    </div>
  );
};

export default Education;
