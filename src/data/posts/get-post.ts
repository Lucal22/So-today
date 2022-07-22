import { POSTS_URL } from '../../config/app-config';
import { FullPost } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';

export const getPost = async (slug: string | string[]): Promise<FullPost> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${POSTS_URL}&filters[slug][$eq]=${slugString}`;
  const post = await fetchJson<FullPost>(url);
  return post;
};
