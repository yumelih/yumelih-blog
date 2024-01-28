import { getABlog } from "@/app/lib/actions";
import BlogMarkdown from "./_components/blog-markdown";

export default async function Page({ params }: { params: { post: string } }) {
  const postId = params.post;
  const { mdFile } = await getABlog(postId);

  return (
    <div className="mx-auto flex w-5/6 flex-col items-center gap-12 py-12 lg:w-2/3">
      <BlogMarkdown mdURL={mdFile} />
    </div>
  );
}
