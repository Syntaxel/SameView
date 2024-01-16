"use client";
import Image from "next/image";
import Edit from "../assets/edit.svg";
import { useRouter } from 'next/navigation';
import { useState, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { collection, getDocs,addDoc, query, where } from "firebase/firestore";
import { db } from "../firebase";
import Room from './RoomPage';

const HomePage = ({ sessiondata }) => {
  const [roomId, setRoomId] = useState('');
  const [inRoom, setInRoom] = useState(false);
  const [data, setData] = useState(null);
  const router = useRouter();
  const userEmail = `${sessiondata?.data?.user?.email}`;
  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "users"), where("email", "==", userEmail));
      const querySnapshot = await getDocs(q);

      const userData = [];
      querySnapshot.forEach((doc) => {
        userData.push({ id: doc.id, ...doc.data() });
      });

      setData(userData);
    };
    fetchData();
  }, [userEmail]);

  const createRoom = async () => {
    const colRef = collection(db, 'rooms');
    try {
      const roomRef = await addDoc(colRef, {
        created_at: new Date(),
        owner: userEmail,
      });

      const roomId = roomRef.id;
      router.push(`/room/${roomId}`);
    } catch (error) {
      console.error('Oda oluşturulurken bir hata oluştu:', error);
    }
  };
  
    if (inRoom === true) {
      router.push(`/room/${roomId}`)
    };


  return (
    <div className="bg-[#F1F1F4]">
      <div className="h-screen flex flex-col md:flex:row">
        <h1 className="md:absolute md:pl-[42px] pl-3 pt-[20px] text-[34px] font-semibold">
          Home
        </h1>
        <div className="flex flex-col mt-3 md:flex-row w-[98%] m-auto md:w-[900px] h-[550px] bg-white rounded-3xl md:m-auto items-center justify-evenly">
          {/* Left Part */}
          <div className="flex w-[95%] md:flex-col mt-[4%] md:mt-0 md:justify-center md:items-center md:w-[350px] h-[450px] bg-[#D9D9D957] md:mr-4 rounded-2xl md:rounded-2xl rounded-b-none items-center justify-center md:mb-0">
            <div className="flex flex-col items-center md:items-center">
              <div className="w-[100px] md:w-[120px] h-[100px] md:h-[120px] bg-[#93939357] rounded-full relative">
                <button className="absolute w-[33px] h-[33px] bottom-1 right-1 rounded-full bg-[#13294929]">
                  <Image
                    className="ml-1"
                    src={Edit}
                    width={26}
                    height={26}
                    alt="edit"
                  />
                </button>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-[18px] md:text-[20px] font-medium">
                  Welcome,
                </p>
                <p className="text-[20px] md:text-[24px] font-bold mt-[-10px] md:mt-0 ">
                  {data && data.map((user) => <p>{user.username}!</p>)}
                </p>
              </div>
            </div>
            <div className="flex flex-col ml-4 md:ml-0 md:items-center md:mt-2">
              <button className="bg-blue-200 rounded-2xl w-[160px] md:w-[190px] h-[50px] text-[18px] md:text-[20px] items-center justify-center font-semibold">
                Edit username
              </button>
              <button
                onClick={() => {
                  signOut();
                }}
                className="mt-[10px] text-[18px] md:text-[20px] bg-red-400 rounded-xl w-full md:w-[110px] h-[40px] items-center justify-center font-semibold"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Right Part */}
          <div className="flex flex-col w-[95%] md:w-[450px] h-[450px] mb-4 md:mb-0 bg-[#D9D9D957] rounded-2xl md:rounded-2xl rounded-t-none  items-center justify-center">
            <div className="mt-[-50px] md:mt-0">
              <p className="w-[240px] text-[22px] md:text-[26px] m-auto mt-[-20px] font-semibold text-left md:text-center">
                Join or Create a lobby
              </p>
              <input
                placeholder="Enter lobby code"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
                className="border-[2px] text-[18px] md:text-[22px] font-medium mt-[20px] bg-[#f3f3f3] border-[#757575] duration-[300ms] outline-none rounded-[18px] w-[300px] md:w-full h-[50px] pl-[20px] pr-[20px]"
              />
              <div className="flex items-center justify-center mt-3 md:mt-[30px] gap-[5px]">
                <button className="bg-blue-200 rounded-2xl w-[90px] md:w-[190px] h-[50px] text-[20px] md:text-[22px] items-center justify-center font-semibold" onClick={() => setInRoom(true)}>
                  Join
                </button>
                <button className="bg-blue-200 rounded-2xl w-[90px] md:w-[190px] h-[50px] text-[20px] md:text-[22px] items-center justify-center font-semibold" onClick={createRoom}>
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
