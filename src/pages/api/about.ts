import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export const getAboutContent = async (slug: string): Promise<string> => {
    
    try {
        const contentDir = path.join(process.cwd(), '.content/about');
        const filePath: string = path.join(contentDir, `${slug}.mdx`);
        
        const fileContent: any = await fs.readFile(filePath, 'utf-8');
        const { content } = matter(fileContent);
        
        return content;
    }
    catch (err) {
        console.error(`Error fetching about content! `, err);
        return '';
    }
}
