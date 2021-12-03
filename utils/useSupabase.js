import { createClient } from '@supabase/supabase-js';
import { useState } from 'react';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_API_KEY
);

const useSupabase = () => {
  const [session, setSession] = useState(supabase.auth.session());

  //   anytime a change in login happens, we update the session state and we return it along with the supabase client
  //   argument used with '-' is not used
  supabase.auth.onAuthStateChange(async (_event, session) => {
    setSession(session);
  });
  return { session, supabase };
};

export default useSupabase;
