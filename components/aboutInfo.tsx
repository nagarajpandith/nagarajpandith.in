import Image from "next/image";

const AboutInfo = () => {
  return (
    <>
      <h1 className="lg:mt-5 mt-0 text-primary lg:text-5xl text-3xl font-bold">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row items-center gap-5">
        <Image
          src={'/static/png/about.jpeg'}
          width={300}
          height={300}
          alt="about image"
          className="rounded-xl mt-5"
          priority
        />
        <div>
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row items-center gap-0 md:gap-2">
              <a className="text-2xl text-secondary font-semibold">
                Nagaraj Pandith
              </a>
              <a className="font-thin text-gray-300">IPA /naːɡaraːdʒ paɳɖit̪/</a>
            </div>
            <a className="font-thin text-sm text-gray-300 text-center md:text-left">
              also known as{' '}
              <span className="underline underline-offset-2">hashclan</span> on
              the internet.
            </a>
          </div>

          <p className="text-gray-300 text-sm md:text-lg mt-3">
            Hi there! I&apos;m Nagaraj Pandith.{' '}
            {new Date().getFullYear() -
              2002 -
              (new Date().getMonth() < 11 ? 1 : 0)}{' '}
            year old self-driven Full Stack Web developer from Karnataka, India.
            I&apos;m proficient in building responsive and scalable web
            applications using modern tools and frameworks. I&apos;m pursuing
            Final year of B.E. in Computer Science & Engineering from{' '}
            <a
              className="underline underline-offset-2"
              href="https://nmamit.nitte.edu.in/"
            >
              N.M.A.M.I.T.
            </a>{' '}
            Ocassionally, I also write tech articles on{' '}
            <a
              className="underline underline-offset-2"
              href="https://medium.com/@nagarajpandith"
            >
              Medium
            </a>{' '}
            and sometimes create videos on my{' '}
            <a
              className="underline underline-offset-2"
              href="https://www.youtube.com/c/TheMaterrwelonn"
            >
              YouTube channel.
            </a>{' '}
            While not working on a project, you&apos;ll find me watching a Crime
            thriller or jamming to some EDM banger.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutInfo;
