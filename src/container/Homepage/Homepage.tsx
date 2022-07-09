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
  const lastPostData = posts.data[0].attributes;
  const allPosts = posts.data;
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
                  lastPostUrl={lastPostData.cover.data.attributes.formats.medium.url}
                  lastPostTitle={lastPostData.title}
                  lastSlug={lastPostData.slug}
                  lastCategory={lastPostData.category.data.attributes.name}

                />
              </div>
              <div className='block'>
                 {allPosts.map((post) =>{
                  return(
                    <PostComponent
                      key={post.id}
                      thumbmail={post.attributes.cover.data.attributes.formats.thumbnail.url}
                      title={post.attributes.title}
                      author={post.attributes.author.data.attributes.name}
                      date={post.attributes.publishedAt
                        .slice(0,10)
                        .split(',')
                        .join()
                      }
                      abstract={content.content}
                      slug={post.attributes.slug}
                      category={post.attributes.category.data.attributes.name} />
                )
                 })
                }
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
