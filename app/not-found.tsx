import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found | My App",
};

// Rendered when notFound() is called or a route segment has no match.
export default function NotFound() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="flex flex-col items-center justify-center min-h-[60vh] gap-4 px-8"
    >
      <h2 className="text-2xl font-bold text-neutral-100">Page not found</h2>
      <p className="text-neutral-400 text-sm">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="px-4 py-2 rounded-md bg-amber-500 hover:bg-amber-400 text-neutral-950 font-medium text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
      >
        Go home
      </Link>
    </main>
  );
}
