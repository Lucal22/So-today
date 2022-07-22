import { gql } from 'graphql-request';

export const GRAPHQL_FRAGMENTS = gql`
  fragment image on UploadFile {
    alternativeText
    formats
  }
  fragment authorPostCotent on Author {
    name
    description
    slug
    picture {
      data {
        attributes {
          ...image
        }
      }
    }
  }

  fragment categoryPostContent on Category {
    name
    slug
  }
  # fragment authorContent on AuthorEntityResponseCollection {
  #   data {
  #     id
  #     attributes {
  #       name
  #       description
  #       slug
  #       picture {
  #         data {
  #           attributes {
  #             ...image
  #           }
  #         }
  #       }
  #     }
  #   }
  # }

  fragment postContent on PostEntity {
    id
    attributes {
      title
      slug
      description
      content
      publishedAt
      updatedAt
      author {
        data {
          attributes {
            ...authorPostCotent
          }
        }
      }
      category {
        data {
          attributes {
            ...categoryPostContent
          }
        }
      }
      cover {
        data {
          attributes {
            ...image
          }
        }
      }
    }
  }
`;
export const GRAPHQL_CATEGORIES_FRAGMENTS = gql`
  fragment image on UploadFile {
    alternativeText
    formats
  }
  fragment categoryPostContent on Category {
    name
    slug
  }
  fragment categoryContent on CategoryEntityResponseCollection {
    data {
      id
      attributes {
        ...categoryPostContent
        image {
          data {
            attributes {
              ...image
            }
          }
        }
      }
    }
  }
`;
