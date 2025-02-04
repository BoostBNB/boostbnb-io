import type { Session, SupabaseClient } from '@supabase/supabase-js';
export interface Data {
  supabase: SupabaseClient<any, 'public', any>;
  session: Session | null;
}
