import './globals.css'

export const metadata = {
  title: 'Same View',
  description: 'A communication app which you can video chat, watch movies, listen to musics and etc. The best feature is that these things are happen together with your friend or family',
}

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  )
}
