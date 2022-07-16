import { POSTS_URL } from '../../config/app-config';
import { FullPost, PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';
import { markdownToHtml } from '../../utils/markdown-to-html';

export const getPost = async (): Promise<PostData> => {
  const posts = await fetchJson<FullPost>(POSTS_URL);
  const content = await markdownToHtml(posts.data[0].attributes.content);
  const finalContent = { ...posts.data[0].attributes, content };
  return finalContent;
};
