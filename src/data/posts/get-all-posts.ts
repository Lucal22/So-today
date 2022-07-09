import { POSTS_URL } from "../../config/app-config";
import { FullPost } from "../../domain/posts/post";
import { fetchJson } from "../../utils/fetch-json";

export const getAllPosts = async (query = ''): Promise<FullPost> => {
  const url = `${POSTS_URL}&${query}`
  const posts = await fetchJson<FullPost>(url)
  return posts;
}
