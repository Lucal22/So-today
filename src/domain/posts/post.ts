export type PostID = number;

export type PostAuthor = {
  data: {
    id: PostID;
    attributes: {
      name: string;
      createdAt: string;
      updatedAt: string;
    };
  };
};

export type PostCategory = {
  data: {
    id: PostID;
    attributes: {
      name: string;
      createdAt: string;
      updatedAt: string;
      Slug: string;
    };
  };
};

export type PostCreatedBy = {
  id: PostID;
  firstname: string;
  lastname: string;
  username: null;
};

export type PostCoverFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};

export type PostCover = PostCoverFormat & {
  data: {
    attributes: {
      id: PostID;
      alternativeText: string;
      caption: string;
      previewUrl: null;
      provider: string;
      createdAt: string;
      updatedAt: string;
      formats: {
        thumbnail: PostCoverFormat;
        small: PostCoverFormat;
        medium: PostCoverFormat;
        large: PostCoverFormat;
      };
    };
  };
};

export type PostData = {
  id: PostID;
  title: string;
  content: string;
  slug: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  author: PostAuthor;
  category: PostCategory;
  cover: PostCover;
};
export type FullPost = {
  data: [
    {
      id: PostID;
      attributes: PostData;
    },
  ];
  meta: object;
};
