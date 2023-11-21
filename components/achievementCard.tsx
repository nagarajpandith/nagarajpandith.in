import Image from 'next/image';

const AchievementCard = ({
  img,
  date,
  title,
  href,
}: {
  img: string;
  date: string;
  title: string;
  href: string;
}) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg max-w-lg group h-96">
      <Image
        alt="Achievement Image"
        src={img}
        className="absolute inset-0 h-full w-full object-cover group-hover:brightness-125"
        width={300}
        height={300}
      />

      <div className="flex flex-col justify-end relative bg-gradient-to-t h-full from-gray-900 to-transparent group-hover:opacity-0 transition duration-300 ease-in-out">
        <div className="p-4 sm:p-6">
          <time className="block text-xs text-white/90">{date}</time>

          <a>
            <h1 className="mt-0.5 text-md text-white">{title}</h1>
          </a>
          {/* 
          <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
            {desc}
          </p> */}
        </div>
      </div>

      {href !== '#' && (
        <a
          href={href}
          target="_blank"
          role="button"
          className="absolute bottom-5 right-5 bg-primary hover:bg-primary/80 text-white font-bold py-2 px-4 rounded-xl opacity-0 group-hover:opacity-100"
        >
          Read More
        </a>
      )}
    </div>
  );
};

export default AchievementCard;
