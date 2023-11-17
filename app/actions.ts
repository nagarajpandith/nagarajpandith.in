'use server';

import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';

export async function createMessage(formData: FormData) {
  const user = await getServerSession(authOptions);

  if (!user?.user?.email) return;

  await prisma.guestBook
    .create({
      data: {
        message: formData.get('message') as string,
        user: {
          connect: {
            email: user?.user?.email,
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
