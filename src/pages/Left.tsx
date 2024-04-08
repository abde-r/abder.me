import React from 'react'
import { Socials } from '@/components/Socials';
import { Navbar } from '@/components/Navbar';

export default function Left() {
  return (
    <div className='flex mx-auto flex-col items-start justify-center'>
        <p className='text-sm font-fira font-normal text-[#EEEEEE]'>Hi, I am</p>
        <h1 className='text-5xl font-sans font-bold text-[#76ABAE] mb-2'>Abderrahman</h1>
        <h3 className='text-4xl font-IBM font-bold text-[#EEEEEE]'>Software Engineering Student 🧑‍💻</h3>
        <Navbar />
        <Socials />
    </div>
  )
}
