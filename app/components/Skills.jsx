"use client";

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
    <div className="mt-5 space-y-5">
      {GROUPS.map((group) => (
        <div key={group.title}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300/80">
            {group.title}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1.5 text-xs font-medium text-amber-100 sm:text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
