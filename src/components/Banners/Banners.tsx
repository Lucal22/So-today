import React from 'react';
import { FullCategory } from '../../domain/categories/categories';

export type BannerProps = {
  categories: FullCategory;
};

export default function Banners({ categories }: BannerProps) {
  return (
    <div>
      {categories.data.map((item) => {
        return (
          <div
            key={item.id}
            className="mb-10 h-80 w-full rounded-[10px] border-[1px] border-slate-300 bg-slate-100 p-4 dark:border-darkbg dark:bg-darknav"
          >
            <div className="mb-4">
              <a href={`/category/${item.attributes.slug}`}>
                <img
                  src={item.attributes.image.data.attributes.formats.thumbnail.url}
                  alt={item.attributes.image.data.attributes.alternativeText}
                />
              </a>
            </div>
            <div>
              <a href={`/category/${item.attributes.slug}`}>
                <h2 className="mb-4 text-center text-2xl">{item.attributes.name}</h2>
                <p className="text-center">Veja todos os posts dessa categoria</p>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
