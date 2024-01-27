import connect from "./db";

import Blog from "@/app/lib/models/blogModel";
import { BlogType } from "./definitions";

connect().then(() => {
  console.log("connection successfull");
});

export async function getAllBlogs() {
  try {
    const blogs: BlogType = await Blog.find({});
    return blogs;
  } catch (err) {
    throw new Error("Can't load the blog posts!");
  }
}
