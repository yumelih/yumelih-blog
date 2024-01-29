import { remark } from "remark";
import html from "remark-html";

import connect from "./db";
import Blog from "@/app/lib/models/blogModel";
import { Blog as BType, BlogType } from "./definitions";

connect().then(() => {
  console.log("connection successfull");
});

async function getMdFile(url: string): Promise<string | undefined> {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      return;
    }
    const data = await res.text();

    const processedMd = await remark().use(html).process(data);

    const contentHTML = processedMd.toString();

    return contentHTML;
  } catch (err) {
    console.log(err);
  }
}

export async function getAllBlogs(): Promise<BlogType> {
  try {
    const blogs: BlogType = await Blog?.find({});
    return blogs;
  } catch (err) {
    console.error("Database error", err);
  }
}

interface BlogReturnType {
  blog: BType | null;
  mdFile: string | undefined | null;
  error?: string | null;
}

export async function getABlog(id: string): Promise<BlogReturnType> {
  try {
    let blog: BType | null = null;
    blog = await Blog?.findById({ _id: id });
    let mdFile: string | undefined | null = null;

    if (blog?.blogMd) {
      mdFile = await getMdFile(blog.blogMd);
    }

    // Ensure this function always returns an object of type BlogReturnType
    return { blog, mdFile, error: null };
  } catch (err) {
    console.log(err);

    // Handle the error case by returning an object with the error field populated
    // and the other fields set to their default values
    return { blog: null, mdFile: null, error: (err as Error).message };
  }
}
