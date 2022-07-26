import React, { useState } from 'react';
import Ad from '../../components/Ad/Ad';
import Banners from '../../components/Banners/Banners';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import MorePosts from '../../components/MorePosts/MorePosts';
import PostCard from '../../components/Cards/PostCard';
import { DynamicPostProps } from '../../pages/about/authors/[slug]';
import AuthorCard from '../../components/Cards/AuthorCard';

export default function Authors({ posts, categories }: DynamicPostProps) {
  const [number, setNumber] = useState<number>(6);
  const renderPosts = posts.slice(0, number);

  return (
    <>
      <Header />
      <main className="block h-full w-full bg-white dark:bg-darkbg ">
        <div className="my-0 mx-auto max-w-[1200px] p-2 tablets:px-10 tablets:pt-10">
          <Ad />
          <section className="block gap-10 md:grid md:grid-cols-sections">
            <section>
              <div className="mb-10 block">
                <AuthorCard
                  authorSlug={posts[0].attributes.author.data.attributes.slug}
                  authorImage={
                    posts[0].attributes.author.data.attributes.picture.data.attributes.formats
                      .medium.url
                  }
                  authorAlt={
                    posts[0].attributes.author.data.attributes.picture.data.attributes
                      .alternativeText
                  }
                  authorName={posts[0].attributes.author.data.attributes.name}
                  authorDescription={posts[0].attributes.author.data.attributes.description}
                />
                {renderPosts.map((post) => {
                  return (
                    <PostCard
                      key={post.attributes.slug}
                      thumbmail={post.attributes.cover.data.attributes.formats.thumbnail.url}
                      title={post.attributes.title}
                      author={post.attributes.author.data.attributes.name}
                      authorSlug={post.attributes.author.data.attributes.slug}
                      date={post.attributes.publishedAt}
                      description={post.attributes.description}
                      slug={post.attributes.slug}
                      category={post.attributes.category.data.attributes.name}
                      categorySlug={post.attributes.category.data.attributes.slug}
                      alt={post.attributes.cover.data.attributes.alternativeText}
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
