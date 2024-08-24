import { redirect } from 'next/navigation';
import Tabs from '@/components/tabs';
import { ProjectWorkSection } from '@/components/projectWorkSection';
import DesignWorkSection from '@/components/designWorkSection';
import PhotoWorkSection from '@/components/photoWorkSection';

const Work = ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  if (!searchParams?.tab) {
    redirect(`/work?tab=projects`);
  }

  const renderSection = (tab: string | string[]) => {
    switch (tab) {
      case 'projects':
        return <ProjectWorkSection />;
      case 'designs':
        return <DesignWorkSection />;
      case 'shots':
        return <PhotoWorkSection />;
      default:
        return <ProjectWorkSection />;
    }
  };

  return (
    <div className="my-10 flex gap-5 flex-col">
      <h1 className="text-primary lg:text-5xl text-3xl font-bold">My Work</h1>
      <div className="flex gap-3 items-center w-full justify-between">
        <Tabs />
      </div>
      {renderSection(searchParams?.tab)}
    </div>
  );
};

export default Work;
