// Loading animation
const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

const BlogPostOverview = function ({
  largeHeading = false,
}: {
  largeHeading?: boolean;
}) {
  return (
    <div className="my-4 grid w-full grid-cols-[min-content_1fr] justify-center gap-x-4 gap-y-2 border-2 px-2 py-4">
      <div className="h-32 w-32 rounded-md bg-gray-200" />
      <div>
        <div className="m-0 text-2xl font-bold text-gray-900" />
        <div className="flex items-start justify-start gap-4 text-gray-600">
          <div className="h-2 w-10 rounded-md bg-gray-200" />
          <div className="h-2 w-10 rounded-md bg-gray-200" />
          <div className="h-2 w-10 rounded-md bg-gray-200" />
        </div>
        <div className="mt-6 space-y-4">
          <div className="h-2 w-full rounded-md bg-gray-200" />
          <div className="h-2 w-full rounded-md bg-gray-200" />
          <div className="h-2 w-full rounded-md bg-gray-200" />
          <div className="h-2 w-full rounded-md bg-gray-200" />
        </div>
      </div>
      <div />
      <div className="h-2 w-20 rounded-md bg-gray-200" />
    </div>
  );
};

export function BlogOveriewSkeleton() {
  return (
    <>
      <div
        className={`${shimmer} relative m-4 mx-auto h-full w-5/6 overflow-hidden rounded-xl bg-gray-200 p-2 py-4 shadow-sm lg:w-2/3`}
      >
        <div className="flex flex-col items-start justify-between   truncate rounded-xl bg-white px-4 py-4">
          <BlogPostOverview />
          <BlogPostOverview />
          <BlogPostOverview />
          <BlogPostOverview />
          <BlogPostOverview />
        </div>
      </div>
    </>
  );
}
