"use client";

import Image from "next/image";
import WorldMap from "./components/WorldMap";
import Hobbies from "./components/Hobbies";
import WorkExperience from "./components/WorkExperience";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";

type CircleCategory = {
  id: string;
  title: string;
  preview: string;
  content: string;
  desktopPosition: string;
  toneClass: string;
};

const categories: CircleCategory[] = [
  {
    id: "countries",
    title: "Countries I've been to",
    preview: "Places and memories",
    content:
      "Placeholder: Add a short travel story, favorite destinations, and a few memorable moments from different countries.",
    desktopPosition: "top-[5%] left-1/2 -translate-x-1/2",
    toneClass:
      "from-sky-500/30 via-indigo-500/10 to-slate-950 border-sky-300/30 hover:border-sky-200/70",
  },
  {
    id: "hobbies",
    title: "Hobbies",
    preview: "What I enjoy outside work",
    content:
      "Placeholder: Share your hobbies here, such as fitness, gaming, photography, music, reading, or side coding projects.",
    desktopPosition: "top-[28%] right-[8%]",
    toneClass:
      "from-fuchsia-500/30 via-violet-500/10 to-slate-950 border-fuchsia-300/30 hover:border-fuchsia-200/70",
  },
  {
    id: "volunteering",
    title: "Volunteering",
    preview: "Community and impact",
    content:
      "• Beit Dafna Residence – volunteering with adults with intellectual disabilities.\n• Mentor, Perach, Bat Yam - Mentored 4 elementary students in English and Math, boosting confidence and self-esteem.\n• Mentor, Children of Incarcerated Parent, Tel Aviv – Mentored a child with personal and social challenges, providing support and guidance for personal growth.",
    desktopPosition: "bottom-[28%] right-[8%]",
    toneClass:
      "from-emerald-500/30 via-cyan-500/10 to-slate-950 border-emerald-300/30 hover:border-emerald-200/70",
  },
  {
    id: "about",
    title: "About Me",
    preview: "Quick personal intro",
    content:
      "From Moshav Yashresh to the energy of Tel Aviv, my journey has always been about growth, challenge, and purpose. Today, I am in my third year of Computer Science at The Academic College of Tel Aviv-Yaffo, where I get to do what I love most: build, solve, and keep learning every day. My passion for tech comes from the same mindset that shaped me long before code. Between 2018 and 2021, I served in the IDF Search and Rescue combat unit, where I led and trained a squad in high-pressure conditions, managed logistics operations worth over 4 million NIS, and contributed to a leadership forum focused on optimization and logistics. I also received the highest sociometric score for commander potential during training. That experience taught me to stay sharp under pressure, lead with responsibility, and always look for smarter ways to improve systems. Now, I bring that same discipline and curiosity into tech, turning complex problems into clear, practical solutions.",
    desktopPosition: "bottom-[28%] left-[8%]",
    toneClass:
      "from-violet-500/30 via-indigo-500/10 to-slate-950 border-violet-300/30 hover:border-violet-200/70",
  },
  {
    id: "work",
    title: "Work Experience",
    preview: "Professional journey",
    content:
      "Placeholder: Add your role details, responsibilities, and what you've learned across your work experience.",
    desktopPosition: "top-[28%] left-[8%]",
    toneClass:
      "from-amber-500/30 via-orange-500/10 to-slate-950 border-amber-300/30 hover:border-amber-200/70",
  },
  {
    id: "projects",
    title: "Projects",
    preview: "What I've built",
    content: "",
    desktopPosition: "bottom-[5%] left-1/2 -translate-x-1/2",
    toneClass:
      "from-cyan-500/30 via-blue-500/10 to-slate-950 border-cyan-300/30 hover:border-cyan-200/70",
  },
];

