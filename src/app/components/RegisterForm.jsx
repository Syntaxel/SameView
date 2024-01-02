'use client'
import React from 'react';
import Image from 'next/image';
import Logo from '../assets/Logo.svg';
import Link from 'next/link';
import { signUp } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { registerUser } from '../utils/auth';
import { useSession } from 'next-auth/react';
// import useSWR from 'swr';
import { useMutation } from 'react-query';

const RegisterForm = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
//   const { mutate } = useSWR('register', registerUser);
  const mutation = useMutation((data) => registerUser(data.email, data.password));
  const { data: session } = useSession();
  
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      if (password !== passwordRepeat) {
        throw new Error('Passwords do not match');
      }
      console.log(password)

      const result = mutation.mutate({email,password});

        
    } catch (error) {
      console.error(error);
    }
  };

  if (session) {
    router.push('/login');
    return null;
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
                <form onSubmit={handleRegister}>   
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
                  <button type='submit' className="flex pt-[3px] w-[180px] h-[35px] rounded-[10px] font-bold text-lg text-center justify-center cursor-pointer">Next</button>
                </div>
                
                </div>
                </form>
                <div className="absolute flex flex-row font-medium bottom-3 right-6 "><p>Have an account? <Link href="login" className="text-[#006ACB]">Login</Link></p>  </div>
            </div>
        </div>
    </div>
  );
};

export default RegisterForm;
