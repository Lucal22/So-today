import { POSTS_URL } from "../../config/app-config";
import { FullPost } from "../../domain/posts/post";
import { fetchJson } from "../../utils/fetch-json";

export const getAllPosts = async (): Promise<FullPost> => {
  const posts = await fetchJson<FullPost>(POSTS_URL)
  return posts;
}
