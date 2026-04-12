import MetricCard from "@/components/MetricCard";
const focusBars = [
  { height: 48 },
  { height: 62 },
  { height: 38 },
  { height: 90 }, // peak ~11 am
  { height: 55 },
  { height: 72 },
  { height: 44 },
  { height: 68 },
  { height: 52 },
  { height: 80 },
  { height: 60 },
  { height: 74 },
];

const timeLabels = [
  "8 AM",
  "9 AM",
  "10 AM",
  "11 AM",
  "12 PM",
  "1 PM",
  "2 PM",
  "3 PM",
  "4 PM",
  "5 PM",
  "6 PM",
  "7 PM",
  "8 PM",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <main className="max-w-7xl mx-auto px-6 py-7 space-y-5">
        {/* ── Header Row ── */}
        <div className="flex items-center gap-6">
          {/* Title */}
          <div className="flex-1 min-w-0">
            <p className="text-neutral-400 text-xs mb-1 tracking-wide">
              Your daily plan
            </p>
            <h1 className="text-3xl font-semibold text-white leading-tight">
              Stay on Track Today
            </h1>
          </div>

          {/* Motivation pill */}
          <div className="flex items-center gap-3 bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 shrink-0">
            {/* Icon placeholder */}
            <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-neutral-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-white text-sm font-medium">Keep it going!</p>
              <p className="text-neutral-400 text-xs">
                You&apos;ve done all previous tasks!
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Rule #6: focus-visible on action buttons */}
            <button className="flex items-center gap-1.5 text-sm text-neutral-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              Add Widget
            </button>
            <button className="bg-neutral-700 hover:bg-neutral-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950">
              Customize
            </button>
          </div>
        </div>

        {/* ── Daily Goals Row ── */}
        <div className="flex items-center justify-between bg-neutral-900 border border-neutral-800/60 rounded-2xl px-5 py-4">
          <div className="flex items-center gap-4">
            {/* Date badge */}
            <div className="bg-neutral-800 rounded-xl px-3 py-2 text-center min-w-[3.5rem]">
              <p className="text-xl font-bold text-white leading-none">7</p>
              <p className="text-xs text-neutral-400 uppercase tracking-widest mt-0.5">
                Oct
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-white font-medium text-sm">Your Daily Goals</p>
              <span className="text-neutral-400 text-sm">2/5 completed</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-neutral-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-neutral-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* ── Metric Cards ── */}
        <div className="grid grid-cols-3 gap-4">
          {/* Card 1: Deep Work Time */}
          <MetricCard
            title="Deep Work Time"
            background={
              <>
                <div className="absolute inset-0 bg-gradient-radial from-amber-900/50 via-neutral-900/80 to-neutral-950" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-amber-600/20 blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-amber-400/25 blur-2xl" />
              </>
            }
            widget={
              <button className="w-7 h-7 rounded-full bg-neutral-800/60 backdrop-blur-sm flex items-center justify-center hover:bg-neutral-700/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-1 focus-visible:ring-offset-neutral-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 h-3.5 text-neutral-200"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              </button>
            }
          >
            <p className="text-4xl font-bold text-white mt-auto">1h 25m</p>
          </MetricCard>

          {/* Card 2: Attention Quality */}
          <MetricCard
            title="Attention Quality"
            background={
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-amber-950/60 via-orange-900/30 to-neutral-950" />
                <div className="absolute inset-0 flex items-end justify-end">
                  <div className="w-2/3 h-5/6 bg-gradient-to-t from-amber-800/20 via-amber-700/10 to-transparent rounded-tl-full" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent" />
              </>
            }
          >
            <div className="mt-auto">
              <p className="text-4xl font-bold text-white">88%</p>
              <p className="text-amber-400/80 text-xs mt-1">Last 60 min</p>
            </div>
          </MetricCard>

          {/* Card 3: Focus Stability */}
          <MetricCard
            title="Focus Stability"
            className="border border-neutral-800/60"
            widget={
              <span className="text-xs text-neutral-400 bg-neutral-800 rounded-full px-3 py-1">
                Current Score: 64
              </span>
            }
          >
            {/* Bar chart area */}
            <div className="relative flex-1 flex flex-col">
              {/* Peak annotation — Rule #3: ml-[24%] replaces inline style */}
              <div className="relative flex items-center mb-2 ml-[24%]">
                <span className="bg-white text-neutral-950 text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap">
                  Peak: 11 am
                </span>
              </div>

              {/* Dashed rule + bars */}
              <div className="relative flex-1 flex items-end gap-1">
                {/* Rule #3: bottom-[70%] replaces inline style */}
                <div className="absolute left-0 right-0 bottom-[70%] border-t border-dashed border-white/20" />
                {focusBars.map((bar, i) => (
                  <div
                    key={i}
                    className="flex-1 flex flex-col items-center justify-end"
                  >
                    <div
                      className="w-full rounded-sm bg-gradient-to-t from-amber-500/90 to-amber-800/40"
                      style={{ height: `${bar.height}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </MetricCard>
        </div>

        {/* ── Daily Timeline ── */}
        <div className="bg-neutral-900 border border-neutral-800/60 rounded-2xl p-5">
          {/* Timeline header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <h2 className="text-white font-semibold text-sm">
                Daily Timeline
              </h2>
              <span className="w-px h-4 bg-neutral-700" />
              <span className="text-neutral-400 text-sm">
                3 Tasks for today
              </span>
            </div>
            <button className="text-sm text-neutral-300 hover:text-white underline underline-offset-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm">
              Add an Event
            </button>
          </div>

          {/* Time labels */}
          <div className="flex mb-2">
            {timeLabels.map((t) => (
              <div
                key={t}
                className="flex-1 text-xs text-neutral-500 text-left"
              >
                {t}
              </div>
            ))}
          </div>

          {/* Track */}
          <div className="relative h-28 rounded-xl bg-neutral-800/40 overflow-hidden">
            {/* Vertical grid lines — computed % positions must stay as inline styles (dynamic values) */}
            {Array.from({ length: 13 }).map((_, i) => (
              <div
                key={i}
                className="absolute top-0 bottom-0 w-px bg-neutral-800/70"
                style={{ left: `${(i / 12) * 100}%` }}
              />
            ))}

            {/* Task: Plan Weekly Routine – Low Priority (8 AM slot) — Rule #3: arbitrary Tailwind positions */}
            <div className="absolute top-[18%] left-[1%] flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 transition-colors rounded-full px-3 py-2 cursor-pointer">
              <div className="w-5 h-5 rounded-full bg-neutral-700 flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 text-neutral-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                  />
                </svg>
              </div>
              <span className="text-white text-xs font-medium whitespace-nowrap">
                Plan Weekly Routine
              </span>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                <span className="text-neutral-400 text-xs whitespace-nowrap">
                  Low Priority
                </span>
              </div>
            </div>

            {/* Task: Review Project Materials – Important (11 AM-ish slot) */}
            <div className="absolute top-[55%] left-[30%] flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 transition-colors rounded-full px-3 py-2 cursor-pointer">
              <div className="w-5 h-5 rounded-full bg-neutral-700 flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 text-neutral-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
              </div>
              <span className="text-white text-xs font-medium whitespace-nowrap">
                Review Project Materials
              </span>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                <span className="text-neutral-400 text-xs whitespace-nowrap">
                  Important
                </span>
              </div>
            </div>

            {/* Task: Call With Client – High Priority (4 PM slot) */}
            <div className="absolute top-[18%] left-[65%] flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 transition-colors rounded-full px-3 py-2 cursor-pointer">
              <div className="w-5 h-5 rounded-full bg-neutral-700 flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 text-neutral-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
              <span className="text-white text-xs font-medium whitespace-nowrap">
                Call With Client
              </span>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                <span className="text-neutral-400 text-xs whitespace-nowrap">
                  High priority
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
