"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const HOBBIES = [
  {
    id: "travel",
    icon: "🌍",
    label: "Traveling the world",
    title: "Traveling the world",
    description:
      "I've visited over 25 countries across 5 continents. Exploring new cultures, food, and landscapes is what drives me.",
  },
  {
    id: "friends",
    icon: "👥",
    label: "Friends & social life",
    title: "Friends & social life",
    description:
      "The people in my life are everything. I value deep connections and making memories together.",
  },
  {
    id: "tv",
    icon: "📺",
    label: "TV Series",
    title: "TV Series",
    description:
      "From drama to sci-fi — I love getting lost in a great story. Always looking for the next binge-worthy show.",
  },
  {
    id: "history",
    icon: "📚",
    label: "History",
    title: "History",
    description:
      "Understanding the past helps me make sense of the present. I'm fascinated by how civilizations rise and fall.",
  },
];

export default function Hobbies() {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="mt-5">
      <div className="grid grid-cols-2 gap-4 sm:gap-5">
        {HOBBIES.map((hobby) => {
          const isActive = activeId === hobby.id;

          return (
            <button
              key={hobby.id}
              type="button"
              onClick={() => setActiveId((prev) => (prev === hobby.id ? null : hobby.id))}
              className="group flex flex-col items-center"
            >
              <motion.div
                animate={isActive ? { rotateY: 180 } : { rotateY: 0 }}
                transition={{ duration: 0.55, ease: "easeInOut" }}
                className="relative h-28 w-28 [perspective:900px] sm:h-32 sm:w-32"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/85 text-3xl shadow-[0_12px_28px_-12px_rgba(0,0,0,0.85)] [backface-visibility:hidden]">
                  {hobby.icon}
                </div>
                <div className="absolute inset-0 flex items-center justify-center rounded-full border border-indigo-400/60 bg-zinc-800 text-sm font-medium text-zinc-100 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  Open
                </div>
              </motion.div>
              <span className="mt-2 text-center text-xs text-zinc-300 sm:text-sm">
                {hobby.label}
              </span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {activeId && (
          <motion.article
            key={activeId}
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mt-6 rounded-2xl border border-zinc-700 bg-zinc-900/70 p-5 text-left shadow-xl"
          >
            <h3 className="text-lg font-semibold text-white">
              {HOBBIES.find((item) => item.id === activeId)?.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-zinc-300 sm:text-base">
              {HOBBIES.find((item) => item.id === activeId)?.description}
            </p>
          </motion.article>
        )}
      </AnimatePresence>
    </div>
  );
}
