"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Overview" },
  { href: "/about", label: "About" },
  { href: "/settings", label: "Settings" },
];

/**
 * Nav — top-level site navigation bar.
 *
 * Renders the app logo, page links (derived from the `links` array above),
 * and a right-side user controls area. Active link is highlighted with a
 * white underline indicator driven by the current pathname.
 *
 * Usage: included once in `app/layout.tsx`; no props required.
 */
export default function Nav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main"
      className="flex items-center justify-between px-6 py-3 bg-neutral-950 border-b border-neutral-800/60"
    >
      {/* Logo + Nav Links */}
      <div className="flex items-center gap-8">
        {/* Logo — links to home so keyboard users can navigate to it */}
        <Link
          href="/"
          aria-label="Home"
          className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-700 flex items-center justify-center font-bold text-neutral-950 text-base select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
        >
          D
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-6">
          {/* Rule #6: focus-visible on nav links for keyboard accessibility */}
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative text-sm font-medium pb-1 transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 ${
                pathname === href
                  ? "text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:rounded-full after:bg-white"
                  : "text-neutral-400 hover:text-neutral-200"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Right: controls + user */}
      <div className="flex items-center gap-2">
        {/* User icon */}
        <button
          aria-label="User profile"
          className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-neutral-400 hover:text-neutral-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4.5 h-4.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </button>

        {/* Bell icon */}
        <button
          aria-label="Notifications"
          className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-neutral-400 hover:text-neutral-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4.5 h-4.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
        </button>

        {/* User profile chip */}
        <button className="flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 rounded-full pl-1 pr-3 py-1 cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-neutral-400 to-neutral-600 flex items-center justify-center text-xs font-semibold text-white select-none">
            KS
          </div>
          <span className="text-sm text-neutral-200 font-medium">
            Kate Schowalter
          </span>
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 h-3.5 text-neutral-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
