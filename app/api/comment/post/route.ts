import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { headers } from 'next/headers';
import { randomUUID } from 'crypto';
import redis from '@/lib/redis';

export async function POST(req: NextRequest, res: NextResponse) {
  const token = await getToken({ req });
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
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
    const { name, picture, sub, email } = token;
    const user = { name, picture, sub, email };
    const { text } = await req.json();
    const comment = {
      id: randomUUID(),
      created_at: Date.now(),
      referer,
      text,
      user,
    };
    await redis.lpush(referer, JSON.stringify(comment));
    return NextResponse.json(comment, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Unexpected Error' }, { status: 500 });
  }
}
