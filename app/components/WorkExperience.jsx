"use client";

import Card from "./ui/Card";

const TIMELINE = [
  {
    year: "2025 – Present",
    role: "NOC Engineer",
    workplace: "Rapyd",
    description: [
      "Monitor production systems and respond to real-time production incidents and alerts.",
      "Investigate issues using APIs, logs, monitoring tools, and LLM-based tools for faster technical analysis.",
      "Collaborate with engineering teams to escalate and resolve complex technical problems.",
      "Designed and built an internal status page giving the team real-time visibility into production systems, using Claude Code and Antigravity.",
    ],
    isCurrent: true,
  },
];

export default function WorkExperience() {
  return (
    <div className="relative pl-6 sm:pl-8">
      <div className="absolute top-0 bottom-0 left-2 w-px bg-gradient-to-b from-indigo-400/70 via-zinc-600 to-zinc-700 sm:left-3" />

      <div className="space-y-5 sm:space-y-6">
        {TIMELINE.map((item) => (
          <Card
            as="article"
            key={item.year}
            className={`relative ${
              item.isCurrent ? "border-indigo-500/60 bg-gradient-to-br from-indigo-950/40 to-zinc-900/70" : ""
            }`}
          >
            <span className="absolute top-6 -left-[1.42rem] h-3.5 w-3.5 rounded-full border-2 border-slate-950 bg-indigo-400 shadow-[0_0_0_6px_rgba(79,70,229,0.2)] sm:-left-[1.73rem]" />

            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold tracking-tight text-indigo-300 sm:text-base">
                  {item.year}
                </p>
                <h3 className="mt-1 text-xl font-semibold text-white sm:text-2xl">
                  {item.role}
                </h3>
                <p className="mt-1 text-base font-medium text-zinc-200 sm:text-lg">
                  {item.workplace}
                </p>
              </div>
              {item.isCurrent && (
                <span className="flex-shrink-0 rounded-full border border-indigo-500/40 bg-indigo-500/20 px-3 py-1 text-xs font-semibold text-indigo-300">
                  Current
                </span>
              )}
            </div>

            <ul className="mt-4 space-y-2">
              {item.description.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-6 text-zinc-300 sm:text-base">
                  <span className="mt-1 flex-shrink-0 text-indigo-400">→</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}
