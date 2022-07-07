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
    className='rounded-t-[10px] cursor-pointer max-w-full'
    src={lastPostUrl} />
    </a>
    <div className='flex justify-center align-middle  max-w-full h-100 p-2 rounded-br-[10px] bg-darkbg dark:bg-slate-200'>
      <h1 className=' dark:text-black text-white text-lg md:text-2xl ' >
      <a className='hover:text-blue-500 dark:hover:text-blue-500'
      href=''>{lastPostTitle}</a>
        </h1>
    </div>
    </div>
    </section>

)
}
