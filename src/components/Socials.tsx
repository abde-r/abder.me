import React from 'react'
import { IoLogoLinkedin, IoLogoGithub, IoLogoReddit, IoLogoTwitter, IoLogoStackoverflow  } from "react-icons/io5";

export const Socials = () => {
  return (
    <div className="flex flex-row mt-20">
        <ul className='flex flex-row'>
            <li className='mx-2'>
                <a className='hover:text-[#c2c2c2] ease-in duration-200' href={ process.env.GITHUB } target='_blank'>
                    <IoLogoGithub  />
                </a>
            </li>
            <li className='mx-2'>
                <a className='hover:text-[#c2c2c2] ease-in duration-200' href={ process.env.TWITTER } target='_blank'>
                    <IoLogoTwitter  />
                </a>
            </li>
            <li className='mx-2'>
                <a className='hover:text-[#c2c2c2] ease-in duration-200' href={ process.env.LINKEDIN } target='_blank'>
                    <IoLogoLinkedin />
                </a>
            </li>
            <li className='mx-2'>
                <a className='hover:text-[#c2c2c2] ease-in duration-200' href={ process.env.REDDIT } target='_blank'>
                    <IoLogoReddit  />
                </a>
            </li>
            <li className='mx-2'>
                <a className='hover:text-[#c2c2c2] ease-in duration-200' href={ process.env.STACKOVERFLOW } target='_blank'>
                    <IoLogoStackoverflow    />
                </a>
            </li>
        </ul>
    </div>
  )
}
