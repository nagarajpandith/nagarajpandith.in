import Image from 'next/image';

const BulletPoint = ({
  name,
  dateRange,
  desc,
  img,
  href,
  role,
  link,
}: {
  name: string;
  dateRange: string;
  desc: string;
  img?: string;
  href: string;
  role?: string;
  link?: string;
}) => {
  const bulletPoints = desc
    .split('•')
    .map((point) => point.trim())
    .filter(Boolean);

  return (
    <li className="mb-6 sm:mb-0">
      {img && (
        <div className="flex items-center">
          <div className="z-10 flex items-center justify-center">
            <Image
              src={img}
              alt={name}
              width={50}
              height={50}
              className="rounded-xl"
            />
          </div>
        </div>
      )}
      <div className="mt-3 sm:pe-8">
        <h3 className="text-lg font-semibold text-white">
          {role && (
            <a
              href={link ? link : href}
              className="block hover:underline"
              target="_blank"
            >
              {role}
            </a>
          )}
          <a
            className="font-normal text-sm hover:underline"
            href={href}
            target="_blank"
          >
            {name}
          </a>
        </h3>
        <time className="block my-1 text-sm font-normal leading-none text-gray-500">
          {dateRange}
        </time>
        <ul
          className={`${
            desc.includes('•') ? 'list-disc' : ''
          } list-inside font-normal text-gray-400 text-sm md:text-md`}
        >
          {bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>{' '}
      </div>
    </li>
  );
};

export default BulletPoint;
