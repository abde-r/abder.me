import React from 'react'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className="mx-5 font-sans">
        <ul className='flex flex-col mt-3'>
            <li className='mt-1'>
                <Link className='text-xs font-bold uppercase text-[#76ABAE] hover:text-[#c2c2c2] hover:ease-in duration-200' href="#about">About</Link>
            </li>
            <li className='mt-1'>
                <Link className='text-xs font-bold uppercase text-[#76ABAE] hover:text-[#c2c2c2] hover:ease-in duration-200' href="#work">Work</Link>
            </li>
            <li className='mt-1'>
                <Link className='text-xs font-bold uppercase text-[#76ABAE] hover:text-[#c2c2c2] hover:ease-in duration-200' href="#blog">Writings</Link>
            </li>
        </ul>
    </div>
  )
}
