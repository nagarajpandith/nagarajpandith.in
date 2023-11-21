import prisma from '@/lib/prisma';
import Image from 'next/image';

export default async function Messages() {
  const posts = await prisma.guestBook.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });

  return (
    <div className="h-screen overflow-scroll flex gap-5 flex-col">
      {posts.map((post, i) => (
        <div key={i} className="animate-fade-up p-3 md:p-5 bg-gray-800 rounded-xl">
          <div className="md:flex md:flex-row items-center gap-2 text-gray-300">
            {post.user.image && (
              <Image
                src={post.user.image}
                alt="Profile image"
                width={40}
                height={40}
                className="rounded-full"
              />
            )}
            <p className="text-sm md:text-md">{post.user.name}</p>
            <p className="hidden md:block">•</p>
            <div className="font-thin text-gray-300 text-sm md:text-md">
              {new Date(post.createdAt).toLocaleString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
              })}
            </div>
          </div>
          <p className="mt-5">{post.message}</p>
        </div>
      ))}
    </div>
  );
}
