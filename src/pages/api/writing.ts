import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export const getWritingContent = async (slug: string): Promise<string> => {
    
    try {
        const contentDir = path.join(process.cwd(), 'content/writings');
        const files = await fs.readdir(contentDir);

        const writings: any = await Promise.all(files.map(async filename => {
            const filePath: string = path.join(contentDir, filename);
            const fileContent: any = await fs.readFile(filePath, 'utf-8');
            const { data: frontMatter, content } = matter(fileContent);
            return { meta: frontMatter, slug: filename.replace('.mdx', ''), content };
        }));
        const writing = writings.find((w: any) => w.slug === slug);
        
        return writing ? writing.content : '';
    }
    catch (err) {
        console.error(`Error fetching ${slug} content! `, err);
        return '';
    }
}
