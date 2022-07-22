import { GetStaticProps } from 'next';
import React from 'react';
import About from '../../container/About/About';
import { loadCategories, RequestCategoryResponse } from '../../data/load-categories';
import { loadPosts, RequestResponse } from '../../data/load-posts';
import { FullCategory } from '../../domain/categories/categories';
import { FullPost } from '../../domain/posts/post';

export type AboutProps = {
  categories: FullCategory;
  posts: FullPost;
};

export default function index({ posts, categories }: AboutProps) {
  return <About categories={categories} posts={posts} />;
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
