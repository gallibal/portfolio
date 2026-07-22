"use client";

import * as d3 from "d3";
import { feature, mesh } from "topojson-client";
import { useEffect, useMemo, useState } from "react";

const COUNTRY_NAMES = {
  "4": "Afghanistan",
  "8": "Albania",
  "12": "Algeria",
  "32": "Argentina",
  "36": "Australia",
  "40": "Austria",
  "50": "Bangladesh",
  "56": "Belgium",
  "68": "Bolivia",
  "76": "Brazil",
  "100": "Bulgaria",
  "124": "Canada",
  "152": "Chile",
  "156": "China",
  "170": "Colombia",
  "188": "Costa Rica",
  "191": "Croatia",
  "196": "Cyprus",
  "203": "Czechia",
  "208": "Denmark",
  "214": "Dominican Republic",
  "218": "Ecuador",
  "233": "Estonia",
  "246": "Finland",
  "250": "France",
  "268": "Georgia",
  "276": "Germany",
  "300": "Greece",
  "348": "Hungary",
  "352": "Iceland",
  "356": "India",
  "360": "Indonesia",
  "364": "Iran",
  "368": "Iraq",
  "372": "Ireland",
  "376": "Israel",
  "380": "Italy",
  "392": "Japan",
  "400": "Jordan",
  "404": "Kenya",
  "410": "South Korea",
  "422": "Lebanon",
  "434": "Libya",
  "440": "Lithuania",
  "442": "Luxembourg",
  "458": "Malaysia",
  "484": "Mexico",
  "498": "Moldova",
  "504": "Morocco",
  "528": "Netherlands",
  "554": "New Zealand",
  "578": "Norway",
  "586": "Pakistan",
  "604": "Peru",
  "608": "Philippines",
  "616": "Poland",
  "620": "Portugal",
  "642": "Romania",
  "643": "Russia",
  "682": "Saudi Arabia",
  "702": "Singapore",
  "703": "Slovakia",
  "704": "Vietnam",
  "705": "Slovenia",
  "710": "South Africa",
  "724": "Spain",
  "752": "Sweden",
  "756": "Switzerland",
  "760": "Syria",
  "764": "Thailand",
  "784": "United Arab Emirates",
  "792": "Turkey",
  "804": "Ukraine",
  "818": "Egypt",
  "826": "United Kingdom",
  "840": "United States",
  "858": "Uruguay",
  "862": "Venezuela",
};

const VISITED = new Set([
  "840", // USA
  "484", // Mexico
  "192", // Cuba
  "591", // Panama
  "076", // Brazil
  "218", // Ecuador
  "170", // Colombia
  "032", // Argentina
  "528", // Netherlands
  "056", // Belgium
  "250", // France
  "724", // Spain
  "756", // Switzerland
  "616", // Poland
  "203", // Czech Republic
  "100", // Bulgaria
  "792", // Turkey
  "300", // Greece
  "818", // Egypt
  "784", // UAE
  "702", // Singapore
  "392", // Japan
  "704", // Vietnam
  "356", // India
  "156", // China
  "446", // Macau
  "344", // Hong Kong
]);

export default function WorldMap() {
  const [countries, setCountries] = useState([]);
  const [borders, setBorders] = useState(null);
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [tooltip, setTooltip] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let isMounted = true;

    async function loadMap() {
      const worldUrl =
        "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
      const topology = await d3.json(worldUrl);

      if (!isMounted || !topology) return;

      const geoCountries = feature(
        topology,
        topology.objects.countries
      ).features.map((country) => ({
        ...country,
        isoCode: String(country.id).padStart(3, "0"),
        properties: {
          ...country.properties,
          name:
            country.properties?.name ??
            COUNTRY_NAMES[String(country.id)] ??
            COUNTRY_NAMES[String(country.id).padStart(3, "0")] ??
            `Country ${String(country.id).padStart(3, "0")}`,
        },
      }));

      const geoBorders = mesh(
        topology,
        topology.objects.countries,
        (a, b) => a !== b
      );

      setCountries(geoCountries);
      setBorders(geoBorders);
    }

    loadMap();

    return () => {
      isMounted = false;
    };
  }, []);

  const projection = useMemo(
    () => d3.geoNaturalEarth1().fitSize([1000, 520], { type: "Sphere" }),
    []
  );

  const path = useMemo(() => d3.geoPath(projection), [projection]);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-950">
      <svg
        viewBox="0 0 1000 520"
        className="h-auto w-full"
        role="img"
        aria-label="Interactive world map"
      >
        <rect width="1000" height="520" fill="#020617" />

        {countries.map((country, index) => (
          <path
            key={`${country.isoCode}-${index}`}
            d={path(country) ?? ""}
            fill={
              hoveredCountry?.id === country.id
                ? "#6366f1"
                : VISITED.has(country.isoCode)
                  ? "#4f46e5"
                  : "#111827"
            }
            stroke="#334155"
            strokeWidth={0.7}
            className="cursor-pointer transition-colors duration-150"
            onMouseEnter={(event) => {
              setHoveredCountry(country);
              setTooltip({
                x: event.clientX,
                y: event.clientY,
              });
            }}
            onMouseMove={(event) => {
              setTooltip({
                x: event.clientX,
                y: event.clientY,
              });
            }}
            onMouseLeave={() => {
              setHoveredCountry(null);
            }}
          />
        ))}

        {borders && (
          <path
            d={path(borders) ?? ""}
            fill="none"
            stroke="#475569"
            strokeWidth={0.6}
            pointerEvents="none"
          />
        )}
      </svg>

      {hoveredCountry && (
        <div
          className="pointer-events-none fixed z-50 rounded-md border border-zinc-600 bg-zinc-900/95 px-2.5 py-1.5 text-xs text-zinc-100 shadow-xl"
          style={{ left: tooltip.x + 12, top: tooltip.y + 12 }}
        >
          {hoveredCountry.properties.name}
        </div>
      )}
    </div>
  );
}
