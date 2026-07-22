"use client";

import Card from "./ui/Card";

const VOLUNTEERING_ITEMS = [
  {
    org: "Beit Dafna Residence",
    description: "Volunteering with adults with intellectual disabilities.",
  },
  {
    org: "Mentor, Perach, Bat Yam",
    description:
      "Mentored 4 elementary students in English and Math, boosting confidence and self-esteem.",
  },
  {
    org: "Mentor, Children of Incarcerated Parent, Tel Aviv",
    description:
      "Mentored a child with personal and social challenges, providing support and guidance for personal growth.",
  },
];

export default function Volunteering() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {VOLUNTEERING_ITEMS.map((item) => (
        <Card key={item.org}>
          <h3 className="text-base font-semibold text-white">{item.org}</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-400">{item.description}</p>
        </Card>
      ))}
    </div>
  );
}
