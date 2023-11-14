import Image from 'next/image';
import { achievements } from './constants/data';

const Achievements = () => {
  return (
    <div className="my-10">
      <h1 className="lg:mt-5 mt-0 text-primary lg:text-3xl text-xl font-bold text-center md:text-left">
        Important Milestones of my life
      </h1>
      <div className="my-5 flex flex-wrap overflow-scroll gap-10 w-full">
        {achievements.map((achievement, i) => (
          <AchievementCard
            key={i}
            img={achievement.img}
            date={achievement.date}
            title={achievement.title}
            desc={achievement.description}
          />
        ))}
      </div>
    </div>
  );
};

const AchievementCard = ({
  img,
  date,
  title,
  desc,
}: {
  img: string;
  date: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg max-w-lg group">
      <Image
        alt="Achievement Image"
        src={img}
        className="absolute inset-0 h-full w-full object-cover group-hover:brightness-125"
        width={100}
        height={100}
      />

      <div className="relative bg-gradient-to-t from-gray-900 to-transparent pt-32 sm:pt-48 lg:pt-64">
        <div className="p-4 sm:p-6">
          <time className="block text-xs text-white/90">
            {new Date(date).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}
          </time>

          <a href="#">
            <h3 className="mt-0.5 text-lg text-white">{title}</h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
