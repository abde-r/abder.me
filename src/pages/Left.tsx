import React from 'react'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter, faReddit } from '@fortawesome/free-brands-svg-icons';


export default function Left() {
  return (
    <div className='Left'>
        <p className='text-pink-600'>Hi, I am</p>
            <h1 className='text-1xl sm:text-6xl font-bold text-[#ccd6f6]'>Abderrahman</h1>
            <h2 className='text-3xl sm:text-4xl font-bold text-[#8B92b0]'>I'm a Software</h2>
            <h2 className='text-3xl sm:text-4xl font-bold text-[#8B92b0]'>Engineering</h2>
            <h2 className='text-3xl sm:text-4xl font-bold text-[#8B92b0]'>Student</h2>
            {/* <div>
                <Link to={'about'}>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 hover:font-bold'>Take a Look
                        <span className='duration-300 group-hover:text-2xl'>
                            <FontAwesomeIcon icon={faPersonWalkingArrowRight} style={{ 'marginLeft': '10px' }} />
                        </span>
                    </button>
                </Link>
            </div> */}
        <div className="Navbar">
            <ul className='nav-content'>
                <li>
                    <Link href="/"> About </Link>
                </li>
                <li>
                    <Link href="/"> Blog </Link>
                </li>
                <li>
                    <Link href="/"> Work </Link>
                </li>
                <li>
                    <Link href="/"> Contact </Link>
                </li>
            </ul>
        </div>
        <div className="Socials md:flex flex-row">
            <ul className='socials-links'>
                <li className='social'>
                    <a className='link' href={ 'j' } target='_blank'>
                        Github <FontAwesomeIcon icon={faGithub} size='xl' />
                    </a>
                </li>
                <li className='socials-link'>
                    <a className='link' href={ '_twitter' } target='_blank'>
                        Twitter <FontAwesomeIcon icon={faTwitter} size='xl' />
                    </a>
                </li>
                <li className='socials-link'>
                    <a className='link' href={ 'j' } target='_blank'>
                        LinkedIn <FontAwesomeIcon icon={faLinkedin} size="xl" />
                    </a>
                </li>
                <li className='socials-link'>
                    <a className='link' href={ '_twitter' } target='_blank'>
                        Reddit <FontAwesomeIcon icon={faReddit} size='xl' />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}
