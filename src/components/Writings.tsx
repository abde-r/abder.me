import Link from 'next/link'
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { IoNewspaper } from "react-icons/io5";


export const Writings = () => {

  const contentDir = 'content/Writings';
  const files = fs.readdirSync(path.join(contentDir));
  const writings: any = files.map(filename => {
    const fileContent = fs.readFileSync(path.join(contentDir, filename), 'utf-8');
    const {data: frontMatter, content} = matter(fileContent);
    return {meta: frontMatter, slug: filename.replace('.mdx',''), content};
  })

  return (
        <div id='blog' className="w-full mx-auto items-center flex flex-col font-fira font-normal text-base justify-center  max-md:w-[95%] max-md:py-10">
          {
            writings.map((writing: any, index: number) => (
              <Link
                key={index}
                href={`writings/${writing.slug}`}
                className="flex shadow-[0_1px_5px_rgb(100,150,250,0.3)] hover:shadow-[0_1px_10px_rgb(100,150,250,0.3)] p-2 items-center rounded my-4 w-[60%] max-md:w-[80%] max-bsm:w-[95%]">
              <div className=" p-3 bg-[#7694bc] mx-1 rounded-xl max-md:hidden">
                <IoNewspaper />
                </div>
                <div className="ml-3 w-[100%]">
                  <div className="flex items-center justify-between mb-2 tracking-tight">
                    <p className="text-lg font-semibold text-secondary tracking-tight max-md:text-sm">{ writing.meta.title }</p>
                    <span className="text-xs font-bold uppercase tracking-tight text-gray-400 ml-2">{ writing.meta.date }</span>
                  </div>
                    <p className="text-xs text-gray-400">{ writing.meta.description }</p>
                </div>
              </Link>
            ))
          }
        </div>
  );
};
