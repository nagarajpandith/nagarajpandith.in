import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';

export default async function CreateMessage() {
  async function create(formData: FormData) {
    'use server';
    const user = await getServerSession(authOptions);
    await prisma.guestBook
      .create({
        data: {
          message: formData.get('message') as string,
          user: {
            connect: {
              email: user?.user?.email!,
            },
          },
        },
      })
      .then(() => {
        revalidatePath('/guestbook');
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div>
      CreateMessage
      <form action={create}>
        <input type="text" name="message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
