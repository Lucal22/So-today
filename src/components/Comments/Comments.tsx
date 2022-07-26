import React from 'react';
import { DiscussionEmbed } from 'disqus-react';

export type CommentsProps = {
  id: string;
  slug: string;
  title: string;
  allowComments: boolean;
};

export default function Comments({ id, slug, title, allowComments }: CommentsProps) {
  if (!allowComments) return null;

  return (
    <>
      <div>
        <DiscussionEmbed
          shortname="lucal-thoughts"
          config={{
            title: title,
            url: `https://lucal-thoughts.vercel.app/post/${slug}`,
            identifier: id,
            language: 'pt_BR',
          }}
        />
      </div>
    </>
  );
}
