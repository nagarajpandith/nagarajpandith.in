import { volunteering } from './constants/data';
import VolunteerCard from './volunteerCard';

const Volunteering = () => {
  return (
    <div className="my-10">
      <h1 className="lg:mt-5 mt-0 text-primary lg:text-3xl text-xl font-bold text-center md:text-left">
        Volunteering & Extra Curricular
      </h1>

      <div className="mx-auto max-w-screen-xl mt-5">
        <div className="sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
          {volunteering.map((volunteer, i) => (
            <VolunteerCard
              key={i}
              img={volunteer.img}
              title={volunteer.title}
              desc={volunteer.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Volunteering;
