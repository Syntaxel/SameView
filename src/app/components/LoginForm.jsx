import React from 'react';
import { signIn } from 'next-auth/react';

const LoginForm = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={() => signIn('google')}>Sign in with Google</button>
    </div>
  );
};

export default LoginForm;
