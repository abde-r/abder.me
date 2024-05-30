import React from 'react'
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';

const getAbout = ({ slug }: { slug: string }) => {
    const writing = fs.readFileSync(path.join('.content/about', slug + '.mdx'), 'utf-8');
    const {data: fontMatter, content} = matter(writing);
  
    return { fontMatter, slug, content };
};

export default function About() {
    const props: any = getAbout({slug: 'about'});

    return (
        <div className="mt-10 w-[80%] text-gray-300 font-fira max-md:w-[98%] max-md:text-xs">
            <article className='prose prose-p:text-gray-300 max-w-[100%] mt-5 prose-p:text-sm max-md:prose-p:text-xs prose-strong:text-secondary'>
            <MDXRemote source={props.content} />
            </article>
        </div>
    )
}
