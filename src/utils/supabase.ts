import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper to get current user
export async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

// Helper to get session
export async function getSession() {
  const { data: { session } } = await supabase.auth.getSession();
  return session;
}

// Database table schemas
export interface GuestbookEntry {
  id: string;
  user_id: string;
  message: string;
  is_approved: boolean;
  created_at: string;
}

export interface BlogComment {
  id: string;
  blog_slug: string;
  user_id: string;
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