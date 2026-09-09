import { Posts } from "../posts";
import { getPosts } from "../get-posts";
import { ScrollTop } from "../scroll-top";

export const revalidate = 300;

export default async function Home() {
  const posts = await getPosts("zh");

  return (
    <>
      <Posts posts={posts} lang="zh" />
      <ScrollTop />
    </>
  );
}
