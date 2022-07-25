import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { SITE_NAME } from '../../config/app-config';
import Categories from '../../container/Categories/Categories';
import { loadCategories, RequestCategoryResponse } from '../../data/load-categories';
import { loadPosts, RequestResponse } from '../../data/load-posts';
import { FullCategory } from '../../domain/categories/categories';
import { PostData } from '../../domain/posts/post';

export type DynamicPostProps = {
  categories: FullCategory;
  posts: [{ attributes: PostData }];
};

export default function DynamicPost({ posts, categories }: DynamicPostProps) {
  return (
    <>
      <Head>
        <title>
          Categoria {posts[0].attributes.category.data.attributes.name} - {SITE_NAME}
        </title>
        <meta name="description" content={posts[0].attributes.description} />
      </Head>
      <Categories posts={posts} categories={categories} />
    </>
  );
}

//fix type
export const getStaticPaths: any = async () => {
  let data: RequestResponse | null = null;
  let paths: { params: { slug: string } }[] = [];
  try {
    data = await loadPosts();
    paths = data.posts.data.map((post) => {
      return {
        params: {
          slug: post.attributes.category.data.attributes.slug,
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
      categorySlug: {
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
    props: { posts: data.posts.data, categories: dataCategory.categories },
    revalidate: 24 * 60 * 60,
  };
};
