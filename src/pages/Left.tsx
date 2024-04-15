import { Socials } from '@/components/Socials';
import { Navbar } from '@/components/Navbar';
import { allAbouts } from 'content';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default function Left() {

  const contentDir = './src/content/About';
  const files = fs.readdirSync(path.join(contentDir));
  const content: any = files.map(filename => {
    const fileContent = fs.readFileSync(path.join(contentDir, filename), 'utf-8')
    const {data: frontMatter, content} = matter(fileContent);
    return {meta: frontMatter, slug: filename.replace('.mdx',''), content};
  })

  console.log('ff', content)
  return (
    <div className='flex ml-40 flex-col items-start justify-center p-5 w-[50%] max-md:mx-auto max-md:w-[98%] max-md:pt-20'>
        <p className='text-sm font-fira font-semibold text-[#c1c1c1] max-sm:text-xs'>Hi, I'am</p>
        <h1 className='text-6xl font-sans font-bold text-[#7694bc] mb-2 max-md:text-xl max-sm:text-xs'>Abderrahman</h1>
        <h3 className='text-2xl font-IBM font-bold text-gray-300 max-md:text-base max-sm:text-xs'>i Like Computers🧑‍💻<span className='text-gray-400'> && Cloud ☁️!</span></h3>
        {/* <Navbar /> */}
        <div className="mt-10 w-[80%] text-gray-300 font-fira max-md:w-[98%] max-md:text-xs">
        {/* <p className=''>{`a `}<span className='font-semibold font-sans text-secondary'>{`0x16 y.o. `}</span>{ allAbouts[0]?.p1 }</p> */}
          {/* <p className='my-4'> */}
          <article className='prose prose-p:text-gray-300 max-w-[100%] mt-5 prose-strong:text-secondary'>
            <MDXRemote source={content[0].content}></MDXRemote>
          {/* </p> */}
          </article>
        </div>
        {/* <Socials /> */}
    </div>
  )
}
