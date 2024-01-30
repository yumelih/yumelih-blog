import { getABlog } from "@/app/lib/actions";
import BlogMarkdown from "./_components/blog-markdown";
import SubscribeNewslatter from "@/app/ui/subscribe-newslatter";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { post: string } }) {
  const postId = params.post;
  const { mdFile } = await getABlog(postId);

  if (!mdFile) {
    notFound();
  }

  return (
    <>
      <div className="mx-auto flex w-5/6 flex-col items-center gap-12 py-12 lg:w-2/3">
        <BlogMarkdown mdContent={mdFile as string} />
      </div>
      <div>
        <SubscribeNewslatter />
      </div>
    </>
  );
}
