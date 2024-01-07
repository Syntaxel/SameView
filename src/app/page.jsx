'use client';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useState } from 'react';
import HomePage from './components/HomePage';

export default function Home() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/auth/login');
    },
  });
  return (
    <HomePage sessiondata={session}/>
  )
}

Home.requireAuth = true