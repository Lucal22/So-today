import React from 'react'
import Homepage from '../container/Homepage/Homepage'
import { GetStaticProps } from 'next'
import { getAllPosts } from '../data/posts/get-all-posts'
import { FullPost } from '../domain/posts/post'

export type HomeProps = {
  posts: FullPost;
}

export default function Home({ posts }: HomeProps) {
  return (
    <section className='h-full bg-white '>
      <Homepage posts={posts} />
    </section>

  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts()
  return {
    props: { posts },
  }
}
