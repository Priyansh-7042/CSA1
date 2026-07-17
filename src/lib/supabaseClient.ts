import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 
  import.meta.env?.VITE_SUPABASE_URL || 
  process.env.NEXT_PUBLIC_SUPABASE_URL || 
  '';

const supabaseAnonKey = 
  import.meta.env?.VITE_SUPABASE_ANON_KEY || 
  import.meta.env?.VITE_SUPABASE_PUBLISHABLE_KEY || 
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || 
  '';

const isValidCredentials = (url: string, key: string) => {
  if (!url || url.includes('YOUR_SUPABASE_URL')) return false;
  if (!key || key.includes('YOUR_SUPABASE_ANON_KEY') || key.trim() === '') return false;
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
};

export const supabase = isValidCredentials(supabaseUrl, supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : (new Proxy({}, {
      get() {
        const dummyFunc = () => {
          throw new Error('Supabase is not configured or configured with an invalid URL.');
        };
        return new Proxy(dummyFunc, {
          get() {
            return dummyFunc;
          }
        });
      }
    }) as unknown as ReturnType<typeof createClient>);
