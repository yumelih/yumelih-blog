import SubscribeNewslatter from "../subscribe-newslatter";

// Loading animation
const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function SubscribeSkeleton() {
  return (
    <>
      <div
        className={`${shimmer} relative m-4 overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
      >
        <div className="flex flex-col items-center justify-center gap-4 truncate rounded-xl bg-white px-4 py-4">
          <div className="h-10 w-full rounded-md bg-gray-200" />
          <div className="h-10 w-4/5 rounded-md bg-gray-200" />
          <div className="h-10 w-80 rounded-md bg-gray-200" />
          <div className="h-10 w-80 rounded-md bg-gray-200" />
        </div>
      </div>
    </>
  );
}
