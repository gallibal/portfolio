"use client";

const PROJECTS = [
  {
    title: "SportLink",
    description: "A location-based social sports platform designed to help users create or join games based on location, real-time availability, and verified skill levels.",
    link: "https://github.com/Am1its/Sport-Link",
    note: "Final project",
  },
  {
    title: "Chess Project",
    description: "Built a knight's tour / chess movement project in C, focused on valid board paths and search logic.",
    link: "https://github.com/gallibal/Chess-Project",
  },
  {
    title: "Donkey Kong - ASCII Game",
    description: "A terminal-based ASCII implementation of the classic Donkey Kong game, including movement, obstacles, and game logic.",
    link: "https://github.com/gallibal/DONKEY-KONG-GAME",
  },
  {
    title: "S-Emulator",
    description: "A multi-stage project for an S-language execution environment, including parsing, execution logic, and UI/client-server components.",
    link: "https://github.com/gallibal/Semulator-A-G",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio website, designed and built as an interactive presentation of my background, experience, and projects.",
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
        {PROJECTS.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
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
                {project.note ? (
                  <p className="mt-3 text-xs font-medium text-indigo-400">
                    {project.note}
                  </p>
                ) : null}
              </div>
              <div className="flex-shrink-0 mt-1">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 transition">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                  </svg>
                </span>
              </div>
            </div>
            <p className="mt-3 text-xs font-medium text-indigo-400">
              View on GitHub →
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
