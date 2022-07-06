import React from 'react'
import { FullPost } from '../../domain/posts/post'
import Header from '../../components/Header/Header'
import LatestPost from './components/LatestPost'

export type HomeProps = {
  posts: FullPost;
}

export default function Homepage({ posts }: HomeProps) {


  return (
    <>
      <Header />
      <main className='block h-screen w-full bg-white dark:bg-darkbg '>
        <div className='max-w-[1200px] my-0 mx-auto pt-10 px-10'>
          <div className='h-40'>
            <h1 className='dark:text-white'>Frontpage</h1>
          </div>
          <section className='block sm:grid sm:grid-cols-posts gap-10'>
            <LatestPost
            lastPostUrl = {posts.data[posts.data.length -1].attributes.cover.data.attributes.formats.medium.url}
            lastPostTitle = {posts.data[posts.data.length -1].attributes.title}
            />
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
