import prisma from "@/lib/db";
import { slugify } from "@/utils";
import Link from "next/link";
import {} from "react";
async function Post() {
  const posts = await prisma.post.findMany();
  const postCount = await prisma.post.count();
  return (
    <>
      <section>
        <h1 className="text-3xl font-bold text-center my-10">
          ALL POSTS:({postCount}){" "}
        </h1>
        {posts.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <h1>{post.slug}</h1>
            <p></p>
            <h1>{post.content}</h1>
            <h1>{post.createdAt.toString()}</h1>
            <Link href={`/posts/${post.slug}`}>Go to Post</Link>
          </div>
        ))}
      </section>
    </>
  );
}

export default Post;
