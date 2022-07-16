import React from 'react';

export type BannerProps = {
  category: string;
  thumbmail: string;
};

export default function Banners({ category, thumbmail }: BannerProps) {
  function capitalizeFirstLetter(capitalize: string) {
    return capitalize.charAt(0).toUpperCase() + capitalize.slice(1);
  }
  return (
    <div className="mb-10 h-80 w-full rounded-[10px] border-[1px] border-slate-300 bg-slate-100 p-4 dark:border-darkbg dark:bg-darknav">
      <div>
        <a href={`/posts/${category}`}>
          <img src={thumbmail} />
        </a>
      </div>
      <div>
        <a href={`/posts/${category}`}>
          <h2 className="text-center text-2xl">{capitalizeFirstLetter(category)}</h2>
        </a>
      </div>
    </div>
  );
}
