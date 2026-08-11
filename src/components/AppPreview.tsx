import { AiIcon } from "@/components/icons";
import { ASSETS } from "@/lib/content";

export function AppPreview() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-primary-foreground">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(40% 50% at 50% 0%, color-mix(in oklab, var(--leaf) 60%, transparent), transparent 60%)",
        }}
        aria-hidden
      />
      <div className="container-wide relative">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span
            className="chip"
            style={{
              background: "rgb(255 255 255 / 0.08)",
              color: "white",
              borderColor: "rgb(255 255 255 / 0.15)",
            }}
          >
            <AiIcon className="h-3.5 w-3.5" />
            App preview
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Everything You Need for a Flood-Ready Abra
          </h2>
          <p className="mt-3 text-white/70">
            From live risk maps and AI flood forecasts to safe evacuation routing — everything you
            need, all in one dashboard.
          </p>
        </div>
        <div className="reveal mt-14">
          <img
            src={ASSETS.phoneShowcase}
            alt="BantAI app screens: live risk map, AI flood forecast, and safe evacuation routing"
            width={1600}
            height={1100}
            loading="lazy"
            className="mx-auto w-full max-w-5xl drop-shadow-2xl"
          />
          <div className="mt-8 grid grid-cols-3 gap-4 text-center text-sm text-white/70 sm:gap-8">
            <span>Risk Map</span>
            <span>AI Predictions</span>
            <span>Safe Routes</span>
          </div>
        </div>
      </div>
    </section>
  );
}