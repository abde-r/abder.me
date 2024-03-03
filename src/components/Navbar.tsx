import React from 'react'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className="Navbar">
        <ul className='nav-content'>
            <li>
                <Link href="#about">About</Link>
            </li>
            {/* <li>
                <Link href="#blog">Blog</Link>
            </li> */}
            <li>
                <Link href="#work">Work</Link>
            </li>
            {/* <li>
                <Link href="#contact"> Contact </Link>
            </li> */}
        </ul>
    </div>
  )
}
