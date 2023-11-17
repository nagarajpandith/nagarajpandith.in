import Image from 'next/image';

const VolunteerCard = ({
  img,
  title,
  desc,
}: {
  img: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="overflow-hidden rounded-lg shadow transition hover:shadow-lg mt-5 sm:break-inside-avoid">
      <Image
        alt="Image"
        src={img}
        className="h-56 w-full object-cover"
        width={300}
        height={300}
      />

      <div className="bg-gray-800 p-4 sm:p-6">
        <h3 className="mt-0.5 text-md text-white">{title}</h3>
        <p className="text-sm/relaxed text-gray-500">{desc}</p>
        {title.includes('more') && (
          <a
            className="block mt-2 bg-primary w-fit text-sm text-white px-5 py-2 rounded-full hover:opacity-80 transition duration-300 ease-in-out group"
            href="https://www.linkedin.com/in/nagaraj-pandith/"
          >
            See More
          </a>
        )}
      </div>
    </div>
  );
};

export default VolunteerCard;
