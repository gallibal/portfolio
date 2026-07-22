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

export default function Home() {
  const [runawayPos, setRunawayPos] = useState({ left: 16, top: 0 });
  const catAudioRef = useRef<HTMLAudioElement | null>(null);

  const moveRunawayButton = () => {
    const buttonWidth = 180;
    const buttonHeight = 48;
    const margin = 16;
    const maxLeft = Math.max(margin, window.innerWidth - buttonWidth - margin);
    const maxTop = Math.max(margin, window.innerHeight - buttonHeight - margin);
    const left = Math.floor(Math.random() * (maxLeft - margin + 1)) + margin;
    const top = Math.floor(Math.random() * (maxTop - margin + 1)) + margin;
    setRunawayPos({ left, top });
  };

  const playCatSound = () => {
    if (!catAudioRef.current) {
      catAudioRef.current = new Audio(
        "https://upload.wikimedia.org/wikipedia/commons/2/21/Cat_Meow_2.ogg"
      );
      catAudioRef.current.volume = 1;
    }

    const audio = catAudioRef.current;
    audio.currentTime = 0;
    audio.volume = 1;

    audio.play().catch(() => {
      // Fallback if remote audio format/source isn't supported in this browser.
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
          <div className="flex items-center gap-2 text-xs text-zinc-600">
            <button
              type="button"
              onClick={playCatSound}
              className="rounded-full px-2 py-1 transition hover:text-zinc-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
              aria-label="A cow that plays a cat sound"
            >
              🐄 don&apos;t press this
            </button>
          </div>
        </div>
      </footer>

      <motion.button
        type="button"
        onMouseEnter={moveRunawayButton}
        onMouseDown={moveRunawayButton}
        onFocus={moveRunawayButton}
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
