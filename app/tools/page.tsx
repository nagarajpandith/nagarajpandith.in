import { tools } from '@/data';
import Image from 'next/image';

const Toolbox = () => {
  return (
    <div className="my-10 flex gap-5 flex-col">
      <div className='text-center'>
        <h1 className="text-primary lg:text-5xl text-3xl font-bold">Toolbox</h1>
        <h2 className="text-gray-300 mt-2 md:text-xl text-lg font-semibold">
          Stuff that power my daily tasks
        </h2>
      </div>

      <div className="flex gap-5 items-center flex-col md:flex-row">
        <div>
          <Image
            src={'/static/png/google.png'}
            width={300}
            height={300}
            alt="Professional Googler Meme"
          />
          <p className="text-gray-300 mt-5 font-semibold">
            <span className="text-primary">Googling</span> is an art. And
            I&apos;d like to say that&apos;s my top tool than all the ones on
            the side here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-3">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex flex-col p-3 bg-gray-800 hover:bg-gray-700 rounded-xl"
            >
              <h4 className="text-gray-300 mt-2 text-xl font-semibold">
                <a
                  className={
                    tool.url
                      ? 'cursor-pointer hover:text-white'
                      : 'cursor-not-allowed'
                  }
                  href={tool.url}
                >
                  {tool.name}
                </a>
              </h4>
              <p className="text-gray-300 mt-2 text-sm">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Toolbox;
