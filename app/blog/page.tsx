import { Metadata } from "next";
import Link from "next/link";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });
  if (!response.ok) throw new Error("fetch fell");
  return response.json();
}
export const metadata: Metadata = {
  title: "Blog | Next App",
};
const Blog = async () => {
  const posts = await getData();
  return (
    <>
      <h2>This page about blog</h2>;
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Blog;
