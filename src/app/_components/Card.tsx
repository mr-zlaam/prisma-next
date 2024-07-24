import Link from "next/link";
import React from "react";
export interface PostProps {
  id: string;
  title: string;
  slug: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
}
export default function Card({ post }: { post: PostProps }): JSX.Element {
  return (
    <div className=" w-[400px] mx-3 block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        {post.title}
      </h5>
      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        {post.content}{" "}
      </p>
      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        Published: {post.createdAt.toLocaleDateString()}
      </p>
      <Link
        href={`/posts/${post.slug}`}
        className="bg-blue-500 py-2 px-4 w-fit mx-auto rounded cursor-pointer"
      >
        Go to Post
      </Link>
    </div>
  );
}
