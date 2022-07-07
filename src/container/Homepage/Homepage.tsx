import React from 'react'
import { FullPost, PostData } from '../../domain/posts/post'
import Header from '../../components/Header/Header'
import PostComponent from '../../components/PostComponent/PostComponent'
import LatestPost from './components/LatestPost'

export type HomeProps = {
  posts: FullPost;
  content: PostData;
}

export default function Homepage({ posts, content }: HomeProps) {

  return (
    <>
      <Header />
      <main className='block h-full w-full bg-white dark:bg-darkbg '>
        <div className='max-w-[1200px] my-0 mx-auto pt-10 px-10'>
          <div className='h-40'>
            <h1 className='dark:text-white'>Frontpage</h1>
          </div>
          <section className='block sm:grid sm:grid-cols-sections gap-10'>
            <section>
              <div className='mb-20'>
            <LatestPost
            lastPostUrl = {posts.data[posts.data.length -1].attributes.cover.data.attributes.formats.medium.url}
            lastPostTitle = {posts.data[posts.data.length -1].attributes.title}
            />
            </div>
            <div className='block'>
              <PostComponent
              thumbmail = {posts.data[posts.data.length -1].attributes.cover.data.attributes.formats.thumbnail.url}
              title = {posts.data[posts.data.length -1].attributes.title}
              author = {posts.data[posts.data.length -1].attributes.author.data.attributes.name}
              date = {posts.data[posts.data.length -1].attributes.updatedAt}
              abstract ={content.content}
              />
              <PostComponent
              thumbmail = {posts.data[0].attributes.cover.data.attributes.formats.thumbnail.url}
              title = {posts.data[0].attributes.title}
              author = {posts.data[0].attributes.author.data.attributes.name}
              date = {posts.data[0].attributes.updatedAt}
              abstract ={posts.data[0].attributes.content}
              />
              </div>
            </section>
          <section className='hidden sm:block'>
            <div className='w-full h-10 bg-white'>
            </div>
          </section>
          </section>
        </div>
      </main>
    </>
  )
}




{/* {<div>
            {posts.data.map((post) => (
              <h2 key={post.id}>{post.attributes.title}</h2>
            ))}
          </div>} */}
