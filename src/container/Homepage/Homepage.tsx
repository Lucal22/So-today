import React, { useState } from 'react';
import { FullPost, PostData } from '../../domain/posts/post';
import Header from '../../components/Header/Header';
import PostComponent from '../../components/PostComponent/PostComponent';
import LatestPost from './components/LatestPost';
import Banners from '../../components/Banners/Banners';
import MorePosts from '../../components/MorePosts/MorePosts';
import Footer from '../../components/Footer/Footer';

export type HomeProps = {
  posts: FullPost;
  content: PostData;
};

export default function Homepage({ posts }: HomeProps) {
  const [number, setNumber] = useState<number>(5);

  const lastPostData = posts.data[0].attributes;
  const allPosts = posts.data;
  const renderPosts = posts.data.slice(0, number);
  return (
    <>
      <Header />
      <main className="block h-full w-full bg-white dark:bg-darkbg ">
        <div className="my-0 mx-auto max-w-[1200px] px-10 pt-10">
          <div className="h-40">
            <h1 className="dark:text-white">Frontpage</h1>
          </div>
          <section className="block gap-10 sm:grid sm:grid-cols-sections">
            <section>
              <div className="mb-20">
                <LatestPost
                  lastPostUrl={lastPostData.cover.data.attributes.formats.large.url}
                  lastPostTitle={lastPostData.title}
                  lastSlug={lastPostData.slug}
                  lastCategory={lastPostData.category.data.attributes.name}
                />
              </div>
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
            <section className="hidden sm:block">
              <div className="h-full w-full">
                <Banners
                  category={allPosts[0].attributes.category.data.attributes.name}
                  thumbmail={allPosts[0].attributes.cover.data.attributes.formats.thumbnail.url}
                />
                <Banners
                  category={allPosts[0].attributes.category.data.attributes.name}
                  thumbmail={allPosts[0].attributes.cover.data.attributes.formats.thumbnail.url}
                />
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
