import React from 'react';
import Details from '../Details/Details';

export type PostComponentProps = {
  thumbmail: string;
  title: string;
  author: string;
  date: string;
  description: string;
  slug: string;
  category: string;
};

export default function PostComponent({
  thumbmail,
  title,
  author,
  date,
  description,
  slug,
  category,
}: PostComponentProps) {
  return (
    <article className="grid h-full w-full grid-cols-mobile gap-2 border-t-[1px] border-slate-300 px-2 py-5 dark:border-black tablets:grid-cols-posts tablets:gap-8">
      <div>
        <a href={`/posts/${category}/${slug}`}>
          <img className="w-40 mobile:w-full" src={thumbmail} />
        </a>
      </div>
      <div className="flex flex-col justify-center mobile:block">
        <a href={`/posts/${category}/${slug}`}>
          <h2 className="mb-1   text-[14px] leading-none hover:text-blue-500 dark:hover:text-blue-500 mobile:text-[18px]">
            {title}
          </h2>
        </a>
        <Details author={author} date={date} category={category} />
        <p
          className="mt-1 hidden text-justify text-slate-500 tablets:block"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </div>
    </article>
  );
}
