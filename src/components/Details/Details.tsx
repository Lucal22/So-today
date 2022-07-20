import React from 'react';
import Date from '../Date/Date';

export type DetailsProps = {
  date: string;
  author: string;
  category: string;
};

export default function Details({ date, author, category }: DetailsProps) {
  return (
    <span className=" text-[12px] text-slate-400 tablets:text-sm">
      <span className="hidden tablets:inline"> Publicado por</span>
      <a className="hidden text-blue-500 tablets:inline" href={`/about`}>
        {' '}
        {author}{' '}
      </a>
      <span className="hidden tablets:inline">
        em <Date date={date} /> |{' '}
      </span>
      <a className=" text-blue-500" href={`/category/${category}`}>
        {category}
      </a>
    </span>
  );
}
