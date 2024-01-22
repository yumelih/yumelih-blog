import Button from "@/app/ui/button";
import BlogPost from "./blog-post";

export default function BlogOverview() {
  return (
    <main className="mx-auto flex w-5/6 flex-col items-center gap-12 py-12 lg:w-2/3">
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <Button style="pagination">Next</Button>
    </main>
  );
}
