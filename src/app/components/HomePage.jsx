'use client'
import Image from 'next/image';
import Edit from '../assets/edit.svg';
import { useState, useEffect } from 'react';
import { signOut, useSession } from 'next-auth/react';
import {collection, getDocs, query, where} from "firebase/firestore"
import { db } from '../firebase';
const HomePage = ({sessiondata}) => {
    const [lobbyCode, setLobbyCode] = useState('');
    const [data, setData] = useState(null);
    const userEmail = `${sessiondata?.data?.user?.email}`
    useEffect(() => {
      const fetchData = async () => {
        const q = query(collection(db, 'users'), where('email', '==', userEmail));
        const querySnapshot = await getDocs(q);
  
        const userData = [];
        querySnapshot.forEach((doc) => {
          userData.push({ id: doc.id, ...doc.data() });
        });
  
        setData(userData);
        
      };
      fetchData();
    }, [userEmail]);

  return (
       <div className='bg-[#F1F1F4]'>
        <div className="h-screen flex">
          <h1 className='absolute pl-[42px] pt-[20px] text-[34px] font-medium'>Home</h1>
          <div className="flex w-[900px] h-[550px] bg-white rounded-3xl m-auto items-center justify-evenly">
            {/* Left Part */}
            <div className="flex flex-col w-[350px] h-[450px] bg-[#D9D9D957] rounded-2xl items-center justify-center">
              <div className="flex w-[120px] h-[120px] bg-[#93939357] rounded-full relative">
                <button className='absolute w-[33px] h-[33px] bottom-1 right-1 rounded-full bg-[#13294929]'>
                  <Image
                    className='ml-1'
                    src={Edit}
                    width={26}
                    height={26}
                    alt="edit"
                />
                </button>
              </div>
              <p className='text-[20px] font-medium'>Welcome,</p>
              <p className='text-[24px] font-bold'>
              {data && data.map((user) => (
                <p>{user.username}!</p>
                ))}
              </p>
              <button className='mt-[20px] bg-blue-200 rounded-2xl w-[190px] h-[50px] text-[20px] items-center justify-center font-semibold'>
                Edit username
              </button>
              <button onClick={() => {signOut()}} className='mt-[10px] bg-red-400 rounded-xl w-[110px] h-[40px] text-[20px] items-center justify-center font-semibold'>
                Logout
              </button>
            </div>

            {/* Right Part */}
            <div className="flex flex-col w-[450px] h-[450px] bg-[#D9D9D957] rounded-2xl items-center justify-center">
              <p className='w-[220px] text-[26px] mt-[-20px] font-semibold text-center'>Join or Create a lobby</p>
              <input placeholder="Enter lobby code" onChange={(e) => {setLobbyCode(e.target.value)}} className='border-[2px] text-[22px] font-medium mt-[20px] bg-[#f3f3f3] border-[#757575] duration-[300ms] outline-none rounded-[18px] w-[350px] h-[50px] pl-[20px] pr-[20px]'/>
              <div className='flex items-center justify-center mt-[30px] gap-[5px]'>
              <button  className='bg-blue-200 rounded-2xl w-[190px] h-[50px] text-[22px] items-center justify-center font-semibold'>
                Join
              </button>
              <button className='bg-blue-200 rounded-2xl w-[190px] h-[50px] text-[22px] items-center justify-center font-semibold'>
                Create
              </button>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default HomePage;
