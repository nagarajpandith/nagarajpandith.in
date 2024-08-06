import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import redis from '@/lib/redis';

export async function GET(_req: NextRequest, _res: NextResponse) {
  if (!redis) {
    return NextResponse.json(
      { error: 'Redis connection failed' },
      { status: 500 }
    );
  }
  const headersList = headers();
  const referer = headersList.get('referer');
  if (!referer) {
    return NextResponse.json(
      { error: 'Referer Header not set' },
      { status: 400 }
    );
  }
  try {
    const rawComments = await redis.lrange(referer, 0, -1);
    const comments = rawComments.map((c) => {
      const comment = JSON.parse(JSON.stringify(c));
      delete comment.user.email;
      return comment;
    });
    return NextResponse.json(comments, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
