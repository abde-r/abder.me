import React from 'react'
import { IoLogoLinkedin, IoLogoGithub, IoLogoReddit, IoLogoTwitter, IoLogoStackoverflow  } from "react-icons/io5";

export const Socials = () => {
  return (
    <div className="flex flex-col items-center justify-center max-md:pb-10">
        <p className='my-2 font-fira text-gray-300 text-sm max-sm:text-xs'>catch me on:</p>
        <ul className='flex flex-row'>
            <li className='mx-2 max-sm:text-xs max-sm:mx-0'>
                <a className='hover:text-[#c2c2c2] ease-in duration-200' href={ process.env.GITHUB } target='_blank'>
                    <IoLogoGithub  />
                </a>
            </li>
            <li className='mx-2 max-sm:text-xs max-sm:mx-0'>
                <a className='hover:text-[#c2c2c2] ease-in duration-200' href={ process.env.TWITTER } target='_blank'>
                    <IoLogoTwitter  />
                </a>
            </li>
            <li className='mx-2 max-sm:text-xs max-sm:mx-0'>
                <a className='hover:text-[#c2c2c2] ease-in duration-200' href={ process.env.LINKEDIN } target='_blank'>
                    <IoLogoLinkedin />
                </a>
            </li>
            <li className='mx-2 max-sm:text-xs max-sm:mx-0'>
                <a className='hover:text-[#c2c2c2] ease-in duration-200' href={ process.env.REDDIT } target='_blank'>
                    <IoLogoReddit  />
                </a>
            </li>
            <li className='mx-2 max-sm:text-xs max-sm:mx-0'>
                <a className='hover:text-[#c2c2c2] ease-in duration-200' href={ process.env.STACKOVERFLOW } target='_blank'>
                    <IoLogoStackoverflow    />
                </a>
            </li>
        </ul>
    </div>
  )
}
