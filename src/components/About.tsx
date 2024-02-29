import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const paragraph1 = `My name is Abderrahman, and I'm a 0x16 years-old(22) software engineering student based in Morocco,
                    alumnus of `
const paragraph2 = `I have a passion for backend development and
                    thoroughly enjoy the challenges that come with it. I find joy in the intricate art of Problem-solving. 
                    Whether it's crafting efficient algorithms or building robust systems, 
                    I thrive on the challenges that the world of software engineering presents. 
                    I'm driven by a constant desire to learn, innovate, and contribute to 
                    the ever-evolving tech landscape, and I'm excited to see where this journey 
                    takes me.`

export const About = () => {
  return (
    <div id='About' className='About'>
            <p>
                { paragraph1 }
                <a href={`https://isgim.edupage.org/`} target='_blank' >ISGI </a>
                 (Institut Supérieur de Gestion et d'Informatique) and Currently studying at
                <a href={`https://1337.ma/`} target='_blank' > 1337FIL.</a>
            </p>
            <p>{ paragraph2 }</p>
            
            {/* <p>* some of the Problem solving challenges:</p> */}
                    {/* <div className="p_solvingLinks">
                        <div className="p_solivingLink">
                            <img src={ `f` } />
                            <a href={ 'https://leetcode.com/stronk/' } target='_blank'><p>* leetcode</p></a>
                        </div>
                        <div className="p_solivingLink">
                            <img src={ `f` } />
                            <a href={ 'https://codeforces.com/profile/stronk' } target='_blank'><p>* codeforces</p></a>
                        </div>
                        <div className="p_solivingLink">
                            <img src={ `f` } />
                            <a href={ 'https://www.codingame.com/profile/f2fcbf8c06112436da6c14c7ebf7e5b37294674' } target='_blank'><p>* codingame</p></a>
                        </div>
                    </div> */}
            </div>
  )
}
