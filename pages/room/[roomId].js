// pages/room/[roomId].js
import RoomPage from '../../src/app/components/RoomPage';
import { getSession } from 'next-auth/react';
import { db } from '../../src/app/firebase';

const Room = ({ userEmail, roomId }) => {
  if (!userEmail || !roomId) {
    return null;
  }

  return <RoomPage roomId={roomId} userEmail={userEmail} />;
};

export default Room;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth/login', // Kullanıcı giriş yapmamışsa login sayfasına yönlendir
        permanent: false,
      },
    };
  }

  return {
    props: {
      userEmail: session?.user?.email,
      roomId: context.params.roomId,
    },
  };
}