export default function Home() {
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderMessage, setSenderMessage] = useState("");
  const [runawayPos, setRunawayPos] = useState({ left: 16, top: 0 });
  const catAudioRef = useRef<HTMLAudioElement | null>(null);
  const activeCategory = categories.find((item) => item.id === activeCategoryId);

  const handleSendMessage = () => {
    const subject = encodeURIComponent(`Message from ${senderName || "a visitor"}`);
    const body = encodeURIComponent(
      senderMessage || "Hi Gal, I wanted to leave you a message."
    );
    window.location.href = `mailto:gallibal18@gmail.com?subject=${subject}&body=${body}`;
  };

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
    <div className="relative min-h-screen overflow-hidden bg-[#030712] text-zinc-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-8%,rgba(56,189,248,0.22),transparent_34%),radial-gradient(circle_at_5%_75%,rgba(99,102,241,0.24),transparent_36%),radial-gradient(circle_at_96%_72%,rgba(217,70,239,0.18),transparent_36%),linear-gradient(to_bottom,rgba(2,6,23,0.92),rgba(2,6,23,1))]" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-[20%] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"
        animate={{ x: [0, 18, -8, 0], y: [0, -10, 6, 0], opacity: [0.2, 0.35, 0.22, 0.2] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-[-6rem] right-[10%] h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl"
        animate={{ x: [0, -16, 10, 0], y: [0, 8, -6, 0], opacity: [0.2, 0.32, 0.24, 0.2] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-[38%] right-[26%] h-44 w-44 rounded-full bg-fuchsia-400/15 blur-3xl"
        animate={{ x: [0, 10, -12, 0], y: [0, -8, 4, 0], opacity: [0.14, 0.24, 0.16, 0.14] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <main className="relative mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col items-center justify-center overflow-hidden px-4 py-4 sm:px-6 md:h-screen md:py-3">
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-4 text-center sm:mb-5"
        >
          <h1 className="mt-1 bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-5xl">
            Gal Libal
          </h1>
          <div className="mx-auto mt-3 h-px w-32 bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent" />
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
            <a
              href="https://github.com/gallibal"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-600/80 bg-zinc-900/60 px-3 py-1.5 text-xs font-medium text-zinc-200 backdrop-blur transition hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-zinc-800/70"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/gal-libal/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-600/80 bg-zinc-900/60 px-3 py-1.5 text-xs font-medium text-zinc-200 backdrop-blur transition hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-zinc-800/70"
            >
              LinkedIn
            </a>
            <a
              href="mailto:gallibal18@gmail.com"
              className="rounded-full border border-zinc-600/80 bg-zinc-900/60 px-3 py-1.5 text-xs font-medium text-zinc-200 backdrop-blur transition hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-zinc-800/70"
            >
              Email
            </a>
          </div>
        </motion.header>

        <section className="relative flex w-full flex-1 items-center justify-center min-h-0">
          <div
            className={`relative mx-auto hidden aspect-square w-full max-w-[min(92vw,620px)] transition-all duration-500 md:block ${
              activeCategory ? "scale-[0.97] opacity-40 blur-[3px]" : "scale-100 opacity-100"
            }`}
          >
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-[22%] rounded-full border border-zinc-700/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-[35%] rounded-full border border-zinc-700/30"
              animate={{ rotate: -360 }}
              transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            />
            <div className="pointer-events-none absolute inset-[48%] rounded-full border border-cyan-300/20 bg-cyan-200/5 shadow-[0_0_90px_-24px_rgba(34,211,238,0.5)]" />
            <motion.button
              type="button"
              onClick={() => setIsMessageOpen(true)}
              className="absolute left-1/2 top-1/2 z-20 text-3xl drop-shadow-[0_0_14px_rgba(255,255,255,0.45)] transition hover:scale-110"
              animate={{
                x: [0, 120, 0, -120, 0],
                y: [-120, 0, 120, 0, -120],
                rotate: [-8, 6, -6, 8, -8],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              aria-label="Leave a message"
            >
              🕊️
            </motion.button>
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                type="button"
                onClick={() => setActiveCategoryId(category.id)}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 + index * 0.06 }}
                whileHover={{ y: -5, scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className={`group absolute h-[clamp(8rem,9vw,9.25rem)] w-[clamp(8rem,9vw,9.25rem)] rounded-full border bg-gradient-to-br p-3 text-center shadow-[0_28px_70px_-28px_rgba(0,0,0,0.95)] backdrop-blur-md transition-all duration-500 ${
                  category.toneClass
                } ${
                  category.desktopPosition
                } ${
                  activeCategoryId === category.id
                    ? "ring-2 ring-white/40 shadow-[0_0_70px_-25px_rgba(125,211,252,0.8)]"
                    : ""
                }`}
              >
                <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_18%,rgba(255,255,255,0.36),transparent_40%)] opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
                <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_48%)]" />
                <span className="block text-xs font-semibold tracking-wide text-zinc-100 sm:text-sm">
                  {category.title}
                </span>
              </motion.button>
            ))}
          </div>

          <div
            className={`grid grid-cols-1 gap-3 px-2 transition-all duration-500 md:hidden ${
              activeCategory ? "opacity-40 blur-[1px]" : "opacity-100"
            }`}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                type="button"
                onClick={() => setActiveCategoryId(category.id)}
                whileTap={{ scale: 0.98 }}
                className={`rounded-full border bg-gradient-to-br px-6 py-4 text-center shadow-[0_18px_40px_-28px_rgba(0,0,0,0.95)] transition-all duration-300 ${category.toneClass}`}
              >
                <span className="block text-sm font-semibold text-zinc-100">
                  {category.title}
                </span>
              </motion.button>
            ))}
          </div>

          <AnimatePresence>
            {activeCategory && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="pointer-events-auto fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3 backdrop-blur-sm sm:p-4 md:p-6"
                onClick={() => setActiveCategoryId(null)}
              >
                <motion.article
                  initial={{ opacity: 0, scale: 0.92, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 8 }}
                  transition={{ duration: 0.32, ease: "easeOut" }}
                  onClick={(event) => event.stopPropagation()}
                  className="pointer-events-auto relative flex max-h-[calc(100vh-60px)] w-full max-w-2xl flex-col overflow-hidden rounded-[2.2rem] border border-zinc-600/70 bg-zinc-900/90 shadow-[0_40px_110px_-40px_rgba(14,116,144,0.6)] backdrop-blur-xl"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(125,211,252,0.18),transparent_30%),radial-gradient(circle_at_88%_100%,rgba(192,132,252,0.16),transparent_28%)]" />
                  <div className="relative flex min-h-0 flex-1 flex-col">
                    <div className="overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">
                      <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-400">
                        {activeCategory.preview}
                      </p>
                      <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                        {activeCategory.title}
                      </h2>
                      {activeCategory.id === "countries" ? (
                        <div className="mt-4">
                          <WorldMap />
                          <div className="mt-3 rounded-xl border border-zinc-800 bg-zinc-900/60 p-3 text-sm text-zinc-300 sm:p-4 sm:text-base">
                            <p>
                              <span className="font-medium text-zinc-100">
                                Top countries:
                              </span>{" "}
                              Japan, Brazil, Cuba
                            </p>
                            <p className="mt-2">
                              <span className="font-medium text-zinc-100">
                                Top cities:
                              </span>{" "}
                              Medellin (Colombia), Tokyo (Japan), Prague (Czech
                              Republic)
                            </p>
                          </div>
                        </div>
                      ) : activeCategory.id === "hobbies" ? (
                        <Hobbies />
                      ) : activeCategory.id === "work" ? (
                        <WorkExperience />
                      ) : activeCategory.id === "about" ? (
                        <AboutMe />
                      ) : activeCategory.id === "projects" ? (
                        <Projects />
                      ) : activeCategory.id === "volunteering" ? (
                        <ul className="mt-4 max-w-xl space-y-3 text-sm leading-6 text-zinc-300 sm:text-base">
                          {activeCategory.content.split("\n").map((item, index) => (
                            <li key={index} className="flex gap-3">
                              <span className="flex-shrink-0 mt-0.5">•</span>
                              <span>{item.replace(/^• /, "")}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-300 sm:text-base">
                          {activeCategory.content}
                        </p>
                      )}
                    </div>

                    <div className="shrink-0 border-t border-zinc-700/50 bg-gradient-to-t from-zinc-900/95 to-zinc-900/80 p-4 backdrop-blur-sm sm:p-5">
                      <button
                        type="button"
                        onClick={() => setActiveCategoryId(null)}
                        className="w-full rounded-full border border-zinc-500/80 bg-zinc-900/70 px-5 py-2.5 text-sm font-medium text-zinc-100 transition hover:border-zinc-300 hover:bg-zinc-800"
                      >
                        Back to circles
                      </button>
                    </div>
                  </div>
                </motion.article>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>

      <button
        type="button"
        onClick={playCatSound}
        className="fixed top-1/2 right-4 z-40 -translate-y-1/2 cursor-pointer bg-transparent p-0 transition hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50"
        aria-label="Cow that plays cat sound"
      >
        <span className="text-5xl leading-none">🐄</span>
      </button>

      <AnimatePresence>
        {isMessageOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="w-full max-w-md rounded-2xl border border-zinc-600/70 bg-zinc-900/95 p-5 shadow-2xl"
            >
              <h3 className="text-lg font-semibold text-white">Leave me a message</h3>
              <p className="mt-1 text-xs text-zinc-400">
                Your message will open in your email app.
              </p>
              <input
                type="text"
                value={senderName}
                onChange={(event) => setSenderName(event.target.value)}
                placeholder="Your name"
                className="mt-4 w-full rounded-lg border border-zinc-700 bg-zinc-950/80 px-3 py-2 text-sm text-zinc-100 outline-none placeholder:text-zinc-500 focus:border-cyan-300/60"
              />
              <textarea
                value={senderMessage}
                onChange={(event) => setSenderMessage(event.target.value)}
                placeholder="Write your message..."
                rows={4}
                className="mt-3 w-full resize-none rounded-lg border border-zinc-700 bg-zinc-950/80 px-3 py-2 text-sm text-zinc-100 outline-none placeholder:text-zinc-500 focus:border-cyan-300/60"
              />
              <div className="mt-4 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsMessageOpen(false)}
                  className="rounded-full border border-zinc-600 px-4 py-2 text-xs font-medium text-zinc-300 transition hover:bg-zinc-800"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSendMessage}
                  className="rounded-full border border-cyan-300/60 bg-cyan-400/15 px-4 py-2 text-xs font-medium text-cyan-100 transition hover:bg-cyan-400/25"
                >
                  Send
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onMouseEnter={moveRunawayButton}
        onMouseDown={moveRunawayButton}
        onFocus={moveRunawayButton}
        animate={{ left: runawayPos.left, top: runawayPos.top }}
        transition={{ type: "spring", stiffness: 420, damping: 20 }}
        initial={{ left: 16, top: "82vh" }}
        className="fixed z-50 rounded-full border border-rose-300/60 bg-rose-400/15 px-4 py-2 text-xs font-semibold text-rose-100 shadow-[0_0_24px_-10px_rgba(251,113,133,0.9)] backdrop-blur-md"
      >
        My disatvetage
      </motion.button>
    </div>
  );
}
