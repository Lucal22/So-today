import React from 'react';
import Date from '../Date/Date';
import { DetailsProps } from './Details';

export default function PostDetails({ date, author, category }: DetailsProps) {
  return (
    <span className=" text-[12px] text-slate-400">
      <span> Publicado por</span>
      <a className=" text-blue-500" href={`/about`}>
        {' '}
        {author}{' '}
      </a>
      <span>
        em <Date date={date} /> |{' '}
      </span>
      <a className=" text-blue-500" href={`/category/${category}`}>
        {category}
      </a>
    </span>
  );
}
