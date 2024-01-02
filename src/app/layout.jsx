'use client'
import './globals.css'
import React from 'react';
import { DM_Sans } from 'next/font/google'

const font = DM_Sans({ subsets: ['latin'] })
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from 'react-query';
// export const metadata = {
//   title: 'Same View',
//   description: 'A communication app which you can video chat, watch movies, listen to musics and etc. The best feature is that these things are happen together with your friend or family',
// }
const queryClient = new QueryClient();

const Layout = ({children}) => {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body className={font.className}>{children}</body>
      </html>
      </QueryClientProvider>
    </SessionProvider>

  )
}

export default Layout;
