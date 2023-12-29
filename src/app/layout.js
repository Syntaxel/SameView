import { DM_Sans } from 'next/font/google'
import './globals.css'

const inter = DM_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Same View',
  description: 'A communication app which you can video chat, watch movies, listen to musics and etc. The best feature is that these things are happen together with your friend or family',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
