import React from 'react'
import { Socials } from '@/components/Socials';
import { Navbar } from '@/components/Navbar';

export default function Left() {
  return (
    <div className='Left'>
        <p>Hi, I am</p>
        <h1>Abderrahman</h1>
        <h3>Software Engineering Student 🧑‍💻</h3>
        {/* <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit.!</h5> */}
        <Navbar />
        <Socials />
    </div>
  )
}
