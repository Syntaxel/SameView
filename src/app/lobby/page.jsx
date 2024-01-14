'use client'
import React from 'react'
import LobbyPage from '../components/LobbyPage';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

function Lobby() {
    useSession({
        required: true,
        onUnauthenticated() {
          redirect('/auth/login');
        },
      });
  return (
    <div>
        <LobbyPage/>
    </div>
  )
}

Lobby.requireAuth = true;
export default Lobby;