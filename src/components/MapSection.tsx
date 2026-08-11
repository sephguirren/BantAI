import * as React from "react";
import { Droplets, MapPin, ShieldAlert } from "lucide-react";

import { ABRA_MUNICIPALITIES } from "@/data/abraMunicipalities";
import {
  FLOOD_RISK,
  LANDSLIDE_ADVICE,
  LANDSLIDE_ADVISORY,
  LANDSLIDE_RISK,
  RISK_ADVICE,
  RISK_ADVISORY,
  RISK_LEVELS,
  riskColor,
  riskLevelOf,
} from "@/data/floodRisk";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { AppIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

function PhilippineFlag() {
  return (
    <svg className="w-32 h-20 mb-3" viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 90 A 60 60 0 0 1 140 90 Z" fill="#052015" />
      <rect x="20" y="70" width="120" height="20" fill="#052015" />
      <path
        d="M10 90 L10 20 L150 20 L150 90 L135 90 L135 70 A 55 55 0 0 0 25 70 L25 90 Z"
        fill="#fdfdfd"
        stroke="#d5d8dc"
        strokeWidth="1.5"
      />
      <rect x="10" y="12" width="140" height="8" fill="#fdfdfd" stroke="#d5d8dc" strokeWidth="1" />
      <rect x="13" y="24" width="8" height="62" fill="#e01b24" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <g key={i}>
          <path
            d={`M13 ${24 + i * 12} L21 ${28 + i * 12} M13 ${32 + i * 12} L21 ${36 + i * 12}`}
            stroke="#ffffff"
            strokeWidth="1.2"
          />
          <path
            d={`M21 ${24 + i * 12} L13 ${28 + i * 12} M21 ${32 + i * 12} L13 ${36 + i * 12}`}
            stroke="#ffffff"
            strokeWidth="1.2"
          />
        </g>
      ))}
      <rect x="139" y="24" width="8" height="62" fill="#e01b24" />
      <path d="M80 90 L80 75" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
      <circle cx="80" cy="20" r="13" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
      <circle cx="80" cy="20" r="9" fill="#0F4C3A" />
      <path d="M76 22 L80 16 L84 22 Z" fill="#fbbf24" />
      <circle cx="80" cy="19" r="2.5" fill="#fbbf24" />
    </svg>
  );
}

/**
 * The map layout and colors are based on public/map.png: each municipality's
 * shape was extracted from that reference image and scaled into the
 * 530 x 654 canvas. Hover and click remain interactive.
 */
const MAP_VIEWBOX = "0 0 530 654";

type Hazard = "flood" | "landslide";

