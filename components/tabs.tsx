'use client';

import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

const Tabs = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const addQueryParam = (value: string) => {
    router.push(`/work?tab=${value}`);
  };

  const activeTab = searchParams.get('tab');
  const commonStyles = `text-sm rounded-t-xl lg:text-lg text-gray-300 px-3 py-1 w-full text-center cursor-pointer`;
  const inactiveStyles = `border-b border-gray-500/50 bg-gray-800 hover:bg-gray-700`;
  const activeStyles = `bg-primary hover:bg-primary/80`;
  const style = (active: boolean) => {
    return commonStyles + ' ' + (active ? activeStyles : inactiveStyles);
  };

  return (
    <>
      <p
        onClick={() => addQueryParam('projects')}
        className={style(activeTab === 'projects')}
      >
        Projects
      </p>
      <p
        onClick={() => addQueryParam('designs')}
        className={style(activeTab === 'designs')}
      >
        Designs
      </p>
      <p
        onClick={() => addQueryParam('shots')}
        className={style(activeTab === 'shots')}
      >
        Shots
      </p>
    </>
  );
};

export default Tabs;
