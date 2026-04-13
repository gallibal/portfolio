"use client";

const TIMELINE = [
  {
    year: "2021",
    role: "Bartender",
    workplace: "Frederic Broza, Modiin",
    description:
      "Placeholder: Built strong customer service and fast-paced teamwork skills while managing high-volume shifts.",
  },
  {
    year: "2023",
    role: "Waiter",
    workplace: "West Side",
    description:
      "Placeholder: Delivered premium guest experiences with attention to detail and clear communication under pressure.",
  },
  {
    year: "2025",
    role: "NOC",
    workplace: "Rapyd",
    description:
      "Placeholder: Monitoring systems, responding to incidents, and helping maintain reliable platform operations.",
  },
];

export default function WorkExperience() {
  return (
    <div className="mt-5">
      <p className="text-sm text-zinc-400">
        My professional journey after military service
      </p>

      <div className="relative mt-6 pl-6 sm:pl-8">
        <div className="absolute top-0 bottom-0 left-2 w-px bg-gradient-to-b from-indigo-400/70 via-zinc-600 to-zinc-700 sm:left-3" />

        <div className="space-y-5 sm:space-y-6">
          {TIMELINE.map((item) => (
            <article
              key={item.year}
              className="relative rounded-2xl border border-zinc-700/80 bg-zinc-900/70 p-4 shadow-[0_14px_35px_-20px_rgba(0,0,0,0.9)] sm:p-5"
            >
              <span className="absolute top-5 -left-[1.17rem] h-3.5 w-3.5 rounded-full border-2 border-zinc-950 bg-indigo-400 shadow-[0_0_0_6px_rgba(79,70,229,0.2)] sm:-left-[1.48rem]" />

              <p className="text-xl font-semibold tracking-tight text-indigo-300 sm:text-2xl">
                {item.year}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-white sm:text-xl">
                {item.role}
              </h3>
              <p className="mt-1 text-sm font-medium text-zinc-300 sm:text-base">
                {item.workplace}
              </p>
              <p className="mt-3 text-sm leading-7 text-zinc-400 sm:text-base">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
