import React from 'react';
import Ad from '../../components/Ad/Ad';
import Banners from '../../components/Banners/Banners';
import PostDetails from '../../components/Details/PostDetails';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { DynamicPostProps } from '../../pages/posts/[slug]';

export default function PostContainer({ post, categories }: DynamicPostProps) {
  return (
    <>
      <Header />
      <main className="block h-full w-full bg-white dark:bg-darkbg ">
        <div className="my-0 mx-auto max-w-[1200px] p-2 tablets:px-10 tablets:pt-10">
          <Ad />
          <section className="block gap-10 md:grid md:grid-cols-sections">
            <section>
              <article className="mb-10 block">
                <h1 className="text-[32px]">{post.title}</h1>
                <PostDetails
                  date={post.publishedAt}
                  author={post.author.data.attributes.name}
                  category={post.category.data.attributes.Slug}
                />
                <img
                  className="my-4"
                  src={post.cover.data.attributes.formats.large.url}
                  alt="Adicionar alt"
                />
                <div
                  className="mt-1 text-justify text-[18px] dark:text-slate-200"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </article>
            </section>
            <section className="hidden md:block">
              <div className="h-full w-full">
                <Banners categories={categories} />
              </div>
            </section>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
}
