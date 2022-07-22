import React from 'react';
import Head from 'next/head';
import Homepage from '../container/Homepage/Homepage';
import { GetStaticProps } from 'next';
import { FullPost } from '../domain/posts/post';
import { getAllCategories } from '../data/categories/get-all-categories';
import { FullCategory } from '../domain/categories/categories';
import { SITE_NAME } from '../config/app-config';
import { loadPosts, RequestResponse } from '../domain/posts/load-posts';

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

export const getStaticProps: GetStaticProps<RequestResponse> = async () => {
  let data = null;
  try {
    data = await loadPosts();
  } catch (e) {
    data = null;
  }
  const categories = await getAllCategories();
  if (!data || !data.posts || !data.posts.data.length) {
    return {
      notFound: true,
    };
  }
  return {
    props: { posts: data.posts, categories },
  };
};
