import { MapPin, ShieldAlert } from "lucide-react";

import { StoreBadge } from "@/components/StoreBadge";
import { AiIcon } from "@/components/icons";
import { ASSETS } from "@/lib/content";

const FLOAT_CARDS = [
  {
    icon: <ShieldAlert className="h-4 w-4" />,
    iconClass: "bg-red-500/15 text-red-500",
    label: "High Flood Risk",
    value: "Bangued",
    delay: "float-bob 6s ease-in-out infinite",
    position: "left-0 top-12",
  },
  {
    icon: <AiIcon className="h-4 w-4" />,
    iconClass: "bg-forest text-primary-foreground",
    label: "AI Forecast",
    value: "Heavy rain in 2 hrs",
    delay: "float-bob 8s ease-in-out infinite 1.5s",
    position: "right-0 top-1/2 -translate-y-1/2",
  },
  {
    icon: <MapPin className="h-4 w-4" />,
    iconClass: "bg-accent text-accent-foreground",
    label: "Safe Route",
    value: "Evac center open",
    delay: "float-bob 7s ease-in-out infinite 0.7s",
    position: "bottom-6 left-6",
  },
];

export function Hero({ onPublishingOpen }: { onPublishingOpen: (open: boolean) => void }) {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />
      <div className="container-wide grid items-center gap-12 py-20 lg:grid-cols-[1.05fr_1fr] lg:py-28">
        {/* Copy */}
        <div className="reveal">
          <span className="chip">
            <AiIcon className="h-3.5 w-3.5" />
            Predict. Prepare. Protect. · Abra, PH
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Stay ahead of the <span className="text-[#27833D]">storm</span>{" "}
            <span className="inline-flex items-center gap-2 sm:gap-3">
              with AI
              <img
                src={ASSETS.logo}
                alt="BantAI"
                className="inline-block h-12 w-auto align-middle sm:h-14 lg:h-16"
              />
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            AI-driven flood prediction, real-time alerts, and community reporting — so Abra can
            predict, prepare, and protect before the water rises.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#map" className="btn-primary">
              Access Dashboard
            </a>
            <StoreBadge onClick={() => onPublishingOpen(true)} />
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            {["Free for citizens", "Covers 27 municipalities", "Real-time alerts"].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Phone mockup */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none group">
          <div
            className="absolute inset-0 -z-10 mx-auto h-[480px] w-[480px] rounded-full blur-3xl opacity-70 animate-glow-breath"
            style={{
              background:
                "radial-gradient(circle, color-mix(in oklab, var(--leaf) 35%, transparent), transparent 70%)",
            }}
            aria-hidden
          />
          <img
            src={ASSETS.phoneHero}
            alt="BantAI app home screen showing flood risk for Abra"
            width={1419}
            height={2796}
            className="relative z-10 mx-auto w-[64%] animate-float drop-shadow-2xl sm:w-[56%] lg:w-[72%] transition-all duration-700 ease-out group-hover:scale-102 group-hover:-translate-y-2 group-hover:brightness-105 group-hover:drop-shadow-3xl"
          />
          {FLOAT_CARDS.map((card) => (
            <div
              key={card.value}
              className={`absolute z-20 hidden rounded-2xl border border-border bg-card/95 p-3 shadow-card backdrop-blur md:flex md:items-center md:gap-2 transition-all duration-300 hover:scale-108 hover:border-accent/40 hover:shadow-glow cursor-pointer ${card.position}`}
              style={{ animation: card.delay }}
            >
              <span
                className={`grid h-9 w-9 place-items-center rounded-xl ${card.iconClass}`}
              >
                {card.icon}
              </span>
              <div className="leading-tight">
                <div className="text-[11px] text-muted-foreground">{card.label}</div>
                <div className="text-sm font-semibold">{card.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}