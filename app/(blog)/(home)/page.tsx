import BlogOverview from "./_components/blog-overview";
import SubscribeNewslatter from "../../ui/subscribe-newslatter";
import { Suspense } from "react";
import { BlogOveriewSkeleton } from "@/app/ui/skeletons/blogOverview-skeleton";

export default function Home() {
  return (
    <div>
      <SubscribeNewslatter />
      <Suspense fallback={<BlogOveriewSkeleton />}>
        <BlogOverview />
      </Suspense>
    </div>
  );
}
