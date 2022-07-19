import React from 'react';

export type MorePostsProps = {
  morePosts: number;
  setMorePosts: React.Dispatch<React.SetStateAction<number>>;
};

export default function MorePosts({ morePosts, setMorePosts }: MorePostsProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="h-[1px] w-full border-[1px] border-slate-500"></div>
      <div
        onClick={() => {
          setMorePosts(morePosts < 20 ? morePosts + 5 : morePosts);
        }}
      >
        <p className="w-44 cursor-pointer text-center text-[14px] text-slate-500 tablets:w-60 tablets:text-[18px]">
          Clique para ver mais posts
        </p>
      </div>
      <div className="h-[1px] w-full border-[1px] border-slate-500"></div>
    </div>
  );
}
