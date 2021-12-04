import Head from 'next/head';
import styles from '../styles/Home.module.css';

import { useEffect, useState } from 'react';

export default function Home({ session, supabase }) {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // checks if session is an object (some truthy information) and sets the value by evaluating that (!!)
    setLoggedIn(!!session);
  }, [session]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Supabase Chat App</title>
      </Head>

      <main className={styles.main}>
        {loggedIn ? <span>Logged In</span> : <span>Log in button here ⬇ </span>}
      </main>
    </div>
  );
}
