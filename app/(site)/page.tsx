import Blogs from '@/components/Blogs';
import Freelance from '@/components/Freelance';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';

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
