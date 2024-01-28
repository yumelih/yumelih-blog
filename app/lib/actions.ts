import connect from "./db";

import Blog from "@/app/lib/models/blogModel";
import { Blog as BType, BlogType } from "./definitions";

connect().then(() => {
  console.log("connection successfull");
});

async function getMdFile(url: string): Promise<string | undefined> {
  const res = await fetch(url);
  if (!res.ok) {
    return;
  }
  const data = await res.text();

  return data;
}

export async function getAllBlogs(): Promise<BlogType> {
  try {
    const blogs: BlogType = await Blog?.find({});
    return blogs;
  } catch (err) {
    console.error(err);
  }
}

export async function getABlog(id: string) {
  try {
    const blog: BType = await Blog?.findById({ _id: id });
    let mdFile;
    if (blog?.blogMd) mdFile = await getMdFile(blog?.blogMd);
    return { blog, mdFile };
  } catch (err) {
    console.error(err);
  }
}
