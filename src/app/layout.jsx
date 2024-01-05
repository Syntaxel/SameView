'use client'
import './globals.css'
import { DM_Sans } from 'next/font/google'
import SessionProvider from './SessionProvider';

const font = DM_Sans({ subsets: ['latin'] })

const Layout = ({children}) => {
  return (
    <html lang="en">
      <body className={font.className}>
        <SessionProvider>
            {children}
        </SessionProvider>
      </body>
    </html>
  )
}

export default Layout;