import { achievements } from './constants/data';
import AchievementCard from './achievementCard';

const Achievements = () => {
  return (
    <div className="my-10">
      <h1 className="lg:mt-5 mt-0 text-primary lg:text-3xl text-xl font-bold text-center md:text-left">
        Important Milestones of my life
      </h1>
      <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-scroll gap-10 w-full">
        {achievements.map((achievement, i) => (
          <AchievementCard
            key={i}
            href={achievement.href}
            img={achievement.img}
            date={achievement.date}
            title={achievement.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Achievements;
