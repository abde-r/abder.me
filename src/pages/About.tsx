import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import leetcode from '../assets/leetcode.png'
import codeforces from '../assets/codeforces.png'
import codingame from '../assets/codingame.png'

const paragraph1 = `My name is Abderrahman, and I'm a 0x16 years-old(20) software engineering student based in Morocco,
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
    <div id='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
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
                    <div className="p_solvingLinks max-w-[100%] w-full grid grid-cols-3 gap-1" style={{ 'marginTop': '25px'}}>
                        <a style={{backgroundImage: `url(${leetcode})`}} className='max-w-[15%] max-h-[10%] rounded-md flex  content-div2' href={ 'https://leetcode.com/stronk/' } target='_blank'></a>
                        <a style={{backgroundImage: `url(${codeforces})`}} className='max-w-[15%] max-h-[10%] rounded-md flex  content-div2' href={ 'https://codeforces.com/profile/stronk' } target='_blank'></a>
                        <a style={{backgroundImage: `url(${codingame})`}} className='max-w-[15%] max-h-[10%] rounded-md flex  content-div2' href={ 'https://www.codingame.com/profile/f2fcbf8c06112436da6c14c7ebf7e5b37294674' } target='_blank'></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
