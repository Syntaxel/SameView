'use client'
import React from 'react';
import Image from 'next/image';
import Logo from '../assets/Logo.svg';
import Link from 'next/link';


const RegisterForm = () => {
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
                    <input placeholder="Enter username" className='border-2 duration-[300ms] outline-none rounded-[15px] w-[340px] h-[45px] pl-[20px] pr-[20px]'/>
                    </div>
                    <div name="email">
                    <input placeholder="Enter email" className='border-2 duration-[300ms] outline-none rounded-[15px] w-[340px] h-[45px] pl-[20px] pr-[20px]'/>
                    </div>
                    <div name="password">
                    <input placeholder="Enter password" className='border-2 duration-[300ms] outline-none rounded-[15px] w-[340px] h-[45px] pl-[20px] pr-[20px]' />
                    </div>
                    <div name="password-repeat">
                    <input placeholder="Enter password again" className='border-2 duration-[300ms] outline-none rounded-[15px] w-[340px] h-[45px] pl-[20px] pr-[20px]' />
                    </div>
                </div>
                
                <div className="w-[180px] h-[35px] mt-[20px] custom-blue rounded-[10px] ease-out duration-[300ms] hover:bg-sky-300" name="login-btn">
                  <p className="pt-[3px] font-bold text-lg text-center justify-center cursor-pointer">Next</p>
                </div>
                <div className="absolute flex flex-row font-medium bottom-3 right-6 "><p>Have an account? <Link href="login" className="text-[#006ACB]">Login</Link></p>  </div>
            </div>
        </div>
    </div>
  );
};

export default RegisterForm;
