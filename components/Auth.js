import React from 'react';

const Auth = ({ supabase }) => {
  const signInWithGithub = () => {
    // let { user, error } = await supabase.auth.signIn({
    //   provider: 'github',
    // });
    // SIMPLIFIED version
    supabase.auth.signIn({
      provider: 'github',
    });
  };
  return (
    <div>
      <button onClick={signInWithGithub}>Login with Github</button>
    </div>
  );
};

export default Auth;
