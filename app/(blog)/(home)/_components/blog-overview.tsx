import Button from "@/app/ui/button";
import BlogPost from "./blog-post";
import { getAllBlogs } from "@/app/lib/actions";
import { Blog } from "@/app/lib/definitions";

export default async function BlogOverview() {
  const blogs = await getAllBlogs();

  return (
    <main className="mx-auto flex w-5/6 flex-col items-center gap-12 py-12 lg:w-2/3">
      {blogs.map((blog: Blog) => {
        return (
          <BlogPost
            key={blog._id}
            id={blog._id}
            title={blog.title}
            posterImage={blog.posterImage}
          />
        );
      })}
      <Button style="pagination">Next</Button>
    </main>
  );
}
