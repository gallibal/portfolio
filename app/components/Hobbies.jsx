"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Card from "./ui/Card";

const HOBBIES = [
  {
    id: "travel",
    icon: "🌍",
    title: "Traveling the world",
    description:
      "I've visited over 25 countries across 5 continents. Exploring new cultures, food, and landscapes is what drives me.",
  },
  {
    id: "friends",
    icon: "👥",
    title: "Friends & social life",
    description:
      "The people in my life are everything. I value deep connections and making memories together.",
  },
  {
    id: "tv",
    icon: "📺",
    title: "TV Series",
    description:
      "From drama to sci-fi — I love getting lost in a great story. Always looking for the next binge-worthy show.",
  },
  {
    id: "history",
    icon: "📚",
    title: "History",
    description:
      "Understanding the past helps me make sense of the present. I'm fascinated by how civilizations rise and fall.",
  },
];

export default function Hobbies() {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
      {HOBBIES.map((hobby) => {
        const isActive = activeId === hobby.id;
        return (
          <Card
            as="button"
            type="button"
            key={hobby.id}
            onClick={() => setActiveId((prev) => (prev === hobby.id ? null : hobby.id))}
            className={`flex flex-col items-center gap-2 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 ${
              isActive ? "border-cyan-400/60" : ""
            }`}
          >
            <span className="text-3xl">{hobby.icon}</span>
            <span className="text-xs font-semibold text-zinc-100 sm:text-sm">{hobby.title}</span>
          </Card>
        );
      })}

      <AnimatePresence mode="wait">
        {activeId && (
          <motion.article
            key={activeId}
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="col-span-2 rounded-2xl border border-cyan-400/30 bg-zinc-900/70 p-5 text-left shadow-xl sm:col-span-4"
          >
            <p className="text-sm leading-7 text-zinc-300">
              {HOBBIES.find((item) => item.id === activeId)?.description}
            </p>
          </motion.article>
        )}
      </AnimatePresence>
    </div>
  );
}
