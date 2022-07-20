import { POSTS_URL } from '../../config/app-config';
import { FullPost, PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';
import { markdownToHtml } from '../../utils/markdown-to-html';

export const getPost = async (slug: string | string[]): Promise<PostData[]> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${POSTS_URL}&filters[slug][$eq]=${slugString}`;
  const posts = await fetchJson<FullPost>(url);
  const content = await markdownToHtml(posts.data[0].attributes.content);
  const finalContent = { ...posts.data[0].attributes, content };
  return [finalContent];
};
