"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Section from "./components/ui/Section";
import AboutMe from "./components/AboutMe";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Volunteering from "./components/Volunteering";
import Hobbies from "./components/Hobbies";
import WorldMap from "./components/WorldMap";
import Contact from "./components/Contact";

const RUNAWAY_MARGIN = 20;
const NAV_HEIGHT = 88;
// Keep in sync with `basePath` in next.config.ts — public/ assets referenced
// directly in code (not via next/image) aren't auto-prefixed by Next.js.
const BASE_PATH = "/portfolio";

export default function Home() {
  const [runawayPos, setRunawayPos] = useState({ left: 16, top: 0 });
  const catAudioRef = useRef<HTMLAudioElement | null>(null);
  const runawayRef = useRef<HTMLButtonElement | null>(null);

  const moveRunawayButton = () => {
    const button = runawayRef.current;
    const width = button?.offsetWidth ?? 160;
    const height = button?.offsetHeight ?? 44;

    const minLeft = RUNAWAY_MARGIN;
    const maxLeft = Math.max(minLeft, window.innerWidth - width - RUNAWAY_MARGIN);
    const minTop = NAV_HEIGHT;
    const maxTop = Math.max(minTop, window.innerHeight - height - RUNAWAY_MARGIN);

    const left = Math.floor(Math.random() * (maxLeft - minLeft + 1)) + minLeft;
    const top = Math.floor(Math.random() * (maxTop - minTop + 1)) + minTop;
    setRunawayPos({ left, top });
  };

  const playCatSound = () => {
    if (!catAudioRef.current) {
      catAudioRef.current = new Audio(`${BASE_PATH}/audio/cat-meow.mp3`);
      catAudioRef.current.volume = 1;
    }

    const audio = catAudioRef.current;
    audio.currentTime = 0;
    audio.volume = 1;

    audio.play().catch(() => {
      // Fallback if the local audio file is missing/unsupported in this browser.
      const utterance = new SpeechSynthesisUtterance("Meow");
      utterance.volume = 1;
      utterance.rate = 0.95;
      utterance.pitch = 1.4;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-zinc-100">
      <Nav />
      <Hero />

      <main>
        <Section id="about" eyebrow="Who I Am" title="About Me">
          <AboutMe />
        </Section>

        <Section id="experience" tone="raised" eyebrow="Career" title="Work Experience">
          <WorkExperience />
        </Section>

        <Section id="education" eyebrow="Background" title="Education">
          <Education />
        </Section>

        <Section id="skills" tone="raised" eyebrow="Toolbox" title="Skills">
          <Skills />
        </Section>

        <Section
          id="projects"
          eyebrow="Portfolio"
          title="Projects"
          subtitle="A selection of projects showcasing my skills and interests."
        >
          <Projects />
        </Section>

        <Section id="volunteering" tone="raised" eyebrow="Community" title="Volunteering">
          <Volunteering />
        </Section>

        <Section id="beyond-work" eyebrow="Outside of Work" title="Beyond Work">
          <div className="space-y-10">
            <Hobbies />
            <div>
              <h3 className="text-lg font-semibold text-white">Countries I&apos;ve been to</h3>
              <div className="mt-4">
                <WorldMap />
                <div className="mt-3 rounded-xl border border-zinc-800 bg-zinc-900/60 p-3 text-sm text-zinc-300 sm:p-4 sm:text-base">
                  <p>
                    <span className="font-medium text-zinc-100">Top countries:</span>{" "}
                    Japan, Brazil, Cuba
                  </p>
                  <p className="mt-2">
                    <span className="font-medium text-zinc-100">Top cities:</span>{" "}
                    Medellin (Colombia), Tokyo (Japan), Prague (Czech Republic)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="contact" tone="raised" eyebrow="Say Hello" title="Get in Touch">
          <Contact />
        </Section>
      </main>

      <footer className="border-t border-zinc-800/80 px-6 py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-3 text-center">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Gal Libal. Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>
      </footer>

      <motion.button
        type="button"
        onClick={playCatSound}
        whileHover={{ scale: 1.12, rotate: -6 }}
        whileTap={{ scale: 0.9, rotate: 8 }}
        transition={{ type: "spring", stiffness: 300, damping: 12 }}
        title="Cow button that plays a cat sound"
        aria-label="Cow button that plays a cat sound"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-zinc-700/70 bg-zinc-900/80 text-2xl shadow-[0_10px_30px_-12px_rgba(0,0,0,0.8)] backdrop-blur-md transition-colors hover:border-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
      >
        🐄
      </motion.button>

      <motion.button
        ref={runawayRef}
        type="button"
        onMouseEnter={moveRunawayButton}
        onMouseDown={moveRunawayButton}
        onFocus={moveRunawayButton}
        onTouchStart={moveRunawayButton}
        animate={{ left: runawayPos.left, top: runawayPos.top }}
        transition={{ type: "spring", stiffness: 420, damping: 20 }}
        initial={{ left: 16, top: "82vh" }}
        className="fixed z-40 rounded-full border border-rose-300/60 bg-rose-400/15 px-4 py-2 text-xs font-semibold text-rose-100 shadow-[0_0_24px_-10px_rgba(251,113,133,0.9)] backdrop-blur-md"
      >
        My disatvetage
      </motion.button>
    </div>
  );
}
