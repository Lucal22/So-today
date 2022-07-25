import React from 'react';

const contato = [
  { id: 1, name: 'Portfolio', link: 'https://lucal-portfolio.vercel.app/' },
  { id: 2, name: 'Linkedin', link: 'https://www.linkedin.com/in/lu%C3%ADs-carlos-723a28165/' },
  { id: 3, name: 'Github', link: 'https://github.com/Lucal22' },
  // { id: 4, name: 'Email', link: 'luiscsilvestre22@gmail.com' },
];

export type AuthorCardProps = {
  authorSlug: string;
  authorImage: string;
  authorAlt: string;
  authorName: string;
  authorDescription: string;
};

export default function AuthorCard({
  authorImage,
  authorSlug,
  authorAlt,
  authorName,
  authorDescription,
}: AuthorCardProps) {
  return (
    <article className="relative grid h-full w-full grid-cols-mobile gap-2 border-y-[1px] border-slate-300 px-2 py-5 dark:border-black tablets:grid-cols-posts tablets:gap-8">
      <div>
        <a href={`/about/authors/${authorSlug}`}>
          <img className="w-40 mobile:w-full" src={authorImage} alt={authorAlt} />
        </a>
      </div>
      <div className="flex flex-col justify-center mobile:block">
        <a href={`/about/authors/${authorSlug}`}>
          <h2 className="mb-1   text-[14px] leading-none hover:text-blue-500 dark:hover:text-blue-500 mobile:text-[18px]">
            {authorName}
          </h2>
        </a>
        <p
          className="mt-1 hidden text-justify text-slate-500 md:block"
          dangerouslySetInnerHTML={{
            __html: authorDescription,
          }}
        />
        <div className="absolute bottom-[15px]">
          <ul className=" flex justify-between gap-20 text-blue-500">
            {contato.map((item) => {
              return (
                <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">
                  <li>{item.name}</li>
                </a>
              );
            })}
          </ul>
        </div>
      </div>
    </article>
  );
}
