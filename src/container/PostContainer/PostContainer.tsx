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
              <article id={post[0].id.toString()} className="mb-10 block">
                <h1 className="text-[32px]">{post[0].attributes.title}</h1>
                <PostDetails
                  date={post[0].attributes.publishedAt}
                  author={post[0].attributes.author.data.attributes.name}
                  authorSlug={post[0].attributes.author.data.attributes.slug}
                  category={post[0].attributes.category.data.attributes.name}
                  categorySlug={post[0].attributes.category.data.attributes.slug}
                />
                <img
                  className="my-4"
                  src={post[0].attributes.cover.data.attributes.formats.large.url}
                  alt={post[0].attributes.cover.data.attributes.alternativeText}
                />
                <div
                  className="mt-1 text-justify text-[18px] dark:text-slate-200"
                  dangerouslySetInnerHTML={{ __html: post[0].attributes.content }}
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
