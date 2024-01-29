import Button from "@/app/ui/button";

export default function SubscribeNewslatter() {
  return (
    <div className="flex w-full flex-col items-center space-y-3 bg-gray-300 px-4 py-8">
      <h1 className="m-0 text-3xl font-bold text-gray-900">
        DevBlog - A Blog Template Made For Developers
      </h1>
      <p className="text-gray-700">
        Welcome to my blog. Subscribe and get my latest blog post in your inbox
      </p>
      <div className="w-2/5 space-y-4 lg:flex lg:items-center lg:gap-2 lg:space-y-0">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter email"
          className="w-full flex-grow-[2] border-[1px] border-gray-400 px-2 py-2 lg:w-auto"
        />
        <Button style="additional">Subscribe</Button>
      </div>
    </div>
  );
}
