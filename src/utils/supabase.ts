import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  is_approved: boolean;
  created_at: string;
}

export interface BlogComment {
  id: string;
  blog_slug: string;
  name: string;
  comment: string;
  is_approved: boolean;
  created_at: string;
}

export interface SiteVisitor {
  id: string;
  page: string;
  timestamp: string;
  user_agent?: string;
}
