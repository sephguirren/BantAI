import { AppIcon } from "@/components/icons";
import { ASSETS } from "@/lib/content";

const POINTS = [
  { k: "Community-first", v: "Spotlight on vulnerable communities" },
  { k: "Smarter alerts", v: "Timely evacuation planning" },
  { k: "Data-driven", v: "Evidence-based disaster response" },
];

export function Sustainability() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={ASSETS.landscape}
        alt="Aerial view of Abra's mountains and river at golden hour"
        width={1920}
        height={1088}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--forest) 70%, transparent) 0%, color-mix(in oklab, var(--forest) 88%, transparent) 100%)",
        }}
        aria-hidden
      />
      <div className="container-wide relative py-28 text-primary-foreground">
        <div className="reveal max-w-2xl">
          <span
            className="chip"
            style={{
              background: "rgb(255 255 255 / 0.12)",
              color: "white",
              borderColor: "rgb(255 255 255 / 0.2)",
            }}
          >
            <AppIcon name="shield" className="h-3.5 w-3.5" />
            Disaster Resilience
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
            Readiness that protects Abra
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
            BantAI shines a light on vulnerable communities, times evacuations smarter, and turns
            real-time data into life-saving disaster response.
          </p>
          <div className="mt-8 flex flex-wrap gap-6">
            {POINTS.map((p) => (
              <div key={p.k} className="min-w-[160px]">
                <div className="text-sm font-semibold text-white">{p.k}</div>
                <div className="text-sm text-white/70">{p.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}