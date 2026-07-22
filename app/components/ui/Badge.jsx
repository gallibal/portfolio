"use client";

export default function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-zinc-600/70 bg-zinc-800/60 px-3 py-1 text-xs font-medium text-zinc-300 ${className}`}
    >
      {children}
    </span>
  );
}
