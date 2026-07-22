"use client";

import { motion, useReducedMotion } from "framer-motion";
import Button from "./ui/Button";
import { GitHubIcon, LinkedInIcon, MailIcon, ArrowRightIcon } from "./ui/Icons";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/gallibal", Icon: GitHubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gal-libal/", Icon: LinkedInIcon },
  { label: "Email", href: "mailto:gallibal18@gmail.com", Icon: MailIcon },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden px-6 pt-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(56,189,248,0.22),transparent_38%),radial-gradient(circle_at_8%_80%,rgba(99,102,241,0.2),transparent_38%),radial-gradient(circle_at_95%_75%,rgba(56,189,248,0.14),transparent_36%)]" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-[15%] h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"
        animate={
          reduceMotion
            ? undefined
            : { x: [0, 24, -10, 0], y: [0, -14, 8, 0], opacity: [0.2, 0.34, 0.22, 0.2] }
        }
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-[-8rem] right-[10%] h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"
        animate={
          reduceMotion
            ? undefined
            : { x: [0, -18, 12, 0], y: [0, 10, -8, 0], opacity: [0.2, 0.3, 0.24, 0.2] }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <motion.p
          initial={reduceMotion ? undefined : { opacity: 0, y: -10 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80"
        >
          Software Developer
        </motion.p>

        <motion.h1
          initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
          className="mt-4 bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-5xl font-semibold tracking-tight text-transparent sm:text-7xl"
        >
          Gal Libal
        </motion.h1>

        <motion.p
          initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.16 }}
          className="mt-5 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg"
        >
          NOC Engineer at Rapyd, building reliable software across production
          monitoring, mobile apps, and low-level systems — based in Tel Aviv, Israel.
        </motion.p>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.24 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <Button as="a" href="#projects" variant="primary">
            View Projects
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
          <Button as="a" href="#contact" variant="secondary">
            Get in Touch
          </Button>
        </motion.div>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0 }}
          animate={reduceMotion ? undefined : { opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.32 }}
          className="mt-10 flex items-center justify-center gap-3"
        >
          {SOCIALS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700/70 text-zinc-300 transition hover:-translate-y-0.5 hover:border-zinc-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
            >
              <Icon className="h-[18px] w-[18px]" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
