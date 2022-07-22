import { request } from 'graphql-request';
import { GRAPHQL_URL } from '../config/app-config';
import { GRAPHQL_CATEGORIES } from '../graphql/queries';
import { FullCategory } from '../domain/categories/categories';

export type RequestCategoryResponse = {
  categories: FullCategory;
};

export const loadCategories = async (): Promise<RequestCategoryResponse> => {
  const data = await request(GRAPHQL_URL, GRAPHQL_CATEGORIES);
  return data;
};
