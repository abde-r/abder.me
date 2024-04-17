import { IoNewspaper } from "react-icons/io5";
import Link from 'next/link'

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';

export const generateStaticParams = async () => {
  const files = fs.readdirSync(path.join('writings'));
  return files.map(filename => ({ slug: filename.replace('.mdx', '') }));
}

const getWriting = ({slug}: {slug: string}) => {

  const writing = fs.readFileSync(path.join('writing', slug + '.mdx'), 'utf-8');
  const {data: fontMatter, content} = matter(writing);

  return { fontMatter, slug, content };
}

export const Writings = () => {
    
  // const writings = [
  //   {
  //       id: 1,
  //       title: 'How The Web Works?',
  //       date: 'Nov 2022',
  //       description: `What happens when you type a web address in your browser?`,
  //       imageSrc: 'https://img.freepik.com/premium-photo/iceberg-is-water-word-ice-is-visible-bottom_549702-3218.jpg',
  //   },
  //   {
  //     id: 2,
  //     title: 'What Database Do I Need For My App?',
  //     date: 'Jan 2023',
  //     description: `There are nearly a dozen types of database. Some of the more... `,
  //     imageSrc: 'https://www.datamation.com/wp-content/uploads/2023/06/dm-top-database-challenges-696x457.png',
  //   },
  // ];

  const contentDir = './src/content/Writings';
  const files = fs.readdirSync(path.join(contentDir));
  const writings: any = files.map(filename => {
    const fileContent = fs.readFileSync(path.join(contentDir, filename), 'utf-8')
    const {data: frontMatter, content} = matter(fileContent);
    return {meta: frontMatter, slug: filename.replace('.mdx',''), content};
  })

  // console.log('writings', writings)
  return (
        // <div id='blog' className="w-[80%] mx-auto items-center overflow-y-auto flex flex-col font-fira font-normal text-base justify-center h-[90vh] max-md:h-[100%] max-md:w-[65%] max-md:py-10">
        <div id='blog' className="w-full mx-auto items-center flex flex-col font-fira font-normal text-base justify-center  max-md:w-[95%] max-md:py-10">
          {/* <h5 className="text-secondary align-start font-sans font-semibold md:hidden">Writings</h5> */}
          { writings.map((writing: any, index: number) => (
            <>
            <Link
            key={index}
            href={`writings/${writing.meta.title.split(' ').join('_')}`}
            className="flex shadow-[0_1px_5px_rgb(100,150,250,0.3)] hover:shadow-[0_1px_10px_rgb(100,150,250,0.3)] p-2 items-center rounded my-4 w-[60%] max-md:w-[80%] max-bsm:w-[95%]"
            // style={{
            //   backgroundImage: `linear-gradient(rgba(148, 180, 189, 0.5), rgba(130, 130, 130, 0.2)), url(${writing.meta.img})`,
            //   backgroundSize: 'cover',
            //   backgroundPosition: 'center',
            // }}
          >
            {/* <div className="w-[100%] max-w-[390px] h-[70px] flex items-center justify-center"> */}
              <div className=" p-3 bg-[#7694bc] mx-1 rounded-xl max-md:hidden">
                {/* <img src={writing.meta.img} /> */}
              <IoNewspaper />
              </div>
              <div className="ml-3 w-[100%]">
                <div className="flex items-center justify-between mb-2 tracking-tight">
                  <p className="text-lg font-semibold text-secondary tracking-tight max-md:text-sm">{ writing.meta.title }</p>
                  <span className="text-xs font-bold uppercase tracking-tight text-gray-400 ml-2">{ writing.meta.date }</span>
                </div>
                  <p className="text-xs text-gray-400">{ writing.meta.description }</p>
              </div>
            {/* </div> */}
            </Link>
            {/* <Link
            key={index}
            href={`writings/${writing.meta.title.split(' ').join('_')}`}
            className="shadow-[0_1px_5px_rgb(100,150,250,0.3)] hover:shadow-[0_1px_10px_rgb(100,150,250,0.3)] items-center rounded my-4 w-[55%] max-md:w-[80%]  max-bsm:w-[95%]"
            style={{
              backgroundImage: `linear-gradient(rgba(148, 180, 189, 0.5), rgba(130, 130, 130, 0.2)), url(${writing.meta.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="flex items-center">
              <div className="px-1">
                <span className="inline-block items-center w-[10px] h-[10px] p-1 rounded-lg bg-[#ff605c]"></span>
              </div>
              <div className="px-1">
                <span className="inline-block items-center w-[10px] h-[10px] p-1 rounded-lg bg-[#ffbd44]"></span>
              </div>
              <div className="px-1">
                <span className="inline-block items-center w-[10px] h-[10px] p-1 rounded-lg bg-[#00ca4e]"></span>
              </div>
            </div>
            <div className="flex flex-col justify-between px-4 leading-normal w-full">
              <h1 className="mb-2 text-lg font-bold tracking-tight text-gray-900">{writing.meta.title}</h1>
              <h5 className="mb-2 text-xs  tracking-tight font-bold text-third">{writing.meta.date}</h5>
              <p className="mb-3 text-sm  text-gray-500 font-bold">{writing.meta.description}</p>
            </div>
          </Link> */}
            {/* <hr className="mt-8 p-5"/> */}
          </>
          
          ))}
        </div>
  );
};