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
  alternativeText: string;
  formats: {
    large: FormatTypes;
    medium: FormatTypes;
    small: FormatTypes;
    thumbnail: FormatTypes;
  };
};

export type ImageFormat = {
  data: {
    attributes: ImageSize;
  };
};

export type FullCategory = {
  data: [
    {
      id: number;
      attributes: {
        name: string;
        slug: string;
        image: ImageFormat;
      };
    },
  ];
};
