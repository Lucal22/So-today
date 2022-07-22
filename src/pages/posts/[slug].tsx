import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { SITE_NAME } from '../../config/app-config';
import PostContainer from '../../container/PostContainer/PostContainer';
import { loadCategories, RequestCategoryResponse } from '../../data/load-categories';
import { loadPosts, RequestResponse } from '../../data/load-posts';
import { FullCategory } from '../../domain/categories/categories';
import { SinglePost } from '../../domain/posts/post';

export type DynamicPostProps = {
  categories: FullCategory;
  post: [SinglePost];
};

export default function DynamicPost({ post, categories }: DynamicPostProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <Head>
        <title>
          {post[0].attributes.title} - {SITE_NAME}
        </title>
        <meta name="description" content={post[0].attributes.description} />
      </Head>
      <PostContainer post={post} categories={categories} />
    </>
  );
}

//fix type
export const getStaticPaths: unknown = async () => {
  let data: RequestResponse | null = null;
  let paths: { params: { slug: string } }[] = [];
  try {
    data = await loadPosts();
    paths = data.posts.data.map((post) => {
      return {
        params: {
          slug: post.attributes.slug,
        },
      };
    });
  } catch (e) {
    data = null;
  }
  if (!data || !data.posts || !data.posts.data.length) {
    return (paths = []);
  }
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<RequestResponse | RequestCategoryResponse> = async (
  ctx,
) => {
  if (!ctx.params) {
    return {
      notFound: true,
    };
  }
  let data = null;
  try {
    data = await loadPosts({
      postSlug: {
        eq: ctx.params.slug as string,
      },
    });
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
    props: { post: data.posts.data, categories: dataCategory.categories },
  };
};
