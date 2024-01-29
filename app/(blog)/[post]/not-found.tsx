import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex h-screen flex-col items-center justify-center space-y-4">
      <h2 className="m-0 text-center">Something went wrong!</h2>
      <p>Could not found the requested blog post</p>
      <Link href="/" className="rounded-md bg-green-600 px-4 py-3 text-white ">
        Go Back
      </Link>
    </main>
  );
}
