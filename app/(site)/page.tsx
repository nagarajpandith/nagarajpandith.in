import Blogs from '@/components/blogs';
import Freelance from '@/components/freelance';
import Hero from '@/components/hero';
import Projects from '@/components/projects';

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Blogs />
      <Freelance />
    </main>
  );
}
