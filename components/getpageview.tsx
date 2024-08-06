'use client';

import { useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';
import { CiWarning } from 'react-icons/ci';

export const GetPageView: React.FC<{ slug: string }> = ({ slug }) => {
  const [views, setViews] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPageView = async () => {
      try {
        const response = await fetch(`/api/pageviews?slug=${slug}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          const errorText = await response.text();
          setError(`Failed to fetch page views: ${errorText}`);
          return;
        }

        const data = await response.json();
        console.log('data', data);
        setViews(data.views);
      } catch (error) {
        setError('Error fetching page views');
        console.error('Error fetching page views', error);
      }
    };

    fetchPageView();
  }, [slug]);

  if (error) {
    return (
      <div className="inline-flex text-red-500 items-center gap-1">
        <CiWarning className="text-red-500" /> Error!
      </div>
    );
  }

  return (
    <>
      {views !== null ? (
        <span className="inline-flex items-center gap-1">
          <IoEyeSharp />
          {views} views
        </span>
      ) : (
        <span>
          <FaSpinner className="inline-flex animate-spin" />
        </span>
      )}
    </>
  );
};
