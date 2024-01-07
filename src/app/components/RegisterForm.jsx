'use client'
import React from 'react';
import Image from 'next/image';
import Logo from '../assets/Logo.svg';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const RegisterForm = () => {
  const router = useRouter(); 
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  async function addDataToFirestore(username, email, password ) {
    console.log("Starting adding user to DB")
    try {
      console.log("Starting trying add user to DB")
      const docRef = await addDoc(collection(db, "users"), {
        username: username,
        email: email,
        password: password,
      });
      console.log("User added to DB succesfully")
      console.log("User doc id:", docRef.id)
      return true;
    } catch (err) {
      console.log("Error adding user to data:", err);
      return false;
    }
  }

  const registerUserOnFirebase = () => {
    createUserWithEmailAndPassword(auth, email, password)
  }

  const register = async(e) => {
    e.preventDefault()
    if (username || email || password || passwordRepeat) {
        console.log("Starting adding user");
        const added = await addDataToFirestore(username, email, password);
        if (added){
          setUsername("");
          setEmail("");
          setPassword("");
          setPasswordRepeat("");
          alert('Data added olduda qaqas')
        }
        registerUserOnFirebase();


    }
    else {
      alert("Please fill all the fields");
    }
  }

  return (
    <div className='design-bg bg-[#F1F1F4]'>
        <div className="h-screen flex relative">
            <div className="relative bg-white h-[570px] w-[470px] flex flex-col m-auto items-center rounded-3xl pt-[40px]">
                <Image
                    src={Logo}
                    width={200}
                    height={200}
                    alt="SameView Logo"
                />
                <div className="w-[12rem] h-[0.1rem] bg-black"></div> 
                <h1 className="p-2 pr-5 text-lg font-medium text-[#616161]">Registration</h1> 
                <div className='flex flex-col gap-[10px] pt-[40px]'> 
              
                    <div name="username">
                    <input placeholder="Enter username" onChange={(e) => {setUsername(e.target.value)}} className='border-2 duration-[300ms] outline-none rounded-[15px] w-[340px] h-[45px] pl-[20px] pr-[20px]'/>
                    </div>
                    <div name="email">
                    <input type='email' placeholder="Enter email" value={email} onChange={(e) => {setEmail(e.target.value)}} className='border-2 duration-[300ms] outline-none rounded-[15px] w-[340px] h-[45px] pl-[20px] pr-[20px]'/>
                    </div>
                    <div name="password">
                    <input type='password' placeholder="Enter password" value={password} onChange={(e) => {setPassword(e.target.value)}} className='border-2 duration-[300ms] outline-none rounded-[15px] w-[340px] h-[45px] pl-[20px] pr-[20px]' />
                    </div>
                    <div name="password-repeat">
                    <input type='password' placeholder="Enter password again" onChange={(e) => {setPasswordRepeat(e.target.value)}} className='border-2 duration-[300ms] outline-none rounded-[15px] w-[340px] h-[45px] pl-[20px] pr-[20px]' />
                    </div>
                
                
                
                <div className="flex m-auto justify-center w-[180px] h-[35px] mt-[20px] custom-blue rounded-[10px] ease-out duration-[300ms] hover:bg-sky-300 cursor-pointer" name="login-btn">
                  <button onClick={(e) => register(e)}  disabled={(!email || !password)} className="flex pt-[3px] w-[180px] h-[35px] rounded-[10px] font-bold text-lg text-center justify-center cursor-pointer">Register</button>
                </div>
                </div>
                <div className="absolute flex flex-row font-medium bottom-3 right-6 "><p>Have an account? <Link href="login" className="text-[#006ACB]">Login</Link></p>  </div>
            </div>
        </div>
    </div>
  );
};

export default RegisterForm;
