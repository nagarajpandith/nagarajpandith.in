'use client';

import Image from 'next/image';
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';

const PhotoWorkSection = () => {
  const horizontal = Array.from({ length: 6 }, (_, i) => i + 1);
  const vertical = Array.from({ length: 41 }, (_, i) => i + 1);

  return (
    <div className="flex justify-center flex-wrap gap-5">
      <Gallery>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {vertical.map((index) => (
            <Item
              key={index}
              original={
                'static/captures/vertical/' + index.toString() + '.jpeg'
              }
              thumbnail={
                'static/captures/vertical/' + index.toString() + '.jpeg'
              }
              width="1080"
              height="1920"
            >
              {({ ref, open }) => (
                <Image
                  className="animate-fade-up h-auto max-w-full rounded-lg"
                  width={1080}
                  height={1920}
                  alt="image"
                  ref={ref}
                  onClick={open}
                  src={
                    '/static/captures/vertical/' + index.toString() + '.jpeg'
                  }
                />
              )}
            </Item>
          ))}
        </div>
        {horizontal.map((index) => (
          <Item
            key={index}
            original={
              'static/captures/horizontal/' + index.toString() + '.jpeg'
            }
            thumbnail={
              'static/captures/horizontal/' + index.toString() + '.jpeg'
            }
            width="960"
            height="540"
          >
            {({ ref, open }) => (
              <Image
                className="animate-fade-up rounded-lg"
                width={960}
                height={540}
                alt="image"
                ref={ref}
                onClick={open}
                src={
                  '/static/captures/horizontal/' + index.toString() + '.jpeg'
                }
              />
            )}
          </Item>
        ))}
      </Gallery>
    </div>
  );
};

export default PhotoWorkSection;
