"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className="rounded-md bg-green-600 px-4 py-3 text-white "
      >
        Try again
      </button>
    </main>
  );
}
