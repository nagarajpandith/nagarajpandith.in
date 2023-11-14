import Image from 'next/image';

const BulletPoint = ({
  name,
  dateRange,
  desc,
  img,
  href,
}: {
  name: string;
  dateRange: string;
  desc: string;
  img: string;
  href: string;
}) => {
  return (
    <li className="mb-6 sm:mb-0">
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
      <div className="mt-3 sm:pe-8">
        <h3 className="text-lg font-semibold text-white">
          <a href={href} target="_blank">
            {name}
          </a>
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
          {dateRange}
        </time>
        <p className="text-base font-normal text-gray-400">{desc} </p>
      </div>
    </li>
  );
};

export default BulletPoint;
