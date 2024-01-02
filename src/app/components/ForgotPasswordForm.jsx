'use client'
import React from 'react';
import Image from 'next/image';
import Logo from '../assets/Logo.svg';
import Arrow from '../assets/arrow.svg';
import Link from 'next/link';


const ForgotPasswordForm = () => {
  return (
    <div className='design-bg bg-[#F1F1F4]'>
        <div className="h-screen flex relative">
            <div className="relative bg-white h-[570px] w-[470px] flex flex-col m-auto items-center rounded-3xl pt-[40px]">
                <Link href="login">
                <Image
                    src={Arrow}
                    width={20}
                    height={20}
                    alt="Back"
                    className='absolute top-8 left-8'
                />  
                </Link>
                <Image
                    src={Logo}
                    width={200}
                    height={200}
                    alt="SameView Logo"
                />
                <div className="w-[12rem] h-[0.1rem] bg-black"></div> 
                <h1 className="p-2 text-lg font-medium text-[#616161]">Reset Password</h1>
                <div className='flex flex-col gap-[10px] pt-[60px]'>    
                    <div name="secretkey">
                    <input placeholder="Enter your secret word" className='border-2 duration-[300ms] outline-none rounded-[15px] w-[340px] h-[45px] pl-[20px] pr-[20px]'/>
                    </div>
                    
                    <p className='w-[170px] pl-[10px] mt-[-8px] font-medium text-[#7E7D7D] text-[12px]'>The secret word is that you wrote when registered</p>
                </div>
                
                <Link href="#">
                    <div className="w-[180px] h-[35px] mt-[20px] custom-blue rounded-[10px] ease-out duration-[300ms] hover:bg-sky-300" name="login-btn">
                    <p className="pt-[3px] font-bold text-lg text-center justify-center cursor-pointer">Try</p>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  );
};

export default ForgotPasswordForm;
