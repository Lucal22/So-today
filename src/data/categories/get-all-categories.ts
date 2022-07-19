import { CATEGORIES_URL } from '../../config/app-config';
import { FullCategory } from '../../domain/categories/categories';
import { fetchJson } from '../../utils/fetch-json';

export const getAllCategories = async (): Promise<FullCategory> => {
  const url = `${CATEGORIES_URL}`;
  const categories = await fetchJson<FullCategory>(url);
  return categories;
};
