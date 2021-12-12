import Head from 'next/head';
import Auth from '../components/Auth';
import Chat from '../components/Chat';

import { useEffect, useState } from 'react';

export default function Home({ session, supabase }) {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // checks if session is an object (some truthy information) and sets the value by evaluating that (!!)
    setLoggedIn(!!session);
  }, [session]);

  return (
    <div className='container font-sans m-auto'>
      <Head>
        <title>Supabase Chat App</title>
      </Head>

      <main>
        {loggedIn ? <Chat supabase={supabase} /> : <Auth supabase={supabase} />}
      </main>
    </div>
  );
}
