import React from 'react';
import Head from 'next/head';
import Homepage from '../container/Homepage/Homepage';
import { GetStaticProps } from 'next';
import { getAllPosts } from '../data/posts/get-all-posts';
import { FullPost } from '../domain/posts/post';
import { getAllCategories } from '../data/categories/get-all-categories';
import { FullCategory } from '../domain/categories/categories';
import { SITE_NAME } from '../config/app-config';

export type HomeProps = {
  posts: FullPost;
  categories: FullCategory;
};

export default function Home({ posts, categories }: HomeProps) {
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="description" content="Um blog pessoal em 2022!" />
      </Head>
      <Homepage posts={posts} categories={categories} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts(`pagination[start]=0&pagination[limit]=20`);
  const categories = await getAllCategories();
  return {
    props: { posts, categories },
  };
};
