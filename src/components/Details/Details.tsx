import React from 'react'
import Date from '../Date/Date';

export type DetailsProps = {
  date: string;
  author: string;
}

export default function Details({date, author}: DetailsProps) {
  return (
    <span className='text-slate-400 text-sm'>
          Publicado por
          <a className='text-blue-500' href={`/about/authors/${author}`}>{author}</a> ,
          em <Date date={date} />
    </span>

  )
}
