import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import leetcode from '../assets/leetcode.png'
import codeforces from '../assets/codeforces.png'
import codingame from '../assets/codingame.png'

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
    <div id='about' className='w-full text-gray-300 px-5'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-center pb-20 pl-4'>
                </div>
            </div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600' style={{ 'margin': '25px' }}>About</p>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi, I'm Abderrahman, nice to meet you, Please take a look around</p>
                </div>
                <div>
                    <p className='sm:text'>
                        { paragraph1 }
                        <a href={`https://isgim.edupage.org/`} target='_blank' className='text-pink-600 font-bold'>ISGI <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='xs'/></a>
                         (Institut Supérieur de Gestion et d'Informatique) and Currently studying at
                        <a href={`https://1337.ma/`} target='_blank' className='text-pink-600 font-bold'> 1337FIL <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='xs'/>.</a>
                    </p>
                    <p>{ paragraph2 }</p>
                    <p className='sm:text mt-3'>* some of the Problem solving challenges:</p>
                    <div className="p_solvingLinks">
                        <div className="p_solivingLink">
                            <img src={ `${leetcode}` } />
                            <a href={ 'https://leetcode.com/stronk/' } target='_blank'><p>* leetcode</p></a>
                        </div>
                        <div className="p_solivingLink">
                            <img src={ `${codeforces}` } />
                            <a href={ 'https://codeforces.com/profile/stronk' } target='_blank'><p>* codeforces</p></a>
                        </div>
                        <div className="p_solivingLink">
                            <img src={ `${codingame}` } />
                            <a href={ 'https://www.codingame.com/profile/f2fcbf8c06112436da6c14c7ebf7e5b37294674' } target='_blank'><p>* codingame</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
