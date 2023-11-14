import { volunteering } from './constants/data';
import VolunteerCard from './VolunteerCard';

const Volunteering = () => {
  return (
    <div className="my-10">
      <h1 className="lg:mt-5 mt-0 text-primary lg:text-3xl text-xl font-bold text-center md:text-left">
        Volunteering & Extra Curricular
      </h1>
      <div className="my-5 flex flex-wrap gap-5 justify-center md:justify-start">
        {volunteering.map((volunteer, i) => (
          <VolunteerCard
            key={i}
            img={volunteer.img}
            date={volunteer.date}
            title={volunteer.title}
            desc={volunteer.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Volunteering;
