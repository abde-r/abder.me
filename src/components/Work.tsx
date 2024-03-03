import React from 'react'
import { IoOpenOutline } from "react-icons/io5";

export const Work = () => {
  return (
    <div id='work' className="Work">
      <div className="work-cards">

        <div className="work-card">
          <div className="card-date">2024-4-4</div>
          <div className="card-content">
            <div className="card-content-title">
              <h1>Transcendence</h1>
              <a className='link' href='gg' target='_blank'><IoOpenOutline /></a>
            </div>
            <h3>FullStack web app with online multiplayer game and real-time chat app</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, reprehenderit doloribus fugiat delectus mollitia corporis nemo. Repellendus facere unde sit quia culpa quibusdam inventore! Libero illo sunt qui fuga tenetur.</p>
          </div>
        </div>

        <div className="work-card">
          <div className="card-date">2024-4-4</div>
          <div className="card-content">
            <h1>Inception <a>link</a></h1>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, reprehenderit doloribus fugiat delectus mollitia corporis nemo. Repellendus facere unde sit quia culpa quibusdam inventore! Libero illo sunt qui fuga tenetur.</p>
          </div>
        </div>

        <div className="work-card">
          <div className="card-date">2024-4-4</div>
          <div className="card-content">
            <h1>Inception <a>link</a></h1>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis unde voluptatem commodi velit, asperiores eius recusandae iure. Numquam esse, consectetur perferendis dolorum id harum autem officiis dolores ullam. Corporis, dolor!</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, reprehenderit doloribus fugiat delectus mollitia corporis nemo. Repellendus facere unde sit quia culpa quibusdam inventore! Libero illo sunt qui fuga tenetur.</p>
          </div>
        </div>

      </div>
    </div>
  )
}
