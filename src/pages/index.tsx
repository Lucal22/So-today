import React from 'react';
import Head from 'next/head';
import Homepage from '../container/Homepage/Homepage';
import { GetStaticProps } from 'next';
import { FullPost } from '../domain/posts/post';
import { FullCategory } from '../domain/categories/categories';
import { SITE_NAME } from '../config/app-config';
import { loadPosts, RequestResponse } from '../data/load-posts';
import { loadCategories, RequestCategoryResponse } from '../data/load-categories';

export type HomeProps = {
  posts: FullPost;
  categories: FullCategory;
};

export default function Home({ posts, categories }: HomeProps) {
  return (
    <>
      <Head>
        <title>{SITE_NAME} - Um blog pessoal em 2022!</title>
        <meta name="description" content="Um blog pessoal em 2022!" />
      </Head>
      <Homepage posts={posts} categories={categories} />
    </>
  );
}

export const getStaticProps: GetStaticProps<
  RequestResponse | RequestCategoryResponse
> = async () => {
  let data = null;
  try {
    data = await loadPosts();
  } catch (e) {
    data = null;
  }
  let dataCategory = null;
  try {
    dataCategory = await loadCategories();
  } catch (e) {
    dataCategory = null;
  }
  if (
    !data ||
    !dataCategory ||
    !data.posts ||
    !dataCategory.categories ||
    !data.posts.data.length ||
    !dataCategory.categories.data.length
  ) {
    return {
      notFound: true,
    };
  }
  return {
    props: { posts: data.posts, categories: dataCategory.categories },
    revalidate: 24 * 60 * 60,
  };
};
