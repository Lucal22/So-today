import React from 'react'
import Homepage from '../container/Homepage/Homepage'
import { GetStaticProps } from 'next'
import { getAllPosts } from '../data/posts/get-all-posts'
import { FullPost } from '../domain/posts/post'
import HeadComponent from '../components/HeadComponent/HeadComponent'
import Header from '../components/Header/Header'
import { ThemeProvider } from 'next-themes'

export type HomeProps = {
  posts: FullPost;
}

export default function Home({ posts }: HomeProps) {
  return (
    <div className='h-full bg-white '>
      <HeadComponent />
      <Homepage posts={posts} />
    </div>

  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts()
  return {
    props: { posts },
  }
}
