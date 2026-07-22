"use client";

const VARIANTS = {
  primary:
    "bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 shadow-[0_10px_30px_-12px_rgba(56,189,248,0.6)] hover:shadow-[0_14px_38px_-12px_rgba(56,189,248,0.75)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_6px_18px_-10px_rgba(56,189,248,0.6)]",
  secondary:
    "border border-zinc-600/80 bg-zinc-900/60 text-zinc-100 backdrop-blur hover:border-zinc-300 hover:bg-zinc-800/70 hover:-translate-y-0.5 active:translate-y-0",
};

export default function Button({
  as: Component = "a",
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  return (
    <Component
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
