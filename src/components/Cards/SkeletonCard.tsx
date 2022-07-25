import React from 'react';

export default function SkeletonCard() {
  return (
    <article className="grid h-[179px] w-full grid-cols-mobile gap-2 border-t-[1px] border-slate-300 px-2 py-5 dark:border-black tablets:grid-cols-posts tablets:gap-8">
      <div className="w-40 bg-darknav mobile:w-full"></div>
      <div className="flex flex-col justify-center mobile:block">
        <div className="mb-1 h-5 w-full bg-darknav"></div>
        <div className="h-4 w-full bg-darknav"></div>
        <div className="h-[100%] w-full"></div>
      </div>
    </article>
  );
}
