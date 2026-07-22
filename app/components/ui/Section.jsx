"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Section({
  id,
  eyebrow = "",
  title = "",
  subtitle = "",
  tone = "plain",
  className = "",
  children,
}) {
  const reduceMotion = useReducedMotion();

  const toneClass =
    tone === "raised"
      ? "bg-zinc-950/40"
      : tone === "line"
        ? "border-t border-zinc-800/80"
        : "";

  return (
    <section id={id} className={`relative scroll-mt-20 py-20 sm:py-28 ${toneClass} ${className}`}>
      <div className="mx-auto w-full max-w-5xl px-6">
        {(eyebrow || title) && (
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-12 max-w-2xl"
          >
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && <p className="mt-3 text-base leading-7 text-zinc-400">{subtitle}</p>}
          </motion.div>
        )}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
