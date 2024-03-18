import React from 'react'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className="Navbar">
        <ul className='nav-content'>
            <li>
                <Link className='link' href="#about">About</Link>
            </li>
            <li>
                <Link className='link' href="#work">Work</Link>
            </li>
            <li>
                <Link className='link' href="#blog">Blog</Link>
            </li>
        </ul>
    </div>
  )
}
