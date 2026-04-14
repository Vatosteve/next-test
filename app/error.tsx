"use client";

// Error boundary for the root layout — catches runtime errors in the component tree.
// Must be a Client Component per Next.js requirement.
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="flex flex-col items-center justify-center min-h-[60vh] gap-4 px-8"
    >
      <h2 className="text-2xl font-bold text-neutral-100">
        Something went wrong
      </h2>
      <p className="text-neutral-400 text-sm">{error.message}</p>
      <button
        onClick={reset}
        className="px-4 py-2 rounded-md bg-amber-500 hover:bg-amber-400 text-neutral-950 font-medium text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
      >
        Try again
      </button>
    </main>
  );
}
