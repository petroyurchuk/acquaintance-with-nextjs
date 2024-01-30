import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};
async function getData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    },
  );
  return response.json();
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getData(params.id);
  return {
    title: post.title,
  };
}
const Post = async ({ params }: Props) => {
  const post = await getData(params.id);
  const date = new Date();
  return (
    <div>
      Post {params.id} was created at {date.getDate()}.
      {date.getMonth().toString().length > 1
        ? date.getMonth()
        : `0${date.getMonth() + 1}`}
      .{date.getFullYear()}
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
