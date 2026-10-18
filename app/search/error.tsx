
"use client";

export default function SearchError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white px-6 text-gray-900">
      <h2 className="text-xl font-semibold">
        Something went wrong
      </h2>

      <p className="text-center text-gray-600">
        We couldn't load the products. Please try again.
      </p>

      <button
        onClick={() => reset()}
        className="rounded-md bg-black px-5 py-3 text-white hover:bg-gray-800"
      >
        Try again
      </button>
    </main>
  );
}
