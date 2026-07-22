"use client";

const PROJECTS = [
  {
    title: "SportLink",
    description:
      "A mobile-first, location-based platform for creating and joining sports activities based on location, availability, and skill level.",
    tech: ["React Native", "Node.js", "MySQL", "Google Maps API", "Claude Code"],
    link: "https://github.com/Am1its/Sport-Link",
    note: "Final project",
  },
  {
    title: "S-Language Emulator",
    description:
      "A multi-stage execution environment for the S-language, including parsing, execution logic, and GUI/server-side components.",
    tech: ["Java", "OOP"],
    link: "https://github.com/gallibal/Semulator-A-G",
  },
  {
    title: "Reverse Tic-Tac-Toe",
    description:
      "A configurable desktop game with a dynamically generated board, event-driven UI, and single-player or two-player modes.",
    tech: ["C#", ".NET", "WinForms", "OOP"],
  },
  {
    title: "Knight's Tour Algorithm",
    description:
      "A knight's tour solver built with trees and linked lists, focused on valid board paths and search logic.",
    tech: ["C"],
    link: "https://github.com/gallibal/Chess-Project",
  },
  {
    title: "Donkey Kong - ASCII Game",
    description:
      "A terminal-based ASCII implementation of the classic Donkey Kong game, including movement, obstacles, and game logic.",
    tech: ["C++", "OOP"],
    link: "https://github.com/gallibal/DONKEY-KONG-GAME",
  },
  {
    title: "Portfolio Website",
    description:
      "This site — designed and built as an interactive presentation of my background, experience, and projects.",
    tech: ["Next.js", "React", "TypeScript", "Cursor", "Claude Code"],
    link: "https://github.com/gallibal/portfolio",
  },
];

export default function Projects() {
  return (
    <div className="mt-5">
      <p className="text-sm text-zinc-400">
        A selection of projects showcasing my skills and interests
      </p>

      <div className="relative mt-6 space-y-4">
        {PROJECTS.map((project) => {
          const CardTag = project.link ? "a" : "div";
          return (
            <CardTag
              key={project.title}
              {...(project.link
                ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="block rounded-2xl border border-zinc-700/80 bg-zinc-900/70 p-5 shadow-[0_14px_35px_-20px_rgba(0,0,0,0.9)] transition hover:border-indigo-500/60 hover:bg-gradient-to-br hover:from-indigo-950/40 hover:to-zinc-900/70 sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white sm:text-xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-300 sm:text-base">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-zinc-600/70 bg-zinc-800/70 px-2.5 py-1 text-[11px] font-medium text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.note ? (
                    <p className="mt-3 text-xs font-medium text-indigo-400">
                      {project.note}
                    </p>
                  ) : null}
                </div>
                {project.link && (
                  <div className="flex-shrink-0 mt-1">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-300 transition">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                      </svg>
                    </span>
                  </div>
                )}
              </div>
              {project.link ? (
                <p className="mt-3 text-xs font-medium text-indigo-400">
                  View on GitHub →
                </p>
              ) : (
                <p className="mt-3 text-xs font-medium text-zinc-500">
                  Repository not public
                </p>
              )}
            </CardTag>
          );
        })}
      </div>
    </div>
  );
}
