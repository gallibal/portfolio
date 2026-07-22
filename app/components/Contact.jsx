"use client";

import { useState } from "react";
import Button from "./ui/Button";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./ui/Icons";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/gallibal", Icon: GitHubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gal-libal/", Icon: LinkedInIcon },
  {
    label: "Email",
    href: "mailto:gallibal18@gmail.com?subject=Contact%20from%20portfolio%20website",
    Icon: MailIcon,
  },
];

export default function Contact() {
  const [senderName, setSenderName] = useState("");
  const [senderMessage, setSenderMessage] = useState("");

  const handleSendMessage = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Message from ${senderName || "a visitor"}`);
    const body = encodeURIComponent(
      senderMessage || "Hi Gal, I wanted to leave you a message."
    );
    window.location.href = `mailto:gallibal18@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="grid gap-10 md:grid-cols-2 md:items-start">
      <div>
        <p className="text-base leading-7 text-zinc-400">
          Whether it&apos;s an opportunity, a question about one of the projects
          above, or just to say hi — my inbox is open.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {SOCIALS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label === "Email" ? "Send me an email" : label}
              className="flex items-center gap-2 rounded-full border border-zinc-700/70 bg-zinc-900/60 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:-translate-y-0.5 hover:border-zinc-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
            >
              <Icon className="h-4 w-4" />
              {label}
            </a>
          ))}
        </div>
      </div>

      <form
        onSubmit={handleSendMessage}
        className="rounded-2xl border border-zinc-700/70 bg-zinc-900/60 p-6 shadow-[0_20px_45px_-30px_rgba(0,0,0,0.9)]"
      >
        <label htmlFor="sender-name" className="text-xs font-medium text-zinc-400">
          Your name
        </label>
        <input
          id="sender-name"
          type="text"
          value={senderName}
          onChange={(event) => setSenderName(event.target.value)}
          placeholder="Jane Doe"
          className="mt-1.5 w-full rounded-lg border border-zinc-700 bg-zinc-950/80 px-3 py-2 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/30"
        />

        <label htmlFor="sender-message" className="mt-4 block text-xs font-medium text-zinc-400">
          Message
        </label>
        <textarea
          id="sender-message"
          value={senderMessage}
          onChange={(event) => setSenderMessage(event.target.value)}
          placeholder="Write your message..."
          rows={4}
          className="mt-1.5 w-full resize-none rounded-lg border border-zinc-700 bg-zinc-950/80 px-3 py-2 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/30"
        />

        <Button as="button" type="submit" variant="primary" className="mt-5 w-full">
          Send message
        </Button>
        <p className="mt-2 text-center text-xs text-zinc-500">
          Opens in your email app.
        </p>
      </form>
    </div>
  );
}
