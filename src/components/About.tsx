import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAboutContent } from '@/pages/api/about';

export default async function About() {
    
    const aboutContent: string = await getAboutContent('about');

    return (
        <div className="mt-10 w-[80%] text-gray-300 font-fira max-md:w-[98%] max-md:text-xs">
            <article className='prose prose-p:text-gray-300 max-w-[100%] mt-5 prose-p:text-sm max-md:prose-p:text-xs prose-strong:text-secondary'>
            <MDXRemote source={aboutContent} />
            </article>
        </div>
    )
}
