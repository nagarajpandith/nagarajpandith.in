import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { headers } from 'next/headers';
import redis from '@/lib/redis';

export async function POST(req: NextRequest, res: NextResponse) {
  const headersList = headers();
  const token = await getToken({ req });
  const referer = headersList.get('referer');
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  if (!referer) {
    return NextResponse.json(
      { error: 'Referer Header not set' },
      { status: 400 }
    );
  }
  try {
    const { comment } = await req.json();
    comment.user.email = token.email;
    const isAdmin = process.env.ADMIN_EMAIL === token.email;
    const isAuthor = token.sub === comment.user.sub;
    if (!isAdmin && !isAuthor) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    await redis.lrem(referer, 0, JSON.stringify(comment));
  } catch (error) {
    return NextResponse.json(
      { error: 'Unexpected error occurred.' },
      { status: 500 }
    );
  }
}
