import React from 'react';
import Homepage from '../container/Homepage/Homepage';
import { GetStaticProps } from 'next';
import { getAllPosts } from '../data/posts/get-all-posts';
import { FullPost, PostData } from '../domain/posts/post';
import { getPost } from '../data/posts/get-post';
import { getAllCategories } from '../data/categories/get-all-categories';
import { FullCategory } from '../domain/categories/categories';

export type HomeProps = {
  posts: FullPost;
  content: PostData;
  categories: FullCategory;
};

export default function Home({ posts, content, categories }: HomeProps) {
  return <Homepage posts={posts} content={content} categories={categories} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts(`pagination[start]=0&pagination[limit]=20`);
  const content = await getPost();
  const categories = await getAllCategories();
  return {
    props: { posts, content, categories },
  };
};
