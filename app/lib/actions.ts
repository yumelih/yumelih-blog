import connect from "./db";

import Blog from "@/app/lib/models/blogModel";
import { Blog as BType, BlogType } from "./definitions";

connect().then(() => {
  console.log("connection successfull");
});

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
    return blog;
  } catch (err) {
    console.error(err);
  }
}
