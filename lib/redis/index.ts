import { Redis } from "@upstash/redis";
 
/*
This tries to load UPSTASH_REDIS_REST_URL
and UPSTASH_REDIS_REST_TOKEN from environment
using process.env
*/
const redis = Redis.fromEnv();
 
export default redis;