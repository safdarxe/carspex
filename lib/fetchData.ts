import fs from 'fs/promises';
import path from 'path';
import { Post } from './types';

export async function getPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const jsonData = await fs.readFile(filePath, 'utf8');
  return JSON.parse(jsonData) as Post[];
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const posts = await getPosts();
  return posts.find(post => post.slug === slug);
}