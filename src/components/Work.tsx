import React from 'react'
import { IoOpenOutline } from "react-icons/io5";

const projects: any = [
  {
    title: "Transcendence",
      date: 'dec 2024',
      description: "FullStack web app with online multiplayer game and real-time chat app",
      tags: ['Typescript', 'React', 'NextJs', 'Prisma', 'webSockets', 'Docker-Compose',],
  },
  {
    title: "httperv",
    date: 'dec 2024',
    description: "Re-writing an http server in C++.",
    tags: ['C++', 'sockets', 'non-Blocking',],
  },
  {
    title: "stl-Containers",
    date: 'dec 2024',
    description: "Re-implementation of STL Containers in C++ 98.",
    tags: ['C++', 'Data Structure', 'non-Algorithms',],
  },
]

export const Work = () => {
  return (
    <div id='work' className="w-[80%] mx-auto flex flex-col items-center justify-center h-[100vh] font-IBM">
      {
        projects.map((project: any, index: number) => (
          <div key={index} className="flex my-5 p-2 w-[100%]">
            <div className="w-[15%] my-5 uppercase text-[#c6dee0] font-semibold text-xs">
              <h3>{ project.date }</h3>
            </div>
            <div className="w-[85%]">
              <div className="flex items-center">
                <h1 className='text-xl font-semibold'>{ project.title }</h1>
                <a className='ml-1' href={`${process.env.GITHUB}/${project.title}`} target='_blank'><IoOpenOutline /></a>
              </div>
              <h3 className='text-base text-[#b3b3b3]'>{ project.description }</h3>
              <div className="flex my-3">
                {
                  project.tags.map((tag: any) => (
                    <p className='m-2 text-sm bg-[#0d5353] text-[#76ABAE] border-2 rounded-lg p-1 items-center'>{ tag }</p>
                  ))
                }
              </div>
            <hr className='text-gray-500' />
            </div>
          </div>

        ))
      }
    </div>
  )
}
