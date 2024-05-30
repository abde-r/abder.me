import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export const getAllWritings = async (): Promise<any> => {
  try {
    const contentDir = path.join(process.cwd(), 'content/writings');
    const files = await fs.readdir(contentDir);
    const writings = await Promise.all(files.map(async (filename: any) => {
        const filePath: any = path.join(contentDir, filename);
        const fileContent: any = await fs.readFile(filePath, 'utf-8');
        const { data: frontMatter, content } = matter(fileContent);
        return { meta: frontMatter, slug: filename.replace('.mdx', ''), content };
      })
    );
    return writings;
  }
  catch (err) {
    console.error('Error fetching writings! ', err);
    return [];
  }
}
