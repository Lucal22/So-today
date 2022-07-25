import React from 'react';
import Ad from '../../components/Ad/Ad';
import SkeletonBanners from '../../components/Banners/SkeletonBanners';
import SkeletonCard from '../../components/Cards/SkeletonCard';
import Header from '../../components/Header/Header';

const id = [1, 2, 3];

export default function Loading() {
  return (
    <>
      <Header />
      <main className="block h-full w-full bg-white dark:bg-darkbg ">
        <div className="my-0 mx-auto max-w-[1200px] p-2 tablets:px-10 tablets:pt-10">
          <Ad />
          <section className="block gap-10 md:grid md:grid-cols-sections">
            <section>
              <div className="mb-10 block">
                {id.map((item) => (
                  <SkeletonCard key={item} />
                ))}
              </div>
            </section>
            <section>
              {id.map((item) => (
                <SkeletonBanners key={item} />
              ))}
            </section>
          </section>
        </div>
      </main>
    </>
  );
}
