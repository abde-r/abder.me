import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonWalkingArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div id='home' className='w-full h-screen'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, I am</p>
            <h1 className='text-1xl sm:text-7xl font-bold text-[#ccd6f6]'>Abderrahman</h1>
            <h2 className='text-3xl sm:text-6xl font-bold text-[#8B92b0]'>I'm a Software</h2>
            <h2 className='text-3xl sm:text-6xl font-bold text-[#8B92b0]'>Engineering</h2>
            <h2 className='text-3xl sm:text-6xl font-bold text-[#8B92b0]'>Student</h2>
            <div>
                <Link to={'about'}>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 hover:font-bold'>Take a Look
                        <span className='duration-300 group-hover:text-2xl'>
                            <FontAwesomeIcon icon={faPersonWalkingArrowRight} style={{ 'marginLeft': '10px' }} />
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}
