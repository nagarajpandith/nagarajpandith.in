import AboutInfo from '@/components/aboutInfo';
import Achievements from '@/components/achievements';
import Education from '@/components/education';
import Experience from '@/components/experience';
import Skills from '@/components/skills';
import Volunteering from '@/components/volunteering';

const About = () => {
  return (
    <div className="my-10">
      <AboutInfo />
      <Experience />
      <Education />
      <Skills />
      <Achievements />
      <Volunteering />
    </div>
  );
};

export default About;
