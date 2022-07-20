import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { SITE_NAME } from '../../config/app-config';
import PostContainer from '../../container/PostContainer/PostContainer';
import { getAllCategories } from '../../data/categories/get-all-categories';
import { getAllPosts } from '../../data/posts/get-all-posts';
import { getPost } from '../../data/posts/get-post';
import { FullCategory } from '../../domain/categories/categories';
import { PostData } from '../../domain/posts/post';

export type DynamicPostProps = {
  categories: FullCategory;
  post: PostData;
};

export default function DynamicPost({ post, categories }: DynamicPostProps) {
  return (
    <>
      <Head>
        <title>
          {post.title} - {SITE_NAME}
        </title>
        <meta name="description" content={post.description} />
      </Head>
      <PostContainer post={post} categories={categories} />;
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  return {
    paths: posts.data.map((post) => {
      return {
        params: {
          slug: post.attributes.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  const posts = await getPost(ctx.params.slug as string);
  const categories = await getAllCategories();
  return {
    props: { post: posts[0], categories },
  };
};
