"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { IoClose, IoReorderThreeSharp  } from "react-icons/io5";

export const Navbar = () => {
    const [nav, setNav] = useState<boolean>(false);
    
    return (
        <div className="mx-5 font-sans">
            {/* <div className='hidden max-md:flex max-md:fixed max-md:top-4 max-md:right-4'>
            <span className='text-2xl' onClick={() => setNav(!nav)}>{ !nav ? <IoReorderThreeSharp /> : <IoClose/> }</span>
            </div> */}
            {/* <nav className={ nav ? ('flex') : ('hidden md:flex')}> */}
            <ul className="flex flex-col max-md:hidden">
                {/* <ul className='max-md:flex max-md:bg-[#203547] max-md:h-[100vh] items-center justify-center max-md:fixed md:relative max-md:flex-col md:flex-row w-full shadow md:shadow-none max-md:text-center top-12 left-0 md:top-0'> */}
                    <li className='mt-1'>
                        <Link className='text-xs font-bold uppercase text-secondary hover:text-[#c2c2c2] hover:ease-in duration-200' onClick={() => setNav(!nav)} href="#about">About</Link>
                    </li>
                    {/* <li className='mt-1'>
                        <Link className='text-xs font-bold uppercase text-secondary hover:text-[#c2c2c2] hover:ease-in duration-200' href="#work">Work</Link>
                    </li> */}
                    <li className='mt-1'>
                        <Link className='text-xs font-bold uppercase text-secondary hover:text-[#c2c2c2] hover:ease-in duration-200' onClick={() => setNav(!nav)} href="#blog">Writings</Link>
                    </li>
                </ul>
            {/* </nav> */}
        </div>
    )
}
