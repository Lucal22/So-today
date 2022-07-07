import React from 'react'

export type LatestPostProps= {
  lastPostUrl: string;
  lastPostTitle: string;
}

export default function LatestPost({lastPostUrl, lastPostTitle}: LatestPostProps) {
  return (
    <section className='w-full'>
    <div>
      <a href=''>
    <img
    className='rounded-tr-[10px] cursor-pointer max-w-full border-[1px] border-slate-300 dark:border-black dark:border-b-darkbg'
    src={lastPostUrl} />
    </a>
    <div className='flex justify-center align-middle  max-w-full h-100 p-2 rounded-b-[10px]  border-b-[1px] border-x-[1px] border-slate-300 dark:border-black bg-slate-100 dark:bg-darknav'>
      <h1 className='text-lg md:text-2xl dark:text-slate-200 text-black'>
      <a className='hover:text-blue-500 dark:hover:text-blue-500'
      href=''>{lastPostTitle}</a>
        </h1>
    </div>
    </div>
    </section>

)
}
