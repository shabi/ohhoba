import postsEn from "./posts.json";
import postsZh from "./posts.zh.json";
import redis from "./redis";
import commaNumber from "comma-number";

export type Post = {
  id: string;

  date: string;

  title: string;

  description: string;

  image: string;

  tags: string[];

  views: number;

  viewsFormatted: string;
};

//shape of the HSET in redis
type Views = {
  [key: string]: string;
};

export const getPosts = async (lang = "en") => {
  const allViews: null | Views = redis
    ? await redis.hgetall("views")
    : null;

  const postsData =
    lang === "zh"
      ? postsZh
      : postsEn;

  const posts = postsData.posts.map((post): Post => {
    const views = Number(allViews?.[post.id] ?? 0);

    return {
      ...post,
      views,
      viewsFormatted: commaNumber(views),
    };
  });
  return posts;
};
