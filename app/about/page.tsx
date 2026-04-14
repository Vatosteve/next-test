import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | My App",
  description: "Learn more about this project.",
};

export default function About() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="flex flex-col items-start px-8 py-12 max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold mb-4">About</h1>
      {/* Rule: standardized to neutral scale; dark: works via .dark class on <html> */}
      <p className="text-neutral-600 dark:text-neutral-400">
        This is the about page. Add information about your project or team here.
      </p>
    </main>
  );
}
