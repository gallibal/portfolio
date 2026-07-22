"use client";

import Card from "./ui/Card";

const HIGHLIGHTS = [
  { label: "IDF Search & Rescue", value: "2018–2021" },
  { label: "Soldiers led", value: "100+" },
  { label: "Logistics managed", value: "4M NIS" },
  { label: "Commander potential score", value: "Highest" },
];

export default function AboutMe() {
  return (
    <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-start">
      <div className="space-y-4 text-base leading-7 text-zinc-300">
        <p>
          From <span className="font-medium text-indigo-300">Moshav Yashresh</span> to
          the energy of <span className="font-medium text-cyan-300">Tel Aviv</span>, my
          journey has always been about growth, challenge, and purpose.
        </p>
        <p>
          I recently graduated with a B.Sc. in Computer Science from{" "}
          <span className="bg-gradient-to-r from-indigo-300 to-emerald-300 bg-clip-text font-semibold text-transparent">
            The Academic College of Tel Aviv-Yaffo
          </span>
          , where I got to do what I love most: build, solve, and keep learning
          every day.
        </p>
        <p>
          Between 2018 and 2021, I served in the IDF Search and Rescue combat
          unit, where I led and trained a squad in high-pressure conditions,
          managed logistics operations worth{" "}
          <span className="font-semibold text-emerald-300">over 4 million NIS</span>,
          and contributed to a leadership forum focused on optimization and
          logistics.
        </p>
        <p>
          I also received the{" "}
          <span className="font-semibold text-violet-300">
            highest sociometric score for commander potential
          </span>{" "}
          during training. Today I bring that same discipline and curiosity into
          tech, turning complex problems into clear, practical solutions.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {HIGHLIGHTS.map((item) => (
          <Card key={item.label} className="p-4">
            <p className="text-xl font-semibold text-white sm:text-2xl">{item.value}</p>
            <p className="mt-1 text-xs leading-snug text-zinc-400">{item.label}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
