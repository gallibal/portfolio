"use client";

export default function Card({ as: Component = "div", className = "", children, ...props }) {
  return (
    <Component
      className={`rounded-2xl border border-zinc-700/70 bg-zinc-900/60 p-6 shadow-[0_20px_45px_-30px_rgba(0,0,0,0.9)] backdrop-blur-sm transition-all duration-300 hover:border-zinc-500/70 hover:bg-zinc-900/80 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
