import { request } from 'graphql-request';
import { GRAPHQLURL } from '../../config/app-config';
import { GRAPHQL_QUERY } from '../../graphql/queries';

export type EqualVariables = {
  eq: string;
};

export type ContainVariables = {
  contains: string;
};

export type LoadPostVariables = {
  categorySlug?: EqualVariables;
  postSlug?: EqualVariables;
  postSearch?: ContainVariables;
  authorSlug?: EqualVariables;
  sort?: string;
  start?: number;
  limit?: number;
};

export const loadPosts = async (variables: LoadPostVariables = {}) => {
  const defaultVariables: LoadPostVariables = {
    sort: 'publishedAt:desc',
    start: 0,
    limit: 20,
  };
  const data = await request(GRAPHQLURL, GRAPHQL_QUERY, {
    ...defaultVariables,
    ...variables,
  });
  return data;
};
