import { gql } from 'graphql-request';
import { GRAPHQL_FRAGMENTS } from './fragments';

export const GRAPHQL_QUERY = gql`
  ${GRAPHQL_FRAGMENTS}
  query GET_POSTS(
    $categorySlug: StringFilterInput
    $postSlug: StringFilterInput
    $postSearch: StringFilterInput
    $authorSlug: StringFilterInput
    $sort: [String] = "publishedAt:desc"
    $start: Int = 0
    $limit: Int = 10
  ) {
    posts(
      pagination: { start: $start, limit: $limit }
      sort: $sort
      filters: {
        slug: $postSlug
        title: $postSearch
        category: { slug: $categorySlug }
        author: { slug: $authorSlug }
      }
    ) {
      data {
        ...postContent
      }
    }
  }
`;
