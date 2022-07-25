import React from 'react';
import { GetStaticProps } from 'next';
import Posts from '../../container/Posts/Posts';
import { FullCategory } from '../../domain/categories/categories';
import { SinglePost } from '../../domain/posts/post';
import { loadPosts } from '../../data/load-posts';
import { loadCategories } from '../../data/load-categories';

export type PostsProps = {
  posts: [SinglePost];
  categories: FullCategory;
};

export default function index({ posts, categories }: PostsProps) {
  return <Posts posts={posts} categories={categories} />;
}

export const getStaticProps: GetStaticProps = async () => {
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
    props: { posts: data.posts.data, categories: dataCategory.categories },
  };
};
