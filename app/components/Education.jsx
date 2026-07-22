"use client";

import Card from "./ui/Card";

const HIGHLIGHTS = [
  { course: "Java Application Development", grade: 100 },
  { course: "Programming in C", grade: 96 },
  { course: "C# and .NET", grade: 91 },
  { course: "OOP in C++", grade: 88 },
];

export default function Education() {
  return (
    <div className="relative pl-6 sm:pl-8">
      <div className="absolute top-0 bottom-0 left-2 w-px bg-gradient-to-b from-emerald-400/70 via-zinc-600 to-zinc-700 sm:left-3" />

      <Card as="article" className="relative border-emerald-500/50 bg-gradient-to-br from-emerald-950/40 to-zinc-900/70">
        <span className="absolute top-6 -left-[1.42rem] h-3.5 w-3.5 rounded-full border-2 border-slate-950 bg-emerald-400 shadow-[0_0_0_6px_rgba(16,185,129,0.2)] sm:-left-[1.73rem]" />

        <p className="text-sm font-semibold tracking-tight text-emerald-300 sm:text-base">
          2023 – July 2026
        </p>
        <h3 className="mt-1 text-xl font-semibold text-white sm:text-2xl">
          B.Sc. Computer Science
        </h3>
        <p className="mt-1 text-base font-medium text-zinc-200 sm:text-lg">
          The Academic College of Tel Aviv-Yaffo
        </p>
        <p className="mt-3 text-sm leading-6 text-zinc-300 sm:text-base">
          Focus on programming languages and software development.
        </p>

        <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.course}
              className="rounded-xl border border-zinc-700/80 bg-zinc-900/60 px-3 py-2.5"
            >
              <p className="text-[11px] leading-snug text-zinc-400">{item.course}</p>
              <p className="mt-1 text-lg font-semibold text-emerald-300">{item.grade}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
