import React from 'react';
import Ad from '../../components/Ad/Ad';
import Banners from '../../components/Banners/Banners';
import Details from '../../components/Details/Details';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { AboutProps } from '../../pages/about';

const contato = [
  { id: 1, name: 'Portfolio', link: 'https://lucal-portfolio.vercel.app/' },
  { id: 2, name: 'Linkedin', link: 'https://www.linkedin.com/in/lu%C3%ADs-carlos-723a28165/' },
  { id: 3, name: 'Github', link: 'https://github.com/Lucal22' },
  { id: 4, name: 'Email', link: 'luiscsilvestre22@gmail.com' },
];

export default function About({ posts, categories }: AboutProps) {
  return (
    <>
      <Header />
      <main className="block h-full w-full bg-white dark:bg-darkbg ">
        <div className="my-0 mx-auto max-w-[1200px] p-2 tablets:px-10 tablets:pt-10">
          <Ad />
          <section className="block gap-10 md:grid md:grid-cols-sections">
            <section>
              <article>
                <h1 className="mb-4 text-[32px]">Sobre</h1>
                <p className="mb-4">
                  Esse blog foi feito com o objetivo de aumentar minhas habilidades em programação e
                  também servir como um ambiente onde posso dividir minhas experiências e ideias
                  sobre vários assuntos, principalmente relacionados a tecnologia.
                </p>
                <article className="relative grid h-full w-full grid-cols-mobile gap-2 border-y-[1px] border-slate-300 px-2 py-5 dark:border-black tablets:grid-cols-posts tablets:gap-8">
                  <div>
                    <a
                      href={`/about/authors/${posts.data[0].attributes.author.data.attributes.slug}`}
                    >
                      <img
                        className="w-40 mobile:w-full"
                        src={
                          posts.data[0].attributes.author.data.attributes.picture.data.attributes
                            .formats.medium.url
                        }
                        alt={
                          posts.data[0].attributes.author.data.attributes.picture.data.attributes
                            .alternativeText
                        }
                      />
                    </a>
                  </div>
                  <div className="flex flex-col justify-center mobile:block">
                    <a
                      href={`/about/authors/${posts.data[0].attributes.author.data.attributes.slug}`}
                    >
                      <h2 className="mb-1   text-[14px] leading-none hover:text-blue-500 dark:hover:text-blue-500 mobile:text-[18px]">
                        {posts.data[0].attributes.author.data.attributes.name}
                      </h2>
                    </a>
                    <Details
                      authorSlug={posts.data[0].attributes.author.data.attributes.slug}
                      author={posts.data[0].attributes.author.data.attributes.name}
                      date={posts.data[0].attributes.publishedAt}
                      category={''}
                    />
                    <p
                      className="mt-1 hidden text-justify text-slate-500 md:block"
                      dangerouslySetInnerHTML={{
                        __html: posts.data[0].attributes.author.data.attributes.description,
                      }}
                    />
                    <div className="absolute bottom-[15px]">
                      <ul className=" flex justify-between gap-20 text-blue-500">
                        {contato.map((item) => {
                          return (
                            <a
                              key={item.id}
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <li>{item.name}</li>
                            </a>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </article>
              </article>
            </section>
            <section className="hidden md:block">
              <div className="h-full w-full">
                <Banners categories={categories} />
              </div>
            </section>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
}
