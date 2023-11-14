import AboutInfo from '@/components/aboutInfo';
import Achievements from '@/components/achievements';
import Skills from '@/components/skills';
import Volunteering from '@/components/volunteering';

const About = () => {
  return (
    <div className="my-10">
      <AboutInfo />
      <Achievements />
      <Skills />
      <Volunteering />
    </div>
  );
};

export default About;
