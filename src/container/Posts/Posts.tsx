import React, { useState } from 'react';
import Ad from '../../components/Ad/Ad';
import Banners from '../../components/Banners/Banners';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import MorePosts from '../../components/MorePosts/MorePosts';
import PostComponent from '../../components/PostComponent/PostComponent';
import { FullCategory } from '../../domain/categories/categories';
import { FullPost } from '../../domain/posts/post';

export type PostsProps = {
  posts: FullPost;
  categories: FullCategory;
};

export default function Posts({ posts, categories }: PostsProps) {
  const [number, setNumber] = useState<number>(7);

  const renderPosts = posts.data.slice(0, number);

  return (
    <>
      <Header />
      <main className="block h-full w-full bg-white dark:bg-darkbg ">
        <div className="my-0 mx-auto max-w-[1200px] p-2 tablets:px-10 tablets:pt-10">
          <Ad />
          <section className="block gap-10 md:grid md:grid-cols-sections">
            <section>
              <div className="mb-10 block">
                {renderPosts.map((post) => {
                  return (
                    <PostComponent
                      key={post.id}
                      thumbmail={post.attributes.cover.data.attributes.formats.thumbnail.url}
                      title={post.attributes.title}
                      author={post.attributes.author.data.attributes.name}
                      date={post.attributes.publishedAt}
                      description={post.attributes.description}
                      slug={post.attributes.slug}
                      category={post.attributes.category.data.attributes.name}
                    />
                  );
                })}
              </div>
            </section>
            <section className="hidden md:block">
              <div className="h-full w-full">
                <Banners categories={categories} />
              </div>
            </section>
          </section>
          <MorePosts morePosts={number} setMorePosts={setNumber} />
        </div>
        <Footer />
      </main>
    </>
  );
}
