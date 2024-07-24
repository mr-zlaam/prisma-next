import prisma from "@/lib/db";
import { slugify } from "@/utils";
import Link from "next/link";
import {} from "react";
import Card, { PostProps } from "../_components/Card";
import { CreatePost } from "@/actions/action";
async function Post() {
  const posts = await prisma.post.findMany({ where: { published: true } });
  const postCount = await prisma.post.count();
  return (
    <>
      <section>
        <h1 className="text-3xl font-bold text-center my-10">
          ALL POSTS:({postCount}){" "}
        </h1>
        <div className="grid grid-cols-3 w-full gap-2">
          {posts.map((post) => (
            <div key={post.id} className="">
              <Card post={post as PostProps} />
            </div>
          ))}
        </div>
        {/* Create form for insterting data in databse using prisma  */}
        <h1 className="text-center my-4 font-bold text-3xl">Create Post</h1>
        <form action={CreatePost} className="flex flex-col gap-10">
          <input
            required
            type="text"
            name="title"
            placeholder="title"
            className="px-4 py-2 bg-transparent border mx-3 rounded "
          />
          <textarea
            required
            name="content"
            className="bg-transparent border p-4 mx-3 rounded"
            cols={20}
            rows={5}
            placeholder="content"
          />
          <div className="flex gap-5  w-fit mx-auto items-center ">
            <label htmlFor="published">isPublished</label>
            <input
              name="published"
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
