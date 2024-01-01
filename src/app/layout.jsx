'use client'
import './globals.css'
import React from 'react';
import { SessionProvider } from 'next-auth/react';

// export const metadata = {
//   title: 'Same View',
//   description: 'A communication app which you can video chat, watch movies, listen to musics and etc. The best feature is that these things are happen together with your friend or family',
// }

const Layout = ({children}) => {
  return (
    <SessionProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </SessionProvider>
  )
}

export default Layout;
