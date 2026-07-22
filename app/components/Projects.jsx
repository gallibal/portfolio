"use client";

import Card from "./ui/Card";
import Badge from "./ui/Badge";
import { ExternalLinkIcon } from "./ui/Icons";

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
    <div className="grid gap-5 sm:grid-cols-2">
      {PROJECTS.map((project) => {
        const CardTag = project.link ? "a" : "div";
        return (
          <Card
            key={project.title}
            as={CardTag}
            {...(project.link
              ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              {project.link && (
                <ExternalLinkIcon className="h-4 w-4 flex-shrink-0 text-zinc-500 transition group-hover:text-cyan-300" />
              )}
            </div>
            <p className="mt-2 flex-1 text-sm leading-6 text-zinc-400">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tech.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            {project.note && (
              <p className="mt-3 text-xs font-medium text-indigo-400">{project.note}</p>
            )}
            <p className="mt-3 text-xs font-medium text-zinc-500">
              {project.link ? "View on GitHub" : "Repository not public"}
            </p>
          </Card>
        );
      })}
    </div>
  );
}
