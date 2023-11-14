import Image from 'next/image';

const AchievementCard = ({
  img,
  date,
  title,
  desc,
}: {
  img: string;
  date: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg max-w-lg group">
      <Image
        alt="Achievement Image"
        src={img}
        className="absolute inset-0 h-full w-full object-cover group-hover:brightness-125"
        width={100}
        height={100}
      />

      <div className="flex flex-col justify-end relative bg-gradient-to-t h-full from-gray-900 to-transparent group-hover:opacity-0 transition duration-300 ease-in-out">
        <div className="p-4 sm:p-6">
          <time className="block text-xs text-white/90">
            {new Date(date).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}
          </time>

          <a href="#">
            <h3 className="mt-0.5 text-lg text-white">{title}</h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;
