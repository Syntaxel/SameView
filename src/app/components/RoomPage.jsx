import React, { useEffect, useRef, useState } from 'react';
import Peer from 'simple-peer';
import { useRouter } from 'next/navigation';
import { onSnapshot, collection, doc, updateDoc,getDocs, deleteDoc, getDoc } from 'firebase/firestore';
import {db} from '../firebase';

const RoomPage = ({ roomId, userEmail }) => {
  const router = useRouter();
  const videoRef = useRef();
  const [peers, setPeers] = useState([]);
  const myPeer = useRef();
  const roomRef = doc(db, 'rooms', roomId);

  useEffect(() => {
    const initPeer = async () => {
      try {
        const roomSnapshot = await getDoc(roomRef);

        if (roomSnapshot.exists()) {
          const peer = new Peer({ initiator: true, trickle: false });

          myPeer.current = peer;
          setPeers((prevPeers) => [...prevPeers, myPeer.current]);

          const participantsCollection = collection(roomRef, 'participants');
          onSnapshot(participantsCollection, (snapshot) => {
            snapshot.docChanges().forEach(async (change) => {
              if (change.type === 'added' && change.doc.id !== userEmail) {
                await connectToNewUser(change.doc.id, peer);
              } else if (change.type === 'removed') {
                const peerToRemove = peers.find((p) => p.peerID === change.doc.id);
                peerToRemove && peerToRemove.destroy();
                setPeers((prevPeers) => prevPeers.filter((p) => p.peerID !== change.doc.id));
              }
            });
          });

          // Oda sahibi kontrolü
          const roomData = roomSnapshot.data();
          if (roomData.owner === userEmail) {
            // Kullanıcı odanın sahibi ise, katılımcılara sinyal gönderme
            onSnapshot(participantsCollection, (snapshot) => {
              snapshot.docs.forEach((doc) => {
                if (doc.id !== userEmail) {
                  const participantPeerID = doc.data().peerID;
                  if (participantPeerID) {
                    myPeer.current.signal(participantPeerID);
                  }
                }
              });
            });
          } else {
            // Kullanıcı odanın sahibi değilse, odaya katılmıştır ve sahibe sinyal göndermelidir
            myPeer.current.on('signal', (data) => {
              collection(participantsCollection, userEmail).update({ signalData: data });
            });
          }
        } else {
          console.error('Oda bulunamadı.');
          await router.push('/');
        }
      } catch (error) {
        console.error('Odaya katılırken bir hata oluştu:', error);
      }
    };

    initPeer();
  }, [roomId]);
  
  const connectToNewUser = (userId, peer) => {
    const newPeer = new Peer({ initiator: false, trickle: false });

    newPeer.on('signal', (data) => {
      collection(participantsCollection, userId).update({ signalData: data });
    });

    newPeer.on('stream', (stream) => {
      videoRef.current.srcObject = stream;
    });

    peer.signal(userId);

    setPeers((prevPeers) => [...prevPeers, { peerID: userId, peer: newPeer }]);
  };

  const leaveRoom = async () => {
    try {
      // Kullanıcı odayı terk ediyor
      const participantRef = doc(roomRef, 'participants', userEmail);
      await deleteDoc(participantRef);

      // Eğer kullanıcı odanın sahibiyse, odayı sil
      const roomSnapshot = await getDoc(roomRef);
      if (roomSnapshot.data().owner === userEmail) {
        await deleteDoc(roomRef);
      }

      // Diğer katılımcılara bildir
      peers.forEach((p) => p.destroy());
      setPeers([]);
      await router.push('/');
    } catch (error) {
      console.error('Odanın terk edilmesi sırasında bir hata oluştu:', error);
    }
  };

  return (
    <div>
      <h1>Oda Sayfası - {roomId}</h1>
      <video ref={videoRef} autoPlay />
      <button onClick={leaveRoom}>Odayı Terk Et</button>
    </div>
  );
};

export default RoomPage;
