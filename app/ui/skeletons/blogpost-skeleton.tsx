// Loading animation
const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

const BlogPostSmallSkeleton = function ({
  largeHeading = false,
}: {
  largeHeading?: boolean;
}) {
  return (
    <>
      {largeHeading && <div className="h-10 w-1/2 rounded-md bg-gray-200" />}
      <div className="h-7 w-1/3 rounded-md bg-gray-200" />
      <div className="h-3 w-full rounded-md bg-gray-200" />
      <div className="h-3 w-full rounded-md bg-gray-200" />
      <div className="h-3 w-full rounded-md bg-gray-200" />
      <div className="h-3 w-full rounded-md bg-gray-200" />
      <div className="h-3 w-full rounded-md bg-gray-200" />
      <div className="h-3 w-full rounded-md bg-gray-200" />
    </>
  );
};

const BlogImageSkeleton = function () {
  return <div className="h-80 w-2/3 rounded-md bg-gray-200" />;
};

export function BlogpostSkeleton() {
  return (
    <>
      <div
        className={`${shimmer} relative m-4 mx-auto w-5/6 overflow-hidden rounded-xl bg-gray-100 p-2 py-12 shadow-sm lg:w-2/3`}
      >
        <div className="flex flex-col items-start justify-center gap-4 truncate rounded-xl bg-white px-4 py-4">
          <BlogPostSmallSkeleton largeHeading={true} />
          <BlogPostSmallSkeleton />
          <BlogImageSkeleton />
        </div>
      </div>
    </>
  );
}
