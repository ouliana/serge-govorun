// src/Auth.tsx

import { useEffect, useState } from 'react';
import { remult } from 'remult';
import SignIn from './components/SignIn';
import { UserCredentials } from './types';
import IconButton from './components/Button';
import {
  PageAdmin,
  PageAdminHeader,
  PageAdminHeaderRightGroup,
} from './components/theme';
import { useNavigate } from 'react-router-dom';

export default function Auth() {
  const [signedIn, setSignedIn] = useState(false);
  const navigate = useNavigate();

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

  const returnToDashboard = () => navigate('/admin/dashboard');

  useEffect(() => {
    fetch('/api/currentUser').then(async r => {
      remult.user = await r.json();
      if (remult.user) setSignedIn(true);
    });
  }, []);
  useEffect(() => {
    if (signedIn) {
      navigate('/admin/dashboard');
    }
  }, [signedIn, navigate]);

  if (!signedIn)
    return (
      <PageAdmin>
        <SignIn handleSignIn={signIn} />
      </PageAdmin>
    );
  return (
    <>
      <PageAdminHeader>
        <IconButton
          icon='grid'
          onClick={returnToDashboard}
        />
        <PageAdminHeaderRightGroup>
          {remult.user!.name}{' '}
          <IconButton
            icon='logout'
            onClick={signOut}
          />
        </PageAdminHeaderRightGroup>
      </PageAdminHeader>
    </>
  );
}
