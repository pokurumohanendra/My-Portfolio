// Kept separate from the client so checking "is it configured?" does not pull
// the (large) Supabase library into the main bundle.
export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

/** Loads the Supabase client on demand (null when not configured). */
export const loadSupabase = () =>
  isSupabaseConfigured ? import("./supabaseClient").then((m) => m.supabase) : Promise.resolve(null);
