import ChatGpt from '../assets/chatgpt.jpg';
import webserv from '../assets/webserver.jpg';
import inception from '../assets/incep.jpeg';
import expressAPI from '../assets/express.png'
import cppContainers from '../assets/Cpp.png'
import nestAPI from '../assets/nest.jpg'
import pong from '../assets/pong.jpg'
import algos from '../assets/alg.png'
import bash from '../assets/sh.jpg'
import insurance from '../assets/insurance.jpg'
import booking from '../assets/Booking.jpg'

import { useState } from 'react';

export const Work = () => {

    const _github: string = `https://github.com/stronk-exe`

    const [backend, setBackend] = useState('backend');
    const [projects] = useState([
        {
            name: "ChatGPT-API",
            image: ChatGpt,
            type: 'backend',
            description: "Chat App with NEW ChatGPT API using React, NodeJs, OpenAI",
            githubLink: `${_github}/ChatGPT-API`,
        },
        {
            name: "ft_transcendence",
            image: pong,
            type: 'backend',
            description: "fullStack web app with online multiplayer game and real-time chat app - under construction",
        },
        
        {
            name: "Inception",
            image: inception,
            type: 'backend',
            description: "Time to dive into Docker containers!",
            githubLink: `${_github}/Inception`,
        },
        {
            name: "REST_API-ExpressJs",
            image: expressAPI,
            type: 'backend',
            description: "REST-API for contact management app using ExpressJs",
            githubLink: `${_github}/REST_API-ExpressJs`,
        },
        {
            name: "webserv",
            image: webserv,
            type: 'backend',
            description: "Building HTTP Server from Scratch",
            githubLink: `${_github}/webserv`,
        },
        
        
        
        {
            name: "Shop API",
            image: nestAPI,
            type: 'backend',
            description: "REST-API for Shop app using NestJs",
            githubLink: `${_github}/ShopAPI`,
        },
        {
            name: "React-Booking-App",
            image: booking,
            type: 'others',
            description: "Frontend of Booking | Reservation App in React",
            githubLink: `${_github}/React-Booking-App`,
            link: `stupendous-fairy-f1ed05.netlify.app`,
        },
        {
            name: "minishell",
            image: bash,
            type: 'others',
            description: "minimal implementation of bash in C",
            githubLink: `${_github}/Minishell`,
        },
        {
            name: "STL Containers",
            image: cppContainers,
            type: 'others',
            description: "Re-implementation of STL Containers in C++ 98",
            githubLink: `${_github}/STL-Containers`,
        },
        {
            name: "ProblemSolving",
            image: algos,
            type: 'others',
            description: "My repo for problem solving",
            githubLink: `${_github}/ProblemSolving`,
        },
        {
            name: "React-Insurance-App",
            image: insurance,
            type: 'others',
            description: "Responsive insurance company landing page in React",
            githubLink: `${_github}/React-Insurance-App`,
            link: `stalwart-gnome-e5bf23.netlify.app`,
        },
    ]);

    const handleProjectsType = (isBackend: string) => {
        setBackend(isBackend);
    }

    return (
        <div id='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8 items-center text-center'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                    <p className='py-6 text-1xl text-gray-500'>// Check out some of my recent work</p>
                </div>
                <div className="projectsTypes" style={{ 'margin': '10px' }}>
                    <a onClick={() => handleProjectsType('backend')} style={{ 'margin': '10px', 'cursor': 'pointer', 'color': backend==='backend' ? 'white' : 'gray' }}>#Backend</a>
                    <a onClick={() => handleProjectsType('others')} style={{ 'margin': '10px', 'cursor': 'pointer', 'color': backend==='others' ? 'white' : 'gray' }}>#Others</a>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {projects.map((project, index) => (
                        (project.type === backend)) ? (
                            <div
                                key={index}
                                style={{ backgroundImage: `url(${project.image})` }}
                                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative'
                            >
                                <div className='opacity-0 group-hover:opacity-100'>
                                    <span className='text-2xl font-bold text-white tracking-wider'>
                                        {project.name}
                                    </span>
                                    <div className='pt-8 text-center'>
                                        { project?.githubLink && <a href={project?.githubLink} target='_blank'>
                                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                        </a>}
                                        {project?.link && <a href={project.link} target='_blank'>
                                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                        </a>}
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full bg-[#0a192f] bg-opacity-50 text-white text-center p-4">
                                    {project.description}
                                </div>
                            </div>
                        ) : null
                    )}
                </div>
            </div>
        </div>
    )
}
