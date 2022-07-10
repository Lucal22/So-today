import React from 'react'
import Details from '../Details/Details';

export type PostComponentProps= {
  thumbmail: string;
  title: string;
  author: string;
  date: string;
  description: string;
  slug: string;
  category: string;
}

export default function PostComponent({ thumbmail, title, author, date, description, slug, category }:PostComponentProps) {
  return (
    <article className='grid grid-cols-posts gap-8 py-5 border-t-[1px] border-slate-300 dark:border-black w-full h-full'>
      <div>
      <a href={`/posts/${category}/${slug}`}><img src={thumbmail} /></a>
      </div>
      <div>
      <a href={`/posts/${category}/${slug}`}>
        <h2 className=' mb-1 text-[18px] leading-none hover:text-blue-500 dark:hover:text-blue-500'>{title}</h2>
        </a>
        <Details
        author={author}
        date={date}
        category={category}
        />
           <p
           className='text-slate-500 text-justify mt-1'
           dangerouslySetInnerHTML={{__html: description.substring(0, 230)+"...   "}} />
      </div>
    </article>
  )
}
