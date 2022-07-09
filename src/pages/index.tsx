import React from 'react'
import Homepage from '../container/Homepage/Homepage'
import { GetStaticProps } from 'next'
import { getAllPosts } from '../data/posts/get-all-posts'
import { FullPost, PostData } from '../domain/posts/post'
import { getPost } from '../data/posts/get-post'

export type HomeProps = {
  posts: FullPost;
  content: PostData;
}

export default function Home({ posts, content }: HomeProps) {
  return (
      <Homepage
      posts={posts}
      content = {content}
      />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts('sort=id:desc')
  const content = await getPost()
  return {
    props: { posts, content },
  }
}
