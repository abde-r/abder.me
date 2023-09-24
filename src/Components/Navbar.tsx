import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const _linkedin: string = `https://www.linkedin.com/in/abderrahman-el-asri-087b90206/`
    const _github: string = `https://github.com/stronk-exe`
    const _twitter: string = `https://twitter.com/_stronkest`

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    
  return (
      <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50'>
        <div>
            <Link style={{'fontSize': '22px', 'fontWeight': '600', padding: '30px', color: '#a9a9a9'}} to="/">
                    { 'stronk.me' }
                </Link>
        </div>
        <ul className='hidden md:flex'>
            <li>
                <Link to="/"> Home </Link>
            </li>
            <li>
                <Link to="about"> About </Link>
            </li>
            <li>
                <Link to="blog"> Blog </Link>
            </li>
            <li>
                <Link to="work"> Work </Link>
            </li>
            <li>
                <Link to="contact"> Contact </Link>
            </li>
        </ul>
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faX} />}
        </div>
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-4 text-2xl'>
                <Link onClick={handleClick} to="/"> Home </Link>
            </li>
            <li className='py-4 text-2xl'>
                <Link onClick={handleClick} to="about"> About </Link>
            </li>
            <li className='py-4 text-2xl'>
                <Link onClick={handleClick} to="blog"> Blog </Link>
            </li>
            <li className='py-4 text-2xl'>
                <Link onClick={handleClick} to="work"> Work </Link>
            </li>
            <li className='py-4 text-2xl'>
                <Link onClick={handleClick} to="contact"> Contact </Link>
            </li>
        </ul>
        <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' href={ _linkedin } target='_blank'>
                        LinkedIn <FontAwesomeIcon icon={faLinkedin} size="xl" />
                    </a>
                </li>
                <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href={ _github } target='_blank'>
                        Github <FontAwesomeIcon icon={faGithub} size='xl' />
                    </a>
                </li>
                <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href={ _twitter } target='_blank'>
                        Twitter <FontAwesomeIcon icon={faTwitter} size='xl' />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}
