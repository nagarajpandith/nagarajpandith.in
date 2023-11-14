import Link from 'next/link';
import BlogCard from './BlogCard';
import { blogList } from './constants/data';
import { HiChevronDoubleRight } from 'react-icons/hi';

const Blogs = () => {
  return (
    <div className="my-20 bg-gray-800 rounded-xl p-5 flex gap-5 flex-col">
      <h1 className="text-white text-xl md:text-2xl font-bold text-center">
        Things I&apos;ve written
      </h1>
      {blogList.map((blog, i) => (
        <BlogCard
          key={i}
          title={blog.title}
          desc={blog.description}
          date={blog.date}
          image={blog.img}
        />
      ))}
      <div className="flex items-center justify-center">
        <Link
          href="/work"
          className="bg-primary w-fit text-sm text-white px-5 py-2 rounded-full mt-5 hover:opacity-80 transition duration-300 ease-in-out group"
        >
          Checkout more blogs
          <HiChevronDoubleRight className="inline transform translate-x-0 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