export function MapSection() {
  const [hovered, setHovered] = React.useState<string | null>(null);
  const [selectedName, setSelectedName] = React.useState<string | null>(null);
  const [hazard, setHazard] = React.useState<Hazard>("flood");
  const [showEvac, setShowEvac] = React.useState(false);
  const [showBasin, setShowBasin] = React.useState(false);

  const selected = selectedName
    ? (ABRA_MUNICIPALITIES.find((m) => m.name === selectedName) ?? null)
    : null;
  const floodEntry = selected ? FLOOD_RISK[selected.name] : undefined;
  const landslideEntry = selected ? LANDSLIDE_RISK[selected.name] : undefined;
  const riskEntry = hazard === "flood" ? floodEntry : landslideEntry;
  const riskLevel = riskEntry ? riskLevelOf(riskEntry.chance) : undefined;
  const filterChips = [
    {
      id: "evac" as const,
      active: showEvac,
      toggle: () => setShowEvac((v) => !v),
      icon: <MapPin className="h-3.5 w-3.5" />,
      label: "Evacuation Centers",
    },
    {
      id: "basin" as const,
      active: showBasin,
      toggle: () => setShowBasin((v) => !v),
      icon: <Droplets className="h-3.5 w-3.5" />,
      label: "River Basins",
    },
  ];

  const closeDialog = () => setSelectedName(null);

  return (
    <section id="map" className="relative overflow-hidden bg-[#0F4C3A] py-24 text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{ background: "radial-gradient(circle at 80% 20%, white 0%, transparent 50%)" }}
        aria-hidden
      />
      <div className="container-wide">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          {/* Map */}
          <div className="relative mx-auto w-full max-w-lg">
            <svg
              viewBox={MAP_VIEWBOX}
              className="h-full w-full select-none drop-shadow-2xl"
              onMouseLeave={() => setHovered(null)}
              aria-label="Interactive flood and landslide risk map of Abra province showing all 27 municipalities"
              role="img"
            >
              <defs>
                <filter id="mapShadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#051f14" floodOpacity="0.6" />
                </filter>
              </defs>
              <g filter="url(#mapShadow)">
                {ABRA_MUNICIPALITIES.map((m) => {
                  const entry = hazard === "flood" ? FLOOD_RISK[m.name] : LANDSLIDE_RISK[m.name];
                  if (!entry) return null;
                  const level = riskLevelOf(entry.chance);
                  const isHovered = hovered === m.name;
                  return (
                    <path
                      key={m.name}
                      d={m.d}
                      fill={riskColor(level)}
                      fillOpacity={isHovered ? 1 : 0.92}
                      stroke={isHovered ? "#ffffff" : "#0F4C3A"}
                      strokeWidth={isHovered ? 2 : 0.8}
                      className="cursor-pointer transition-all duration-200"
                      onMouseEnter={() => setHovered(m.name)}
                      onMouseLeave={() => setHovered(null)}
                      onClick={() => setSelectedName(m.name)}
                      style={{
                        transform: isHovered ? "scale(1.008)" : "scale(1)",
                        transformOrigin: `${m.cx}px ${m.cy}px`,
                      }}
                    />
                  );
                })}
              </g>

                {/* Evacuation center markers */}
                {showEvac &&
                  ABRA_MUNICIPALITIES.filter((m) => (FLOOD_RISK[m.name]?.evacuationCenters ?? 0) > 0).map((m) => (
                    <g key={`evc-${m.name}`} transform={`translate(${m.cx}, ${m.cy})`} className="pointer-events-none">
                      <circle r="10" fill="#ffffff" stroke="#0F4C3A" strokeWidth="1.5" />
                      <text
                        x="0"
                        y="4"
                        fontSize="12"
                        fontWeight="900"
                        textAnchor="middle"
                        fill="#0F4C3A"
                        fontFamily="sans-serif"
                      >
                        E
                      </text>
                    </g>
                  ))}

                {/* River basin markers */}
                {showBasin &&
                  ABRA_MUNICIPALITIES.filter((m) => (FLOOD_RISK[m.name]?.riverBasin ?? "") === "Abra River").map((m) => (
                    <g key={`basin-${m.name}`} transform={`translate(${m.cx}, ${m.cy})`} className="pointer-events-none">
                      <circle r="10" fill="#2ec2a0" stroke="#ffffff" strokeWidth="1.5" />
                      <text
                        x="0"
                        y="4"
                        fontSize="12"
                        fontWeight="900"
                        textAnchor="middle"
                        fill="#052015"
                        fontFamily="sans-serif"
                      >
                        R
                      </text>
                    </g>
                  ))}

                {hovered && (() => {
                  const m = ABRA_MUNICIPALITIES.find((x) => x.name === hovered);
                  const entry = m ? (hazard === "flood" ? FLOOD_RISK[m.name] : LANDSLIDE_RISK[m.name]) : undefined;
                  if (!m || !entry) return null;
                  const level = riskLevelOf(entry.chance);
                  const lines = [m.name, `${entry.chance}% · ${level} ${hazard} risk`];
                  const width = Math.max(168, Math.max(...lines.map((l) => l.length)) * 10.5 + 30);
                  return (
                    <g
                      transform={`translate(${m.cx}, ${m.cy - 58})`}
                      className="pointer-events-none transition-all duration-150"
                    >
                      <rect x={-width / 2} y="-32" width={width} height="58" rx="10" fill={riskColor(level)} />
                      <polygon points="-10,26 10,26 0,34" fill={riskColor(level)} />
                      <text
                        x="0"
                        y="-10"
                        fill="#ffffff"
                        fontSize="17"
                        fontWeight="900"
                        fontFamily="sans-serif"
                        textAnchor="middle"
                      >
                        {m.name}
                      </text>
                      <text
                        x="0"
                        y="8"
                        fill="rgba(255,255,255,0.92)"
                        fontSize="12"
                        fontWeight="700"
                        fontFamily="sans-serif"
                        textAnchor="middle"
                      >
                        {lines[1]}
                      </text>
                    </g>
                  );
                })()}
            </svg>

            {/* Legend + filters */}
            <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-4">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setHazard("flood")}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer",
                    hazard === "flood"
                      ? "border-transparent bg-[#35AD44] text-white shadow-glow"
                      : "border-white/20 bg-white/5 text-white/85 hover:bg-white/10"
                  )}
                >
                  <Droplets className="h-3.5 w-3.5" />
                  Flood
                </button>
                <button
                  type="button"
                  onClick={() => setHazard("landslide")}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer",
                    hazard === "landslide"
                      ? "border-transparent bg-[#35AD44] text-white shadow-glow"
                      : "border-white/20 bg-white/5 text-white/85 hover:bg-white/10"
                  )}
                >
                  <ShieldAlert className="h-3.5 w-3.5" />
                  Landslide
                </button>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-white/85">
                  {hazard === "flood" ? "Flood" : "Landslide"} risk levels
                </span>
                {RISK_LEVELS.map((r) => (
                  <span key={r.level} className="inline-flex items-center gap-1.5 text-xs font-medium text-white/80">
                    <span className="h-3 w-3 rounded-full" style={{ background: r.color }} />
                    {r.level}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {filterChips.map((chip) => (
                  <button
                    key={chip.id}
                    type="button"
                    onClick={chip.toggle}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer",
                      chip.active
                        ? "border-transparent bg-[#35AD44] text-white shadow-glow"
                        : "border-white/20 bg-white/5 text-white/85 hover:bg-white/10"
                    )}
                  >
                    {chip.icon}
                    {chip.label}
                  </button>
                ))}
              </div>
              {showEvac && (
                <p className="mt-2 text-[11px] text-white/60">
                  E marks municipalities hosting designated evacuation centers.
                </p>
              )}
              {showBasin && (
                <p className="mt-2 text-[11px] text-white/60">
                  R marks municipalities along the actively monitored Abra River basin.
                </p>
              )}
            </div>
          </div>

          {/* Copy */}
          <div className="space-y-8">
            <div className="reveal">
              <PhilippineFlag />
              <h2 className="text-white text-5xl font-extrabold tracking-tight leading-tight">
                Bant<span className="text-[#35AD44]">AI</span> Abra
              </h2>
              <p className="mt-4 text-white/95 text-lg leading-relaxed font-semibold">
                See the flood and landslide risk of every city or municipality.
                <br />
                Hover to inspect · Click for the latest forecast.
              </p>
            </div>
            <div className="reveal grid gap-4 sm:grid-cols-2 lg:grid-cols-1 pt-6 border-t border-white/10">
              <div className="flex gap-4 items-start bg-white/5 border border-white/10 rounded-2xl p-4">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-[#35AD44] shrink-0">
                  <AppIcon name="map" className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-bold">27 Municipalities Monitored</h3>
                  <p className="mt-1 text-xs text-white/70 leading-relaxed">
                    Live flood and landslide probability for every municipality — from Bangued in
                    the heart to Tineg in the north.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start bg-white/5 border border-white/10 rounded-2xl p-4">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-[#2ec2a0] shrink-0">
                  <AppIcon name="shield" className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-bold">Hazard-Readiness Data</h3>
                  <p className="mt-1 text-xs text-white/70 leading-relaxed">
                    River levels, evacuation centers, slope exposure, and safe routes — so you can
                    act before disaster strikes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Municipality hazard report */}
      <Dialog open={!!selected} onOpenChange={(open) => !open && closeDialog()}>
        <DialogContent
          className={`max-w-md mun-dialog w-[calc(100%-2rem)] md:w-full border-none bg-[#0F4C3A] text-white p-6 sm:p-8 rounded-[2rem] shadow-glow overflow-y-auto overflow-x-hidden max-h-[90vh] [&>button]:bg-black/25 [&>button]:text-white [&>button]:hover:bg-black/40 [&>button]:rounded-full [&>button]:h-8 [&>button]:w-8 [&>button]:flex [&>button]:items-center [&>button]:justify-center [&>button]:border-none [&>button]:transition-all [&>button]:right-5 [&>button]:top-5`}
        >
          {selected && riskEntry && riskLevel && (
            <div className="flex flex-col items-center justify-center text-center py-6 px-4 space-y-6 w-full overflow-x-hidden">
              <div className="w-full space-y-2">
                <div className="h-2 w-full rounded-full" style={{ background: riskColor(riskLevel) }} />
                <div className="flex flex-col items-center justify-between gap-3 sm:flex-row sm:text-left">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/60 font-semibold">
                      Current {hazard === "flood" ? "flood" : "landslide"} status
                    </p>
                    <h3 className="text-3xl font-extrabold tracking-tight text-white mt-1">
                      {selected.name}
                    </h3>
                    <p className="text-sm text-white/70 mt-1">Abra, Philippines</p>
                  </div>
                  <span
                    className="inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold text-white shadow-glow"
                    style={{ background: riskColor(riskLevel) }}
                  >
                    <ShieldAlert className="h-4 w-4" />
                    {riskLevel} risk · {riskEntry.chance}%
                  </span>
                </div>
              </div>

              <div className="grid w-full gap-3 sm:grid-cols-2">
                {hazard === "flood" ? (
                  <>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-white/60 font-bold">
                        <MapPin className="h-4 w-4 text-[#2ec2a0]" />
                        Evacuation Centers
                      </div>
                      <div className="mt-1 text-2xl font-extrabold text-white">
                        {floodEntry?.evacuationCenters}
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-white/60 font-bold">
                        <Droplets className="h-4 w-4 text-[#2ec2a0]" />
                        River Basin
                      </div>
                      <div className="mt-1 text-xl font-extrabold text-white leading-tight">
                        {floodEntry?.riverBasin}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-white/60 font-bold">
                        <MapPin className="h-4 w-4 text-[#2ec2a0]" />
                        Exposed Areas
                      </div>
                      <div className="mt-1 text-2xl font-extrabold text-white">
                        {landslideEntry?.exposedAreas}
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-white/60 font-bold">
                        <Droplets className="h-4 w-4 text-[#2ec2a0]" />
                        Trigger
                      </div>
                      <div className="mt-1 text-sm font-extrabold text-white leading-tight">
                        {landslideEntry?.trigger}
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="w-full space-y-3 text-left">
                <div className="rounded-2xl border border-amber-300/30 bg-amber-400/10 p-4">
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-amber-300">
                    Advisory
                  </div>
                  <p className="mt-1 text-sm text-white/90 leading-relaxed">
                    {riskEntry.advisory ??
                      (hazard === "flood" ? RISK_ADVISORY[riskLevel] : LANDSLIDE_ADVISORY[riskLevel])}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#2ec2a0]">
                    What to do
                  </div>
                  <p className="mt-1 text-sm text-white/90 leading-relaxed">
                    {hazard === "flood" ? RISK_ADVICE[riskLevel] : LANDSLIDE_ADVICE[riskLevel]}
                  </p>
                </div>
              </div>

              <div className="pt-2 w-full max-w-[200px]">
                <button
                  onClick={closeDialog}
                  className="w-full inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-sm tracking-wider py-2.5 rounded-full transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}