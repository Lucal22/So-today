import React from 'react';
import Date from '../Date/Date';

export type DetailsProps = {
  date: string;
  author: string;
  category: string;
};

export default function Details({ date, author, category }: DetailsProps) {
  return (
    <span className="text-sm text-slate-400">
      Publicado por
      <a className="text-blue-500" href={`/about/authors/${author}`}>
        {' '}
        {author}{' '}
      </a>
      em <Date date={date} /> |{' '}
      <a className="text-blue-500" href={`/posts/${category}`}>
        {category}
      </a>
    </span>
  );
}
