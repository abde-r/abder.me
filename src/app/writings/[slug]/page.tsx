import { IoOpenOutline } from "react-icons/io5";
import Link from 'next/link'

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';

// export async function generateStaticParams() {
//   const files = fs.readdirSync(path.join('./src/content/blogs'));
//   const paths = files.map(filename => ({ slug: filename.replace('.mdx', '') }))
// }

const getWriting = ({slug}: {slug: string}) => {

  const writing = fs.readFileSync(path.join('src/content/Writings', slug + '.mdx'), 'utf-8');
  const {data: fontMatter, content} = matter(writing);

  return { fontMatter, slug, content };
}

export default function Page({ params }: { params: { slug: string } }) {

  const props: any = getWriting(params);

  return (
    // <div id='blog1' className="w-full h-full text-gray-300 my-20">
    //     <div className="container w-[75%] items-center mx-auto">
    <article className="align-center mx-auto py-20 prose max-w-[75%] prose-lg prose-headings:font-fira prose-headings:text-gray-300  prose-h4:font-IBM prose-h4:font-semibold prose-h3:text-secondary prose-h4:mt-10 prose-h4:text-secondary prose-p:text-sm prose-p:font-fira prose-p:text-gray-300 prose-img:my-10 prose-img:rounded-md prose-img:mx-auto prose-h6:text-sm prose-h6:font-semibold prose-h6:text-gray-400 prose-h6:mb-20 prose-h6:text-center prose-strong:text-gray-300 prose-strong:font-semibold prose-strong:text-sm prose-figure:text-gray-400 prose-figure:font-fira prose-figure:my-0 prose-figure:text-sm prose-figure:italic prose-figure:inline-block">
      <MDXRemote source={props.content}></MDXRemote>
    </article>
    //   </div>
    // </div>
  )
}