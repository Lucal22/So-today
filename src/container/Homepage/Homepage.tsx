import Head from 'next/head'
import React from 'react'
import { FullPost } from '../../domain/posts/post'
import Header from '../../components/Header/Header'

export type HomeProps = {
  posts: FullPost;
}

export default function Homepage({ posts }: HomeProps) {

  return (
    <div className='block h-80 w-full '>
      <Header />
      <main className=' dark:bg-darkbg'>
        <div className=''>
          <h1 className='dark:text-white'>Frontpage</h1>
          {<div>
            {posts.data.map((post) => (
              <h2 key={post.id}>{post.attributes.title}</h2>
            ))}
          </div>}
        </div>
      </main>
    </div>
  )
}
