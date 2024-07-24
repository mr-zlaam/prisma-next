"use server";

import prisma from "@/lib/db";
import { slugify } from "@/utils";
import { revalidatePath } from "next/cache";

export async function CreatePost(formData: FormData) {
  //validation
  if (!formData.get("title") || !formData.get("content")) {
    return;
  }

  await prisma.post.create({
    data: {
      title: formData.get("title") as string,
      slug: slugify(formData.get("title") as string),
      content: formData.get("content") as string,
      published: formData.get("published") === "on" ? true : false,
    },
  });
  revalidatePath("/posts");
}
// Updating post

export async function UpdatePost(formData: FormData) {
  await prisma.post.update({
    where: {
      slug: formData.get("slug") as string,
    },
    data: {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      published: formData.get("published") === "on" ? true : false,
    },
  });
}

// Deleting post
export async function DeletePost(slug: string) {
  await prisma.post.delete({
    where: {
      slug,
    },
  });
}
