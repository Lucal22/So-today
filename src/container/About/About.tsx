import React from 'react';
import Ad from '../../components/Ad/Ad';
import Banners from '../../components/Banners/Banners';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import AuthorCard from '../../components/Cards/AuthorCard';
import { AboutProps } from '../../pages/about';

export default function About({ posts, categories }: AboutProps) {
  return (
    <>
      <Header />
      <main className="block h-full w-full bg-white dark:bg-darkbg ">
        <div className="my-0 mx-auto max-w-[1200px] p-2 tablets:px-10 tablets:pt-10">
          <Ad />
          <section className="block gap-10 md:grid md:grid-cols-sections">
            <section>
              <div>
                <h1 className="mb-4 text-[32px]">Sobre</h1>
                <p className="mb-4 text-slate-500">
                  Esse blog foi feito com o objetivo de aumentar minhas habilidades em programação e
                  também servir como um ambiente onde posso dividir minhas experiências e ideias
                  sobre vários assuntos, principalmente relacionados a tecnologia.
                </p>
                <AuthorCard
                  authorSlug={posts.data[0].attributes.author.data.attributes.slug}
                  authorImage={
                    posts.data[0].attributes.author.data.attributes.picture.data.attributes.formats
                      .medium.url
                  }
                  authorAlt={
                    posts.data[0].attributes.author.data.attributes.picture.data.attributes
                      .alternativeText
                  }
                  authorName={posts.data[0].attributes.author.data.attributes.name}
                  authorDescription={posts.data[0].attributes.author.data.attributes.description}
                />
              </div>
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
