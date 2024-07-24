import prisma from "@/lib/db";
import Link from "next/link";
import {} from "react";
type IDTYPE = {
  params: {
    id: string;
  };
};
async function Post({ params }: IDTYPE) {
  const post = await prisma.post.findUnique({
    where: {
      slug: params.id,
    },
  });
  return (
    <>
      <section>
        <h1 className="text-3xl font-bold text-center my-10"></h1>
        <h1>{post?.title}</h1>
        <h1>{post?.content}</h1>
        <h1 className="w-full flex gap-3">
          {post?.published ? "published" : "draft"}:
          {post?.createdAt.toLocaleTimeString()},
          {post?.createdAt.toLocaleDateString()}
        </h1>
      </section>
    </>
  );
}

export default Post;
