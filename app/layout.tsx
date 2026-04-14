import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import QueryProvider from "@/components/QueryProvider";

// Force all fetch requests in this layout and its children to bypass the
// data cache so responses are always fresh.
export const fetchCache = "force-no-store";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My App",
  description: "A Next.js app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Rule #5: 'dark' class on <html> enables .dark selector strategy for all dark: modifiers
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-neutral-100 dark:bg-neutral-950 text-neutral-900 dark:text-white`}
      >
        <div className="flex flex-col min-h-screen">
          {/* Skip link — first focusable element; bypasses nav for keyboard users (WCAG 2.4.1) */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-neutral-900 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none"
          >
            Skip to main content
          </a>
          <Nav />
          <QueryProvider>
            <div className="flex-1">{children}</div>
          </QueryProvider>
        </div>
      </body>
    </html>
  );
}
