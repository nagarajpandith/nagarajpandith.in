import { education } from './constants/data';
import BulletPoint from './bulletPoint';

const Education = () => {
  return (
    <div className="my-10">
      <h1 className="lg:mt-5 mt-0 text-primary lg:text-3xl text-xl font-bold text-center md:text-left">
        Education
      </h1>
      <ol className="flex flex-wrap justify-start my-5 gap-5">
        {education.map((education, i) => (
          <BulletPoint
            key={i}
            name={education.name}
            dateRange={education.dateRange}
            desc={education.description}
            img={education.img}
            href={education.href}
          />
        ))}
      </ol>
    </div>
  );
};

export default Education;
