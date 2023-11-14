import BlogCard from '@/components/blogCard';
import { blogList } from '@/components/constants/data';

const Blog = () => {
  return (
    <div className="my-10 flex gap-5 flex-col">
      <h1 className="text-primary lg:text-5xl text-3xl font-bold">
        Blog
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
    </div>
  );
};

export default Blog;
