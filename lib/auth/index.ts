import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { UpstashRedisAdapter } from '@auth/upstash-redis-adapter';
import redis from '../redis';
import type { Adapter } from 'next-auth/adapters';

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: 'jwt',
  },

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_APP_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_APP_CLIENT_SECRET as string,
    }),
  ],

  adapter: UpstashRedisAdapter(redis) as Adapter,

  callbacks: {
    async session({ session, token }) {
      if (session && session.user && token.sub) {
        session.user.sub = token.sub;
      }
      return session;
    },
  },
};
