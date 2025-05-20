import { promises as fs } from 'fs';
import matter from 'gray-matter';
import path from 'path';
import type { BlogFrontMatter, BlogPost } from '../types/blog';

const contentDirectory = path.join(process.cwd(), 'src/content/blog');

export async function getAllPosts(): Promise<BlogFrontMatter[]> {
  const fileNames = await fs.readdir(contentDirectory);
  
  const posts = await Promise.all(
    fileNames.map(async (fileName: string) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = await fs.readFile(fullPath, 'utf8');
      const { data: frontMatter } = matter(fileContents);
      
      return {
        slug,
        ...frontMatter as Omit<BlogFrontMatter, 'slug'>,
      };
    })
  );
  
  return posts.sort((post1: BlogFrontMatter, post2: BlogFrontMatter) => {
    return new Date(post2.date).getTime() - new Date(post1.date).getTime();
  });
}

export async function getPostBySlug(slug: string): Promise<BlogPost> {
  const fullPath = path.join(contentDirectory, `${slug}.mdx`);
  const fileContents = await fs.readFile(fullPath, 'utf8');
  const { data: frontMatter, content } = matter(fileContents);
  
  return {
    slug,
    frontMatter: {
      ...frontMatter as Omit<BlogFrontMatter, 'slug'>,
      slug,
    },
    content,
  };
}