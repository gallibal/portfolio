import WorldMap from "@/app/components/WorldMap";

export default function TripsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-zinc-100">
      <div className="mx-auto w-full max-w-6xl">
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Travels / Trips
        </h1>
        <p className="mt-3 text-sm text-zinc-400 sm:text-base">
          Hover over a country to see its name.
        </p>

        <div className="mt-8">
          <WorldMap />
        </div>
        <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 text-sm text-zinc-300 sm:text-base">
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
    </main>
  );
}
