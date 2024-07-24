import prisma from "@/lib/db";
import { slugify } from "@/utils";
import Link from "next/link";
import {} from "react";
import Card, { PostProps } from "../_components/Card";
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
          <div key={post.id} className="grid grid-cols-3">
            <Card post={post as PostProps} />
          </div>
        ))}
        {/* Create form for insterting data in databse using prisma  */}
        <h1 className="text-center my-4 font-bold text-3xl">Create Post</h1>
        <form action={""} className="flex flex-col gap-10">
          <input
            type="text"
            placeholder="title"
            className="px-4 py-2 bg-transparent border mx-3 rounded "
          />
          <input
            type="text"
            placeholder="slug"
            className="px-4 py-2 bg-transparent border mx-3 rounded "
          />
          <textarea
            className="bg-transparent border p-4 mx-3 rounded"
            cols={20}
            rows={5}
            placeholder="content"
          />
          <div className="flex gap-5  w-fit mx-auto items-center ">
            <label htmlFor="published">isPublished</label>
            <input
              id="published"
              type="checkbox"
              className="bg-blue-500 py-2 px-4 w-fit mx-auto rounded cursor-pointer my-2"
            />
          </div>
          <input
            type="submit"
            className="bg-blue-500 py-2 px-4 w-fit mx-auto rounded cursor-pointer my-2"
          />
        </form>
      </section>
    </>
  );
}

export default Post;
