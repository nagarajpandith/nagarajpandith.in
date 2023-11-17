import prisma from '@/lib/prisma';
import Image from 'next/image';

export default async function Messages() {
  const posts = await prisma.guestBook.findMany({
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
    <div>
      {posts.map((post, i) => (
        <div key={i}>
          {post.createdAt.toLocaleDateString()}
          {post.message}
          <br />
          {post.user.image && (
            <Image
              src={post.user.image}
              alt="Profile image"
              width={40}
              height={40}
              className="rounded-full"
            />
          )}
          {post.user.name}
        </div>
      ))}
    </div>
  );
}
