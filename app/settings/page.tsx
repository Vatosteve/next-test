export default function Settings() {
  return (
    <main className="flex flex-col items-start px-8 py-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Settings</h1>
      {/* Rule: standardized to neutral scale; dark: works via .dark class on <html> */}
      <p className="text-neutral-600 dark:text-neutral-400">
        This is the settings page. Configure your preferences here.
      </p>
    </main>
  )
}
