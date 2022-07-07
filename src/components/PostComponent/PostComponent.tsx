import React from 'react'

export type PostComponentProps= {
  thumbmail: string;
  title: string;
  author: string;
  date: string;
  abstract: string;
}

export default function PostComponent({thumbmail, title, author, date, abstract }:PostComponentProps) {
  return (
    <article className='grid grid-cols-posts gap-8 py-5 border-t-[1px] border-slate-300 dark:border-black w-full h-full'>
      <div>
      <a href=''><img src={thumbmail} /></a>
      </div>
      <div>
      <a href=''>
        <h1 className=' leading-none hover:text-blue-500 dark:hover:text-blue-500'>{title}</h1>
        </a>
        <span className='text-slate-400 text-sm'>
          Publicado por <a className='text-blue-500' href={`/about/authours/${author}`}>{author}</a> , em {date}
          </span>
           <p
           className='text-slate-500 text-justify'
           dangerouslySetInnerHTML={{__html: abstract.substring(0, 230)+"...   "}} />
      </div>
    </article>
  )
}
