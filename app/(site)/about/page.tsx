import AboutInfo from '@/components/AboutInfo';
import Achievements from '@/components/Achievements';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Volunteering from '@/components/Volunteering';

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
