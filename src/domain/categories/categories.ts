export type FormatTypes = {
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

export type ImageSize = {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    large: FormatTypes;
    medium: FormatTypes;
    small: FormatTypes;
    thumbnail: FormatTypes;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type ImageFormat = {
  data: {
    id: number;
    attributes: ImageSize;
  };
};

export type FullCategory = {
  data: [
    {
      id: number;
      attributes: {
        name: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        Slug: string;
        Image: ImageFormat;
      };
    },
  ];
};
