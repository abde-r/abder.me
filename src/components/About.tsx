import { IoOpenOutline } from "react-icons/io5";

// const paragraph1 = `My name is Abderrahman, and I'm a 0x16 years-old(22) software engineering student based in Morocco,
//                     alumnus of `
// const paragraph2 = `I have a passion for backend development and
//                     thoroughly enjoy the challenges that come with it. I find joy in the intricate art of Problem-solving. 
//                     Whether it's crafting efficient algorithms or building robust systems, 
//                     I thrive on the challenges that the world of software engineering presents. 
//                     I'm driven by a constant desire to learn, innovate, and contribute to 
//                     the ever-evolving tech landscape, and I'm excited to see where this journey 
//                     takes me.`

export const About = () => {
  return (
    <div id='about' className='w-[80%] mx-auto flex flex-col font-fira font-normal text-base items-center justify-center h-[90vh] text-gray-200'>
        <p className="my-2"> { process.env.P1 }
            <a className='font-semibold text-[#76ABAE]' href={`https://isgim.edupage.org/`} target='_blank' >ISGI<IoOpenOutline className="inline ml-1" /> </a>
             (Institut Supérieur de Gestion et d'Informatique) <span className="font-semibold text-gray-400 italic">-where I wrot code on paper</span>, and Currently studying at
            <a className='font-semibold text-[#76ABAE]' href={`https://1337.ma/`} target='_blank' > 1337FIL<IoOpenOutline className="inline ml-1" />.</a>
        </p>
        <p className="my-2">{ process.env.P2 }</p>
    </div>
  )
}
