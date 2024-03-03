import React from 'react'
import { Socials } from '@/components/Socials';
import { Navbar } from '@/components/Navbar';

export default function Left() {
  return (
    <div className='Left'>
        <p className='text-pink-600'>Hi, I am</p>
        <h1 className='text-1xl sm:text-6xl font-bold text-[#ccd6f6]'>Abderrahman</h1>
        <h3 className='text-3xl sm:text-3xl font-bold text-[#8B92b0]'>Software Engineering Student 🧑‍💻</h3>
        <h5 className=' font-bold text-[#8B92b0]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.!</h5>
        <Navbar />
        <Socials />
    </div>
  )
}
