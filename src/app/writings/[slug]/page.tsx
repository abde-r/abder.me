import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Socials } from "@/components/Socials";
import { MDXRemote } from 'next-mdx-remote/rsc';

const getWriting = ({ slug }: { slug: string }) => {
  const writing = fs.readFileSync(path.join('content', 'Writings', `${slug}.mdx`), 'utf-8');
  const { data: frontMatter, content } = matter(writing);
  return { frontMatter, slug, content };
}

export default function Page({ params }: { params: { slug: string } }) {
  const props: any = getWriting(params);

  return (
    <div className="py-10">
      <article className="align-center mx-auto py-20 prose max-w-[75%] prose-lg prose-headings:font-fira prose-headings:text-gray-300  prose-h4:font-IBM prose-h4:font-semibold prose-h3:text-secondary prose-h4:mt-10 prose-h4:text-secondary prose-p:text-sm prose-p:font-fira prose-p:text-gray-300 prose-img:my-10 prose-img:rounded-md prose-img:mx-auto prose-h6:text-sm prose-h6:font-semibold prose-h6:text-gray-400 prose-h6:mb-20 prose-h6:text-center prose-strong:text-gray-300 prose-strong:font-semibold prose-strong:text-sm prose-figure:text-gray-400 prose-figure:font-fira prose-figure:my-0 prose-figure:text-sm prose-figure:italic prose-figure:inline-block max-md:prose-p:text-xs">
        <MDXRemote source={props.content}></MDXRemote>
      </article>
      <Socials />
    </div>
  )
}
