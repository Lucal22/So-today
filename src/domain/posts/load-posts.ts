import { request } from 'graphql-request';
import { GRAPHQLURL } from '../../config/app-config';
import { GRAPHQL_QUERY } from '../../graphql/queries';
import { FullPost } from './post';

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

export type RequestResponse = {
  posts: FullPost;
};

export const loadPosts = async (variables: LoadPostVariables = {}): Promise<RequestResponse> => {
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
