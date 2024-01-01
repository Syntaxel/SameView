import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Header from '../components/Header';

const Home = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push('/app/pages/(auth)/login/LoginPage');
    }
  }, [session, router]);

  if (session) {
    return (
      <div>
        <Header />
        <h1>Dashboard</h1>
      </div>
    );
  }

  return <div>Loading...</div>;
};

export default Home;
