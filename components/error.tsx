import Link from 'next/link';

const Error = () => {
  return (
    <section className="py-10 md:py-32 w-full flex justify-center flex-col">
      <div className="grid px-4 place-content-center">
        <div className="text-center">
          <h1 className="font-black text-gray-500 text-9xl">404</h1>

          <p className="text-2xl font-bold tracking-tight text-gray-300 sm:text-4xl">
            Uh-oh!
          </p>

          <p className="mt-4 text-gray-500">We can&apos;t find that page.</p>

          <Link
            href="/"
            className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-primary rounded-xl hover:bg-primary/80 focus:outline-none focus:ring"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
