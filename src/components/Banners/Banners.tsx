import React from 'react'

export type BannerProps = {
  category: string;
  thumbmail: string;
}

export default function Banners({category, thumbmail}: BannerProps) {

  function capitalizeFirstLetter(capitalize:string) {
    return capitalize.charAt(0).toUpperCase() + capitalize.slice(1);
  }
  return (
    <div className='w-full h-80 p-4 mb-10 rounded-[10px] bg-slate-100 dark:bg-darknav'>
      <div>
      <a href={`/posts/${category}`}>
        <img src={thumbmail}  />
      </a>
      </div>
      <div>
      <a href={`/posts/${category}`}>
        <h2 className='text-center text-2xl'>{capitalizeFirstLetter(category)}</h2>
      </a>
      </div>
      </div>
  )
}
