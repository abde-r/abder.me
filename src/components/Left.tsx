import About from '@/components/About';

export default function Left() {

  return (
    <div className='flex ml-40 flex-col items-start justify-center p-5 w-[50%] max-mxl:mx-auto max-mxl:w-[98%] max-mxl:pt-20'>
      <p className='text-sm font-fira font-semibold tracking-tight text-[#c1c1c1] max-sm:text-xs'>{`Hi, I'am`}</p>
      <h1 className='text-5xl font-sans font-bold text-[#7694bc] mb-2 max-md:text-xl max-sm:text-xs'>Abderrahman</h1>
      <h2 className='text-2xl font-IBM font-bold tracking-tight text-gray-300 max-md:text-base max-sm:text-xs'>i Like Computers🧑‍💻<span className='text-gray-400'> && Cloud ☁️!</span></h2>
      <About />
    </div>
  )
}
