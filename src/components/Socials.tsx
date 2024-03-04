import React from 'react'
import { IoLogoLinkedin, IoLogoGithub, IoLogoReddit, IoLogoTwitter, IoLogoStackoverflow  } from "react-icons/io5";

export const Socials = () => {
  return (
    <div className="Socials md:flex flex-row">
        <ul className='socials-links'>
            <li className='social'>
                <a className='social-link' href={ process.env.GITHUB } target='_blank'>
                    <IoLogoGithub  />
                </a>
            </li>
            <li className='social'>
                <a className='social-link' href={ process.env.TWITTER } target='_blank'>
                    <IoLogoTwitter  />
                </a>
            </li>
            <li className='social'>
                <a className='social-link' href={ process.env.LINKEDIN } target='_blank'>
                    <IoLogoLinkedin />
                </a>
            </li>
            <li className='social'>
                <a className='social-link' href={ process.env.REDDIT } target='_blank'>
                    <IoLogoReddit  />
                </a>
            </li>
            <li className='social'>
                <a className='social-link' href={ process.env.STACKOVERFLOW } target='_blank'>
                    <IoLogoStackoverflow    />
                </a>
            </li>
        </ul>
    </div>
  )
}
