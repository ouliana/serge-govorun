// src/Auth.tsx

import { useEffect, useState } from 'react';
import { remult } from 'remult';
import SignIn from './components/SignIn';
import { UserCredentials } from './types';
import Dashboard from './components/Dashboard';
import IconButton from './components/Button';

export default function Auth() {
  const [signedIn, setSignedIn] = useState(false);

  const signIn = async (values: UserCredentials) => {
    const result = await fetch('/api/signIn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: values.username }),
    });
    if (result.ok) {
      remult.user = await result.json();
      setSignedIn(true);
    } else {
      alert(await result.json());
    }
  };

  const signOut = async () => {
    await fetch('/api/signOut', {
      method: 'POST',
    });
    remult.user = undefined;
    setSignedIn(false);
  };
  useEffect(() => {
    fetch('/api/currentUser').then(async r => {
      remult.user = await r.json();
      if (remult.user) setSignedIn(true);
    });
  }, []);

  if (!signedIn) return <SignIn handleSignIn={signIn} />;
  return (
    <>
      <header>
        {remult.user!.name}{' '}
        <IconButton
          icon='logout'
          onClick={signOut}
        />
      </header>
      <Dashboard />
    </>
  );
}
