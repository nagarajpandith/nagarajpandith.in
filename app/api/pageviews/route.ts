import redis from '../../../lib/redis';

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest): Promise<NextResponse> {
  if (req.headers.get('Content-Type') !== 'application/json') {
    return new NextResponse('must be json', { status: 400 });
  }

  const body = await req.json();
  let slug: string | undefined = undefined;
  if ('slug' in body) {
    slug = body.slug;
  }
  if (!slug) {
    return new NextResponse('Slug not found', { status: 400 });
  }

  const ip = req.ip;
  if (ip) {
    // Hash the IP in order to not store it directly in db.
    const buf = await crypto.subtle.digest(
      'SHA-256',
      new TextEncoder().encode(ip)
    );
    const hash = Array.from(new Uint8Array(buf))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');

    // deduplicate the ip for each slug
    const isNew = await redis.set(['deduplicate', hash, slug].join(':'), true, {
      nx: true,
      ex: 24 * 60 * 60,
    });
    if (!isNew) {
      new NextResponse(null, { status: 202 });
    }
  }
  await redis.incr(['pageviews', 'blogs', slug].join(':'));
  return new NextResponse(null, { status: 202 });
}