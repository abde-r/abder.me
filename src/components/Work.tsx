import React from 'react'
import { IoOpenOutline } from "react-icons/io5";

export const Work = () => {
  return (
    <div id='work' className="Work">
      <div className="work-cards">

        <div className="work-card">
          <div className="card-date">
            <h3>dec 2024</h3>
          </div>
          <div className="card-content">
            <div className="card-content-title">
              <h1>Transcendence</h1>
              <a className='link' href='gg' target='_blank'><IoOpenOutline /></a>
            </div>
            <h3>FullStack web app with online multiplayer game and real-time chat app</h3>
            <div className="tags">
              <p>Typescript</p>
              <p>React</p>
              <p>NextJs</p>
              <p>Prisma</p>
              <p>webSockets</p>
              <p>Docker-Compose</p>
            </div>
          </div>
        </div>

        <div className="work-card">
          <div className="card-date">
            <h3>dec 2024</h3>
          </div>
          <div className="card-content">
            <div className="card-content-title">
              <h1>httperv</h1>
              <a className='link' href='gg' target='_blank'><IoOpenOutline /></a>
            </div>
            <h3>Re-writing an http server in C++.</h3>
            <div className="tags">
              <p>C++</p>
              <p>sockets</p>
              <p>non-Blocking</p>
            </div>
          </div>
        </div>

        <div className="work-card">
          <div className="card-date">
            <h3>dec 2024</h3>
          </div>
          <div className="card-content">
            <div className="card-content-title">
              <h1>stl-Containers</h1>
              <a className='link' href='gg' target='_blank'><IoOpenOutline /></a>
            </div>
            <h3>Re-implementation of STL Containers in C++ 98.</h3>
            <div className="tags">
              <p>C++</p>
              <p>Data Structure</p>
              <p>Algorithms</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
