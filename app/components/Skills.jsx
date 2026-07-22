"use client";

import Badge from "./ui/Badge";

const GROUPS = [
  {
    title: "Languages",
    skills: ["Java", "C#", "C++", "C", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Docker", "Postman", "APIs", "Monitoring Tools", "Git", "GitHub"],
  },
  {
    title: "AI-Assisted Workflow",
    skills: ["Cursor", "Claude Code", "Antigravity"],
  },
];

export default function Skills() {
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {GROUPS.map((group) => (
        <div key={group.title} className="rounded-2xl border border-zinc-700/70 bg-zinc-900/60 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300/80">
            {group.title}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <Badge key={skill} className="border-amber-500/30 bg-amber-500/10 text-amber-100">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
