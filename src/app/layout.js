import { DM_Sans } from 'next/font/google'
import './globals.css'
import LoginPage from './(auth)/login/LoginPage'

const inter = DM_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Same View',
  description: 'A communication app which you can video chat, watch movies, listen to musics and etc. The best feature is that these things are happen together with your friend or family',
}

export default function Layout({ children }) {
  return (
    <>
       <LoginPage/>
      <main>{children}</main>
    </>
  )
}
