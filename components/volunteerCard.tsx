import Image from 'next/image';

const VolunteerCard = ({
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
    <div className="overflow-hidden rounded-lg shadow transition hover:shadow-lg w-60">
      <Image
        alt="Image"
        src={img}
        className="h-56 w-full object-cover"
        width={100}
        height={100}
      />

      <div className="bg-gray-800 p-4 sm:p-6">
        <time className="block text-xs text-gray-400">
          {new Date(date).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </time>

        <h3 className="mt-0.5 text-md text-white">{title}</h3>
        <p className="text-sm/relaxed text-gray-500">{desc}</p>
      </div>
    </div>
  );
};

export default VolunteerCard;
