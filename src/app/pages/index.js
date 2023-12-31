import { Fragment } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
 
export default function Home() {
  const { data: session } = useSession();
 
  return (
    <Fragment>
      <h1> Welcome to Next.js!</h1>
 
      {session ? (
        <Fragment>
          <span>Signed in as {session.user.email}</span>
          <button onClick={() => signOut()}>Sign out</button>
        </Fragment>
      ) : (
        <Fragment>
          <span>You are not signed in </span>
          <button onClick={() => signIn()}>Sign in</button>
        </Fragment>
      )}
    </Fragment>
  )
}