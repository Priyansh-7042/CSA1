import { createClient } from '@supabase/supabase-js';

const getEnvVar = (viteKey: string, nextKey: string): string => {
  if (typeof process !== 'undefined' && process.env && process.env[nextKey]) {
    return process.env[nextKey] || '';
  }
  try {
    // @ts-ignore
    if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env[viteKey]) {
      // @ts-ignore
      return import.meta.env[viteKey] || '';
    }
  } catch {
    // ignore
  }
  return '';
};

const supabaseUrl = getEnvVar('VITE_SUPABASE_URL', 'NEXT_PUBLIC_SUPABASE_URL');
const supabaseAnonKey = 
  getEnvVar('VITE_SUPABASE_ANON_KEY', 'NEXT_PUBLIC_SUPABASE_ANON_KEY') ||
  getEnvVar('VITE_SUPABASE_PUBLISHABLE_KEY', 'NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY');

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
          console.warn('Supabase credentials missing or invalid.');
          return Promise.resolve({ data: null, error: null });
        };
        return new Proxy(dummyFunc, {
          get() {
            return dummyFunc;
          }
        });
      }
    }) as unknown as ReturnType<typeof createClient>);

